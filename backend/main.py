"""
Professional FastAPI Backend for Authenex
Clean, reliable, and fully functional
"""
from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional
from google import genai  # NEW: Using google-genai SDK instead of google.generativeai
from PIL import Image
import io
import os
import json
import re
import requests  # NEW: For NewsData.io API
from dotenv import load_dotenv
from pathlib import Path
import os
import sys

# CRITICAL: Load environment variables BEFORE importing db_config
# Try multiple paths to find .env file
env_paths = [
    Path(__file__).parent.parent / 'env' / '.env',  # ../env/.env
    Path('.').parent / 'env' / '.env',  # ../env/.env (relative)
    Path('.') / 'env' / '.env',  # ./env/.env
    Path('.') / '.env',  # ./.env
]

env_loaded = False
for env_path in env_paths:
    if env_path.exists():
        print(f"✅ Loading environment from: {env_path}")
        load_dotenv(dotenv_path=env_path)
        env_loaded = True
        # Debug: Check if DATABASE_URL is loaded
        if os.getenv("DATABASE_URL"):
            print(f"✅ DATABASE_URL loaded successfully")
        else:
            print(f"⚠️  DATABASE_URL not found in {env_path}")
        break

if not env_loaded:
    print(f"⚠️  WARNING: Could not find .env file. Tried: {[str(p) for p in env_paths]}")

# NOW import db_config (after environment is loaded)
from db_config import get_db, init_db
from app_models import User, Scan, AuditLog, Verification

# Authentication imports
from auth import verify_token, require_role, get_current_user

# Enhanced Gemini Service (ported from AI fraud detection folder)
from gemini_service import ForensicService

# SQLAlchemy session import
from sqlalchemy.orm import Session

from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup logic
    init_db()
    print("✅ Database initialized")
    yield
    # Shutdown logic (none needed for now)

# Initialize FastAPI
app = FastAPI(
    title="Authenex AI Analysis API", 
    version="1.0.0",
    lifespan=lifespan
)

# SECURITY: CORS Configuration
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000,http://localhost:3001").split(",")
ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

# SAFETY: Prevent wildcard CORS in production
if "*" in ALLOWED_ORIGINS and ENVIRONMENT == "production":
    raise RuntimeError("❌ FATAL: Wildcard CORS origins are forbidden in production")

print(f"🔒 CORS Origins: {ALLOWED_ORIGINS}")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,  # Explicit whitelist
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Restrict methods
    allow_headers=["Authorization", "Content-Type"],  # Explicit headers
    max_age=3600,  # Cache preflight for 1 hour
)

# Configure Gemini
API_KEY = os.getenv("GEMINI_API_KEY")
client = None

if not API_KEY:
    print("WARNING: GEMINI_API_KEY not found in .env file!")
else:
    client = genai.Client(api_key=API_KEY)
    print("Gemini API (google-genai) configured")

# Enhanced Pydantic models
class ForensicAnalysisResult(BaseModel):
    verdict: str
    confidence: float
    aiPercentage: float
    humanPercentage: float
    explanation: str
    modality: str
    findings: List[str]
    categoryScores: Dict
    metadata: Dict
    details: Dict
    detectionLayers: Optional[List[Dict]] = None
    
class UserLogin(BaseModel):
    uid: str
    email: Optional[str] = None
    displayName: Optional[str] = None
    photoURL: Optional[str] = None

class UserRegister(BaseModel):
    email: str
    password: str
    displayName: Optional[str] = None

class CredentialsValidate(BaseModel):
    email: str
    password: str

class ChatMessage(BaseModel):
    role: str
    text: str

class ChatRequest(BaseModel):
    message: str
    history: List[ChatMessage]
    mode: str = "text"
    analysis_context: Optional[Dict] = None
    language: str = "en"

# Pydantic Models for Settings
class UserProfileUpdate(BaseModel):
    displayName: Optional[str] = None
    photoURL: Optional[str] = None
    preferences: Optional[Dict] = None

class UserSettingsUpdate(BaseModel):
    is2faEnabled: Optional[bool] = None
    notifications: Optional[Dict] = None
    theme: Optional[str] = None
    language: Optional[str] = None

class SystemSettingUpdate(BaseModel):
    key: str
    value: Dict
    description: Optional[str] = None


# ==========================================
#  SECURITY DEPENDENCIES
# ==========================================

async def get_active_user(
    token_payload: dict = Depends(verify_token),
    db: Session = Depends(get_db)
):
    """
    Dependency that ensures the user exists and is not suspended.
    This prevents suspended users from accessing the API even with a valid JWT.
    """
    uid = token_payload["sub"]
    user = db.query(User).filter(User.uid == uid).first()
    
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
        
    if user.role == "SUSPENDED":
        raise HTTPException(
            status_code=403, 
            detail="Your account has been suspended. Please contact support."
        )
        
    return token_payload

# ==========================================
#  USER SETTINGS ENDPOINTS
# ==========================================

@app.get("/api/settings/user")
async def get_user_settings(
    user: dict = Depends(get_active_user),
    db: Session = Depends(get_db)
):
    """Fetch current user settings and profile"""
    db_user = db.query(User).filter(User.uid == user["sub"]).first()
    if not db_user:
        # AUTO-RECOVERY: User exists in Auth (JWT) but not in DB
        # This handles cases where DB was reset or sync failed
        print(f"♻️  Auto-recovering user from JWT: {user.get('email')}")
        try:
            # Try to create the user
            new_user = User(
                uid=user["sub"],
                email=user.get("email"),
                display_name=user.get("name"),
                role=user.get("role", "USER")
            )
            db.add(new_user)
            db.commit()
            db.refresh(new_user)
            db_user = new_user
        except Exception:
            # If creation fails (likely race condition), rollback and fetch existing
            db.rollback()
            db_user = db.query(User).filter(User.uid == user["sub"]).first()
            
            if not db_user:
                # If still not found after rollback, something is wrong
                raise HTTPException(status_code=500, detail="Failed to recover user profile")
    
    return {
        "uid": db_user.uid,
        "email": db_user.email,
        "displayName": db_user.display_name,
        "photoURL": db_user.photo_url,
        "role": db_user.role,
        "is2faEnabled": db_user.is_2fa_enabled,
        "preferences": db_user.preferences or {}
    }

@app.patch("/api/settings/user")
async def update_user_settings(
    settings: UserSettingsUpdate,
    user: dict = Depends(get_active_user),
    db: Session = Depends(get_db)
):
    """Update user preferences and security settings"""
    db_user = db.query(User).filter(User.uid == user["sub"]).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Update preferences
    current_prefs = db_user.preferences or {}
    
    if settings.notifications is not None:
        current_prefs["notifications"] = settings.notifications
    if settings.theme is not None:
        current_prefs["theme"] = settings.theme
    if settings.language is not None:
        current_prefs["language"] = settings.language
        
    db_user.preferences = current_prefs
    
    # Update Security Settings
    if settings.is2faEnabled is not None:
        db_user.is_2fa_enabled = settings.is2faEnabled
        
    db.commit()
    
    # Log action
    db.add(AuditLog(
        uid=user["sub"],
        action="SETTINGS_UPDATED",
        ip_address="unknown",
        details={"changes": settings.dict(exclude_unset=True)}
    ))
    db.commit()
    
    return {"status": "success", "message": "Settings updated"}

