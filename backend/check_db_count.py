
from sqlalchemy import create_engine, text
import os
from dotenv import load_dotenv

# Load correct .env
load_dotenv(dotenv_path='../env/.env')

db_url = os.getenv("DATABASE_URL")
print(f"Checking database: {db_url.split('@')[-1]}") # Print host only for safety

try:
    engine = create_engine(db_url)
    with engine.connect() as connection:
        result = connection.execute(text("SELECT count(*) FROM scans"))
        count = result.scalar()
        print(f"Scan count: {count}")
        
        if count > 0:
            result = connection.execute(text("SELECT * FROM scans LIMIT 1"))
            row = result.fetchone()
            print(f"First scan: {row}")

except Exception as e:
    print(f"Error: {e}")
