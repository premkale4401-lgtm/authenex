
import React, { useState, useEffect } from 'react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-28 right-6 z-[110] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        title="Back to Top"
        aria-label="Scroll to top"
        className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:border-sky-400 hover:text-white transition-all duration-300 active:scale-90 overflow-hidden"
      >
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-sky-500/10 group-hover:bg-sky-500/20 transition-colors"></div>
        
        {/* Scanning Line Effect inside button */}
        <div className="absolute top-0 left-0 w-full h-px bg-sky-400/50 -translate-y-full group-hover:animate-[scan_1.5s_linear_infinite]"></div>

        {/* Arrow Icon */}
        <i className="fa-solid fa-chevron-up text-lg z-10 transition-transform group-hover:-translate-y-1"></i>

        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-500/40 group-hover:animate-spin"></div>
      </button>
    </div>
  );
};