@app.post("/api/user/profile")
async def update_user_profile(
    profile: UserProfileUpdate,
    user: dict = Depends(get_active_user),
    db: Session = Depends(get_db)
):
    """Update public profile information"""
    db_user = db.query(User).filter(User.uid == user["sub"]).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
        
    if profile.displayName is not None:
        db_user.display_name = profile.displayName
    if profile.photoURL is not None:
        db_user.photo_url = profile.photoURL
        
    db.commit()
    return {"status": "success", "message": "Profile updated"}


@app.get("/api/user/stats")
async def get_user_stats(
    user: dict = Depends(get_active_user),
    db: Session = Depends(get_db)
):
    """
    Get user statistics for dashboard
    Returns real user data instead of demo data
    """
    from datetime import datetime, timedelta
    from sqlalchemy import func
    
    uid = user["sub"]
    
    # Total scans
    total_scans = db.query(func.count(Scan.id)).filter(Scan.uid == uid).scalar() or 0
    
    # Today's scans
    today = datetime.utcnow().date()
    today_scans = db.query(func.count(Scan.id)).filter(
        Scan.uid == uid,
        func.date(Scan.created_at) == today
    ).scalar() or 0
    
    # AI detected count
    ai_detected = db.query(func.count(Scan.id)).filter(
        Scan.uid == uid,
        Scan.verdict == "AI"
    ).scalar() or 0
    
    # Human detected count
    human_detected = db.query(func.count(Scan.id)).filter(
        Scan.uid == uid,
        Scan.verdict == "HUMAN"
    ).scalar() or 0
    
    # Average confidence
    avg_confidence = db.query(func.avg(Scan.confidence)).filter(
        Scan.uid == uid
    ).scalar() or 0.0
    
    # Recent activity (last 30 days)
    thirty_days_ago = datetime.utcnow() - timedelta(days=30)
    recent_scans = db.query(Scan).filter(
        Scan.uid == uid,
        Scan.created_at >= thirty_days_ago
    ).order_by(Scan.created_at.desc()).limit(10).all()
    
    return {
        "totalScans": total_scans,
        "todayScans": today_scans,
        "aiDetected": ai_detected,
        "humanDetected": human_detected,
        "uncertainDetected": total_scans - ai_detected - human_detected,
        "averageConfidence": round(float(avg_confidence), 2),
        "recentActivity": [
            {
                "id": scan.id,
                "filename": scan.filename,
                "verdict": scan.verdict,
                "confidence": scan.confidence,
                "createdAt": scan.created_at.isoformat()
            }
            for scan in recent_scans
        ]
    }

# ==========================================
#  ADMIN SYSTEM SETTINGS (RBAC Protected)
# ==========================================

@app.get("/api/settings/system")
async def get_system_settings(
    admin: dict = Depends(require_role("ADMIN")),
    db: Session = Depends(get_db)
):
    """Fetch all system configuration (Admin only)"""
    # Assuming SystemSetting is imported or available in models
    # If not, import it locally to avoid circular dependency issues if any
    try:
        from models import SystemSetting
    except ImportError:
        # Fallback if models module structure is different
        pass

    try:
        settings = db.query(SystemSetting).all()
        return {s.key: s.value for s in settings}
    except NameError:
         #If SystemSetting is not defined/imported
         return {}

@app.put("/api/settings/system")
async def update_system_setting(
    setting: SystemSettingUpdate,
    admin: dict = Depends(require_role("ADMIN")),
    db: Session = Depends(get_db)
):
    """Update a specific system setting (Admin only)"""
    try:
        from models import SystemSetting
    except ImportError:
        pass
        
    db_setting = db.query(SystemSetting).filter(SystemSetting.key == setting.key).first()
    
    if not db_setting:
        # Create new setting
        db_setting = SystemSetting(
            key=setting.key,
            value=setting.value,
            description=setting.description
        )
        db.add(db_setting)
    else:
        # Update existing
        db_setting.value = setting.value
        if setting.description:
            db_setting.description = setting.description
            
    db.commit()
    
    # Log admin action
    db.add(AuditLog(
        uid=admin["sub"],
        action="SYSTEM_SETTING_CHANGED",
        ip_address="unknown",
        details={"key": setting.key, "value": setting.value}
    ))
    db.commit()
    
    return {"status": "success", "message": f"Setting '{setting.key}' updated"}

