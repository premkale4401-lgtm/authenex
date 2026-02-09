"""
Professional FastAPI Backend for Authenex
Clean, reliable, and fully functional
"""
from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional
import google.generativeai as genai
from PIL import Image
import io
import os
import json
import re
from dotenv import load_dotenv
# SQLAlchemy imports
from sqlalchemy.orm import Session
from db_config import get_db, init_db
from models import User, Scan, AuditLog, Verification

# Load environment variables
from pathlib import Path
import sys

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
        print(f"Loading environment from: {env_path}")
        load_dotenv(dotenv_path=env_path)
        env_loaded = True
        break

if not env_loaded:
    print(f"WARNING: Could not find .env file. Tried: {[str(p) for p in env_paths]}")

# Initialize FastAPI
app = FastAPI(title="Authenex AI Analysis API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    # Allow local frontend dev server
    allow_origins=["http://localhost:3000", "http://localhost:3001"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini
API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    print("WARNING: GEMINI_API_KEY not found in .env file!")
else:
    genai.configure(api_key=API_KEY)
    print("Gemini API configured")

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
    
class UserLogin(BaseModel):
    uid: str
    email: Optional[str] = None
    displayName: Optional[str] = None
    photoURL: Optional[str] = None

class ChatMessage(BaseModel):
    role: str
    text: str

class ChatRequest(BaseModel):
    message: str
    history: List[ChatMessage] = []
    mode: str = "text"
    analysis_context: Optional[Dict] = None
    language: Optional[str] = "en"

# Initialize database on startup
@app.on_event("startup")
async def startup():
    init_db()
    print("✅ Database initialized")

@app.get("/")
async def root():
    """Health check"""
    return {
        "service": "Authenex Backend",
        "status": "running",
        "version": "2.0.0",
        "gemini_configured": bool(API_KEY),
        "database": "postgresql",
        "supported_modalities": ["image", "video", "audio", "document"]
    }

@app.post("/auth/login")
async def login(user: UserLogin, db: Session = Depends(get_db)):
    """
    Create or update user on login
    """
    print(f"Login request: {user.uid}")
    
    # Check if user exists
    db_user = db.query(User).filter(User.uid == user.uid).first()
    
    if not db_user:
        # Create new user
        db_user = User(
            uid=user.uid,
            email=user.email,
            display_name=user.displayName,
            photo_url=user.photoURL
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        print(f"✅ Created new user: {user.email}")
    else:
        # Update existing user
        db_user.email = user.email
        db_user.display_name = user.displayName
        db_user.photo_url = user.photoURL
        db.commit()
        print(f"✅ Updated user: {user.email}")
    
    # Create audit log
    audit = AuditLog(
        uid=user.uid,
        action="USER_LOGIN",
        ip_address="unknown",  # TODO: Extract from request
        details={"email": user.email}
    )
    db.add(audit)
    db.commit()
    
    return {"status": "success", "message": "User logged in"}

@app.get("/history/{uid}")
async def get_history(uid: str, db: Session = Depends(get_db)):
    """
    Get scan history for a user
    """
    print(f"Fetching history for: {uid}")
    
    scans = db.query(Scan).filter(Scan.uid == uid).order_by(Scan.created_at.desc()).all()
    
    return [
        {
            "id": s.id,
            "filename": s.filename,
            "fileType": s.file_type,
            "modality": s.modality,
            "verdict": s.verdict,
            "confidence": s.confidence,
            "aiPercentage": s.ai_percentage,
            "humanPercentage": s.human_percentage,
            "model": s.model,
            "reasoning": s.reasoning,
            "created_at": s.created_at.isoformat(),
            "details": s.details
        }
        for s in scans
    ]

@app.post("/analyze", response_model=ForensicAnalysisResult)
async def analyze_asset(
    file: UploadFile = File(...), 
    uid: str = "anonymous",
    modality: str = "IMAGE",
    db: Session = Depends(get_db)
):
    """
    Analyze an asset (Image, Video, Audio, Document) for AI generation indicators
    """
    if not API_KEY:
        raise HTTPException(status_code=500, detail="GEMINI_API_KEY not configured")
    
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
            
            prompt = """Analyze this IMAGE for AI generation markers (Midjourney, DALL-E, Stable Diffusion, etc.). 
            Provide DETAILED layer-by-layer analysis with specific findings for each category.
            
            Return ONLY valid JSON (no markdown) with this EXACT structure:
            {
              "verdict": "AI" | "HUMAN" | "UNCERTAIN",
              "confidence": <0-100 float>,
              "aiPercentage": <0-100 float>,
              "humanPercentage": <0-100 float>,
              "findings": ["<overall finding 1>", "<overall finding 2>"],
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
                  "score": <0-100 AI probability for this layer>,
                  "weight": 25,
                  "findings": ["<specific texture finding 1>", "<specific texture finding 2>"]
                },
                {
                  "name": "Anatomical Consistency",
                  "score": <0-100 AI probability>,
                  "weight": 20,
                  "findings": ["<anatomy finding>"]
                },
                {
                  "name": "Lighting & Shadows",
                  "score": <0-100 AI probability>,
                  "weight": 20,
                  "findings": ["<lighting finding>"]
                },
                {
                  "name": "Background Coherence",
                  "score": <0-100 AI probability>,
                  "weight": 15,
                  "findings": ["<background finding>"]
                },
                {
                  "name": "Semantic Plausibility",
                  "score": <0-100 AI probability>,
                  "weight": 20,
                  "findings": ["<semantic finding>"]
                }
              ],
              "metadata": {
                "potentialModel": "<string or null>",
                "artifactsDetected": ["<artifact 1>", "<artifact 2>"]
              }
            }"""
            gemini_content.append(prompt)
            
        elif modality == "VIDEO":
             # For video, we might need to rely on the file bytes if the SDK supports it directly or save to temp
             # For this implementation, we will assume the model can handle the bytes or a text description if not supported loosely
             # NOTE: Gemini 1.5/2.5 Flash supports video, but via File API usually. 
             # For simplicity in this text-based interaction, we'll try to treat it as a blob if possible or stub.
             # Ideally, we upload to Gemini File API. 
             
             # Fallback: We will treat it as "not fully implemented" via direct byte stream in this simple snippets
             # UNLESS we use the File API.
             # Let's use a simpler prompt that acknowledges limitations or Mock it if complex.
             # BETTER: We will try to pass it, but if it fails, we catch it.
             
             # actually, for "flash", we can pass video parts if using the file API. 
             # Let's assume for this specific local setup we might need to save it to disk first.
             
             temp_filename = f"temp_{file.filename}"
             with open(temp_filename, "wb") as f:
                 f.write(contents)
                 
             video_file = genai.upload_file(temp_filename)
             print(f"Video uploaded to Gemini: {video_file.name}")
             
             while video_file.state.name == "PROCESSING":
                 print("Waiting for video processing...")
                 import time
                 time.sleep(2)
                 video_file = genai.get_file(video_file.name)

             if video_file.state.name == "FAILED":
                 raise ValueError("Video processing failed")
                 
             gemini_content.append(video_file)
             
             prompt = """Analyze this VIDEO for Deepfake signatures. 
             Look for temporal flickering, unnatural eye movement, lip-sync misalignment.
             
             Return ONLY valid JSON (no markdown) with this EXACT structure:
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
            }"""
             gemini_content.append(prompt)
             
             # cleanup later
             
        elif modality == "AUDIO":
             temp_filename = f"temp_{file.filename}"
             with open(temp_filename, "wb") as f:
                 f.write(contents)
             
             audio_file = genai.upload_file(temp_filename)
             gemini_content.append(audio_file)
             
             prompt = """Analyze this AUDIO for Voice Cloning or Synthetic TTS. 
             Check for spectral anomalies, robotic cadence, breath patterns.
             
             Return ONLY valid JSON (no markdown) with this EXACT structure:
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
                "artifactsDetected": ["<artifact 1>"]
              }
            }"""
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

        # Initialize Gemini model
        model = genai.GenerativeModel("gemini-1.5-flash")
        print(f"Calling Gemini API ({model.model_name})...")
        
        response = model.generate_content(gemini_content)
        raw_text = response.text
        
        # Parse JSON response
        clean_text = raw_text.strip()
        clean_text = re.sub(r'```json\s*', '', clean_text)
        clean_text = re.sub(r'```\s*', '', clean_text)
        
        print(f"RAW GEMINI RESPONSE: {clean_text[:500]}...") # Log first 500 chars

        try:
            analysis = json.loads(clean_text)
            print(f"PARSED JSON KEYS: {list(analysis.keys())}")
        except json.JSONDecodeError:
             print(f"JSON DECODE ERROR. Raw text: {raw_text}")
             # simple fallback if json fails
             analysis = {
                 "verdict": "UNCERTAIN",
                 "confidence": 0,
                 "aiPercentage": 0,
                 "humanPercentage": 0,
                 "findings": ["Failed to parse AI response"],
                 "categoryScores": {},
                 "metadata": {"potentialModel": None, "artifactsDetected": []}
             }
        
        # Standardize result
        ai_score = analysis.get("aiPercentage") or analysis.get("ai_percentage") or analysis.get("aiScore") or 0
        human_score = analysis.get("humanPercentage") or analysis.get("human_percentage") or analysis.get("humanScore") or 0
        
        print(f"🔢 EXTRACTED SCORES - AI: {ai_score}, Human: {human_score}")
        
        # Process detection layers and add status based on score
        detection_layers = analysis.get("detectionLayers", [])
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
            model="gemini-1.5-flash",
            reasoning=result["explanation"],
            details=result["details"]
        )
        db.add(scan)
        db.commit()
        db.refresh(scan)
        print(f"✅ Scan result saved to DB (ID: {scan.id})")
        
        return result
        
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# ... existing code ...

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
    Get mock news data
    """
    print(f"Fetching news for category: {category}")
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
        # Construct history for Gemini
        gemini_history = []
        print(f"Processing history: {len(request.history)} messages")
        for msg in request.history:
            role = "user" if msg.role == "user" else "model"
            gemini_history.append({"role": role, "parts": [msg.text]})
        
        print(f"Gemini History Configured: {len(gemini_history)} turns")
        # print(f"History Dump: {gemini_history}") # Uncomment for deep debug


        # System Instruction (Strict Forensic Persona)
        # System Instruction (General Assistant + Platform Expert)
        system_instruction = f"""
        You are Authenex AI, an advanced AI consultant and guide embedded within the Authenex platform.
        {f"IMPORTANT: The user's preferred language is '{request.language}'. YOU MUST REPLY IN THIS LANGUAGE." if request.language and request.language != 'en' else "Reply in the language the user is speaking, defaulting to English."}

        YOUR CORE IDENTITY:
        - Role: Indian Male Expert (Polite, Professional, Helpful, Knowledgeable).
        - Capabilities: You can answer ANY question (General Knowledge, Science, Code, History, etc.).
        - Specialization: You are an expert on the Authenex Platform and Digital Forensics.

        COMPREHENSIVE PLATFORM KNOWLEDGE (Use this when asked about Authenex):
        
        [1. DASHBOARD]
        - Overview: Central hub showing recent activity, credits, and quick actions.
        - Stats: Shows total scans, credits remaining, and recent alerts.
        - Features: 'Quick Scan' widget for immediate analysis.
        
        [2. ANALYZE (Core Feature)]
        - Supported Modalities: Image (.jpg, .png), Video (.mp4), Audio (.mp3, .wav), Text.
        - How to Use: 
          1. Go to 'Analyze' page.
          2. Drag & drop file.
          3. Click 'Start Analysis'.
          4. Wait for multi-model processing.
        - Understanding Results:
          - 'Verdict': Real vs. Fake (Deepfake).
          - 'Confidence Score': % certainty of the AI.
          - 'AI Probability': Likelihood of AI generation.
          - 'Layer Analysis': Technical breakdown (e.g., visual artifacts, audio spectral inconsistencies).

        [3. CASES]
        - Purpose: Archive of all past analyses.
        - Capabilities: Search, filter by date/type, export PDF reports.
        - Management: Delete old cases or download evidence packs.

        [4. NEWS]
        - Content: Live feed of cybercrime updates, deepfake trends, and government advisors (e.g., from CERT-In).
        
        [5. LEGAL SAFEGUARDS]
        - Mission: Educate users on their rights under Indian Law.
        - Key Laws Covered:
          - IT Act 2000 (Section 66D - Cheating by impersonation).
          - BNS 2023 (Forgery, Identity theft).
        - Remedies:
          - Step 1: Preserve Evidence (Screenshots, Hash values).
          - Step 2: Verify with Authenex.
          - Step 3: Report to cybercrime.gov.in.
          - Step 4: File FIR if necessary.

        [6. SETTINGS & PROFILE]
        - Account: Update email, password, 2FA.
        - API Keys: Manage Gemini API keys for the engine.
        - Language: Change interface language (Hindi, Gujarati, Tamil, etc.).

        DECISION GUIDANCE LOGIC:
        - If user asks for generic help ("How are you?", "What is 2+2?", "Write a poem"):
          -> Answer as a helpful AI assistant.
        - If user asks about Deepfakes/Authenex:
          -> Use the Platform Knowledge above.
        - If user says "I found a fake video of myself":
          -> Empathize and guide them: Preserve Evidence -> Analyze -> Report (Legal Section).

        RESPONSE GUIDELINES:
        - Be Concise: Users often want quick answers.
        - Use Bullet Points: For steps or lists.
        - Persona: Maintain a professional but friendly Indian male tone.
        
        SAFETY GUARDRAILS:
        - Do not generate deepfakes.
        - Do not help bypass authentication.
        - Do not give specific legal advice (always say "Consult a lawyer for legal action").
        """

        # Inject Analysis Context if available
        if request.analysis_context:
            context_str = f"""
            
            [CURRENT ANALYSIS CONTEXT]
             The user is currently viewing a forensic analysis result:
            - File Type: {request.analysis_context.get('modality', 'Unknown')}
            - Verdict: {request.analysis_context.get('verdict', 'Unknown')}
            - Confidence: {request.analysis_context.get('confidence', 'Unknown')}%
            - AI Probability: {request.analysis_context.get('aiPercentage', 0)}%
            - Human Probability: {request.analysis_context.get('authenticity', 0)}%
            - Key Findings: {request.analysis_context.get('findings', [])}
            
            Use this data to answer questions like "Why is this fake?" or "What are the flaws?".
            """
            system_instruction += context_str

        # Initialize model with system instruction
        model = genai.GenerativeModel("gemini-1.5-flash", system_instruction=system_instruction)
        
        # Start chat session
        chat = model.start_chat(history=gemini_history)
        
        # Helper: Prepend context to the message to ensure immediate attention
        final_message = request.message
        if request.analysis_context:
            context_str = f"""
            [ANALYSIS RESULT VIEWED BY USER]
            - Verdict: {request.analysis_context.get('verdict', 'Unknown')}
            - Confidence: {request.analysis_context.get('confidence', 'Unknown')}%
            - AI Probability: {request.analysis_context.get('aiPercentage', 0)}%
            - Findings: {request.analysis_context.get('findings', [])}
            
            User Question: {request.message}
            """
            final_message = context_str

        response = chat.send_message(final_message)
        
        return {"response": response.text}

    except Exception as e:
        print(f"Chat Error: {str(e)}")
        # Return a friendly fallback instead of 500
        return {"response": "I'm having trouble connecting to my forensic core. Please try again in a moment."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
