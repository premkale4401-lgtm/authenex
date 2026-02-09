from sqlalchemy import Column, String, Float, Integer, Text, DateTime, ForeignKey, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()

class User(Base):
    """User model for authentication and profile"""
    __tablename__ = "users"
    
    uid = Column(String, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    display_name = Column(String)
    photo_url = Column(String)
    role = Column(String, default="USER")  # USER, ADMIN, ANALYST
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    scans = relationship("Scan", back_populates="user", cascade="all, delete-orphan")
    audit_logs = relationship("AuditLog", back_populates="user", cascade="all, delete-orphan")


class Scan(Base):
    """Scan/Analysis result model"""
    __tablename__ = "scans"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    uid = Column(String, ForeignKey("users.uid"), nullable=False)
    image_url = Column(String)
    filename = Column(String)
    file_type = Column(String)
    modality = Column(String)  # IMAGE, VIDEO, AUDIO, DOCUMENT
    verdict = Column(String)  # AI, HUMAN, UNCERTAIN
    confidence = Column(Float)
    ai_percentage = Column(Float)
    human_percentage = Column(Float)
    model = Column(String)
    reasoning = Column(Text)
    details = Column(JSON)  # Store complex data as JSON
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="scans")
    verifications = relationship("Verification", back_populates="scan", cascade="all, delete-orphan")


class AuditLog(Base):
    """Audit log for admin dashboard"""
    __tablename__ = "audit_logs"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    uid = Column(String, ForeignKey("users.uid"))
    action = Column(String)  # USER_LOGIN, SCAN_CREATED, SETTINGS_CHANGED, etc.
    ip_address = Column(String)
    user_agent = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)
    details = Column(JSON)
    
    # Relationship
    user = relationship("User", back_populates="audit_logs")


class Verification(Base):
    """Verification/approval model for admin review"""
    __tablename__ = "verifications"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    scan_id = Column(Integer, ForeignKey("scans.id"), nullable=False)
    analyst_uid = Column(String, ForeignKey("users.uid"))
    status = Column(String)  # PENDING, APPROVED, REJECTED
    notes = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    scan = relationship("Scan", back_populates="verifications")