@app.delete("/api/user/me")
async def delete_account(
    current_user: dict = Depends(get_active_user),
    db: Session = Depends(get_db)
):
    try:
        uid = current_user["sub"]
        
        # Delete user scans
        try:
             db.query(Scan).filter(Scan.uid == uid).delete()
        except:
             pass

        # Delete user audit logs
        try:
            db.query(AuditLog).filter(AuditLog.uid == uid).delete()
        except:
            pass

        # Delete user
        db.query(User).filter(User.uid == uid).delete()
        
        db.commit()
        return {"status": "success", "message": "Account deleted successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


# ==========================================
#  ADMIN ENDPOINTS
# ==========================================

@app.get("/api/admin/stats")
async def get_admin_stats(
    admin: dict = Depends(require_role("ADMIN")),
    db: Session = Depends(get_db)
):
    """
    Get system-wide statistics for Admin Dashboard
    """
    from sqlalchemy import func
    
    total_users = db.query(func.count(User.uid)).scalar() or 0
    total_scans = db.query(func.count(Scan.id)).scalar() or 0
    ai_fraud_count = db.query(func.count(Scan.id)).filter(Scan.verdict == "AI").scalar() or 0
    deepfakes_detected = db.query(func.count(Scan.id)).filter(Scan.verdict == "AI", Scan.modality.in_(["VIDEO", "AUDIO"])).scalar() or 0
    
    # Role counts
    admins_count = db.query(func.count(User.uid)).filter(User.role == "ADMIN").scalar() or 0
    analysts_count = db.query(func.count(User.uid)).filter(User.role == "ANALYST").scalar() or 0
    users_count = db.query(func.count(User.uid)).filter(User.role == "USER").scalar() or 0
    suspended_count = db.query(func.count(User.uid)).filter(User.role == "SUSPENDED").scalar() or 0

    return {
        "totalUsers": total_users,
        "totalScans": total_scans,
        "aiFraudCount": ai_fraud_count,
        "deepfakesDetected": deepfakes_detected,
        "activeVerifications": db.query(func.count(Verification.id)).filter(Verification.status == "PENDING").scalar() or 0,
        "roleDistribution": {
            "ADMIN": admins_count,
            "ANALYST": analysts_count,
            "USER": users_count,
            "SUSPENDED": suspended_count
        }
    }

@app.get("/api/admin/users")
async def get_all_users(
    skip: int = 0,
    limit: int = 100,
    admin: dict = Depends(require_role("ADMIN")),
    db: Session = Depends(get_db)
):
    """
    List all users with pagination
    """
    users = db.query(User).offset(skip).limit(limit).all()
    
    return [
        {
            "uid": u.uid,
            "email": u.email,
            "displayName": u.display_name,
            "role": u.role,
            "photoURL": u.photo_url,
            "createdAt": u.created_at.isoformat() if u.created_at else None,
            "status": "Suspended" if u.role == "SUSPENDED" else "Active"
        }
        for u in users
    ]

@app.put("/api/admin/users/{uid}")
async def update_user_status(
    uid: str,
    update_data: dict,  # Expects {"role": "..."}
    admin: dict = Depends(require_role("ADMIN")),
    db: Session = Depends(get_db)
):
    """
    Update user role/status (e.g. Suspend, Activate, Promote)
    """
    user = db.query(User).filter(User.uid == uid).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
        
    if "role" in update_data:
        new_role = update_data["role"]
        # Validate role
        if new_role not in ["USER", "ADMIN", "ANALYST", "SUSPENDED"]:
             raise HTTPException(status_code=400, detail="Invalid role")
             
        # Prevent self-suspension if it's the only admin (simplified check)
        if uid == admin["sub"] and new_role == "SUSPENDED":
             raise HTTPException(status_code=400, detail="You cannot suspend yourself")
             
        user.role = new_role
        
    db.commit()
    
    # Log action
    db.add(AuditLog(
        uid=admin["sub"],
        action="USER_UPDATE",
        details={"target_uid": uid, "changes": update_data}
    ))
    db.commit()
    
    return {"status": "success", "message": f"User {uid} updated"}

@app.get("/api/admin/audit")
async def get_audit_logs(
    limit: int = 50,
    admin: dict = Depends(require_role("ADMIN")),
    db: Session = Depends(get_db)
):
    """
    Get recent audit logs
    """
    logs = db.query(AuditLog).order_by(AuditLog.timestamp.desc()).limit(limit).all()
    
    return [
        {
            "id": l.id,
            "action": l.action,
            "uid": l.uid,
            "details": l.details,
            "timestamp": l.timestamp.isoformat(),
            "ip": l.ip_address
        }
        for l in logs
    ]

@app.get("/api/admin/verifications")
async def get_verifications(
    status: Optional[str] = None,
    limit: int = 20,
    admin: dict = Depends(require_role("ADMIN")),
    db: Session = Depends(get_db)
):
    """
    Get verification requests
    """
    query = db.query(Verification)
    if status:
        query = query.filter(Verification.status == status)
        
    verifications = query.order_by(Verification.created_at.desc()).limit(limit).all()
    
    return [
        {
            "id": v.id,
            "scanId": v.scan_id,
            "status": v.status,
            "notes": v.notes,
            "createdAt": v.created_at.isoformat()
        }
        for v in verifications
    ]

@app.get("/")
async def root():
    """Health check"""
    return {
        "service": "Authenex Backend",
        "status": "running",
        "version": "2.0.0",
        "gemini_configured": bool(client),
        "database": "sqlite" if "sqlite" in (os.getenv("DATABASE_URL") or "") else "postgresql",
        "supported_modalities": ["image", "video", "audio", "document"]
    }

@app.post("/auth/login")
async def login(user: UserLogin, db: Session = Depends(get_db)):
    """
    Create or update user on login.
    Uses EMAIL as the source of truth for user identity.
    Generates consistent UID based on email hash.
    """
    import hashlib
    
    print(f"Login request for email: {user.email}")
    
    # STEP 1: Find user by EMAIL (source of truth)
    db_user = db.query(User).filter(User.email == user.email).first()
    
    if db_user:
        # User exists - keep their existing UID, just update profile
        print(f"✅ Existing user found: {user.email} with UID: {db_user.uid}")
        db_user.display_name = user.displayName
        db_user.photo_url = user.photoURL
        db.commit()
        db.refresh(db_user)
    else:
        # STEP 2: New user - generate consistent UID from email
        # Use SHA256 hash of email to create deterministic UID
        email_hash = hashlib.sha256(user.email.lower().encode()).hexdigest()[:16]
        consistent_uid = f"user-{email_hash}"
        
        print(f"🆕 Creating new user: {user.email} with consistent UID: {consistent_uid}")
        
        try:
            db_user = User(
                uid=consistent_uid,  # Consistent UID based on email hash
                email=user.email,
                display_name=user.displayName,
                photo_url=user.photoURL
            )
            db.add(db_user)
            db.commit()
            db.refresh(db_user)
            print(f"✅ Created new user: {user.email}")
        except Exception as e:
            db.rollback()
            print(f"❌ Failed to create user: {e}")
            raise HTTPException(status_code=500, detail="User creation failed")
    
    # Create audit log
    audit = AuditLog(
        uid=db_user.uid,  # Use the DB user's UID (consistent)
        action="USER_LOGIN",
        ip_address="unknown",  # TODO: Extract from request
        details={"email": user.email}
    )
    db.add(audit)
    db.commit()
    
    # STEP 3: Return the consistent UID to frontend
    return {
        "status": "success",
        "uid": db_user.uid,  # Return the consistent UID
        "email": db_user.email,
        "displayName": db_user.display_name,
        "photoURL": db_user.photo_url
    }



@app.post("/auth/register")
async def register_user(
    user_data: UserRegister,
    db: Session = Depends(get_db)
):
    """
    Register a new user with email and password
    """
    from password_utils import hash_password
    import uuid
    
    # Validate email format
    email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    if not re.match(email_regex, user_data.email):
        raise HTTPException(status_code=400, detail="Invalid email format")
    
    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user_data.email).first()
    if existing_user:
        raise HTTPException(status_code=409, detail="Email already registered")
    
    # Validate password strength
    if len(user_data.password) < 8:
        raise HTTPException(
            status_code=400, 
            detail="Password must be at least 8 characters long"
        )
    
    try:
        # Create new user
        new_user = User(
            uid=f"user-{uuid.uuid4()}",
            email=user_data.email,
            display_name=user_data.displayName or user_data.email.split('@')[0],
            password_hash=hash_password(user_data.password),
            role="USER"
        )
        
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        
        # Log registration
        audit = AuditLog(
            uid=new_user.uid,
            action="USER_REGISTERED",
            ip_address="unknown",
            details={"email": user_data.email}
        )
        db.add(audit)
        db.commit()
        
        return {
            "status": "success",
            "message": "User registered successfully",
            "user": {
                "uid": new_user.uid,
                "email": new_user.email,
                "displayName": new_user.display_name
            }
        }
    except Exception as e:
        db.rollback()
        print(f"❌ Registration error: {e}")
        raise HTTPException(status_code=500, detail="Registration failed")


@app.post("/auth/validate")
async def validate_credentials(
    credentials: CredentialsValidate,
    db: Session = Depends(get_db)
):
    """
    Validate user credentials for login
    Returns user data if valid, raises 401 if invalid
    """
    from password_utils import verify_password
    
    # Find user by email
    user = db.query(User).filter(User.email == credentials.email).first()
    
    if not user or not user.password_hash:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Verify password
    if not verify_password(credentials.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Return user data for NextAuth
    return {
        "id": user.uid,
        "name": user.display_name,
        "email": user.email,
        "image": user.photo_url or f"https://ui-avatars.com/api/?name={user.display_name}&background=random&color=fff",
        "role": user.role
    }

@app.get("/auth/check")
async def check_user_exists(email: str, db: Session = Depends(get_db)):
    """
    Check if a user exists by email.
    Used by frontend 'signIn' callback to block unauthorized Google logins.
    """
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"status": "exists", "uid": user.uid, "role": user.role}

@app.post("/auth/login")
async def login_user(user_data: UserLogin, db: Session = Depends(get_db)):
    """
    Sync user details on login. 
    Updates display name and photo from Google/OAuth if they changed.
    """
    user = db.query(User).filter(User.email == user_data.email).first()
    if not user:
         # This case should technically be handled by auth/check already, 
         # but for robustness we handle it.
         raise HTTPException(status_code=404, detail="User not found")
    
    # Update details
    if user_data.displayName:
        user.display_name = user_data.displayName
    if user_data.photoURL:
        user.photo_url = user_data.photoURL
        
    db.commit()
    return {"status": "success", "message": "User synced"}




