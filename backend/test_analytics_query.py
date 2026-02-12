
import requests
import sys
import os
from dotenv import load_dotenv

# Load env to get token if needed, or just use requests to test endpoint logic if possible
# But endpoint requires auth. 
# I can try to use the same logic as check_health to ping or just use the local db directly to verify counts.

# Let's use direct DB query to verify counts first.
# Then request to endpoint.

try:
    from sqlalchemy import create_engine, func, text
    from sqlalchemy.orm import sessionmaker
    # We need to find where app_models is
    sys.path.append(os.getcwd())
    from app_models import Scan, Base
except ImportError:
    print("SQLAlchemy or app_models not found. Trying requests only.")

BACKEND_URL = "http://127.0.0.1:8000"
ENDPOINT = "/api/admin/stats"

# 1. Direct DB Check (if possible)
print("--- Checking DB Directly ---")
try:
    # Load .env
    load_dotenv(os.path.join(os.getcwd(), '..', 'env', '.env'))
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        print("DATABASE_URL not found!")
    else:
        engine = create_engine(db_url)
        SessionLocal = sessionmaker(bind=engine)
        db = SessionLocal()
        
        count = db.query(func.count(Scan.id)).scalar()
        print(f"Total Scans in DB: {count}")
        
        # Check trends logic (Postgres vs SQLite)
        print("Test Trends Query:")
        try:
            # Try the exact query used in main.py
            trends = db.query(
                func.to_char(Scan.created_at, 'Mon').label('month'),
                func.count(Scan.id).label('count')
            ).group_by('month').all()
            print(f"Trends (to_char success): {trends}")
        except Exception as e:
            print(f"Trends query FAILED (likely SQLite?): {e}")

        db.close()
except Exception as e:
    print(f"DB Check Failed: {e}")

# 2. API Check
print("\n--- Checking API Endpoint ---")
# We need a token. 
# I'll rely on the DB check mostly. 
# If DB has data, but API returns 0 usually means API connects to WRONG DB or logic error.
