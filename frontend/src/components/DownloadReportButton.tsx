'use client';

import React, { useState } from 'react';
import { generatePDFReport } from '@/lib/report/client';
import { AnalysisResult, ReportConfig } from '@/types/report';

interface DownloadReportButtonProps {
  result: AnalysisResult;
  config?: Partial<ReportConfig>;
  className?: string;
  children?: React.ReactNode;
}

export default function DownloadReportButton({ 
  result, 
  config, 
  className = '',
  children 
}: DownloadReportButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      setError(null);
      
      await generatePDFReport(result, config);
      
    } catch (err) {
      console.error('Failed to generate report:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate report');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="inline-block">
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`
          inline-flex items-center gap-2 px-6 py-3 
          bg-blue-600 hover:bg-blue-700 
          disabled:bg-gray-400 disabled:cursor-not-allowed
          text-white font-medium rounded-lg
          transition-all duration-200
          shadow-md hover:shadow-lg
          ${className}
        `}
      >
        {isGenerating ? (
          <>
            <svg 
              className="animate-spin h-5 w-5" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Generating...</span>
          </>
        ) : (
          <>
            <svg 
              className="h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            <span>{children || 'Download Report'}</span>
          </>
        )}
      </button>
      
      {error && (
        <div className="mt-2 text-sm text-red-600">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}
