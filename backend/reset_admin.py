
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app_models import User
from password_utils import hash_password
from dotenv import load_dotenv

# Load env
load_dotenv(os.path.join(os.path.dirname(os.getcwd()), 'env', '.env'))
if not os.getenv("DATABASE_URL"):
    load_dotenv() # Try local .env

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    print("❌ DATABASE_URL not found!")
    exit(1)

# Fix URL for SQLAlchemy
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

print(f"Connecting to: {DATABASE_URL.split('@')[-1]}")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
db = SessionLocal()

EMAIL = "admin@authenex.gov"
PASSWORD = "admin123"
UID = "admin-001"

try:
    user = db.query(User).filter(User.email == EMAIL).first()
    
    if user:
        print(f"Update existing admin: {EMAIL}")
        user.password_hash = hash_password(PASSWORD)
        user.role = "ADMIN"
        user.uid = UID # Ensure consistent UID
    else:
        print(f"Creating new admin: {EMAIL}")
        user = User(
            uid=UID,
            email=EMAIL,
            display_name="Super Admin",
            password_hash=hash_password(PASSWORD),
            role="ADMIN"
        )
        db.add(user)
    
    db.commit()
    print(f"✅ Admin Reset Successful!")
    print(f"Email: {EMAIL}")
    print(f"Password: {PASSWORD}")

except Exception as e:
    print(f"❌ Error: {e}")
    db.rollback()
finally:
    db.close()
