import google.generativeai as genai
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
env_path = Path('.').parent / 'env' / '.env'
load_dotenv(dotenv_path=env_path)

api_key = os.getenv('GEMINI_API_KEY')
print(f'API Key found: {bool(api_key)}')
print(f'API Key length: {len(api_key) if api_key else 0}')

if api_key:
    try:
        genai.configure(api_key=api_key)
        print('API configured successfully')
        
        model = genai.GenerativeModel('gemini-2.0-flash-exp')
        print('Model initialized')
        
        response = model.generate_content('Say hello in one word')
        print(f'Test Response: {response.text}')
        print('Chat test PASSED!')
    except Exception as e:
        print(f'Error: {type(e).__name__}: {str(e)}')
else:
    print('No API key found!')
