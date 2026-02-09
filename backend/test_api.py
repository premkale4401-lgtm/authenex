import requests
import json

url = "http://localhost:8000/api/chat"

payload = {
    "message":  "Hello! Can you tell me what Authenex does in one sentence?",
    "history": [],
    "mode": "text",
    "language": "en"
}

try:
    print("Testing chatbot API...")
    print(f"URL: {url}")
    print(f"Payload: {json.dumps(payload, indent=2)}")
    print("-" * 50)
    
    response = requests.post(url, json=payload, timeout=15)
    print(f"Status Code: {response.status_code}")
    print(f"Response Headers: {dict(response.headers)}")
    print("-" * 50)
    
    if response.status_code == 200:
        data = response.json()
        bot_response = data.get("response", "No response field")
        print(f"✅ SUCCESS!")
        print(f"Bot Response: {bot_response}")
        
        # Check if it's the error fallback message
        if "having trouble connecting" in bot_response.lower():
            print("\n⚠️ WARNING: Bot returned fallback error message")
            print("This means Gemini API call is failing")
        else:
            print("\n🎉 Chat API is working properly!")
    else:
        print(f"❌ FAILED with status {response.status_code}")
        print(f"Response: {response.text}")
        
except Exception as e:
    print(f"❌ ERROR: {type(e).__name__}: {str(e)}")
