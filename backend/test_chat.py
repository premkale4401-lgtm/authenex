import requests
import json

url = "http://localhost:8000/api/chat"

# Turn 1
payload1 = {
    "message": "Hello",
    "language": "en"
}
try:
    print("Testing Turn 1...")
    response1 = requests.post(url, json=payload1)
    print(f"Status: {response1.status_code}")
    print(f"Response: {response1.text}")
    response1.raise_for_status()
    r1_json = response1.json()
    model_reply = r1_json.get("response", "Error: No response")
    print("-" * 20)
except Exception as e:
    print(f"Turn 1 Failed: {e}")
    exit(1)

# Turn 2
payload2 = {
    "message": "Follow up question",
    "history": [
        {"role": "user", "text": "Hello"},
        {"role": "model", "text": model_reply}
    ],
    "language": "en"
}

try:
    print("Testing Turn 2 with History...")
    response2 = requests.post(url, json=payload2)
    print(f"Status: {response2.status_code}")
    print(f"Response: {response2.text}")
    response2.raise_for_status()
    print("-" * 20)
    print("Test Passed!")
except Exception as e:
    print(f"Turn 2 Failed: {e}")
