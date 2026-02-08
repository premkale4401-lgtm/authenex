import { NextRequest, NextResponse } from 'next/server';
import { generatePDFBuffer } from '@/lib/report/pdf/generate';
import { AnalysisResult, ReportConfig } from '@/types/report';

export async function POST(request: NextRequest) {
  try {
    const { result, config } = await request.json() as { 
      result: AnalysisResult; 
      config?: Partial<ReportConfig> 
    };

    // Validate input
    if (!result || !result.reportId) {
      return NextResponse.json(
        { error: 'Invalid request: missing result data' },
        { status: 400 }
      );
    }

    // Default config
    const defaultConfig: ReportConfig = {
      language: 'en-US',
      timezone: 'UTC',
      includeTechnicalDetails: true,
      ...config
    };

    // Return PDF as downloadable file
    const filename = `Authenex_Report_${result.reportId}_${new Date().toISOString().split('T')[0]}.pdf`;

    // Generate PDF
    console.log(`Generating PDF for report: ${result.reportId}`);
    try {
      const pdfBuffer = await generatePDFBuffer(result, defaultConfig);
      console.log('PDF generation successful, buffer size:', pdfBuffer.length);

      // Convert Buffer to Uint8Array for NextResponse compatibility
      const uint8Array = new Uint8Array(pdfBuffer);

      return new NextResponse(uint8Array, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Content-Length': uint8Array.length.toString(),
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
    } catch (genError) {
      console.error('Core PDF Generation Error:', genError);
      throw genError;
    }

  } catch (error) {
    console.error('PDF generation error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    
    return NextResponse.json(
      { 
        error: 'Failed to generate PDF',
        details: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
