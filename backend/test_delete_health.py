
import requests
import sys

BACKEND_URL = "http://127.0.0.1:8000"
ENDPOINT = "/api/scan/999999"

print(f"Testing connectivity to {BACKEND_URL}...")

try:
    # 1. OPTION Request (Simulate CORS Preflight)
    print("Sending OPTIONS request...")
    headers = {
        "Origin": "http://localhost:3000",
        "Access-Control-Request-Method": "DELETE",
        "Access-Control-Request-Headers": "authorization,content-type"
    }
    r = requests.options(f"{BACKEND_URL}{ENDPOINT}", headers=headers, timeout=5)
    print(f"OPTIONS Status: {r.status_code}")
    print("Headers:", r.headers)
    
    if "Access-Control-Allow-Origin" not in r.headers:
        print("ERROR: Missing Access-Control-Allow-Origin header!")
    if "Access-Control-Allow-Methods" not in r.headers:
        print("ERROR: Missing Access-Control-Allow-Methods header!")

    # 2. DELETE Request (No Token)
    print("\nSending DELETE request (No Token)...")
    r = requests.delete(f"{BACKEND_URL}{ENDPOINT}", timeout=5)
    print(f"DELETE Status: {r.status_code}")
    # Expected 401 or 403
    
    if r.status_code == 401:
        print("Auth Check PASSED (401 returned)")
    elif r.status_code == 500:
        print("Backend CRASHED on DELETE!")
        print(r.text)
    else:
        print(f"Unexpected status: {r.status_code}")

except Exception as e:
    print(f"FATAL: Network error: {e}")
