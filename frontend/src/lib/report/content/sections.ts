import { 
  AnalysisResult, 
  DetectionLayer, 
  ContentType, 
  Verdict, 
  RiskLevel,
  ReportConfig,
  ReportSection,
  Block,
  DetailItem,
  FormattedLayer
} from '@/types/report';

export class ReportContentBuilder {
  private result: AnalysisResult;
  private config: ReportConfig;

  constructor(result: AnalysisResult, config: ReportConfig) {
    this.result = result;
    this.config = config;
  }

  // Section 1: Cover/Header
  buildHeader(): ReportSection {
    return {
      title: 'Analysis Report',
      subtitle: this.formatContentType(this.result.contentType),
      metadata: [
        { label: 'Report ID', value: this.result.reportId },
        { label: 'Generated', value: this.formatDate(this.result.generatedAt) },
        { label: 'Analysis Engine', value: this.result.analysis.engineVersion },
      ]
    };
  }

  // Section 2: Executive Summary
  buildSummary(): ReportSection {
    const verdictText = this.formatVerdict(this.result.verdict);
    
    return {
      title: 'Executive Summary',
      blocks: [
        {
          type: 'verdict',
          label: 'Determination',
          value: verdictText,
          confidence: this.result.confidence.score,
          riskLevel: this.result.riskLevel
        },
        {
          type: 'text',
          content: this.result.summary
        },
        {
          type: 'metrics',
          items: [
            { label: 'Confidence Score', value: `${this.result.confidence.score}%` },
            { label: 'Analysis Duration', value: this.result.analysis.duration },
            { label: 'Signals Detected', value: this.result.analysis.signalsDetected.toString() }
          ]
        }
      ]
    };
  }

  // Section 3: Content Details
  buildContentDetails(): ReportSection {
    const details: DetailItem[] = [];
    
    if (this.result.content.filename) {
      details.push({ label: 'File Name', value: this.result.content.filename });
    }
    if (this.result.content.fileType) {
      details.push({ label: 'File Type', value: this.result.content.fileType });
    }
    if (this.result.content.fileSize) {
      details.push({ label: 'File Size', value: this.result.content.fileSize });
    }
    if (this.result.content.contentLength) {
      const unit = this.result.contentType === 'text' || this.result.contentType === 'email' ? 'characters' : 'bytes';
      details.push({ label: 'Content Length', value: `${this.result.content.contentLength.toLocaleString()} ${unit}` });
    }
    if (this.result.content.hash) {
      details.push({ label: 'Content Hash (SHA-256)', value: this.result.content.hash, monospace: true });
    }

    return {
      title: 'Analyzed Content Details',
      blocks: [
        { type: 'details', items: details },
        ...(this.result.content.previewSnippet ? [{
          type: 'preview' as const,
          label: 'Content Preview',
          content: this.result.content.previewSnippet
        }] : [])
      ]
    };
  }

  // Section 4: Detection Results (Type-specific)
  buildDetectionResults(): ReportSection {
    const typeSpecificTitle = this.getTypeSpecificTitle(this.result.contentType);
    
    const categoryGroups = this.groupByCategory(this.result.detectionResults);
    
    const blocks: Block[] = categoryGroups.map(([category, layers]) => ({
      type: 'subsection',
      title: this.formatCategory(category),
      layers: layers.map(layer => this.formatDetectionLayer(layer))
    }));

    return {
      title: typeSpecificTitle,
      subtitle: 'Detailed signal analysis and anomaly detection',
      blocks
    };
  }

  // Section 5: Confidence Interpretation
  buildConfidenceGuide(): ReportSection {
    return {
      title: 'Understanding Confidence Scores',
      blocks: [
        {
          type: 'text',
          content: 'Confidence scores represent the statistical probability that the detected signals indicate the stated classification. Higher scores indicate greater certainty based on available analytical signals.'
        },
        {
          type: 'scale',
          ranges: [
            { min: 90, max: 100, label: 'Very High Confidence', description: 'Strong consensus across multiple independent detection methods.' },
            { min: 70, max: 89, label: 'High Confidence', description: 'Clear indicators present with minimal ambiguity.' },
            { min: 50, max: 69, label: 'Moderate Confidence', description: 'Detectable signals present but with some uncertainty or conflicting indicators.' },
            { min: 0, max: 49, label: 'Low Confidence', description: 'Insufficient data or highly ambiguous signals prevent reliable determination.' }
          ]
        },
        {
          type: 'note',
          content: 'Confidence reflects probability based on technical analysis, not absolute certainty. Results should be interpreted within the context of available evidence and investigative requirements.'
        }
      ]
    };
  }

  // Section 6: Limitations
  buildLimitations(): ReportSection {
    return {
      title: 'Limitations and Considerations',
      blocks: [
        {
          type: 'text',
          content: 'AI-based forensic analysis has inherent limitations that may affect result accuracy:'
        },
        {
          type: 'list',
          items: [
            'Content that has been heavily compressed, edited, or processed may exhibit altered signal patterns that reduce detection accuracy.',
            'Novel manipulation techniques or recently developed generation methods may not be present in current detection models.',
            'Deliberate adversarial modifications designed to evade detection may succeed in specific cases.',
            'Low-resolution or degraded source material may lack sufficient detail for reliable analysis.',
            'Results reflect the state of detection technology at the time of analysis; ongoing improvements may yield different results for similar content in the future.'
          ]
        },
        {
          type: 'recommendation',
          content: 'This report should be used as one component of a comprehensive verification process. Cross-reference findings with additional forensic methods, source provenance verification, and expert human review when making critical determinations.'
        }
      ]
    };
  }