@app.post("/analyze", response_model=ForensicAnalysisResult)
async def analyze_asset(
    file: UploadFile = File(...),
    modality: str = "IMAGE",
    user: dict = Depends(get_active_user),  # ✅ Checks status
    db: Session = Depends(get_db)
):
    """
    Analyze an asset (Image, Video, Audio, Document) for AI generation indicators.
    
    Security:
        - Requires valid JWT token
        - User ID extracted from JWT (cannot be forged)
        - All uploads are attributed to authenticated users
    """
    uid = user["sub"]  # Extract uid from JWT sub claim (secure)
    if not client:
        raise HTTPException(status_code=500, detail="Gemini Client (google-genai) not configured")
    
    try:
        print(f"Received file: {file.filename} ({modality}) from user: {uid}")
        
        # Read file content
        contents = await file.read()
        
        # Prepare content for Gemini based on modality
        gemini_content = []
        
        if modality == "IMAGE":
            image = Image.open(io.BytesIO(contents))
            print(f"Image loaded: {image.size}, {image.mode}")
            gemini_content.append(image)
            
            
            prompt = """
                You are a FORENSIC SIGNAL EXTRACTION ENGINE.

                TASK:
                Analyze this IMAGE and REPORT FORENSIC SIGNALS ONLY.
                Do NOT overthink.
                Do NOT self-audit.
                Do NOT downgrade scores.

                DO NOT decide based on philosophy.
                JUST REPORT WHAT YOU SEE.

                ----------------------------------
                DETECTION RULES:
                - If a signal is clearly present → score high
                - If clearly absent → score low
                - If unclear → mid score
                ----------------------------------

                Evaluate the following layers:

                1. Texture irregularities
                2. Anatomical inconsistencies
                3. Lighting / shadow violations
                4. Background / geometry errors
                5. Semantic anomalies (text, objects)

                ----------------------------------

                Return ONLY JSON in this EXACT format:

                {
                "verdict": "AI" | "HUMAN" | "UNCERTAIN",
                "confidence": <0-100 float>,
                "aiPercentage": <0-100 float>,
                "humanPercentage": <0-100 float>,
                "findings": ["<dominant signal 1>", "<dominant signal 2>"],
                "categoryScores": {
                    "texture": <0-100>,
                    "anatomy": <0-100>,
                    "lighting": <0-100>,
                    "background": <0-100>,
                    "semantics": <0-100>
                },
                "detectionLayers": [
                    {
                    "name": "Texture Analysis",
                    "score": <0-100>,
                    "weight": 25,
                    "findings": ["<signal or absence>"]
                    },
                    {
                    "name": "Anatomical Consistency",
                    "score": <0-100>,
                    "weight": 20,
                    "findings": ["<signal or absence>"]
                    },
                    {
                    "name": "Lighting & Shadows",
                    "score": <0-100>,
                    "weight": 20,
                    "findings": ["<signal or absence>"]
                    },
                    {
                    "name": "Background Coherence",
                    "score": <0-100>,
                    "weight": 15,
                    "findings": ["<signal or absence>"]
                    },
                    {
                    "name": "Semantic Plausibility",
                    "score": <0-100>,
                    "weight": 20,
                    "findings": ["<signal or absence>"]
                    }
                ],
                "metadata": {
                    "potentialModel": null,
                    "artifactsDetected": ["<artifact or none>"]
                }
                }
                """

            gemini_content.append(prompt)
            
        elif modality == "VIDEO":
            # For video, we might need to rely on the file bytes if the SDK supports it directly or save to temp
            # For this implementation, we will assume the model can handle the bytes or a text description if not supported loosely
            # NOTE: Gemini 1.5/2.5 Flash supports video, but via File API usually. 
            # For simplicity in this text-based interaction, we'll try to treat it as a blob if possible or stub.
            # Ideally, we upload to Gemini File API. 
            
            # Fallback: We will treat it as "not fully implemented" via direct byte stream in this simple snippets
            # UNLESS we use the File API.
            # BETTER: We will try to pass it, but if it fails, we catch it.
            
            # actually, for "flash", we can pass video parts if using the file API. 
            # Let's assume for this specific local setup we might need to save it to disk first.
            
            temp_filename = f"temp_{file.filename}"
            with open(temp_filename, "wb") as f:
                f.write(contents)
                
            video_file = client.files.upload(file=temp_filename)
            print(f"Video uploaded to Gemini: {video_file.name}")
            
            # Wait for processing
            print(f"⌛ Waiting for video processing...")
            while video_file.state.name == "PROCESSING":
                import time
                time.sleep(2)
                video_file = client.files.get(name=video_file.name)

            if video_file.state.name == "FAILED":
                raise ValueError("Video processing failed")
                
            gemini_content.append(video_file)
             
            prompt = """
            SYSTEM DIRECTIVE (CRITICAL – NON NEGOTIABLE):

            You are operating as a NATIONAL-LEVEL VIDEO FORENSICS ENGINE.

            This is NOT visual impression analysis.
            This is NOT realism judgment.
            This is EVIDENCE-DRIVEN AUTHENTICATION.

            You MUST apply court-grade forensic reasoning.

            ABSOLUTE RULES:

            1. NEVER classify AI unless MULTIPLE independent temporal + structural artifacts exist.
            2. Absence of artifacts LOWERS AI probability.
            3. Compression artifacts ≠ AI generation.
            4. Professional cinematography ≠ AI.
            5. Every score MUST reference DIRECT observable evidence.
            6. If resolution, frame rate, or quality is insufficient → verdict MUST lean UNCERTAIN.
            7. Overconfidence is penalized.
            8. Model guessing forbidden unless artifact patterns strongly align.
            9. If categories contradict → downgrade verdict.
            10. One strong indicator alone → UNCERTAIN.

            AI verdict requires:
            ≥2 STRONG structural indicators OR ≥4 MODERATE temporal indicators.

            You must internally perform:

            A. Frame-Level Artifact Extraction  
            B. Temporal Stability Analysis  
            C. Biological Motion Validation  
            D. Physics Consistency Verification  
            E. Cross-Layer Correlation  
            F. Bayesian Aggregation  
            G. Final Sanity Test: “Would this survive forensic peer review?”

            If not → downgrade.

            ----------------------------------------------------

            ACT AS A FORENSIC VIDEO AUTHENTICITY ANALYZER.

            Analyze this VIDEO for:

            - Pure AI generation
            - Deepfake face replacement
            - Synthetic lip-sync
            - Human recorded footage

            Follow this EXACT pipeline:

            ============================
            LAYER 1 — TEMPORAL COHERENCE
            ============================

            Inspect across frames:

            - Identity persistence
            - Texture regeneration
            - Facial geometry drift
            - Flicker artifacts
            - Micro-jitter

            AI videos often re-synthesize regions frame-to-frame.

            ============================
            LAYER 2 — BIOLOGICAL DYNAMICS
            ============================

            Examine:

            - Blink cadence (humans blink irregularly)
            - Micro-expressions
            - Lip-phoneme alignment
            - Gaze stability
            - Muscle activation realism

            Deepfakes commonly fail biological timing.

            ============================
            LAYER 3 — PHYSICAL REALISM
            ============================

            Validate:

            - Center of mass continuity
            - Gravity adherence
            - Inertial motion
            - Foot grounding
            - Object interaction

            AI frequently violates real-world physics.

            ============================
            LAYER 4 — SYNTHESIS ARTIFACTS
            ============================

            Detect:

            - Face boundary halos
            - Warping near cheeks/ears
            - Resolution islands
            - Edge crawling
            - Texture boiling

            These indicate neural regeneration.

            ============================
            LAYER 5 — SEMANTIC FLOW
            ============================

            Check:

            - Scene continuity
            - Action plausibility
            - Human spontaneity
            - Context logic

            ----------------------------------------------------

            CRITICAL CALIBRATION:

            - Low bitrate reduces certainty.
            - Motion blur ≠ AI.
            - Studio lighting ≠ AI.
            - Single anomaly ≠ AI.

            ONLY multi-layer structural failures justify AI.

            ----------------------------------------------------

            Perform weighted aggregation.

            Then perform CONTRADICTION CHECK:

            If any layer strongly supports HUMAN → downgrade AI.

            Before verdict ask internally:

            “Do at least two independent forensic dimensions confirm synthesis?”

            If no → UNCERTAIN.

            ----------------------------------------------------

            Return ONLY valid JSON (NO markdown) with this EXACT structure:

            {
            "verdict": "AI" | "HUMAN" | "UNCERTAIN",
            "confidence": <0-100 float>,
            "aiPercentage": <0-100 float>,
            "humanPercentage": <0-100 float>,
            "findings": ["<finding 1>", "<finding 2>"],
            "categoryScores": {
                "temporal_consistency": <0-100>,
                "anatomy": <0-100>,
                "lighting": <0-100>,
                "semantics": <0-100>
            },
            "metadata": {
                "potentialModel": "<string or null>",
                "artifactsDetected": ["<artifact 1>"]
            }
            }
            """

            gemini_content.append(prompt)
            
        elif modality == "AUDIO":
            temp_filename = f"temp_{file.filename}"
            with open(temp_filename, "wb") as f:
                f.write(contents)
            
            audio_file = client.files.upload(file=temp_filename)
            gemini_content.append(audio_file)
             
            prompt = """
                SYSTEM DIRECTIVE (CRITICAL – NON-NEGOTIABLE):

                You are operating as a NATIONAL-LEVEL AUDIO FORENSICS ENGINE.

                This is NOT listening for quality.
                This is NOT aesthetic evaluation.
                This is BIOLOGICAL + SPECTRAL EVIDENCE ANALYSIS.

                ABSOLUTE RULES:

                1. NEVER classify AI without MULTIPLE independent biological or spectral indicators.
                2. Studio-quality audio ≠ AI.
                3. Noise reduction ≠ AI.
                4. Compression artifacts ≠ AI.
                5. Absence of artifacts LOWERS AI probability.
                6. Every score MUST reference real acoustic evidence.
                7. If evidence is weak or mixed → verdict MUST be "UNCERTAIN".
                8. Overconfidence is penalized.
                9. Model guessing is forbidden unless artifacts strongly match.
                10. Single indicators NEVER justify an AI verdict.

                AI verdict requires:
                - ≥2 STRONG biological/spectral failures OR
                - ≥4 MODERATE failures across layers.

                If not met → UNCERTAIN.

                You must internally perform:

                A. Spectral Artifact Extraction  
                B. Biological Marker Detection  
                C. Temporal Micro-Variation Analysis  
                D. Structural vs Codec Separation  
                E. Cross-Layer Consistency Check  
                F. Final Sanity Question:
                “Would this survive expert acoustic testimony?”

                If no → downgrade verdict and confidence.

                ----------------------------------------------------

                ACT AS A FORENSIC AUDIO AUTHENTICITY ANALYZER.

                Analyze this AUDIO to distinguish:

                - Human-recorded voice
                - AI Text-to-Speech
                - Voice Cloning / Conversion

                Follow this EXACT forensic pipeline:

                ============================
                LAYER 1 — SPECTRAL STRUCTURE
                ============================

                Inspect:

                - Harmonic continuity
                - Phase coherence
                - Formant stability
                - Over-smoothed frequency bands
                - Neural vocoder signatures (collapsed harmonics, flat energy regions)

                Modern AI often produces unnaturally uniform spectral energy.

                ============================
                LAYER 2 — BIOLOGICAL MARKERS
                ============================

                Listen for:

                - Natural breathing
                - Saliva clicks
                - Mouth noise
                - Micro-hesitations
                - Imperfect airflow

                Human speech contains chaotic micro-noise.
                AI usually removes it.

                ============================
                LAYER 3 — TEMPORAL MICRO-DYNAMICS
                ============================

                Evaluate:

                - Pitch jitter
                - Emotional fluctuation
                - Word boundary imprecision
                - Timing irregularity

                AI speech is temporally over-aligned.

                ============================
                LAYER 4 — SYNTHESIS GLITCHES
                ============================

                Detect:

                - Sudden frequency cutoffs
                - Digital warbling
                - Robotic transients
                - Vocoder ringing

                Exclude codec artifacts.

                ============================
                LAYER 5 — SEMANTIC NATURALNESS
                ============================

                Check:

                - Human spontaneity
                - Natural hesitation
                - Emotional entropy

                Polished delivery alone ≠ AI.

                ----------------------------------------------------

                CRITICAL CALIBRATION RULES:

                - If recording quality is low → LOWER confidence.
                - If background noise exists → increases HUMAN probability.
                - If biological markers are present → downgrade AI.
                - If only spectral smoothness exists → UNCERTAIN.

                ----------------------------------------------------

                Perform WEIGHTED aggregation.

                Then CONTRADICTION CHECK:

                If any layer strongly supports HUMAN → downgrade AI.

                ----------------------------------------------------

                Return ONLY valid JSON (NO markdown, NO commentary) in this EXACT structure:

                {
                "verdict": "AI" | "HUMAN" | "UNCERTAIN",
                "confidence": <0-100 float>,
                "aiPercentage": <0-100 float>,
                "humanPercentage": <0-100 float>,
                "findings": ["<finding 1>", "<finding 2>"],
                "categoryScores": {
                    "spectral_purity": <0-100>,
                    "semantics": <0-100>
                },
                "metadata": {
                    "potentialModel": "<string or null>",
                    "artifactsDetected": ["<artifact 1>", "<artifact 2>"]
                }
                }
                """

            gemini_content.append(prompt)

        elif modality == "DOCUMENT":
            text_content = contents.decode("utf-8", errors="ignore")
            gemini_content.append(text_content)
            prompt = """Analyze this TEXT/DOCUMENT for AI generation (GPT-4, Claude, etc.).
            Check for repetitive structure, lack of nuance, or hallucinations.
            
            Return ONLY valid JSON (no markdown) with this EXACT structure:
            {
              "verdict": "AI" | "HUMAN" | "UNCERTAIN",
              "confidence": <0-100 float>,
              "aiPercentage": <0-100 float>,
              "humanPercentage": <0-100 float>,
              "findings": ["<finding 1>", "<finding 2>"],
              "categoryScores": {
                "stylistic_patterns": <0-100>,
                "semantics": <0-100>
               },
              "metadata": {
                "potentialModel": "<string or null>",
                "artifactsDetected": ["<artifact 1>"]
              }
            }"""
            gemini_content.append(prompt)

        elif modality == "EMAIL":
            text_content = contents.decode("utf-8", errors="ignore")
            gemini_content.append(text_content)
            prompt = """Analyze this EMAIL for phishing, spoofing, or AI generation. 
            Check for suspicious links, urgency, grammar patterns, and header anomalies.
            
            Return ONLY valid JSON (no markdown) with this EXACT structure:
            {
              "verdict": "AI" | "HUMAN" | "UNCERTAIN",
              "confidence": <0-100 float>,
              "aiPercentage": <0-100 float>,
              "humanPercentage": <0-100 float>,
              "findings": ["<finding 1>", "<finding 2>"],
              "categoryScores": {
                "phishing_indicators": <0-100>,
                "stylistic_patterns": <0-100>,
                "semantics": <0-100>
               },
              "metadata": {
                "potentialModel": "<string or null>",
                "artifactsDetected": ["<artifact 1>"]
              }
            }"""
            gemini_content.append(prompt)

        elif modality == "TEXT":
            text_content = contents.decode("utf-8", errors="ignore")
            gemini_content.append(text_content)
            prompt = """ACT AS A LINGUISTIC FORENSIC ANALYST. Analyze this TEXT for LLM Generation Markers.
            
            Methodology:
            1. Perplexity & Burstiness: Look for overly uniform sentence structures and lack of vocabulary variance.
            2. Stylistic Markers: Check for excessive transitional phrases ('Furthermore', 'In conclusion'), moralizing tone, or lack of personal nuisance.
            3. Hallucinations: detailed but factually incorrect statements.
            
            Objective: Determine if this text was written by a HUMAN or an AI MODEL (GPT, Claude, Llama).
            
            Return ONLY valid JSON (no markdown) with this EXACT structure:
            {
              "verdict": "AI" | "HUMAN" | "UNCERTAIN",
              "confidence": <0-100 float>,
              "aiPercentage": <0-100 float>,
              "humanPercentage": <0-100 float>,
              "findings": ["<finding 1>", "<finding 2>"],
              "categoryScores": {
                "repetitive_structure": <0-100>,
                "stylistic_consistency": <0-100>,
                "semantics": <0-100>
               },
              "metadata": {
                "potentialModel": "<string or null>",
                "artifactsDetected": ["<artifact 1>"]
              }
            }"""
            gemini_content.append(prompt)

        # Convert file to base64 for ForensicService (matching source format)
        import base64
        file_base64 = base64.b64encode(contents).decode('utf-8')
        # Add data URI prefix based on mime type
        data_uri = f"data:{file.content_type};base64,{file_base64}"
        
        print(f"📊 Calling ForensicService.analyze_media() with exact logic from AI fraud detection folder...")
        
        # Call the exact ported analysis logic
        analysis = ForensicService.analyze_media(
            base64_data=data_uri,
            mime_type=file.content_type or "application/octet-stream",
            modality=modality
        )
        
        print(f"✅ Analysis complete: {analysis.get('verdict')} (confidence: {analysis.get('confidence')}%)")
        
        # Extract scores
        ai_score = analysis.get("aiPercentage", 50)
        human_score = analysis.get("humanPercentage", 50)
        
        print(f"🔢 EXTRACTED SCORES - AI: {ai_score}, Human: {human_score}")
        
        
        # Process detection layers and add status based on score
        detection_layers = analysis.get("detectionLayers") or []
        if detection_layers is None: detection_layers = [] # Double safety
        for layer in detection_layers:
            score = layer.get("score", 0)
            if score >= 80:
                layer["status"] = "critical"
            elif score >= 60:
                layer["status"] = "elevated"
            elif score >= 40:
                layer["status"] = "warning"
            else:
                layer["status"] = "low"
            
            # Rename 'findings' to 'details' for consistency with frontend
            if "findings" in layer:
                layer["details"] = layer.pop("findings")

        result = {
            "verdict": analysis.get("verdict", "UNCERTAIN"),
            "confidence": analysis.get("confidence", 0),
            "aiPercentage": ai_score,
            "humanPercentage": human_score,
            "explanation": " | ".join(analysis.get("findings", [])),
            "modality": modality,
             # Flattened for frontend compatibility
            "findings": analysis.get("findings", []),
            "categoryScores": analysis.get("categoryScores", {}),
            "detectionLayers": detection_layers,  # NEW: Add processed layers
            "metadata": analysis.get("metadata", {}),
            # Kept for DB storage
            "details": {
                "findings": analysis.get("findings", []),
                "categoryScores": analysis.get("categoryScores", {}),
                "detectionLayers": detection_layers,
                "metadata": analysis.get("metadata", {})
            }
        }
        
        
        # Save to Database using SQLAlchemy
        scan = Scan(
            uid=uid,
            image_url="local_upload",
            filename=file.filename,
            file_type=file.content_type,
            modality=modality,
            verdict=result["verdict"],
            confidence=result["confidence"],
            ai_percentage=result["aiPercentage"],
            human_percentage=result["humanPercentage"],
            model="gemini-2.5-pro",
            reasoning=result["explanation"],
            details=result["details"]
        )
        db.add(scan)
        db.commit()
        db.refresh(scan)
        print(f"✅ Scan result saved to DB (ID: {scan.id})")
        
        
        # Explicit validation to catch Pydantic errors in our try/except block
        validated_result = ForensicAnalysisResult(**result)
        return validated_result
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"❌ Error processing analysis: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal Analysis Error: {str(e)}")

