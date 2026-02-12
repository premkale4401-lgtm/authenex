
import random
from datetime import datetime, timedelta
import sys
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Load environment variables BEFORE imports
from dotenv import load_dotenv
env_path = os.path.join(os.path.dirname(os.getcwd()), 'env', '.env')
if os.path.exists(env_path):
    load_dotenv(env_path)
else:
    load_dotenv() # Try local .env

if not os.getenv("NEXTAUTH_SECRET"):
    # Set dummy secret for seeding if missing (to pass auth.py check)
    os.environ["NEXTAUTH_SECRET"] = "dummy_secret_for_seeding_123"

# Add absolute path to backend to sys.path
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app_models import Base, User, Scan, Verification
# from auth import get_password_hash # Not available in auth.py

from passlib.context import CryptContext
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    print("Error: DATABASE_URL not found.")
    sys.exit(1)

print(f"Connecting to DB: {DATABASE_URL}")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
db = SessionLocal()

def seed_data():
    print("--- Seeding Analytics Data ---")
    
    # 1. Get or Create User
    user = db.query(User).first()
    if not user:
        print("Creating dummy admin user...")
        user = User(
            uid="admin-seed-1",
            email="admin@example.com",
            display_name="Admin Seeder",
            role="ADMIN",
            password_hash="dummy"
        )
        db.add(user)
        db.commit()
    
    print(f"Using User: {user.email} ({user.uid})")
    
    # 2. Generate Scans
    modalities = ['IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT']
    verdicts = ['AI', 'HUMAN', 'UNCERTAIN']
    models = ['Gemini 1.5 Flash', 'Gemini 1.5 Pro', 'DeepFake Guard', 'Ensemble']
    
    scans_created = 0
    
    # Generate for last 6 months
    start_date = datetime.utcnow() - timedelta(days=180)
    
    for _ in range(50):
        # Random date
        days_offset = random.randint(0, 180)
        created_at = start_date + timedelta(days=days_offset)
        
        # Random hour (weighted for realistic activity)
        hour = random.choices(
            range(24), 
            weights=[1,1,1,1,2,5,10,15,20,25,20,15,20,25,30,25,20,15,10,5,2,1,1,1]
        )[0]
        created_at = created_at.replace(hour=hour, minute=random.randint(0, 59))
        
        modality = random.choice(modalities)
        verdict = random.choice(verdicts)
        
        # Logic for consistency
        if verdict == 'AI':
            ai_score = random.uniform(80, 99.9)
            human_score = 100 - ai_score
            confidence = ai_score
        elif verdict == 'HUMAN':
            human_score = random.uniform(80, 99.9)
            ai_score = 100 - human_score
            confidence = human_score
        else:
            ai_score = random.uniform(40, 60)
            human_score = 100 - ai_score
            confidence = random.uniform(50, 70)

        scan = Scan(
            uid=user.uid,
            filename=f"seed_data_{scans_created}.{modality.lower()}",
            file_type=f"application/{modality.lower()}",
            modality=modality,
            verdict=verdict,
            confidence=confidence,
            ai_percentage=ai_score,
            human_percentage=human_score,
            model=random.choice(models),
            reasoning="Seeded data for analytics testing.",
            created_at=created_at,
            is_locked=True 
        )
        db.add(scan)
        scans_created += 1

    db.commit()
    print(f"Successfully seeded {scans_created} scans!")

if __name__ == "__main__":
    try:
        seed_data()
    except Exception as e:
        print(f"Seeding Failed: {e}")
        import traceback
        traceback.print_exc()
    finally:
        db.close()