  // Section 7: Privacy Statement
  buildPrivacyStatement(): ReportSection {
    return {
      title: 'Privacy and Data Processing',
      blocks: [
        {
          type: 'text',
          content: 'Content submitted for analysis was processed using the following privacy safeguards:'
        },
        {
          type: 'list',
          items: [
            'All content was encrypted during transmission and processing using industry-standard encryption protocols.',
            'Submitted content was analyzed in isolated, secure processing environments with no external network access.',
            'No content was retained beyond the duration necessary to complete analysis and generate this report.',
            'Processed content was automatically and permanently deleted from all systems within 24 hours of analysis completion.',
            'No content was used for model training, algorithm improvement, or shared with third parties.',
            'Analysis results are only accessible to the submitting authenticated user and authorized enterprise administrators.'
          ]
        }
      ]
    };
  }

  // Section 8: Disclaimer
  buildDisclaimer(): ReportSection {
    return {
      title: 'Legal Disclaimer',
      blocks: [
        {
          type: 'legal',
          content: `This report was generated by Authenex forensic analysis engine version ${this.result.analysis.engineVersion} and provides AI-assisted authenticity assessment based on automated signal detection and pattern analysis.

The findings presented herein represent probabilistic determinations derived from technical analysis, not definitive factual conclusions. Authenex makes no representations or warranties regarding the absolute accuracy, completeness, or reliability of these findings.

This report is intended for forensic investigation, research, and informational purposes only. It should not be used as the sole or primary basis for legal proceedings, regulatory compliance decisions, financial transactions, medical determinations, or employment actions. Users are strongly encouraged to:

- Conduct independent verification using multiple forensic methodologies
- Obtain expert human review of automated findings
- Verify chain of custody and source provenance through separate means
- Consider the limitations and uncertainty ranges explicitly stated in this report

Authenex and its operators disclaim liability for any decisions, actions, or consequences resulting from reliance on this report. Users assume full responsibility for appropriate interpretation and application of these findings within their specific operational and legal contexts.`
        }
      ]
    };
  }

  // Helper methods
  private formatContentType(type: ContentType): string {
    const map: Record<ContentType, string> = {
      'image': 'Image Forensic Analysis',
      'video': 'Video Forensic Analysis',
      'audio': 'Audio Authenticity Analysis',
      'document': 'Document Verification Analysis',
      'email': 'Email Security Analysis',
      'text': 'Text Authenticity Analysis'
    };
    return map[type];
  }

  private formatVerdict(verdict: Verdict): string {
    const map: Record<Verdict, string> = {
      'authentic': 'Likely Authentic / Human-Generated',
      'ai-generated': 'Likely AI-Generated or Fraudulent',
      'inconclusive': 'Inconclusive / Insufficient Data'
    };
    return map[verdict];
  }

  private formatDate(isoString: string): string {
    return new Date(isoString).toLocaleString(this.config.language, {
      timeZone: this.config.timezone,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  }

  private getTypeSpecificTitle(type: ContentType): string {
    const map: Record<ContentType, string> = {
      'image': 'Image Analysis Results',
      'video': 'Video Analysis Results',
      'audio': 'Audio Analysis Results',
      'document': 'Document Analysis Results',
      'email': 'Email Analysis Results',
      'text': 'Text Analysis Results'
    };
    return map[type];
  }

  private formatCategory(category: string): string {
    const map: Record<string, string> = {
      'visual': 'Visual Artifacts',
      'audio': 'Audio Signal Analysis',
      'structural': 'Structural Analysis',
      'linguistic': 'Linguistic Patterns',
      'metadata': 'Metadata Examination'
    };
    return map[category] || category;
  }

  private groupByCategory(layers: DetectionLayer[]): [string, DetectionLayer[]][] {
    const groups = new Map<string, DetectionLayer[]>();
    layers.forEach(layer => {
      const existing = groups.get(layer.category) || [];
      existing.push(layer);
      groups.set(layer.category, existing);
    });
    return Array.from(groups.entries());
  }

  private formatDetectionLayer(layer: DetectionLayer): FormattedLayer {
    return {
      name: layer.name,
      score: layer.score,
      weight: layer.weight,
      status: layer.status,
      interpretation: this.interpretScore(layer.score, layer.status),
      findings: layer.findings,
      technicalDetails: this.config.includeTechnicalDetails ? layer.technicalDetails : undefined
    };
  }

  private interpretScore(score: number, status: string): string {
    if (score > 80) return 'Strong indicators of manipulation or synthetic generation detected.';
    if (score > 50) return 'Moderate anomalies present; possible manipulation or generation artifacts.';
    if (score > 20) return 'Minor inconsistencies detected; may indicate processing or compression.';
    return 'No significant anomalies detected within this analysis category.';
  }
}
