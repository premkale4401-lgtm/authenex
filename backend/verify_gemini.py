import requests
import os
import time
from jose import jwt
from dotenv import load_dotenv

# Load env from centralized location
load_dotenv("../env/.env")
SECRET = os.getenv("NEXTAUTH_SECRET")
API_URL = "http://localhost:8000/analyze"

if not SECRET:
    print("❌ NEXTAUTH_SECRET not found in ../env/.env")
    exit(1)

# Generate Token
payload = {
    "sub": "verify_user",
    "email": "verify@example.com",
    "role": "ANALYST",
    "name": "Verify User"
}
token = jwt.encode(payload, SECRET, algorithm="HS256")
headers = {"Authorization": f"Bearer {token}"}

# Wait for server to start
print("⏳ Waiting for server to be ready...")
for i in range(10):
    try:
        requests.get("http://localhost:8000/")
        break
    except:
        time.sleep(1)

# Test Text Analysis
print("\n🔍 Verifying Gemini API with TEXT Analysis...")
text_content = "This is a test message to verify the Gemini API key is working correctly."
files = {'file': ('verify.txt', text_content, 'text/plain')}
params = {'modality': 'TEXT'}

try:
    response = requests.post(API_URL, headers=headers, params=params, files=files)
    print(f"Status: {response.status_code}")
    if response.status_code == 200:
        data = response.json()
        print("✅ Success! Verdict:", data.get("verdict"))
        print("📝 Explanation snippet:", data.get("explanation")[:100] + "...")
    else:
        print("❌ Error:", response.text)
except Exception as e:
    print(f"❌ Request failed: {e}")
