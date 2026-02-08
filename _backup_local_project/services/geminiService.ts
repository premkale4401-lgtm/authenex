
import { GoogleGenAI, Type } from "@google/genai";
import { DetectionResult, NewsItem, ForensicModality } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Universal Forensic Analysis Service
 */
export const analyzeAssetForensics = async (
  base64Data: string, 
  mimeType: string, 
  modality: ForensicModality
): Promise<DetectionResult> => {
  const model = 'gemini-3-pro-preview';
  
  let prompt = "";
  let schemaProperties: any = {
    aiPercentage: { type: Type.NUMBER },
    humanPercentage: { type: Type.NUMBER },
    confidence: { type: Type.NUMBER },
    verdict: { type: Type.STRING },
    findings: { type: Type.ARRAY, items: { type: Type.STRING } },
    metadata: {
      type: Type.OBJECT,
      properties: {
        potentialModel: { type: Type.STRING },
        artifactsDetected: { type: Type.ARRAY, items: { type: Type.STRING } }
      },
      required: ["artifactsDetected"]
    }
  };

  switch(modality) {
    case 'IMAGE':
      prompt = `Analyze this IMAGE for AI generation markers (Midjourney, DALL-E, etc.). Check anatomy, texture noise, and lighting logic.`;
      schemaProperties.categoryScores = {
        type: Type.OBJECT,
        properties: { texture: { type: Type.NUMBER }, anatomy: { type: Type.NUMBER }, lighting: { type: Type.NUMBER }, background: { type: Type.NUMBER }, semantics: { type: Type.NUMBER } },
        required: ["texture", "anatomy", "lighting", "background", "semantics"]
      };
      break;
    case 'VIDEO':
      prompt = `Analyze this VIDEO/GIF for Deepfake signatures. Look for temporal flickering, unnatural eye movement, lip-sync misalignment, and inconsistent lighting between subject and background. Identify if it's a Face Swap or full Synthetic Generation.`;
      schemaProperties.categoryScores = {
        type: Type.OBJECT,
        properties: { temporal_consistency: { type: Type.NUMBER }, anatomy: { type: Type.NUMBER }, lighting: { type: Type.NUMBER }, semantics: { type: Type.NUMBER } },
        required: ["temporal_consistency", "anatomy", "lighting", "semantics"]
      };
      break;
    case 'AUDIO':
      prompt = `Analyze this AUDIO for Voice Cloning or Synthetic TTS. Check for spectral anomalies, unnatural breathing patterns, robotic cadence, and background noise consistency.`;
      schemaProperties.categoryScores = {
        type: Type.OBJECT,
        properties: { spectral_purity: { type: Type.NUMBER }, semantics: { type: Type.NUMBER } },
        required: ["spectral_purity", "semantics"]
      };
      break;
    case 'DOCUMENT':
      prompt = `Analyze this DOCUMENT/FILE for AI-generated text or structure (GPT-4, Claude, etc.). Check for repetitive sentence structures, stylistic patterns typical of LLMs, and factual hallucinations.`;
      schemaProperties.categoryScores = {
        type: Type.OBJECT,
        properties: { stylistic_patterns: { type: Type.NUMBER }, semantics: { type: Type.NUMBER } },
        required: ["stylistic_patterns", "semantics"]
      };
      break;
  }

  const systemInstruction = `You are Authenex AI, a world-class forensic expert in digital authentication. Provide a detailed forensic report in JSON.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType,
              data: base64Data.split(',')[1] || base64Data
            }
          }
        ]
      },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: schemaProperties,
          required: ["aiPercentage", "humanPercentage", "confidence", "verdict", "findings", "metadata", "categoryScores"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return { ...result, modality };
  } catch (error) {
    console.error("Forensic Analysis Error:", error);
    throw new Error(`Failed to perform ${modality} forensic analysis.`);
  }
};

export const getRecentDeepfakeNews = async (): Promise<NewsItem[]> => {
  const model = 'gemini-3-flash-preview';
  const prompt = "Find and list 5 recent deepfake news cases or incidents from Maharashtra, India. Provide title, summary, date, location, and source link.";

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              date: { type: Type.STRING },
              location: { type: Type.STRING },
              sourceLink: { type: Type.STRING }
            },
            required: ["title", "summary", "date", "location", "sourceLink"]
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("News Fetch Error:", error);
    return [];
  }
};
