
export interface User {
  name: string;
  email: string;
  avatar?: string;
  isPro?: boolean;
  role?: 'Admin' | 'User';
  credits?: number;
  totalVerifications?: number;
  joinedDate?: string;
}

export type ForensicModality = 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT';

export interface DetectionResult {
  aiPercentage: number;
  humanPercentage: number;
  confidence: number;
  verdict: 'AI' | 'HUMAN' | 'UNCERTAIN';
  findings: string[];
  modality: ForensicModality;
  categoryScores?: {
    texture?: number;
    anatomy?: number;
    lighting?: number;
    background?: number;
    semantics?: number;
    temporal_consistency?: number; // For Video
    spectral_purity?: number;       // For Audio
    stylistic_patterns?: number;    // For Documents
  };
  metadata: {
    potentialModel?: string;
    artifactsDetected: string[];
    fileSize?: string;
    duration?: string;
  };
  timestamp?: number;
  imageUrl?: string;
  fileUrl?: string; // For Video/Audio/Docs preview
  analysisSpeed?: number; // Analysis time in seconds
}

export enum AppState {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  ERROR = 'ERROR',
  AUTH = 'AUTH'
}

export interface AppNotification {
  id: string;
  type: 'FORENSIC_AI' | 'FORENSIC_HUMAN' | 'NEWS' | 'SYSTEM' | 'CREDIT';
  title: string;
  message: string;
  timestamp: number;
  read: boolean;
  linkData?: any;
}

export type NavTab = 'dashboard' | 'history' | 'notifications' | 'auth' | 'profile';

export interface NewsItem {
  title: string;
  summary: string;
  date: string;
  location: string;
  sourceLink: string;
}
