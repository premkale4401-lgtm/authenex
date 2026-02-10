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
            raise ValueError("GEMINI_API_KEY not found in environment")
        return genai.Client(api_key=api_key)
    
    @staticmethod
    async def with_retry(fn, retries=3, delay=1000):
        """
        Retry mechanism with exponential backoff
        Exact port from TypeScript withRetry method
        """
        for attempt in range(retries):
            try:
                return await fn()
            except Exception as error:
                # Check for retryable errors
                error_status = getattr(error, 'status', None) or getattr(error, 'code', None)
                error_message = str(error)
                
                is_overloaded = error_status == 503 or 'overloaded' in error_message.lower()
                is_rate_limited = error_status == 429
                is_internal_error = error_status == 500
                
                if (is_overloaded or is_rate_limited or is_internal_error) and attempt < retries - 1:
                    delay_seconds = delay / 1000.0
                    print(f"⚠️ Gemini node error ({error_status or '500'}). Retrying in {delay_seconds}s... ({retries - attempt - 1} attempts left)")
                    time.sleep(delay_seconds)
                    delay *= 2  # Exponential backoff
                else:
                    raise error
        
        raise Exception("Max retries exceeded")
    
    @staticmethod
    def sync_with_retry(fn, retries=3, delay=1000):
        """Synchronous version of with_retry for sync functions"""
        for attempt in range(retries):
            try:
                return fn()
            except Exception as error:
                error_status = getattr(error, 'status', None) or getattr(error, 'code', None)
                error_message = str(error)
                
                is_overloaded = error_status == 503 or 'overloaded' in error_message.lower()
                is_rate_limited = error_status == 429
                is_internal_error = error_status == 500
                
                if (is_overloaded or is_rate_limited or is_internal_error) and attempt < retries - 1:
                    delay_seconds = delay / 1000.0
                    print(f"⚠️ Gemini node error ({error_status or '500'}). Retrying in {delay_seconds}s... ({retries - attempt - 1} attempts left)")
                    time.sleep(delay_seconds)
                    delay *= 2
                else:
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
            import base64  # Move import to top to avoid scope issues
            
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
            
            # Prepare content - SIMPLE approach matching TypeScript
            # The Python SDK accepts: list of [str, bytes] just like TypeScript
            clean_base64 = base64_data.split(',')[1] if ',' in base64_data else base64_data
            decoded_bytes = base64.b64decode(clean_base64)
            
            # Define response schema first
            response_schema = types.Schema(
                type=types.Type.OBJECT,
                properties={
                    "aiPercentage": types.Schema(type=types.Type.NUMBER),
                    "humanPercentage": types.Schema(type=types.Type.NUMBER),
                    "confidence": types.Schema(type=types.Type.NUMBER),
                    "verdict": types.Schema(
                        type=types.Type.STRING,
                        enum=["REAL", "DEEPFAKE", "SUSPICIOUS", "AI", "HUMAN", "UNCERTAIN"]
                    ),
                    "summary": types.Schema(type=types.Type.STRING),
                    "findings": types.Schema(
                        type=types.Type.ARRAY,
                        items=types.Schema(
                            type=types.Type.OBJECT,
                            properties={
                                "label": types.Schema(type=types.Type.STRING),
                                "severity": types.Schema(
                                    type=types.Type.STRING,
                                    enum=["low", "medium", "high"]
                                ),
                                "description": types.Schema(type=types.Type.STRING)
                            },
                            required=["label", "severity", "description"]
                        )
                    )
                },
                required=["aiPercentage", "humanPercentage", "confidence", "verdict", "findings", "summary"]
            )
            
            # Make API call - EXACT structure from TypeScript
            # contents = [{ parts: [{text: ...}, {inlineData: ...}] }]
            response = ai.models.generate_content(
                model=model_name,
                contents=[
                    {
                        "parts": [
                            {"text": f"{system_prompt} Return a detailed forensic report in JSON format only."},
                            {"inline_data": {"mime_type": mime_type, "data": decoded_bytes}}
                        ]
                    }
                ],
                config=types.GenerateContentConfig(
                    thinking_config={'thinking_budget': 0},  # EXACT from source
                    response_mime_type="application/json",
                    response_schema=response_schema
                )
            )
            
            # Parse response (EXACT error handling from source)
            try:
                data = json.loads(response.text or '{}')
                
                # Normalize verdict values
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
                    "findings": data.get("findings", []) if isinstance(data.get("findings"), list) else [],
                    "modality": modality
                }
            except Exception as error:
                print(f"❌ Forensic Extraction Error: {error}")
                raise Exception("Neural node returned unparseable forensic data.")
        
        return GeminiAuthService.sync_with_retry(_analyze)
    
    @staticmethod
    def get_recent_deepfake_news() -> List[Dict[str, Any]]:
        """
        Fetch recent deepfake news using Gemini with web search
        EXACT PORT of getRecentDeepfakeNews() from gemini.ts
        """
        def _get_news():
            ai = GeminiAuthService.get_ai()
            
            # First API call: Get news with web search (simplified)
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
            sources = sources[:2]  # Limit to 2 sources
            
            # Second API call: Parse into structured JSON (simplified)
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
            
            # Add sources and image URLs (EXACT from source)
            return [
                {
                    **item,
                    "sources": sources,
                    "imageUrl": f"https://loremflickr.com/800/600/{item.get('imageSearchTerm', 'cybersecurity').split(',')[0]}"
                }
                for item in parsed_news
            ]
        
        return GeminiAuthService.sync_with_retry(_get_news)


# Alias for compatibility with existing code
ForensicService = GeminiAuthService
