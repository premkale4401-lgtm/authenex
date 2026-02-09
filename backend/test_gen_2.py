from google import genai
import os
from dotenv import load_dotenv
from pathlib import Path

# Load env
env_path = Path(__file__).parent.parent / 'env' / '.env'
load_dotenv(dotenv_path=env_path)
API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=API_KEY)

print("🧪 Testing generation with models/gemini-1.5-flash...")
try:
    response = client.models.generate_content(
        model="models/gemini-1.5-flash",
        contents="Say hello!"
    )
    print(f"✅ Success: {response.text}")
except Exception as e:
    print(f"❌ Failed with models/gemini-1.5-flash: {e}")

print("\n🧪 Testing generation with gemini-1.0-pro...")
try:
    response = client.models.generate_content(
        model="gemini-1.0-pro",
        contents="Say hello!"
    )
    print(f"✅ Success: {response.text}")
except Exception as e:
    print(f"❌ Failed with gemini-1.0-pro: {e}")
