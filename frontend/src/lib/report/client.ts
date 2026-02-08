import { AnalysisResult, ReportConfig } from '@/types/report';

/**
 * Generate and download a PDF report for analysis results
 */
export async function generatePDFReport(
  result: AnalysisResult,
  config?: Partial<ReportConfig>
): Promise<void> {
  try {
    const response = await fetch('/api/report/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ result, config }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.details || 'Failed to generate PDF report');
    }

    // Get the PDF blob
    const blob = await response.blob();
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Authenex_Report_${result.reportId}_${new Date().toISOString().split('T')[0]}.pdf`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
  } catch (error) {
    console.error('Error downloading PDF:', error);
    throw error;
  }
}

/**
 * Generate PDF report preview (returns blob URL for display)
 */
export async function generatePDFPreview(
  result: AnalysisResult,
  config?: Partial<ReportConfig>
): Promise<string> {
  try {
    const response = await fetch('/api/report/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ result, config }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.details || 'Failed to generate PDF preview');
    }

    // Get the PDF blob
    const blob = await response.blob();
    
    // Return blob URL
    return window.URL.createObjectURL(blob);
    
  } catch (error) {
    console.error('Error generating PDF preview:', error);
    throw error;
  }
}
