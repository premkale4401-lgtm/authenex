import os
import google.generativeai as genai
from dotenv import load_dotenv
import traceback

with open("error.log", "w", encoding="utf-8") as f:
    try:
        load_dotenv()
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            f.write("ERROR: No API key found\n")
            exit(1)
            
        genai.configure(api_key=api_key)
        
        # Test just the model we use
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content("Hello")
        f.write(f"SUCCESS: {response.text}\n")
        
    except Exception as e:
        f.write(f"ERROR: {str(e)}\n")
        f.write(traceback.format_exc())
