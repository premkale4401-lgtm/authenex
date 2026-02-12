import os
from sqlalchemy import create_engine, event
from sqlalchemy.orm import sessionmaker
from app_models import Base

# PRODUCTION SAFETY: Fail fast if DATABASE_URL not set
DATABASE_URL = os.getenv("DATABASE_URL")
ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

if not DATABASE_URL:
    raise RuntimeError(
        "[FATAL] DATABASE_URL environment variable is required.\n"
        "For local dev: export DATABASE_URL='sqlite:///./authenex.db'\n"
        "For production: Set PostgreSQL connection string in Railway/Vercel"
    )

# Fix Railway postgres:// URLs
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# SECURITY: Enforce SSL for PostgreSQL in production
if DATABASE_URL.startswith("postgresql://"):
    if "sslmode=" not in DATABASE_URL:
        if ENVIRONMENT == "production":
            raise RuntimeError(
                "[FATAL] PostgreSQL connections must use sslmode=require in production.\n"
                "Add '?sslmode=require' to your DATABASE_URL"
            )
        # Prefer SSL in development
        separator = "?" if "?" not in DATABASE_URL else "&"
        DATABASE_URL += f"{separator}sslmode=prefer"

print(f"[DB] Connecting to database: {DATABASE_URL[:50]}...")

# Create engine with production-safe settings
engine = create_engine(
    DATABASE_URL,
    echo=os.getenv("SQL_DEBUG", "false").lower() == "true",
    pool_pre_ping=True,  # Verify connections before using
    pool_size=5,  # Neon free tier limit
    max_overflow=0,  # Strict connection limit - no overflow
    pool_recycle=300,  # Recycle connections every 5 min
)

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    """Dependency for FastAPI routes"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    """Create all tables"""
    try:
        Base.metadata.create_all(bind=engine)
        print("[OK] Database tables created successfully")
    except Exception as e:
        print(f"[ERROR] Error creating tables: {e}")
        raise
