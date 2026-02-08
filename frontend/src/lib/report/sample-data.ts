import { AnalysisResult } from '@/types/report';

/**
 * Sample analysis result data for testing PDF generation
 */
export const sampleAnalysisResult: AnalysisResult = {
  reportId: 'AR-2026-02-08-001234',
  generatedAt: new Date().toISOString(),
  contentType: 'image',
  verdict: 'ai-generated',
  confidence: {
    score: 87,
    breakdown: {
      'Visual Artifacts': 89,
      'Metadata Analysis': 92,
      'Structural Analysis': 81,
      'Pattern Recognition': 85
    }
  },
  riskLevel: 'high',
  summary: 'Comprehensive analysis indicates strong probability of AI-generated content. Multiple detection layers identified characteristic signatures consistent with synthetic image generation, including pixel-level anomalies, metadata inconsistencies, and structural patterns typical of GAN-based systems. The confidence score of 87% reflects substantial agreement across independent detection methodologies.',
  
  content: {
    filename: 'suspicious_portrait.jpg',
    fileType: 'image/jpeg',
    fileSize: '2.4 MB',
    contentLength: 2516582,
    hash: 'a7f8d9e2b3c4567890abcdef1234567890abcdef1234567890abcdef12345678',
    previewSnippet: 'High-resolution portrait photograph depicting a photorealistic human face with subtle inconsistencies in lighting and texture patterns.'
  },
  
  analysis: {
    engineVersion: 'Authenex v2.5.1 Pro',
    duration: '3.2 seconds',
    signalsDetected: 47
  },
  
  detectionResults: [
    // Visual Artifacts
    {
      category: 'visual',
      name: 'Pixel-Level Anomaly Detection',
      score: 89,
      weight: 0.3,
      status: 'fail',
      findings: [
        'Detected irregular pixel interpolation patterns in facial region',
        'Statistical noise distribution deviates from natural camera sensor characteristics',
        'Micro-inconsistencies in texture gradients suggest algorithmic generation'
      ],
      technicalDetails: 'DCT coefficient analysis revealed non-standard frequency domain patterns (χ² = 24.7, p < 0.001)'
    },
    {
      category: 'visual',
      name: 'Frequency Domain Analysis',
      score: 85,
      weight: 0.25,
      status: 'fail',
      findings: [
        'FFT spectrum shows characteristic GAN fingerprints',
        'High-frequency components exhibit synthetic regularities',
        'Wavelet decomposition reveals artificial boundary artifacts'
      ]
    },
    {
      category: 'visual',
      name: 'Color Space Inconsistencies',
      score: 78,
      weight: 0.2,
      status: 'warning',
      findings: [
        'RGB channel correlation patterns inconsistent with natural photography',
        'Color histogram shows characteristic bimodal distribution of AI generators'
      ]
    },
    
    // Metadata Analysis  
    {
      category: 'metadata',
      name: 'EXIF Data Integrity',
      score: 92,
      weight: 0.25,
      status: 'fail',
      findings: [
        'Camera model metadata missing critical fields',
        'Timestamp inconsistencies between creation and modification dates',
        'GPS coordinates stripped, suggesting deliberate metadata sanitization',
        'Software tag indicates post-processing with tools commonly used for synthetic media'
      ],
      technicalDetails: 'EXIF analysis: Missing MakerNote, DateTimeOriginal shows impossible value sequence'
    },
    {
      category: 'metadata',
      name: 'File Structure Analysis',
      score: 81,
      weight: 0.15,
      status: 'fail',
      findings: [
        'JPEG compression markers inconsistent with claimed camera model',
        'Quantization tables match synthetic generation pipelines',
        'Huffman encoding pattern deviates from standard camera firmware'
      ]
    },
    
    // Structural Analysis
    {
      category: 'structural',
      name: 'Error Level Analysis (ELA)',
      score: 76,
      weight: 0.2,
      status: 'warning',
      findings: [
        'Uniform error distribution across facial features suggests single-pass generation',
        'Background compression artifacts inconsistent with foreground subject'
      ]
    },
    {
      category: 'structural',
      name: 'Noise Pattern Recognition',
      score: 84,
      weight: 0.25,
      status: 'fail',
      findings: [
        'Sensor noise pattern absent or artificially uniform',
        'No chromatic aberration typical of optical lenses',
        'Image noise lacks statistical properties of camera sensor output'
      ]
    },
    
    // AI Model Detection
    {
      category: 'structural',
      name: 'GAN Fingerprint Detection',
      score: 91,
      weight: 0.3,
      status: 'fail',
      findings: [
        'Detected fingerprints consistent with StyleGAN2 architecture',
        'Upsampling artifacts characteristic of neural network generators',
        'Checkerboard patterns in high-frequency components indicate convolutional generation'
      ],
      technicalDetails: 'CNN-based classifier confidence: 94.2% StyleGAN2/3 family'
    }
  ]
};

/**
 * Sample for authentic content
 */
export const sampleAuthenticResult: AnalysisResult = {
  reportId: 'AR-2026-02-08-001235',
  generatedAt: new Date().toISOString(),
  contentType: 'image',
  verdict: 'authentic',
  confidence: {
    score: 92,
    breakdown: {
      'Visual Artifacts': 8,
      'Metadata Analysis': 5,
      'Structural Analysis': 12,
      'Pattern Recognition': 9
    }
  },
  riskLevel: 'low',
  summary: 'Analysis indicates high probability of authentic, camera-captured content. All detection layers show characteristics consistent with genuine photography. Metadata validates claimed capture device, and pixel-level analysis reveals natural sensor noise patterns and optical artifacts expected from the specified camera model.',
  
  content: {
    filename: 'vacation_photo_2024.jpg',
    fileType: 'image/jpeg',
    fileSize: '3.8 MB',
    contentLength: 3985421,
    hash: 'b8e9c1d2a3f4567890bcdef123456789abcdef1234567890abcdef1234567890',
    previewSnippet: 'Landscape photograph showing natural scenery with consistent lighting and atmospheric perspective.'
  },
  
  analysis: {
    engineVersion: 'Authenex v2.5.1 Pro',
    duration: '2.8 seconds',
    signalsDetected: 52
  },
  
  detectionResults: [
    {
      category: 'visual',
      name: 'Pixel-Level Anomaly Detection',
      score: 8,
      weight: 0.3,
      status: 'pass',
      findings: [
        'Natural pixel noise distribution consistent with Canon EOS sensor',
        'No irregular interpolation patterns detected',
        'Texture gradients follow natural photographic characteristics'
      ]
    },
    {
      category: 'metadata',
      name: 'EXIF Data Integrity',
      score: 5,
      weight: 0.25,
      status: 'pass',
      findings: [
        'Complete and consistent EXIF metadata present',
        'Camera serial number validates to genuine Canon device',
        'Timestamp sequence logical and consistent',
        'GPS coordinates match claimed location'
      ]
    },
    {
      category: 'structural',
      name: 'Sensor Noise Analysis',
      score: 6,
      weight: 0.25,
      status: 'pass',
      findings: [
        'Noise pattern matches Canon CMOS sensor characteristics',
        'Natural chromatic aberration present',
        'Hot pixel distribution consistent with camera age and usage'
      ]
    }
  ]
};
