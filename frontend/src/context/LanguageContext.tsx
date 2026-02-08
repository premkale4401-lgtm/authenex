"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "./translations";

type Language = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: { code: Language; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LANGUAGES: { code: Language; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from local storage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("authenex_language") as Language;
    if (storedLang && translations[storedLang]) {
      setLanguage(storedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("authenex_language", lang);
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = translations[language];
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key as keyof typeof value];
      } else {
        // Fallback to English
        let fallback: any = translations['en'];
        let found = true;
        for (const k of keys) {
            if (fallback && typeof fallback === 'object' && k in fallback) {
                fallback = fallback[k as keyof typeof fallback];
            } else {
                found = false;
                break;
            }
        }
        return found ? fallback : path;
      }
    }
    
    if (typeof value === 'string') return value;
    return path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
