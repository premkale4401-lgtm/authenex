
import sys
import os
from pathlib import Path

# Fix path to allow imports
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from dotenv import load_dotenv

# Load env same way as main.py
env_paths = [
    Path(__file__).parent.parent / 'env' / '.env',
    Path('.').parent / 'env' / '.env',
]
for env_path in env_paths:
    if env_path.exists():
        print(f"Loading env from {env_path}")
        load_dotenv(dotenv_path=env_path)
        break

from db_config import get_db, init_db
from app_models import Scan

print("Testing app query...")
db = next(get_db())
try:
    scans = db.query(Scan).order_by(Scan.created_at.desc()).limit(10).all()
    print(f"Found {len(scans)} scans using app config")
    for s in scans:
        print(f" - {s.id}: {s.filename} ({s.verdict})")
except Exception as e:
    print(f"Error: {e}")
finally:
    db.close()
