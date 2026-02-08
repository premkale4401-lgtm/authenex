// Report Type Definitions for PDF Generation

export type ContentType = 'image' | 'video' | 'audio' | 'document' | 'email' | 'text';
export type Verdict = 'authentic' | 'ai-generated' | 'inconclusive';
export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export interface AnalysisResult {
  reportId: string;
  generatedAt: string;
  contentType: ContentType;
  verdict: Verdict;
  confidence: {
    score: number;
    breakdown?: Record<string, number>;
  };
  riskLevel: RiskLevel;
  summary: string;
  
  content: {
    filename?: string;
    fileType?: string;
    fileSize?: string;
    contentLength?: number;
    hash?: string;
    previewSnippet?: string;
    imageUrl?: string;
    thumbnailUrl?: string;
  };
  
  analysis: {
    engineVersion: string;
    duration: string;
    signalsDetected: number;
  };
  
  detectionResults: DetectionLayer[];
}

export interface DetectionLayer {
  category: string;
  name: string;
  score: number;
  weight: number;
  status: 'pass' | 'warning' | 'fail';
  findings: string[];
  technicalDetails?: string;
}

export interface ReportConfig {
  language: string;
  timezone: string;
  includeTechnicalDetails: boolean;
  includeVisualEvidence?: boolean;
  branding?: {
    logo?: string;
    companyName?: string;
    footer?: string;
  };
}

// Internal PDF types
export interface ReportSection {
  title: string;
  subtitle?: string;
  metadata?: Array<{ label: string; value: string }>;
  blocks?: Block[];
}

export type Block =
  | { type: 'verdict'; label: string; value: string; confidence: number; riskLevel: RiskLevel }
  | { type: 'text'; content: string }
  | { type: 'metrics'; items: Array<{ label: string; value: string }> }
  | { type: 'details'; items: DetailItem[] }
  | { type: 'preview'; label: string; content: string }
  | { type: 'subsection'; title: string; layers: FormattedLayer[] }
  | { type: 'scale'; ranges: Array<{ min: number; max: number; label: string; description: string }> }
  | { type: 'note'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'recommendation'; content: string }
  | { type: 'legal'; content: string };

export interface DetailItem {
  label: string;
  value: string;
  monospace?: boolean;
}

export interface FormattedLayer {
  name: string;
  score: number;
  weight: number;
  status: string;
  interpretation: string;
  findings: string[];
  technicalDetails?: string;
}