# ... existing code ...

# ==========================================
#  HISTORY API ENDPOINT
# ==========================================

@app.get("/api/history/{uid}")
async def get_user_history(
    uid: str,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_active_user)
):
    """
    Get scan history for a specific user.
    Ensures users can only access their own history unless they are ADMIN.
    """
    # Authorization check
    if current_user["sub"] != uid and current_user.get("role") != "ADMIN":
         raise HTTPException(status_code=403, detail="Unauthorized access to this history")
         
    scans = db.query(Scan).filter(Scan.uid == uid).order_by(Scan.created_at.desc()).limit(limit).all()
    
    
    # Safely construct response items
    response = []
    for s in scans:
        modality = s.modality or "unknown"
        verdict_val = s.verdict or "unknown"
        
        # Map DB verdict to Frontend expectation
        if verdict_val == "HUMAN":
            result_mapped = "authentic"
        elif verdict_val == "AI":
            result_mapped = "aiGenerated"
        else:
            result_mapped = None
            
        confidence = int(s.confidence) if s.confidence else 0
        
        ai_pct = s.ai_percentage if s.ai_percentage is not None else 0
        human_pct = s.human_percentage if s.human_percentage is not None else 0
        
        print(f"DEBUG: Case {s.id} scores -> AI: {ai_pct}, Human: {human_pct}")
        
        response.append({
            "id": s.id,
            "scanId": f"CASE-{s.id}", 
            "title": f"{modality.title()} Analysis",
            "filename": s.filename,
            "type": modality.lower(),
            "status": "completed",
            "result": result_mapped,
            "verdict": verdict_val, # Raw DB verdict (AI/HUMAN)
            "date": s.created_at.strftime("%Y-%m-%d"),
            "time": s.created_at.strftime("%H:%M"),
            "timestamp": s.created_at.isoformat(),
            "confidence": confidence,
            "aiPercentage": int(ai_pct),
            "humanPercentage": int(human_pct),
            "size": "N/A",
            "tags": [modality.lower(), result_mapped if result_mapped else "unknown"],
            "analyst": "AI System"
        })
        
    return response

