import jsPDF from 'jspdf';
import sizeOf from 'image-size';
import { AnalysisResult, ReportConfig } from '@/types/report';

export async function generatePDFBuffer(
  result: AnalysisResult,
  config: ReportConfig
): Promise<Buffer> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - (2 * margin);

  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Add subtle "Checks lines" (Grid Pattern)
  doc.setDrawColor(30, 41, 59); // Slightly lighter than background
  doc.setLineWidth(0.1);
  const gridSize = 10; // 10mm grid
  
  // Vertical lines
  for (let x = 0; x <= pageWidth; x += gridSize) {
    doc.line(x, 0, x, pageHeight);
  }
  
  // Horizontal lines
  for (let y = 0; y <= pageHeight; y += gridSize) {
    doc.line(0, y, pageWidth, y);
  }

  // Add Brand Logo with dynamic aspect ratio
  // Use the transparent version of the logo if possible, or the one provided
  const brandLogoUrl = "https://res.cloudinary.com/dyvmqkxok/image/upload/e_background_removal/f_png/v1770664374/WhatsApp_Image_2026-02-10_at_00.39.29_rzzhs5.jpg";
  
  try {
      const response = await fetch(brandLogoUrl);
      if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const base64 = buffer.toString('base64');
          const dataUrl = `data:image/png;base64,${base64}`;
          
          // Calculate aspect ratio
          let logoWidth = 50; // Max width target
          let logoHeight = 20; // Max height target
          
          try {
            const dimensions = sizeOf(buffer);
            if (dimensions.width && dimensions.height) {
                const aspectRatio = dimensions.width / dimensions.height;
                
                // Fit to width first
                logoHeight = logoWidth / aspectRatio;
                
                // If height exceeds max, scale down by height
                if (logoHeight > 25) {
                    logoHeight = 25;
                    logoWidth = logoHeight * aspectRatio;
                }
            }
          } catch (e) {
            console.warn("Could not calculate logo dimensions, using defaults");
          }

          // Add logo at top left (perfectly fitted)
          doc.addImage(dataUrl, 'PNG', margin, 12, logoWidth, logoHeight); 
      } else {
          // Fallback to text if fetch fails
          doc.setTextColor(6, 182, 212);
          doc.setFontSize(24);
          doc.setFont('helvetica', 'bold');
          doc.text('AUTHENEX', margin, 25);
      }
  } catch (error) {
      console.error("Failed to load brand logo:", error);
      // Fallback text
      doc.setTextColor(6, 182, 212);
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('AUTHENEX', margin, 25);
  }

  doc.setDrawColor(16, 185, 129);
  doc.setLineWidth(0.5);
  doc.roundedRect(pageWidth - margin - 40, 12, 40, 12, 2, 2, 'S');
  
  doc.setFontSize(8);
  doc.setTextColor(110, 231, 183);
  doc.text('VERIFIED', pageWidth - margin - 20, 17, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setTextColor(16, 185, 129);
  doc.text('AUTHENEX', pageWidth - margin - 20, 22, { align: 'center' });



  const colWidth = (contentWidth - 5) / 2;
  let currentY = 40;
  let leftX = margin;
  
  doc.setDrawColor(51, 65, 85);
  doc.setLineWidth(0.3);
  doc.roundedRect(leftX, currentY, colWidth, 40, 2, 2, 'S');
  
  // Embed actual image/video thumbnail if available
  if (result.content.imageUrl || result.content.thumbnailUrl) {
    try {
      const imgUrl = result.content.thumbnailUrl || result.content.imageUrl;
      if (imgUrl) {
        // Calculate dimensions to maintain aspect ratio
        const boxWidth = colWidth - 4;
        const boxHeight = 36;
        
        // Fetch image and convert to base64 (server-side compatible)
        try {
          // Fetch the image
          const response = await fetch(imgUrl);
          if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
          }
          
          // Get image as buffer
          const arrayBuffer = await response.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          
          // Convert to base64 data URL
          const base64 = buffer.toString('base64');
          const mimeType = response.headers.get('content-type') || 'image/jpeg';
          const dataUrl = `data:${mimeType};base64,${base64}`;
          
          // Get actual image dimensions from buffer
          let aspectRatio = 16 / 9; // Default fallback
          try {
            const dimensions = sizeOf(buffer);
            if (dimensions.width && dimensions.height) {
              aspectRatio = dimensions.width / dimensions.height;
            }
          } catch (dimError) {
            console.warn('Could not extract image dimensions, using default aspect ratio:', dimError);
          }
          
          let imgWidth = boxWidth;
          let imgHeight = boxHeight;
          
          if (boxWidth / boxHeight > aspectRatio) {
            // Box is wider than image aspect ratio
            imgWidth = boxHeight * aspectRatio;
            imgHeight = boxHeight;
          } else {
            // Box is taller than image aspect ratio
            imgWidth = boxWidth;
            imgHeight = boxWidth / aspectRatio;
          }
          
          // Center the image in the box
          const xOffset = leftX + 2 + (boxWidth - imgWidth) / 2;
          const yOffset = currentY + 2 + (boxHeight - imgHeight) / 2;
          
          // Add image to PDF
          doc.addImage(dataUrl, 'JPEG', xOffset, yOffset, imgWidth, imgHeight);
        } catch (fetchError) {
          console.error('Failed to fetch image for PDF:', fetchError);
          throw fetchError;
        }
      }
    } catch (error) {
      console.error('Image loading error in PDF:', error);
      // Fallback to icon if image fails to load
      doc.setFontSize(30);
      doc.setTextColor(71, 85, 105);
      const contentIcon = result.contentType === 'image' ? 'IMG' : 
                          result.contentType === 'video' ? 'VID' : 
                          result.contentType === 'audio' ? 'AUD' :
                          result.contentType === 'document' ? 'DOC' : 'TXT';
      doc.text(contentIcon, leftX + colWidth / 2, currentY + 25, { align: 'center' });
    }
  } else {
    // Fallback to dynamic content type icon
    doc.setFontSize(30);
    doc.setTextColor(71, 85, 105);
    const contentIcon = result.contentType === 'image' ? 'IMG' : 
                        result.contentType === 'video' ? 'VID' : 
                        result.contentType === 'audio' ? 'AUD' :
                        result.contentType === 'document' ? 'DOC' : 'TXT';
    doc.text(contentIcon, leftX + colWidth / 2, currentY + 25, { align: 'center' });
  }
  
  if (result.content.filename) {
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    const filename = result.content.filename.substring(0, 30);
    doc.text(filename, leftX + colWidth / 2, currentY + 45, { align: 'center' });
  }
  
  currentY += 55;
  
  const getVerdictColor = (verdict: string): [number, number, number] => {
    switch (verdict) {
      case 'ai-generated': return [239, 68, 68];
      case 'authentic': return [16, 185, 129];
      default: return [245, 158, 11];
    }
  };
  
  const verdictColor = getVerdictColor(result.verdict);
  doc.setDrawColor(...verdictColor);
  doc.setLineWidth(1);
  doc.roundedRect(leftX, currentY, colWidth, 50, 3, 3, 'S');
  
  doc.setFontSize(10);
  doc.setTextColor(148, 163, 184);
  doc.text('VERDICT', leftX + colWidth / 2, currentY + 8, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setTextColor(...verdictColor);
  doc.setFont('helvetica', 'bold');
  const verdictText = result.verdict.toUpperCase().replace('-', ' ');
  doc.text(verdictText, leftX + colWidth / 2, currentY + 20, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('AI PROBABILITY', leftX + colWidth / 2, currentY + 30, { align: 'center' });
  
  doc.setFontSize(20);
  doc.setTextColor(6, 182, 212);
  doc.text(`${result.aiPercentage}%`, leftX + colWidth / 2, currentY + 42, { align: 'center' });
  
  currentY += 58;
  
  doc.setFillColor(30, 41, 59);
  doc.roundedRect(leftX, currentY, colWidth, 35, 2, 2, 'F');
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(148, 163, 184);
  doc.text('FILE DETAILS', leftX + 5, currentY + 7);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  
  const details = [
    `Type: ${result.content.fileType || 'N/A'}`,
    `Size: ${result.content.fileSize || 'N/A'}`,
    `Duration: ${result.analysis.duration}`
  ];
  
  details.forEach((detail, idx) => {
    doc.text(detail, leftX + 5, currentY + 15 + (idx * 6));
  });
  
  // Content Preview (if available)
  doc.setFontSize(6);
  doc.setTextColor(100, 116, 139);
  doc.text(`Report ID: ${result.reportId}`, leftX, currentY + 39);
  doc.text(`${new Date(result.generatedAt).toLocaleString()}`, leftX, currentY + 42);

  currentY += 50;
  if (result.content.previewSnippet) {
    doc.setFillColor(15, 23, 42);
    doc.roundedRect(leftX, currentY, colWidth, 25, 2, 2, 'F');
    
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 116, 139);
    doc.text('CONTENT PREVIEW', leftX + 5, currentY + 7);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(148, 163, 184);
    const preview = result.content.previewSnippet.substring(0, 100);
    const previewLines = doc.splitTextToSize(preview, colWidth - 10);
    doc.text(previewLines, leftX + 5, currentY + 13);
  }

  // Analysis Metadata Section - Moved to Left Column
  currentY += 35; // Add spacing after previous section
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(leftX, currentY, colWidth - 5, 30, 2, 2, 'F');
  
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(100, 116, 139);
  doc.text('ANALYSIS METADATA', leftX + 3, currentY + 7);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6);
  doc.setTextColor(148, 163, 184);
  
  const metadata = [
    `Scan Date: ${new Date(result.generatedAt).toLocaleDateString()}`,
    `Analysis Method: Deep Learning + Forensic`,
    `AI Probability: ${result.aiPercentage}%`,
    `Processing Time: ${result.analysis.duration}`
  ];
  
  metadata.forEach((item, idx) => {
    doc.text(item, leftX + 3, currentY + 14 + (idx * 5));
  });

  let rightX = margin + colWidth + 5;
  currentY = 40;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(6, 182, 212);
  doc.text('EXECUTIVE SUMMARY', rightX, currentY);
  
  currentY += 8;
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(203, 213, 225);
  const summary = result.summary.substring(0, 300);
  const summaryLines = doc.splitTextToSize(summary, colWidth - 5);
  doc.text(summaryLines, rightX, currentY);
  
  currentY += summaryLines.length * 4 + 5;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(6, 182, 212);
  doc.text('DETECTION LAYERS', rightX, currentY);
  
  currentY += 8;
  
  const layers = result.detectionResults.slice(0, 5);
  layers.forEach((layer) => {
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(203, 213, 225);
    doc.text(layer.name, rightX, currentY);
    
    doc.setTextColor(6, 182, 212);
    doc.text(`${layer.score}%`, rightX + colWidth - 15, currentY);
    
    currentY += 5;
    
    const barColor: [number, number, number] = layer.score > 70 ? [239, 68, 68] : layer.score > 40 ? [245, 158, 11] : [16, 185, 129];
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(rightX, currentY, colWidth - 5, 2, 1, 1, 'F');
    doc.setFillColor(...barColor);
    doc.roundedRect(rightX, currentY, ((colWidth - 5) * layer.score) / 100, 2, 1, 1, 'F');
    
    currentY += 5;
    
    if (layer.findings && layer.findings.length > 0) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6);
      doc.setTextColor(100, 116, 139);
      const finding = layer.findings[0].substring(0, 60) + '...';
      doc.text(`- ${finding}`, rightX + 2, currentY);
      currentY += 4;
    }
    
    currentY += 4;
  });

  currentY += 5;
  const getRiskColor = (risk: string): [number, number, number] => {
    switch (risk) {
      case 'critical': return [220, 38, 38];
      case 'high': return [239, 68, 68];
      case 'medium': return [245, 158, 11];
      default: return [16, 185, 129];
    }
  };
  
  const riskColor = getRiskColor(result.riskLevel);
  doc.setDrawColor(...riskColor);
  doc.setLineWidth(0.5);
  doc.roundedRect(rightX, currentY, colWidth - 5, 15, 2, 2, 'S');
  
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('Risk Level:', rightX + 5, currentY + 6);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...riskColor);
  doc.text(result.riskLevel.toUpperCase(), rightX + 5, currentY + 12);
  
  currentY += 20;
  
  doc.setFillColor(30, 41, 59);
  doc.roundedRect(rightX, currentY, colWidth - 5, 20, 2, 2, 'F');
  
  const stats = [
    { label: 'Engine', value: result.analysis.engineVersion.substring(0, 15) },
    { label: 'Signals', value: result.analysis.signalsDetected.toString() },
    { label: 'Content', value: result.contentType.toUpperCase() }
  ];
  
  const statWidth = (colWidth - 5) / 3;
  stats.forEach((stat, idx) => {
    doc.setFontSize(6);
    doc.setTextColor(100, 116, 139);
    doc.text(stat.label, rightX + (idx * statWidth) + 3, currentY + 7);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(203, 213, 225);
    doc.text(stat.value, rightX + (idx * statWidth) + 3, currentY + 14);
  });



  // Footer with updated disclaimer
  doc.setFontSize(6);
  doc.setTextColor(71, 85, 105);
  doc.text('Authenex can make mistakes. Verify critical information independently.', pageWidth / 2, pageHeight - 20, { align: 'center' });
  
  doc.setFontSize(5);
  doc.setTextColor(51, 65, 85);
  const legal = 'This report is generated by Authenex AI Forensic Platform. Results are probabilistic based on advanced AI detection algorithms. For high-stakes decisions, consult with digital forensics experts.';
  const legalLines = doc.splitTextToSize(legal, contentWidth);
  doc.text(legalLines, pageWidth / 2, pageHeight - 15, { align: 'center' });

  const pdfBlob = doc.output('arraybuffer');
  return Buffer.from(pdfBlob);
}
