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
                
            # Set system prompt based on modality (EXACT from source with detailed instructions)
            # Detailed Forensic Prompts with Strict JSON Schemas
            prompts = {
                "AUDIO": """
                    ACT AS A FORENSIC AUDIO ANALYST.
                    Analyze for: AI voice synthesis, cloning artifacts, robotic prosody, phase inconsistencies, and background noise anomalies.
                    Return JSON with this EXACT structure:
                    {
                        "verdict": "AI" | "HUMAN" | "UNCERTAIN",
                        "confidence": <0-100>,
                        "aiPercentage": <0-100>,
                        "humanPercentage": <0-100>,
                        "findings": ["<finding 1>", "<finding 2>"],
                        "categoryScores": {
                            "spectral_analysis": <0-100>,
                            "temporal_consistency": <0-100>,
                            "biological_markers": <0-100>,
                            "background_noise": <0-100>
                        },
                        "summary": "<short explanation>"
                    }
                """,
                "VIDEO": """
                    ACT AS A FORENSIC VIDEO ANALYST.
                    Analyze for: Deepfake signatures, temporal flickering, lip-sync errors, unnatural head-body alignment, and lighting inconsistencies.
                    Return JSON with this EXACT structure:
                    {
                        "verdict": "AI" | "HUMAN" | "UNCERTAIN",
                        "confidence": <0-100>,
                        "aiPercentage": <0-100>,
                        "humanPercentage": <0-100>,
                        "findings": ["<finding 1>", "<finding 2>"],
                        "categoryScores": {
                            "temporal_coherence": <0-100>,
                            "biological_dynamics": <0-100>,
                            "physical_realism": <0-100>,
                            "synthesis_artifacts": <0-100>
                        },
                        "summary": "<short explanation>"
                    }
                """,
                "IMAGE": """
                    ACT AS A FORENSIC IMAGE ANALYST.
                    Analyze for: Biometric inconsistencies, GAN noise, lighting coherence errors, physical anomalies, and pixel-level manipulation.
                    Return JSON with this EXACT structure:
                    {
                        "verdict": "AI" | "HUMAN" | "UNCERTAIN",
                        "confidence": <0-100>,
                        "aiPercentage": <0-100>,
                        "humanPercentage": <0-100>,
                        "findings": ["<finding 1>", "<finding 2>"],
                        "categoryScores": {
                            "texture_analysis": <0-100>,
                            "anatomy": <0-100>,
                            "lighting": <0-100>,
                            "background": <0-100>
                        },
                        "summary": "<short explanation>"
                    }
                """,
                "TEXT": """
                    ACT AS A LINGUISTIC FORENSIC ANALYST.
                    Analyze for: LLM generation patterns, repetitive syntax, lack of perplexity, and AI-typical lexical choices.
                    Return JSON with this EXACT structure:
                    {
                        "verdict": "AI" | "HUMAN" | "UNCERTAIN",
                        "confidence": <0-100>,
                        "aiPercentage": <0-100>,
                        "humanPercentage": <0-100>,
                        "findings": ["<finding 1>", "<finding 2>"],
                        "categoryScores": {
                            "perplexity": <0-100>,
                            "burstiness": <0-100>,
                            "repetitive_structure": <0-100>,
                            "coherence": <0-100>
                        },
                        "summary": "<short explanation>"
                    }
                """,
                "DOCUMENT": """
                    ACT AS A LINGUISTIC FORENSIC ANALYST.
                    Analyze for: LLM generation patterns, repetitive syntax, lack of perplexity, and AI-typical lexical choices.
                    Return JSON with this EXACT structure:
                    {
                        "verdict": "AI" | "HUMAN" | "UNCERTAIN",
                        "confidence": <0-100>,
                        "aiPercentage": <0-100>,
                        "humanPercentage": <0-100>,
                        "findings": ["<finding 1>", "<finding 2>"],
                        "categoryScores": {
                            "perplexity": <0-100>,
                            "burstiness": <0-100>,
                            "repetitive_structure": <0-100>,
                            "coherence": <0-100>
                        },
                        "summary": "<short explanation>"
                    }
                """,
                "EMAIL": """
                    ACT AS A CYBERSECURITY ANALYST (PHISHING DETECTION).
                    Analyze for: Phishing indicators, social engineering, urgency, mismatched domains, and malicious payloads.
                    Return JSON with this EXACT structure:
                    {
                        "verdict": "AI" | "HUMAN" | "UNCERTAIN",
                        "confidence": <0-100>,
                        "aiPercentage": <0-100 (Risk Score)>,
                        "humanPercentage": <0-100 (Safety Score)>,
                        "findings": ["<finding 1>", "<finding 2>"],
                        "categoryScores": {
                            "urgency": <0-100>,
                            "link_analysis": <0-100>,
                            "sender_reputation": <0-100>,
                            "grammar": <0-100>
                        },
                        "summary": "<short explanation>"
                    }
                """
            }
            
            system_prompt = prompts.get(modality.upper(), prompts["IMAGE"])
            
            # Decode base64 data
            clean_base64 = base64_data.split(',')[1] if ',' in base64_data else base64_data
            decoded_bytes = base64.b64decode(clean_base64)
            
            # Create temp file and upload (Python SDK requirement)
            ext_map = {
                "image/png": ".png", "image/jpeg": ".jpg", "image/jpg": ".jpg", "image/webp": ".webp", "image/heic": ".heic", "image/heif": ".heif",
                "video/mp4": ".mp4", "video/mpeg": ".mpeg", "video/mov": ".mov", "video/avi": ".avi", "video/x-flv": ".flv", "video/mpg": ".mpg", "video/webm": ".webm", "video/wmv": ".wmv", "video/3gpp": ".3gp",
                "audio/mpeg": ".mp3", "audio/mp3": ".mp3", "audio/wav": ".wav", "audio/aac": ".aac", "audio/x-m4a": ".m4a", "audio/ogg": ".ogg", "audio/flac": ".flac",
                "application/pdf": ".pdf", "text/plain": ".txt", "text/csv": ".csv", "text/html": ".html", "message/rfc822": ".eml"
            }
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
                
                # Strict Schema Definition
                forensic_schema = types.Schema(
                    type=types.Type.OBJECT,
                    properties={
                        "verdict": types.Schema(type=types.Type.STRING),
                        "confidence": types.Schema(type=types.Type.NUMBER),
                        "aiPercentage": types.Schema(type=types.Type.NUMBER),
                        "humanPercentage": types.Schema(type=types.Type.NUMBER),
                        "summary": types.Schema(type=types.Type.STRING),
                        "findings": types.Schema(
                            type=types.Type.ARRAY,
                            items=types.Schema(type=types.Type.STRING)
                        ),
                        "categoryScores": types.Schema(
                            type=types.Type.OBJECT,
                            properties={
                                "spectral_analysis": types.Schema(type=types.Type.NUMBER),
                                "temporal_consistency": types.Schema(type=types.Type.NUMBER),
                                "biological_markers": types.Schema(type=types.Type.NUMBER),
                                "background_noise": types.Schema(type=types.Type.NUMBER),
                                "temporal_coherence": types.Schema(type=types.Type.NUMBER),
                                "biological_dynamics": types.Schema(type=types.Type.NUMBER),
                                "physical_realism": types.Schema(type=types.Type.NUMBER),
                                "synthesis_artifacts": types.Schema(type=types.Type.NUMBER),
                                "texture_analysis": types.Schema(type=types.Type.NUMBER),
                                "anatomy": types.Schema(type=types.Type.NUMBER),
                                "lighting": types.Schema(type=types.Type.NUMBER),
                                "background": types.Schema(type=types.Type.NUMBER),
                                "perplexity": types.Schema(type=types.Type.NUMBER),
                                "burstiness": types.Schema(type=types.Type.NUMBER),
                                "repetitive_structure": types.Schema(type=types.Type.NUMBER),
                                "coherence": types.Schema(type=types.Type.NUMBER),
                                "urgency": types.Schema(type=types.Type.NUMBER),
                                "link_analysis": types.Schema(type=types.Type.NUMBER),
                                "sender_reputation": types.Schema(type=types.Type.NUMBER),
                                "grammar": types.Schema(type=types.Type.NUMBER)
                            }
                        ),
                        "detectionLayers": types.Schema(
                            type=types.Type.ARRAY,
                            items=types.Schema(
                                type=types.Type.OBJECT,
                                properties={
                                    "name": types.Schema(type=types.Type.STRING),
                                    "score": types.Schema(type=types.Type.NUMBER),
                                    "status": types.Schema(type=types.Type.STRING),
                                    "details": types.Schema(type=types.Type.STRING)
                                },
                                required=["name", "score", "status"]
                            )
                        ),
                        "metadata": types.Schema(
                            type=types.Type.OBJECT,
                            properties={
                                 "potentialModel": types.Schema(type=types.Type.STRING),
                                 "artifactsDetected": types.Schema(
                                     type=types.Type.ARRAY, 
                                     items=types.Schema(type=types.Type.STRING)
                                 )
                            }
                        )
                    },
                    required=["verdict", "confidence", "aiPercentage", "summary", "categoryScores", "detectionLayers"]
                )
                
                # Make API call with STRICT schema
                response = ai.models.generate_content(
                    model=model_name,
                    contents=[
                        f"{system_prompt} Analyze this media. YOU MUST RETURN detailed 'categoryScores' and 'detectionLayers'. For detectionLayers, generate 4-5 layers specific to the modality with scores (0-100) and status (low/critical).",
                        uploaded_file
                    ],
                    config=types.GenerateContentConfig(
                        response_mime_type="application/json",
                        response_schema=forensic_schema
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
                    "findings": data.get("findings", []),
                    "categoryScores": data.get("categoryScores", {}),
                    "detectionLayers": data.get("detectionLayers", []),
                    "metadata": data.get("metadata", {}),
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

