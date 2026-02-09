"""
Authentication and Authorization Middleware for Authenex
Implements JWT verification and role-based access control (RBAC)
"""
from fastapi import HTTPException, Header, Depends
from jose import JWTError, jwt
from typing import Optional
import os

# Load NextAuth secret from environment
NEXTAUTH_SECRET = os.getenv("NEXTAUTH_SECRET")

if not NEXTAUTH_SECRET:
    raise RuntimeError(
        "❌ FATAL: NEXTAUTH_SECRET environment variable is required.\n"
        "This must match the secret used in your Next.js frontend."
    )


def verify_token(authorization: Optional[str] = Header(None)) -> dict:
    """
    Verify NextAuth JWT token from Authorization header.
    
    Returns:
        dict: Decoded JWT payload containing:
            - sub: User ID (uid)
            - email: User email
            - role: User role (USER, ADMIN, ANALYST)
            - name: Display name
    
    Raises:
        HTTPException: 401 if token is missing, invalid, or expired
    
    Security:
        - Rejects requests without Authorization header
        - Rejects malformed tokens
        - Rejects expired tokens
        - Rejects tokens with invalid signatures
    """
    if not authorization:
        raise HTTPException(
            status_code=401,
            detail="Missing authorization header. Please include 'Authorization: Bearer <token>'"
        )
    
    if not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="Invalid authorization format. Expected 'Bearer <token>'"
        )
    
    token = authorization.replace("Bearer ", "")
    
    try:
        # Decode and verify JWT signature
        payload = jwt.decode(
            token,
            NEXTAUTH_SECRET,
            algorithms=["HS256"],
            options={"verify_exp": True}  # Enforce expiration check
        )
        
        # Validate required claims
        if "sub" not in payload:
            raise HTTPException(status_code=401, detail="Invalid token: missing user ID")
        
        return payload
        
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=401,
            detail="Token has expired. Please log in again."
        )
    except JWTError as e:
        raise HTTPException(
            status_code=401,
            detail=f"Invalid token: {str(e)}"
        )


def require_role(required_role: str):
    """
    Dependency factory for role-based access control (RBAC).
    
    Args:
        required_role: Role required to access the endpoint (e.g., "ADMIN")
    
    Returns:
        Dependency function that enforces role check
    
    Usage:
        @app.get("/admin/users")
        async def get_users(admin: dict = Depends(require_role("ADMIN"))):
            ...
    
    Security:
        - Verifies JWT token first (via verify_token)
        - Checks user role matches required role
        - Denies access with 403 if role doesn't match
    """
    def role_checker(user: dict = Depends(verify_token)):
        user_role = user.get("role", "USER")
        
        if user_role != required_role:
            raise HTTPException(
                status_code=403,
                detail=f"Insufficient permissions. Required role: {required_role}, your role: {user_role}"
            )
        
        return user
    
    return role_checker


def get_current_user(authorization: Optional[str] = Header(None)) -> Optional[dict]:
    """
    Optional JWT verification for endpoints that work both authenticated and unauthenticated.
    
    Returns:
        dict or None: User payload if token is valid, None otherwise
    
    Note: This should only be used for optional authentication. 
          For protected endpoints, use verify_token() instead.
    """
    if not authorization or not authorization.startswith("Bearer "):
        return None
    
    try:
        return verify_token(authorization)
    except HTTPException:
        return None
