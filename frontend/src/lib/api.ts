// Updated API library - Consumes Python Backend with JWT Authentication

import { getSession } from 'next-auth/react';
import { createBackendToken } from './jwt-helper';

const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * Get authentication headers with JWT token
 */
async function getAuthHeaders(): Promise<Record<string, string>> {
  const session = await getSession();
  
  if (!session?.user) {
    throw new Error('Authentication required. Please log in.');
  }

  // Create JWT token for backend
  const token = createBackendToken({
    id: (session.user as any).uid || (session.user as any).id,
    email: session.user.email,
    name: session.user.name,
    role: (session.user as any).role,
  });

  return {
    'Authorization': `Bearer ${token}`,
  };
}


export const analyzeAsset = async (file: File, modality: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT') => {
  try {
    console.log(`📤 Starting ${modality} analysis...`, file.name);

    const formData = new FormData();
    formData.append("file", file);

    console.log(`🔄 Calling Python Backend /analyze endpoint for ${modality}...`);

    // Get authentication headers
    const authHeaders = await getAuthHeaders();

    const response = await fetch(`${BACKEND_URL}/analyze?modality=${modality}`, {
      method: "POST",
      headers: {
        ...authHeaders,
      },
      body: formData,
    });

    console.log("📥 Response status:", response.status);

    if (!response.ok) {
        const errorText = await response.text();
        let errorMsg = "Analysis failed";
        try {
          const errorJson = JSON.parse(errorText);
          errorMsg = errorJson.detail || errorJson.error || errorMsg;
        } catch (e) {
          errorMsg = errorText || errorMsg;
        }
        console.error("❌ API Error:", errorMsg);
        throw new Error(errorMsg);
      }
  
      const data = await response.json();
      console.log("✅ Analysis complete:", data);
  
      return data;
    } catch (error) {
      console.error(`💥 ${modality} analysis error:`, error);
      throw error;
    }
  };

export const analyzeImage = (file: File) => analyzeAsset(file, 'IMAGE');
export const analyzeVideo = (file: File) => analyzeAsset(file, 'VIDEO');
export const analyzeAudio = (file: File) => analyzeAsset(file, 'AUDIO');
export const analyzeDocument = (file: File) => analyzeAsset(file, 'DOCUMENT');

export const analyzeText = async (text: string) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const file = new File([blob], "text_analysis.txt", { type: "text/plain" });
    return analyzeAsset(file, 'DOCUMENT');
};

export const analyzeEmail = async (email: string) => analyzeText(email);

export const getScanHistory = async () => {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      console.log("No session found, returning empty history");
      return [];
    }

    const uid = (session.user as any).uid || (session.user as any).id;
    const authHeaders = await getAuthHeaders();

    const response = await fetch(`${BACKEND_URL}/history/${uid}`, {
      headers: authHeaders,
    });
    
    if (!response.ok) {
      console.error("Failed to fetch history:", response.status);
      return [];
    }
    
    return await response.json();
  } catch (e) {
    console.error("Failed to fetch history:", e);
    return [];
  }
};
