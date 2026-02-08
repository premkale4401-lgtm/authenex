// Updated API library - Consumes Python Backend

const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const BACKEND_URL = "http://localhost:8000";


export const analyzeAsset = async (file: File, modality: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT') => {
  try {
    console.log(`📤 Starting ${modality} analysis...`, file.name);

    // Get user ID from local storage or context (simple mock for now)
    const uid =
      localStorage.getItem("authenex_uid") || "anonymous_" + Date.now();

    const formData = new FormData();
    formData.append("file", file);

    console.log(`🔄 Calling Python Backend /analyze endpoint for ${modality}...`);

    const response = await fetch(`${BACKEND_URL}/analyze?uid=${uid}&modality=${modality}`, {
      method: "POST",
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
    // Treat text as a document file for now to keep backend simple or implement text endpoint
    const blob = new Blob([text], { type: 'text/plain' });
    const file = new File([blob], "text_analysis.txt", { type: "text/plain" });
    return analyzeAsset(file, 'DOCUMENT');
};
export const analyzeEmail = async (email: string) => analyzeText(email);

export const getScanHistory = async () => {
  const uid = localStorage.getItem("authenex_uid");
  if (!uid) return [];

  try {
    const response = await fetch(`${BACKEND_URL}/history/${uid}`);
    if (!response.ok) return [];
    return await response.json();
  } catch (e) {
    console.error("Failed to fetch history:", e);
    return [];
  }
};