@app.get("/api/scan/{scan_id}")
async def get_scan_details(
    scan_id: int,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_active_user)
):
    """
    Get full details for a specific scan.
    """
    scan = db.query(Scan).filter(Scan.id == scan_id).first()
    if not scan:
        raise HTTPException(status_code=404, detail="Scan not found")
        
    # Authorization check
    if current_user["sub"] != scan.uid and current_user.get("role") != "ADMIN":
         raise HTTPException(status_code=403, detail="Unauthorized access to this scan")
         
    return {
        "id": scan.id,
        "uid": scan.uid,
        "filename": scan.filename,
        "modality": scan.modality,
        "verdict": scan.verdict,
        "confidence": scan.confidence,
        "aiPercentage": scan.ai_percentage,
        "humanPercentage": scan.human_percentage,
        "details": scan.details, # JSON field
        "created_at": scan.created_at.isoformat(),
        "model": scan.model
    }


@app.delete("/api/scan/{scan_id}")
async def delete_scan(
    scan_id: int,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_active_user)
):
    """
    Delete a specific scan.
    """
    scan = db.query(Scan).filter(Scan.id == scan_id).first()
    if not scan:
        raise HTTPException(status_code=404, detail="Scan not found")
        
    # Authorization check
    if current_user["sub"] != scan.uid and current_user.get("role") != "ADMIN":
         raise HTTPException(status_code=403, detail="Unauthorized access to delete this scan")
         
    db.delete(scan)
    db.commit()
    
    return {"status": "success", "message": "Scan deleted successfully"}

