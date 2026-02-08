"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the analysis result
interface AnalysisResult {
    verdict: string;
    confidence: number;
    aiPercentage: number;
    humanPercentage: number;
    findings: any[];
    explanation: string;
    modality: string;
}

interface AnalysisContextType {
    currentAnalysis: AnalysisResult | null;
    setAnalysis: (result: AnalysisResult | null) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: ReactNode }) {
    const [currentAnalysis, setCurrentAnalysis] = useState<AnalysisResult | null>(null);

    // Load from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("authenex_analysis_context");
        if (stored) {
            try {
                setCurrentAnalysis(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse stored analysis context", e);
            }
        }
    }, []);

    const setAnalysis = (result: AnalysisResult | null) => {
        setCurrentAnalysis(result);
        if (result) {
            localStorage.setItem("authenex_analysis_context", JSON.stringify(result));
        } else {
            localStorage.removeItem("authenex_analysis_context");
        }
    };

    return (
        <AnalysisContext.Provider value={{ currentAnalysis, setAnalysis }}>
            {children}
        </AnalysisContext.Provider>
    );
}

export function useAnalysis() {
    const context = useContext(AnalysisContext);
    if (context === undefined) {
        throw new Error("useAnalysis must be used within an AnalysisProvider");
    }
    return context;
}
