from google import genai
import os
from dotenv import load_dotenv
from pathlib import Path

# Load env
env_path = Path(__file__).parent.parent / 'env' / '.env'
load_dotenv(dotenv_path=env_path)
API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=API_KEY)

print("🧪 Testing generation with gemini-1.5-flash...")
try:
    response = client.models.generate_content(
        model="gemini-1.5-flash",
        contents="Say hello!"
    )
    print(f"✅ Success: {response.text}")
except Exception as e:
    print(f"❌ Failed with gemini-1.5-flash: {e}")

print("\n🧪 Testing generation with gemini-1.5-flash-latest...")
try:
    response = client.models.generate_content(
        model="gemini-1.5-flash-latest",
        contents="Say hello!"
    )
    print(f"✅ Success: {response.text}")
except Exception as e:
    print(f"❌ Failed with gemini-1.5-flash-latest: {e}")

print("\n🧪 Testing generation with gemini-2.0-flash-exp...")
try:
    response = client.models.generate_content(
        model="gemini-2.0-flash-exp",
        contents="Say hello!"
    )
    print(f"✅ Success: {response.text}")
except Exception as e:
    print(f"❌ Failed with gemini-2.0-flash-exp: {e}")