# News Models & Data
class NewsItem(BaseModel):
    id: str
    title: str
    summary: str
    source: str
    publishedAt: str
    imageUrl: str
    url: str
    category: str
    isLive: bool = False

# Mock Data (Moved from Frontend)
MOCK_NEWS = [
  {
    "id": '1',
    "title": 'Deepfake Detection Technology Advances with New AI Models',
    "summary": 'Researchers have developed advanced AI models capable of detecting deepfakes with higher accuracy, marking a significant step in combating misinformation.',
    "source": 'TechCrunch',
    "publishedAt": "2024-02-10T10:00:00Z", # Placeholder date
    "imageUrl": 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    "url": '#',
    "category": 'deepfake',
    "isLive": True,
  },
  {
    "id": '2',
    "title": 'New AI Regulation Bill Proposed in Parliament',
    "summary": 'The government has tabled a new bill aiming to regulate the use of Artificial Intelligence in critical sectors, emphasizing data privacy and ethical use.',
    "source": 'TechPolicy Watch',
    "publishedAt": "2024-02-09T14:30:00Z",
    "imageUrl": 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    "url": '#',
    "category": 'ai',
  },
  {
    "id": '3',
    "title": 'Massive Data Breach Exposes Millions of User Records',
    "summary": 'Security researchers have discovered a massive unprotected database containing personal information of millions of users from a popular e-commerce platform.',
    "source": 'SecureNet News',
    "publishedAt": "2024-02-08T09:15:00Z",
    "imageUrl": 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    "url": '#',
    "category": 'cybercrime',
  },
  {
    "id": '4',
    "title": 'AI Tool Detects Deepfakes with 99% Accuracy',
    "summary": 'Researchers at IIT Bombay have developed a new AI tool capable of detecting deepfake videos with unprecedented accuracy, a major step forward in the fight against misinformation.',
    "source": 'India Tech Daily',
    "publishedAt": "2024-02-07T11:20:00Z",
    "imageUrl": 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    "url": '#',
    "category": 'ai',
  },
  {
    "id": '5',
    "title": 'Cybercrime Cells Launched in 50 New Districts',
    "summary": 'To combat the rising tide of digital crimes, the Home Ministry has announced the establishment of dedicated cybercrime cells in 50 new districts across the country.',
    "source": 'GovNews Live',
    "publishedAt": "2024-02-06T16:45:00Z",
    "imageUrl": 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    "url": '#',
    "category": 'cybercrime',
  },
]

@app.get("/api/news")
async def get_news(category: str = "all", limit: int = 20):
    """
    Get live news data from NewsData.io or fallback to mock data
    """
    print(f"Fetching news for category: {category}")
    
    # 1. Try fetching from NewsData.io
    newsdata_key = os.getenv("NEWSDATA_API_KEY")
    if newsdata_key:
        try:
            print("🌍 Fetching live news from NewsData.io...")
            # STRATEGY: Threat Intelligence & Public Awareness (STRICT MODE)
            # 1. Fetch BROAD news using short keyword queries (avoids 422 error)
            # 2. FILTER locally using strict risk keywords
            
            # Risk Keywords for Local Filtering
            # News item MUST contain at least one of these to be shown
            risk_keywords = [
                'scam', 'fraud', 'crime', 'police', 'arrest', 'warning', 'ban', 'illegal', 
                'victim', 'attack', 'hacker', 'breach', 'security', 'theft', 'deepfake'
            ]
            
            # Short API Queries (Max 100 chars)
            short_queries = {
                "all": "deepfake OR cybercrime OR 'ai scam'",
                "deepfake": "deepfake OR 'voice cloning'",
                "cybercrime": "cybercrime OR phishing",
                "government": "'ai regulation' OR 'it act'",
                "ai": "'ai safety' OR deepfake",
                "cases": "'ai fraud' OR 'crypto scam'",
                "social": "'social media' AND fake"
            }
            
            query = short_queries.get(category, "artificial intelligence")
            
            # NewsData.io API allows 'q' parameter for boolean search
            api_url = "https://newsdata.io/api/1/news"
            params = {
                "apikey": newsdata_key,
                "language": "en",
                "q": query,
                "country": "in,us,gb", 
                "category": "technology,science,crime,politics" 
            }
            
            response = requests.get(api_url, params=params)
            
            if response.status_code == 200:
                data = response.json()
                if "results" in data:
                    live_news = []
                    for item in data["results"]:
                        # 1. Basic Content Check
                        title = item.get("title", "").lower()
                        desc = (item.get("description") or "").lower()
                        content = title + " " + desc
                        
                        # 2. Strict Filter: Must contain a risk keyword
                        # Exception: If category is 'government', we allow regulation news without explicit 'crime' words
                        if category != 'government' and not any(k in content for k in risk_keywords):
                            continue
                            
                        # Map API fields to our NewsItem schema
                        try:
                            live_news.append({
                                "id": item.get("article_id", str(hash(item.get("link", "")))),
                                "title": item.get("title", "No Title"),
                                "summary": item.get("description") or item.get("content", "No description available")[:200] + "...",
                                "source": item.get("source_id", "NewsData.io"),
                                "publishedAt": item.get("pubDate", "2024-02-10T12:00:00Z"),
                                "imageUrl": item.get("image_url") or item.get("source_icon") or "",
                                "url": item.get("link", "#"),
                                "category": category if category != 'all' else 'technology', 
                                "isLive": True
                            })
                        except Exception as e:
                            print(f"Skipping invalid news item: {e}")
                            continue
                            
                    print(f"✅ Fetched {len(live_news)} live articles (after strict filtering)")
                    if live_news:
                        return {"success": True, "news": live_news[:limit]}
            else:
                print(f"❌ NewsData.io API Error: {response.status_code} - {response.text}")
                
        except Exception as e:
            print(f"❌ Failed to fetch live news: {str(e)}")
            
    # 2. Fallback to Mock Data
    print("⚠️  Using mock news data (API key missing or fetch failed)")
    if category == "all":
        return {"success": True, "news": MOCK_NEWS[:limit]}
    
    filtered = [n for n in MOCK_NEWS if n["category"] == category]
    return {"success": True, "news": filtered[:limit]}

