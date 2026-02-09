from google import genai
import os
from dotenv import load_dotenv
from pathlib import Path

# Load env
env_path = Path(__file__).parent.parent / 'env' / '.env'
load_dotenv(dotenv_path=env_path)
API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    print("❌ API_KEY not found")
    exit(1)

client = genai.Client(api_key=API_KEY)

print("🔍 Listing available models...")
try:
    for model in client.models.list():
        print(f"Model: {model.name}")
except Exception as e:
    print(f"❌ Failed to list models: {e}")
