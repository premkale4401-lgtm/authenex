import os
import google.generativeai as genai
from dotenv import load_dotenv

with open("models.log", "w", encoding="utf-8") as f:
    try:
        load_dotenv()
        api_key = os.getenv("GEMINI_API_KEY")
        genai.configure(api_key=api_key)
        
        f.write("Available models:\n")
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                f.write(f"- {m.name}\n")
                
    except Exception as e:
        f.write(f"ERROR: {str(e)}\n")
