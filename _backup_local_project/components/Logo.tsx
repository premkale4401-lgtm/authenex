
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = false, onClick }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const iconSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-3xl',
    xl: 'text-5xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`} onClick={onClick}>
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center group`}>
        <div className="absolute inset-0 border-2 border-transparent border-t-sky-500/40 border-b-indigo-500/40 rounded-xl animate-spin [animation-duration:8s]"></div>
        <div className="absolute inset-1 border border-transparent border-l-sky-400/30 border-r-indigo-400/30 rounded-lg animate-spin [animation-direction:reverse] [animation-duration:5s]"></div>
        
        <div className="absolute inset-1.5 bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-800 rounded-lg shadow-xl shadow-sky-900/40 flex items-center justify-center overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
          <i className={`fa-solid fa-fingerprint text-white ${iconSizes[size]} z-10 transition-transform group-hover:scale-110 duration-500`}></i>
          <div className="absolute inset-0 bg-sky-400/10 animate-pulse"></div>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-bold font-orbitron tracking-tighter leading-tight text-white group-hover:text-sky-400 transition-colors">
            AUTHENEX
          </h1>
          <p className="text-[8px] sm:text-[10px] font-orbitron text-sky-400 tracking-widest uppercase opacity-70">
            Forensic Node v2.5
          </p>
        </div>
      )}
    </div>
  );
};
