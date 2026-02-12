
import requests
import sys

try:
    print("Checking backend health...")
    # Check root or docs or health
    r = requests.get("http://127.0.0.1:8000/docs", timeout=5)
    print(f"Docs status: {r.status_code}")
    
    # Check admin endpoint without token (should be 403 or 401)
    print("Checking /api/admin/scans (no token)...")
    r = requests.get("http://127.0.0.1:8000/api/admin/scans", timeout=5)
    print(f"Admin endpoint status: {r.status_code}")
    # Expected: 401 (Missing auth)
    
    if r.status_code == 401:
        print("Backend is responding correctly regarding Auth!")
    elif r.status_code == 403:
        print("Backend is responding correctly regarding Role!")
    elif r.status_code == 500:
        print("Backend CRASHED on request!")
        print(r.text)
    else:
        print(f"Unexpected status: {r.status_code}")

except Exception as e:
    print(f"Connection failed: {e}")
