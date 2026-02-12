// Updated API library - Consumes Python Backend with JWT Authentication

import { getSession } from 'next-auth/react';

const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

/**
 * Get authentication headers with JWT token
 */
async function getAuthHeaders(): Promise<Record<string, string>> {
  const session = await getSession();
  
  if (!session?.user) {
    throw new Error('Authentication required. Please log in.');
  }

  // Use the pre-signed token from the session
  const token = (session as any).authToken;

  if (!token) {
    console.error('❌ Backend authentication token not found in session');
    throw new Error('Authentication failed: Missing backend token');
  }

  return {
    'Authorization': `Bearer ${token}`,
  };
}


export const analyzeAsset = async (file: File, modality: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'TEXT' | 'EMAIL') => {
  try {
    console.log(`[START] Starting ${modality} analysis...`, file.name);

    const formData = new FormData();
    formData.append("file", file);

    console.log(`[BACKEND] Calling Python Backend /analyze endpoint for ${modality}...`);

    // Get authentication headers
    const authHeaders = await getAuthHeaders();

    const url = `${BACKEND_URL}/analyze?modality=${modality}`;
    console.log(`[FETCH] Fetching: ${url}`);

    const response = await fetch(url, {
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
        console.error("[API ERROR]", errorMsg);
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
    return analyzeAsset(file, 'TEXT');
};

export const analyzeEmail = async (email: string) => {
    const blob = new Blob([email], { type: 'text/plain' });
    const file = new File([blob], "email_analysis.txt", { type: "text/plain" });
    return analyzeAsset(file, 'EMAIL');
};

export const getScanHistory = async () => {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      console.log("No session found, returning empty history");
      return [];
    }

    const uid = (session.user as any).uid || (session.user as any).id;
    const authHeaders = await getAuthHeaders();

    const response = await fetch(`${BACKEND_URL}/api/history/${uid}`, {
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


export const getScanById = async (scanId: string) => {
  try {
    const authHeaders = await getAuthHeaders();
    // Ensure we use the correct API endpoint path
    const response = await fetch(`${BACKEND_URL}/api/scan/${scanId}`, {
      headers: authHeaders,
    });
    
    if (!response.ok) {
        // If it fails with integer ID, try parsing if it has CASE- prefix
        if (scanId.toString().startsWith('CASE-')) {
             const numericId = scanId.toString().replace('CASE-', '');
             const retryResponse = await fetch(`${BACKEND_URL}/api/scan/${numericId}`, {
                headers: authHeaders,
             });
             if (retryResponse.ok) return await retryResponse.json();
        }
        
        throw new Error(`Failed to fetch scan: ${response.status}`);
    }
    
    return await response.json();
  } catch (e) {
    console.error("Failed to fetch scan:", e);
    return null;
  }
};

export const deleteScan = async (scanId: string) => {
  try {
    const authHeaders = await getAuthHeaders();
    const response = await fetch(`${BACKEND_URL}/api/scan/${scanId}`, {
      method: "DELETE",
      headers: authHeaders,
    });
    
    if (!response.ok) {
        throw new Error(`Failed to delete scan: ${response.status}`);
    }
    
    return await response.json();
  } catch (e) {
    console.error("Failed to delete scan:", e);
    return { status: "error", message: e instanceof Error ? e.message : "An unknown error occurred" };
  }
};

// ==========================================
//  SETTINGS API SERVICES
// ==========================================

export interface UserSettings {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: string;
  is2faEnabled: boolean;
  preferences: {
    notifications?: {
      email: boolean;
      push: boolean;
    };
    theme?: string;
    language?: string;
  };
}

export const getUserSettings = async (): Promise<UserSettings | null> => {
  try {
    const authHeaders = await getAuthHeaders();
    const response = await fetch(`${BACKEND_URL}/api/settings/user`, {
      headers: authHeaders,
    });
    
    if (!response.ok) throw new Error("Failed to fetch settings");
    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateUserSettings = async (settings: Partial<UserSettings['preferences']> & { is2faEnabled?: boolean }) => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/settings/user`, {
    method: "PATCH",
    headers: {
      ...authHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(settings),
  });
  
  if (!response.ok) throw new Error("Failed to update settings");
  return await response.json();
};

export const updateUserProfile = async (profile: { displayName?: string; photoURL?: string }) => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/user/profile`, {
    method: "POST",
    headers: {
      ...authHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });
  
  if (!response.ok) throw new Error("Failed to update profile");
  return await response.json();
};

export const getSystemSettings = async () => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/settings/system`, {
    headers: authHeaders,
  });
  
  if (!response.ok) throw new Error("Failed to fetch system settings");
  return await response.json();
};

export const updateSystemSetting = async (key: string, value: any, description?: string) => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/settings/system`, {
    method: "PUT",
    headers: {
      ...authHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key, value, description }),
  });
  
  if (!response.ok) throw new Error("Failed to update system setting");
  return await response.json();
};


export const deleteAccount = async () => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/user/me`, {
    method: "DELETE",
    headers: authHeaders,
  });
  
  if (!response.ok) throw new Error("Failed to delete account");
  return await response.json();
};

// ==========================================
//  DASHBOARD & ADMIN API
// ==========================================

export const getUserStats = async () => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/user/stats`, {
    headers: authHeaders,
  });
  
  if (!response.ok) throw new Error("Failed to fetch user stats");
  return await response.json();
};

export const getAdminStats = async () => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/admin/stats`, {
    headers: authHeaders,
  });
  
  if (!response.ok) throw new Error("Failed to fetch admin stats");
  return await response.json();
};

export const getAllUsers = async (skip = 0, limit = 100) => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/admin/users?skip=${skip}&limit=${limit}`, {
    headers: authHeaders,
  });
  
  if (!response.ok) throw new Error("Failed to fetch users");
  return await response.json();
};

export const updateUserStatus = async (uid: string, role: string) => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/admin/users/${uid}`, {
    method: "PUT",
    headers: {
      ...authHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role }),
  });
  
  if (!response.ok) {
     const error = await response.json();
     throw new Error(error.detail || "Failed to update user status");
  }
  return await response.json();
};

export const getAuditLogs = async (limit = 50) => {
  const authHeaders = await getAuthHeaders();
  const response = await fetch(`${BACKEND_URL}/api/admin/audit?limit=${limit}`, {
    headers: authHeaders,
  });
  
  if (!response.ok) throw new Error("Failed to fetch audit logs");
  return await response.json();
};

export const getVerifications = async (status?: string) => {
  const authHeaders = await getAuthHeaders();
  let url = `${BACKEND_URL}/api/admin/verifications`;
  if (status) url += `?status=${status}`;
  
  const response = await fetch(url, {
    headers: authHeaders,
  });
  
  if (!response.ok) throw new Error("Failed to fetch verifications");
  return await response.json();
};

