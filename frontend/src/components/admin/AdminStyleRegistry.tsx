"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import React from 'react';

export default function AdminStyleRegistry({ children }: { children: React.ReactNode }) {
  // Using styled-jsx in a client component works. 
  // We wrap the children with the styles.
  return (
    <>
      <style jsx global>{`
        :root {
            --color-bg-primary: #020617;
            /* ... kept the same ... */
            --color-info: #3b82f6;
        }

        /* Glassmorphism */
        .glass-panel {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid var(--color-border);
        }

        .glass-card {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(14, 165, 233, 0.1);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-card:hover {
            transform: translateY(-2px);
            border-color: rgba(14, 165, 233, 0.3);
            box-shadow: 0 10px 40px -10px rgba(14, 165, 233, 0.2);
        }
        
        /* Grid Pattern */
        .grid-pattern {
            background-image: 
                linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
        }

        /* Animations */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes countUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes status-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .animate-fade-in-up {
            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
        }

        .animate-count {
            animation: countUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }

        /* Status Indicators */
        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
            animation: status-pulse 2s infinite;
        }

        .status-operational {
            background-color: var(--color-success);
            box-shadow: 0 0 10px var(--color-success);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: var(--color-bg-secondary);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--color-text-muted);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--color-accent-primary);
        }
      `}</style>
      {children}
    </>
  );
}
