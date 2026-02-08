
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 pb-12 pt-12 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo size="sm" showText={true} />
        </div>

        <p className="text-slate-500 text-xs font-orbitron uppercase tracking-[0.3em] mb-10 text-center max-w-md leading-loose">
          Global standard in digital forensic authentication and neural deconstruction.
        </p>

        <div className="flex items-center gap-8 mb-12">
          <SocialLink 
            href="https://www.linkedin.com/in/juned-karji-713397268/" 
            icon="fa-linkedin-in" 
            label="LinkedIn"
          />
          <SocialLink 
            href="https://github.com/githubjuned/authenex" 
            icon="fa-github" 
            label="GitHub"
          />
          <SocialLink 
            href="mailto:kj1201577@gmail.com" 
            icon="fa-envelope" 
            label="Email"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-[10px] font-orbitron text-slate-600 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Authenex Lab</span>
          <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-800"></span>
          <span className="hover:text-sky-400 transition-colors cursor-pointer">Privacy Protocol</span>
          <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-800"></span>
          <span className="hover:text-sky-400 transition-colors cursor-pointer">Service Terms</span>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: string; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group flex flex-col items-center gap-3 transition-all"
    aria-label={label}
  >
    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:border-sky-500/50 group-hover:bg-sky-500/5 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300">
      <i className={`fa-brands ${icon} text-xl`}></i>
      {icon === 'fa-envelope' && <i className="fa-solid fa-envelope text-xl"></i>}
    </div>
    <span className="text-[8px] font-orbitron font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
  </a>
);
