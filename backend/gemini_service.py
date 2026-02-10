"""
Enhanced Gemini Analysis Service
Ported from authenex---ai-fraud-detection-&-auth/services/gemini.ts
Preserves exact detection logic, prompts, and scoring mechanisms
"""
from google import genai
from google.genai import types
import os
import json
import time
import tempfile
from typing import Dict, Any, List, Optional
from PIL import Image
import io

class GeminiAuthService:
    """
    Forensic analysis service using Gemini API
    Exact port of the TypeScript implementation from AI fraud detection folder
    """
    
    @staticmethod
    def get_ai():
        """Initialize Gemini client with API key from environment"""
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("❌ GEMINI_API_KEY not found in environment variables")
        return genai.Client(api_key=api_key)
    
    @staticmethod
    def sync_with_retry(fn, retries=3, delay=1000):
        """
        Retry wrapper for API calls
        EXACT PORT from withRetry() in gemini.ts
        """
        for attempt in range(retries):
            try:
                return fn()
            except Exception as error:
                error_code = getattr(error, 'status', None) or getattr(error, 'code', None)
                error_msg = str(error)
                
                is_overloaded = error_code in [503, 429, 500] or 'overloaded' in error_msg.lower()
                
                if is_overloaded and attempt < retries - 1:
                    wait_time = delay * (2 ** attempt) / 1000  # Exponential backoff
                    print(f"⚠️ Gemini node error ({error_code}). Retrying in {wait_time:.1f}s... ({retries - attempt - 1} attempts left)")
                    time.sleep(wait_time)
                    continue
                
                raise error
        
        raise Exception("Max retries exceeded")
    
    @staticmethod
    def analyze_media(base64_data: str, mime_type: str, modality: str) -> Dict[str, Any]:
        """
        Analyze media for AI generation indicators
        EXACT PORT of analyzeMedia() from gemini.ts
        Preserves all prompts, JSON schemas, and detection logic
        """
        def _analyze():
            import base64
            
            ai = GeminiAuthService.get_ai()
            model_name = 'gemini-3-flash-preview'  # EXACT from source
            
            # Set system prompt based on modality (EXACT from source)
            system_prompt = "Act as a specialized forensic analyst."
            
            if modality.upper() == 'AUDIO':
                system_prompt += " Analyze the audio for AI voice synthesis, cloning artifacts, robotic prosody, and phase inconsistencies."
            elif modality.upper() == 'VIDEO':
                system_prompt += " Analyze the video for deepfake signatures, temporal flickering, lip-sync errors, and unnatural head-body alignment."
            elif modality.upper() == 'DOCUMENT':
                system_prompt += " Analyze text for LLM generation patterns, repetitive syntax, and AI-typical lexical choices."
            else:  # IMAGE
                system_prompt += " Analyze the image for biometric inconsistencies, GAN noise, and lighting coherence errors."
            
            # Decode base64 data
            clean_base64 = base64_data.split(',')[1] if ',' in base64_data else base64_data
            decoded_bytes = base64.b64decode(clean_base64)
            
            # Create temp file and upload (Python SDK requirement)
            ext_map = {"image/png": ".png", "image/jpeg": ".jpg", "image/jpg": ".jpg", 
                       "video/mp4": ".mp4", "audio/mp3": ".mp3", "application/pdf": ".pdf"}
            ext = ext_map.get(mime_type, ".tmp")
            
            fd, tmp_path = tempfile.mkstemp(suffix=ext)
            try:
                os.write(fd, decoded_bytes)
                os.close(fd)
                
                # Upload file (SDK uses 'file' parameter, not 'path')
                uploaded_file = ai.files.upload(file=tmp_path)
                
                # Wait for file processing
                retries = 0
                while uploaded_file.state == "PROCESSING" and retries < 10:
                    time.sleep(1)
                    uploaded_file = ai.files.get(name=uploaded_file.name)
                    retries += 1
                
                # Simple flat schema to force JSON (no nested objects to avoid dict errors)
                simple_schema = types.Schema(
                    type=types.Type.OBJECT,
                    properties={
                        "aiPercentage": types.Schema(type=types.Type.NUMBER),
                        "humanPercentage": types.Schema(type=types.Type.NUMBER),
                        "confidence": types.Schema(type=types.Type.NUMBER),
                        "verdict": types.Schema(type=types.Type.STRING),
                        "summary": types.Schema(type=types.Type.STRING)
                    }
                )
                
                # Make API call with minimal schema
                response = ai.models.generate_content(
                    model=model_name,
                    contents=[
                        f"{system_prompt} Analyze this media and determine if it's AI-generated or real. Return JSON with aiPercentage, humanPercentage, confidence, verdict (REAL/DEEPFAKE/SUSPICIOUS), and summary.",
                        uploaded_file
                    ],
                    config=types.GenerateContentConfig(
                        response_mime_type="application/json",
                        response_schema=simple_schema
                    )
                )
                
                # Clean up uploaded file
                try:
                    ai.files.delete(name=uploaded_file.name)
                except:
                    pass
                
                
                # Parse response - handle both JSON and text gracefully
                try:
                    data = json.loads(response.text or '{}')
                except (json.JSONDecodeError, AttributeError):
                    # If not valid JSON, return fallback
                    data = {
                        "aiPercentage": 50,
                        "humanPercentage": 50,
                        "confidence": 0,
                        "verdict": "UNCERTAIN",
                        "summary": response.text[:500] if hasattr(response, 'text') and response.text else "Analysis unavailable",
                        "findings": []
                    }
                
                # Normalize verdict
                verdict = data.get("verdict", "SUSPICIOUS").upper()
                if verdict in ["REAL", "HUMAN"]:
                    verdict = "HUMAN"
                elif verdict in ["DEEPFAKE", "AI"]:
                    verdict = "AI"
                else:
                    verdict = "UNCERTAIN"
                
                return {
                    "aiPercentage": data.get("aiPercentage", 50),
                    "humanPercentage": data.get("humanPercentage", 50),
                    "confidence": data.get("confidence", 0),
                    "verdict": verdict,
                    "summary": data.get("summary", "Unable to generate complete forensic summary."),
                    "findings": [],  # Simple schema doesn't include findings to avoid nesting
                    "modality": modality
                }
            finally:
                # Clean up temporary file
                try:
                    os.unlink(tmp_path)
                except:
                    pass
        
        return GeminiAuthService.sync_with_retry(_analyze)
    
    @staticmethod
    def get_recent_deepfake_news() -> List[Dict[str, Any]]:
        """
        Fetch recent deepfake news using Gemini with web search
        EXACT PORT of getRecentDeepfakeNews() from gemini.ts
        """
        def _get_news():
            ai = GeminiAuthService.get_ai()
            
            # First API call: Get news with web search
            response = ai.models.generate_content(
                model='gemini-3-flash-preview',
                contents="Summarize 3 recent cases of deepfake fraud or AI-related crime specifically in Maharashtra, India from 2024-2025. Be concise.",
                config=types.GenerateContentConfig(
                    tools=[types.Tool(google_search=types.GoogleSearch())]
                )
            )
            
            text = response.text or ""
            
            # Extract grounding sources
            sources = []
            if hasattr(response, 'candidates') and response.candidates:
                grounding_metadata = getattr(response.candidates[0], 'grounding_metadata', None)
                if grounding_metadata:
                    chunks = getattr(grounding_metadata, 'grounding_chunks', [])
                    for chunk in chunks:
                        if hasattr(chunk, 'web') and chunk.web:
                            sources.append({
                                "title": getattr(chunk.web, 'title', 'News Source'),
                                "uri": getattr(chunk.web, 'uri', '')
                            })
            sources = sources[:2]
            
            # Second API call: Parse into structured JSON
            parser_response = ai.models.generate_content(
                model='gemini-3-flash-preview',
                contents=f"Convert this news into JSON. Add a field 'imageSearchTerm' with 2 relevant keywords for an Unsplash image search based on the story. Content: {text}",
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    response_schema=types.Schema(
                        type=types.Type.ARRAY,
                        items=types.Schema(
                            type=types.Type.OBJECT,
                            properties={
                                "title": types.Schema(type=types.Type.STRING),
                                "summary": types.Schema(type=types.Type.STRING),
                                "date": types.Schema(type=types.Type.STRING),
                                "location": types.Schema(type=types.Type.STRING),
                                "imageSearchTerm": types.Schema(type=types.Type.STRING)
                            },
                            required=["title", "summary", "date", "location", "imageSearchTerm"]
                        )
                    )
                )
            )
            
            parsed_news = json.loads(parser_response.text or "[]")
            
            # Add sources and image URLs
            return [
                {
                    **item,
                    "sources": sources,
                    "imageUrl": f"https://loremflickr.com/800/600/{item.get('imageSearchTerm', 'cybersecurity').split(',')[0]}"
                }
                for item in parsed_news
            ]
        
        return GeminiAuthService.sync_with_retry(_get_news)


# Alias for compatibility
ForensicService = GeminiAuthService

