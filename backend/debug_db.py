
import sqlite3
import pandas as pd

try:
    conn = sqlite3.connect('authenex.db')
    query = "SELECT id, created_at, filename, verdict, ai_percentage, human_percentage, confidence FROM scans ORDER BY created_at DESC LIMIT 5"
    df = pd.read_sql_query(query, conn)
    print("\n🧐 LATEST 5 SCANS FROM DB:")
    print(df.to_string(index=False))
    conn.close()
except Exception as e:
    print(f"❌ Error reading DB: {e}")
