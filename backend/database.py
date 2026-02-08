import sqlite3
import json
from datetime import datetime
from typing import List, Dict, Optional

DB_NAME = "authenex.db"

def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    c = conn.cursor()
    
    # Create Users Table
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            uid TEXT PRIMARY KEY,
            email TEXT,
            display_name TEXT,
            photo_url TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Create Scans Table
    c.execute('''
        CREATE TABLE IF NOT EXISTS scans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uid TEXT,
            image_url TEXT,
            filename TEXT,
            file_type TEXT,
            modality TEXT, 
            verdict TEXT,
            confidence REAL,
            ai_percentage REAL,
            human_percentage REAL,
            model TEXT,
            reasoning TEXT,
            details JSON,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (uid) REFERENCES users (uid)
        )
    ''')
    
    conn.commit()
    conn.close()
    print("✅ Database initialized")

def create_or_update_user(user_data: Dict):
    conn = get_db_connection()
    c = conn.cursor()
    
    try:
        c.execute('''
            INSERT INTO users (uid, email, display_name, photo_url)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(uid) DO UPDATE SET
                email=excluded.email,
                display_name=excluded.display_name,
                photo_url=excluded.photo_url
        ''', (
            user_data.get('uid'),
            user_data.get('email'),
            user_data.get('displayName'),
            user_data.get('photoURL')
        ))
        conn.commit()
    except Exception as e:
        print(f"❌ Error saving user: {e}")
    finally:
        conn.close()

def save_scan_result(scan_data: Dict):
    conn = get_db_connection()
    c = conn.cursor()
    
    try:
        c.execute('''
            INSERT INTO scans (uid, image_url, filename, file_type, modality, verdict, confidence, ai_percentage, human_percentage, model, reasoning, details)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            scan_data.get('uid'),
            scan_data.get('imageUrl', 'local_upload'),
            scan_data.get('filename'),
            scan_data.get('fileType'),
            scan_data.get('modality'),
            scan_data.get('verdict'),
            scan_data.get('confidence'),
            scan_data.get('aiPercentage'),
            scan_data.get('humanPercentage'),
            scan_data.get('model'),
            scan_data.get('explanation'), 
            json.dumps(scan_data.get('details', {}))
        ))
        conn.commit()
        return c.lastrowid
    except Exception as e:
        print(f"❌ Error saving scan: {e}")
        return None
    finally:
        conn.close()

def get_user_scans(uid: str) -> List[Dict]:
    conn = get_db_connection()
    c = conn.cursor()
    
    try:
        c.execute('SELECT * FROM scans WHERE uid = ? ORDER BY created_at DESC', (uid,))
        rows = c.fetchall()
        
        scans = []
        for row in rows:
            scan = dict(row)
            # Map snake_case to camelCase for frontend
            scan['aiPercentage'] = scan.pop('ai_percentage', 0)
            scan['humanPercentage'] = scan.pop('human_percentage', 0)
            scan['fileUrl'] = scan.get('image_url')
            
            # Parse JSON details
            if scan['details']:
                try:
                    scan['details'] = json.loads(scan['details'])
                except:
                    scan['details'] = {}
            scans.append(scan)
        return scans
    except Exception as e:
        print(f"❌ Error fetching scans: {e}")
        return []
    finally:
        conn.close()

# Initialize on module load
init_db()