# ... verify existing code ...

@app.post("/api/chat")
async def chat_handler(request: ChatRequest):
    print(f"Received chat request. Context: {request.analysis_context}") # DEBUG LOG
    """
    Chat with Authenex AI (Forensic Persona)
    """
    if not API_KEY:
        raise HTTPException(status_code=500, detail="GEMINI_API_KEY not configured")

    try:
        # Construct history for Gemini (new SDK format)
        contents = []
        for msg in request.history:
            role = "user" if msg.role == "user" else "model"
            contents.append({
                "role": role,
                "parts": [{"text": msg.text}]
            })
        
        # Site Map for Navigation
        site_map = {
            "/dashboard": "Main Dashboard - Overview",
            "/dashboard/analyze": "Deepfake Analysis - Upload & Scan",
            "/dashboard/cases": "Case History",
            "/dashboard/settings": "User Settings & Preferences",
            "/help": "Help Center",
            "/auth/login": "Login Page",
            "/auth/signup": "Sign Up Page"
        }

        # System Instruction
        system_instruction = f"""
        You are Authenex AI, a hyper-intelligent, multilingual female assistant embedded within the Authenex Digital Forensics Platform.
        
        CRITICAL RULES:
        1. OUTPUT FORMAT: You must return ONLY valid JSON (no markdown fencing) with the following structure:
           {{
             "response": "Your actual helpful response here (markdown supported)",
             "language": "ISO 639-1 code of your response (e.g., 'en', 'hi', 'fr', 'es', 'te')"
           }}
        2. LANGUAGE: FLUENTLY speak the user's language. If the user speaks Hindi, reply in Hindi. If mixed (Hinglish), reply in mixed. Default to English only if unsure.
        3. KNOWLEDGE: You are an expert in EVERYTHING. Answer ALL questions (general knowledge, coding, history, science, etc.) accurately. Do NOT restrict yourself to forensics.
        4. PERSONA: You are a helpful, smart, professional, and friendly female assistant. Maintain a polite and reassuring feminine tone in your responses.
        5. NAVIGATION: You have control over the app. If the user asks to go somewhere, you MUST include a navigation command in your 'response' text.
           - Format: `[[NAVIGATE:/exact/path]]`
           - Example: "Sure, let me take you to the settings. [[NAVIGATE:/dashboard/settings]]"
           - Use the Site Map to find the right path.
        
        SITE MAP:
        {json.dumps(site_map, indent=2)}

        CONTEXT:
        User Language Preference: '{request.language}'
        """
        
        # Add context to instruction if available
        if request.analysis_context:
            context_str = f"\\n[ANALYSIS CONTEXT]: User is viewing a {request.analysis_context.get('modality')} analysis. Verdict: {request.analysis_context.get('verdict')}. AI Probability: {request.analysis_context.get('aiPercentage', 0)}%."
            system_instruction += context_str

        # Add current user message to contents
        contents = [] # Reset contents to avoid duplication if loop above was used incorrectly, but actually we need history
        for msg in request.history:
             role = "user" if msg.role == "user" else "model"
             contents.append({
                 "role": role,
                 "parts": [{"text": msg.text}]
             })

        contents.append({
            "role": "user",
            "parts": [{"text": request.message}]
        })

        # use the client for generation
        response = client.models.generate_content(
            model="gemini-2.5-pro",
            config={
                "system_instruction": system_instruction,
                "temperature": 0.7,
                # "response_mime_type": "application/json" # Optional: Enforce JSON mode if supported by SDK version
            },
            contents=contents
        )
        
        raw_text = response.text
        
        # Parse JSON response
        try:
            clean_text = raw_text.strip()
            clean_text = re.sub(r'```json\s*', '', clean_text)
            clean_text = re.sub(r'```\s*', '', clean_text)
            data = json.loads(clean_text)
            return data
        except json.JSONDecodeError:
            print(f"Chat JSON Decode Error. Raw: {raw_text}")
            # Fallback for plain text responses
            return {
                "response": raw_text,
                "language": "en" # Default to English on error
            }

    except Exception as e:
        print(f"Chat Error: {str(e)}")
        # Return a friendly fallback instead of 500
        return {
            "response": "I'm having trouble connecting to my forensic core. Please try again in a moment.",
            "language": "en"
        }

# ==========================================
#  NEWS API ENDPOINT
# ==========================================

@app.get("/api/news")
async def get_news_feed(category: str = "all", limit: int = 10):
    """
    Fetch cybersecurity and forensics news.
    Falls back to mock data if NewsData API is unavailable.
    """
    NEWSDATA_API_KEY = os.getenv("NEWSDATA_API_KEY")
    
    # Mock news data for fallback
    mock_news = [
        {
            "id": f"mock-{i}",
            "title": f"Latest Developments in Deepfake Detection Technology",
            "summary": "Researchers unveil new AI-powered methods for identifying synthetic media with unprecedented accuracy.",
            "source": "Authenex Research",
            "publishedAt": "2024-02-10T09:00:00Z",
            "imageUrl": None,
            "url": "#",
            "category": category if category != "all" else "deepfake",
            "isLive": False
        }
        for i in range(1, min(limit, 10) + 1)
    ]
    
    if not NEWSDATA_API_KEY:
        print("⚠️ NEWSDATA_API_KEY not configured. Returning mock news.")
        return {"success": True, "news": mock_news}
    
    # News categories mapping
    category_queries = {
        "all": "cybersecurity OR deepfake OR digital forensics",
        "deepfake": "deepfake OR synthetic media",
        "cybercrime": "cybercrime OR data breach",
        "ai": "artificial intelligence security",
        "government": "cybersecurity policy",
        "cases": "digital forensics cases",
        "social": "misinformation OR fake news"
    }
    
    query = category_queries.get(category, "cybersecurity")
    
    try:
        api_url = f"https://newsdata.io/api/1/news"
        params = {
            "apikey": NEWSDATA_API_KEY,
            "q": query,
            "language": "en",
            "size": min(limit, 10)
        }
        
        response = requests.get(api_url, params=params, timeout=10)
        data = response.json()
        
        if data.get("status") == "success" and data.get("results"):
            articles = []
            for article in data["results"][:limit]:
                articles.append({
                    "id": article.get("article_id", ""),
                    "title": article.get("title", "Untitled"),
                    "summary": article.get("description", "No description available."),
                    "source": article.get("source_id", "Unknown"),
                    "publishedAt": article.get("pubDate", ""),
                    "imageUrl": article.get("image_url"),
                    "url": article.get("link", "#"),
                    "category": category,
                    "isLive": True
                })
            return {"success": True, "news": articles}
        else:
            print(f"NewsData API returned non-success: {data.get('status')}")
            return {"success": True, "news": mock_news}
            
    except Exception as e:
        print(f"News API error: {str(e)}")
        return {"success": True, "news": mock_news}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
