'use client';

import React from 'react';
import DownloadReportButton from '@/components/DownloadReportButton';
import { sampleAnalysisResult, sampleAuthenticResult } from '@/lib/report/sample-data';

export default function TestReportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              PDF Report Generator Test
            </h1>
            <p className="text-gray-600">
              Test the PDF report generation with sample analysis data
            </p>
          </div>

          {/* Test Cases */}
          <div className="space-y-8">
            {/* AI-Generated Detection Test */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Test Case 1: AI-Generated Detection
                  </h2>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p><strong>Report ID:</strong> {sampleAnalysisResult.reportId}</p>
                    <p><strong>Verdict:</strong> <span className="text-red-600 font-semibold">AI-Generated</span></p>
                    <p><strong>Confidence:</strong> {sampleAnalysisResult.confidence.score}%</p>
                    <p><strong>Risk Level:</strong> <span className="text-red-600 uppercase font-semibold">{sampleAnalysisResult.riskLevel}</span></p>
                    <p><strong>Signals Detected:</strong> {sampleAnalysisResult.analysis.signalsDetected}</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      {sampleAnalysisResult.summary.substring(0, 200)}...
                    </p>
                  </div>
                </div>
              </div>
              
              <DownloadReportButton 
                result={sampleAnalysisResult}
                config={{
                  language: 'en-US',
                  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                  includeTechnicalDetails: true,
                  branding: {
                    companyName: 'Authenex',
                    footer: 'Confidential - For Authorized Use Only'
                  }
                }}
                className="w-full justify-center"
              >
                Download AI-Generated Detection Report
              </DownloadReportButton>
            </div>

            {/* Authentic Content Test */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Test Case 2: Authentic Content
                  </h2>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p><strong>Report ID:</strong> {sampleAuthenticResult.reportId}</p>
                    <p><strong>Verdict:</strong> <span className="text-green-600 font-semibold">Authentic</span></p>
                    <p><strong>Confidence:</strong> {sampleAuthenticResult.confidence.score}%</p>
                    <p><strong>Risk Level:</strong> <span className="text-green-600 uppercase font-semibold">{sampleAuthenticResult.riskLevel}</span></p>
                    <p><strong>Signals Detected:</strong> {sampleAuthenticResult.analysis.signalsDetected}</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      {sampleAuthenticResult.summary.substring(0, 200)}...
                    </p>
                  </div>
                </div>
              </div>
              
              <DownloadReportButton 
                result={sampleAuthenticResult}
                config={{
                  language: 'en-US',
                  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                  includeTechnicalDetails: false,
                  branding: {
                    companyName: 'Authenex',
                    footer: 'Confidential - For Authorized Use Only'
                  }
                }}
                className="w-full justify-center"
              >
                Download Authentic Content Report
              </DownloadReportButton>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              What to Expect
            </h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Professional PDF with color-coded risk indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Comprehensive sections including executive summary, detection results, and legal disclaimer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Automatic page numbering and proper formatting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Test Case 1 includes technical details; Test Case 2 excludes them</span>
              </li>
            </ul>
          </div>

          {/* Technical Info */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-600">
              <strong>API Endpoint:</strong> POST /api/report/generate<br />
              <strong>Generator:</strong> PDFKit with custom styling<br />
              <strong>Documentation:</strong> See src/lib/report/README.md
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
