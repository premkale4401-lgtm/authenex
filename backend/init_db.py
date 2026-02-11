"""
Database Initialization Script for Authenex
Creates all tables and seeds initial data
"""
import os
import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from dotenv import load_dotenv

# Load environment variables
env_paths = [
    Path(__file__).parent.parent / 'env' / '.env',
    Path('.').parent / 'env' / '.env',
    Path('.') / '.env',
]

for env_path in env_paths:
    if env_path.exists():
        print(f"✅ Loading environment from: {env_path}")
        load_dotenv(dotenv_path=env_path)
        break

from db_config import engine, SessionLocal
from app_models import Base, User, SystemSetting
from password_utils import hash_password
from datetime import datetime

def init_database():
    """Initialize database tables"""
    print("🔧 Creating database tables...")
    try:
        Base.metadata.create_all(bind=engine)
        print("✅ Database tables created successfully")
    except Exception as e:
        print(f"❌ Error creating tables: {e}")
        raise

def seed_admin_user():
    """Create default admin user if it doesn't exist"""
    db = SessionLocal()
    try:
        # Check if admin already exists
        admin = db.query(User).filter(User.email == "admin@authenex.gov").first()
        if admin:
            print("ℹ️  Admin user already exists")
            return
        
        # Get admin password from environment or use default
        admin_password = os.getenv("INITIAL_ADMIN_PASSWORD", "Admin@123")
        
        # Create admin user
        admin = User(
            uid="admin-001",
            email="admin@authenex.gov",
            display_name="System Administrator",
            password_hash=hash_password(admin_password),
            role="ADMIN",
            created_at=datetime.utcnow()
        )
        db.add(admin)
        db.commit()
        print(f"✅ Admin user created: admin@authenex.gov")
        print(f"⚠️  Default password: {admin_password}")
        print(f"⚠️  IMPORTANT: Change this password after first login!")
    except Exception as e:
        db.rollback()
        print(f"❌ Error creating admin user: {e}")
    finally:
        db.close()

def seed_system_settings():
    """Create default system settings"""
    db = SessionLocal()
    try:
        default_settings = [
            {
                "key": "maintenance_mode",
                "value": {"enabled": False},
                "description": "Enable/disable maintenance mode"
            },
            {
                "key": "allow_registration",
                "value": {"enabled": True},
                "description": "Allow new user registrations"
            },
            {
                "key": "max_file_size_mb",
                "value": {"size": 50},
                "description": "Maximum file upload size in MB"
            }
        ]
        
        for setting_data in default_settings:
            existing = db.query(SystemSetting).filter(
                SystemSetting.key == setting_data["key"]
            ).first()
            
            if not existing:
                setting = SystemSetting(**setting_data)
                db.add(setting)
        
        db.commit()
        print("✅ System settings initialized")
    except Exception as e:
        db.rollback()
        print(f"❌ Error creating system settings: {e}")
    finally:
        db.close()

def main():
    """Main initialization function"""
    print("=" * 60)
    print("🚀 Authenex Database Initialization")
    print("=" * 60)
    
    # Step 1: Create tables
    init_database()
    
    # Step 2: Seed admin user
    seed_admin_user()
    
    # Step 3: Seed system settings
    seed_system_settings()
    
    print("=" * 60)
    print("✅ Database initialization complete!")
    print("=" * 60)
    print("\n📋 Next Steps:")
    print("1. Start the backend: python main.py")
    print("2. Login with admin credentials")
    print("3. Change the default admin password")
    print("\n")

if __name__ == "__main__":
    main()
