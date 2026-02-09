import requests
import json

url = "http://localhost:8000/api/chat"

payload = {
    "message": "Hello! Why is my analysis showing AI results?",
    "history": [],
    "mode": "text",
    "language": "en",
    "analysis_context": {
        "modality": "IMAGE",
        "verdict": "AI",
        "confidence": 98.5,
        "aiPercentage": 99.0,
        "findings": ["Visual artifacts in texture", "Unnatural lighting"]
    }
}

try:
    print("🧪 Testing upgraded Chat API (Gemini 2.0)...")
    print("-" * 50)
    
    response = requests.post(url, json=payload, timeout=30)
    print(f"Status Code: {response.status_code}")
    
    if response.status_code == 200:
        data = response.json()
        print(f"✅ SUCCESS!")
        print(f"Bot Response: {data.get('response')}")
    else:
        print(f"❌ FAILED with status {response.status_code}")
        print(f"Response: {response.text}")
        
except Exception as e:
    print(f"❌ ERROR: {str(e)}")
