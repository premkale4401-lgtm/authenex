# PDF Report Generation - Usage Guide

## Overview

The PDF report generation system creates comprehensive, professional forensic analysis reports from `AnalysisResult` data. The system includes:

- **Type-safe TypeScript implementation**
- **Professional PDF styling with color-coded risk indicators**
- **Automatic page management and formatting**
- **Client-side download functionality**
- **RESTful API endpoint for server-side generation**

## Quick Start

### 1. Basic Usage with React Component

```tsx
import DownloadReportButton from "@/components/DownloadReportButton";
import { AnalysisResult } from "@/types/report";

function MyResultsPage({ analysisResult }: { analysisResult: AnalysisResult }) {
  return (
    <div>
      <h1>Analysis Complete</h1>

      <DownloadReportButton
        result={analysisResult}
        config={{
          language: "en-US",
          timezone: "America/New_York",
          includeTechnicalDetails: true,
        }}
      >
        Download Full Report
      </DownloadReportButton>
    </div>
  );
}
```

### 2. Programmatic PDF Generation

```typescript
import { generatePDFReport } from "@/lib/report/client";
import { AnalysisResult, ReportConfig } from "@/types/report";

async function downloadReport(result: AnalysisResult) {
  try {
    await generatePDFReport(result, {
      language: "en-US",
      timezone: "UTC",
      includeTechnicalDetails: true,
      branding: {
        companyName: "Your Company",
        footer: "Confidential - Internal Use Only",
      },
    });

    console.log("Report downloaded successfully");
  } catch (error) {
    console.error("Failed to generate report:", error);
  }
}
```

### 3. Server-Side API Usage

```typescript
// POST /api/report/generate
const response = await fetch("/api/report/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    result: analysisResult,
    config: {
      language: "en-US",
      timezone: "UTC",
      includeTechnicalDetails: true,
    },
  }),
});

const blob = await response.blob();
// Handle the PDF blob...
```

## Configuration Options

### ReportConfig Interface

```typescript
interface ReportConfig {
  language: string; // e.g., 'en-US', 'fr-FR'
  timezone: string; // IANA timezone, e.g., 'America/New_York'
  includeTechnicalDetails: boolean;
  includeVisualEvidence?: boolean;
  branding?: {
    logo?: string; // Path to logo image
    companyName?: string;
    footer?: string;
  };
}
```

## Report Structure

The generated PDF includes the following sections:

1. **Header** - Report ID, generation date, engine version
2. **Executive Summary** - Verdict, confidence score, key metrics
3. **Content Details** - File information, hash, preview
4. **Detection Results** - Detailed analysis by category
5. **Confidence Guide** - Score interpretation
6. **Limitations** - Analysis limitations and considerations
7. **Privacy Statement** - Data processing information
8. **Legal Disclaimer** - Terms and liability

## Testing

Use the provided sample data for testing:

```typescript
import {
  sampleAnalysisResult,
  sampleAuthenticResult,
} from "@/lib/report/sample-data";
import { generatePDFReport } from "@/lib/report/client";

// Test with AI-generated detection
await generatePDFReport(sampleAnalysisResult);

// Test with authentic content
await generatePDFReport(sampleAuthenticResult);
```

## Styling Features

- **Color-coded risk levels**: Visual indicators based on risk assessment
- **Professional typography**: Clean, readable fonts with proper hierarchy
- **Responsive layout**: Automatic page breaks and content flow
- **Visual data presentation**: Charts, graphs, and formatted tables
- **Branded headers/footers**: Customizable company branding

## Performance Optimization

The PDF generator is optimized for:

- **Fast generation**: < 1 second for typical reports
- **Small file sizes**: Efficient compression and layout
- **Memory efficiency**: Streaming output, no large buffers
- **Concurrent requests**: API can handle multiple simultaneous generations

## Error Handling

```typescript
try {
  await generatePDFReport(result);
} catch (error) {
  if (error.message.includes("Missing required")) {
    // Handle validation error
  } else if (error.message.includes("Failed to generate")) {
    // Handle generation error
  } else {
    // Handle network or other errors
  }
}
```

## Integration with Existing Results

If you have an existing results page component, integrate the download button:

```tsx
// In your result page (e.g., app/result/[id]/page.tsx)
import DownloadReportButton from "@/components/DownloadReportButton";

export default function ResultPage({ params }) {
  const result = await getAnalysisResult(params.id);

  return (
    <div className="result-container">
      {/* Your existing result display */}

      <div className="actions">
        <DownloadReportButton result={result} className="mt-4" />
      </div>
    </div>
  );
}
```

## Dependencies

Required packages (already installed):

- `pdfkit` - PDF generation library
- `@types/pdfkit` - TypeScript definitions

## File Structure

```
src/
├── types/
│   └── report.ts                    # Type definitions
├── lib/
│   └── report/
│       ├── content/
│       │   └── sections.ts          # Content builder
│       ├── pdf/
│       │   └── generator.ts         # PDF generator
│       ├── client.ts                # Client utilities
│       └── sample-data.ts           # Test data
├── app/
│   └── api/
│       └── report/
│           └── generate/
│               └── route.ts         # API endpoint
└── components/
    └── DownloadReportButton.tsx    # UI component
```

## Troubleshooting

### Issue: "Cannot find module '@/types/report'"

**Solution**: Ensure your `tsconfig.json` has the `@/*` path mapping configured.

### Issue: PDF generation fails

**Solution**: Check that all required fields in `AnalysisResult` are populated, especially `reportId` and `generatedAt`.

### Issue: Fonts not rendering correctly

**Solution**: PDFKit uses built-in fonts. For custom fonts, you'll need to register them separately.

## Next Steps

- Customize the branding in `ReportConfig`
- Add your logo to the header section
- Integrate with your existing result pages
- Test with your actual analysis data
- Customize footer text as needed
