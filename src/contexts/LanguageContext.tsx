
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define available languages
export type Language = "es" | "ca" | "gl" | "eu" | "en" | "fr";

// Language names for display
export const languageNames: Record<Language, string> = {
  es: "Español",
  ca: "Català",
  gl: "Galego",
  eu: "Euskara",
  en: "English",
  fr: "Français"
};

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

// Create context with default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es"); // Default to Spanish

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
