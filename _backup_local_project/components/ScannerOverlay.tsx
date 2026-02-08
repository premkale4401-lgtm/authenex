
import React from 'react';

export const ScannerOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl border-2 border-sky-500/30">
      <div className="scanner-line"></div>
      <div className="absolute inset-0 bg-sky-500/5 animate-pulse"></div>
      <div className="absolute top-4 left-4 font-orbitron text-[10px] text-sky-400 tracking-widest uppercase">
        System Scanning...
      </div>
      <div className="absolute bottom-4 right-4 font-orbitron text-[10px] text-sky-400 tracking-widest">
        Neural Buffer: Active
      </div>
    </div>
  );
};
