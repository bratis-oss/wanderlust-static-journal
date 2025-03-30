
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

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

// Define translations interface
export interface Translations {
  [key: string]: {
    [language in Language]?: string;
  };
}

// Common translations for the entire site
export const translations: Translations = {
  // Navigation items
  "home": {
    es: "Inicio",
    ca: "Inici",
    gl: "Inicio",
    eu: "Hasiera",
    en: "Home",
    fr: "Accueil"
  },
  "destinations": {
    es: "Destinos",
    ca: "Destinacions",
    gl: "Destinos",
    eu: "Helmugak",
    en: "Destinations",
    fr: "Destinations"
  },
  "getaways": {
    es: "Escapadas",
    ca: "Escapades",
    gl: "Escapadas",
    eu: "Ihesaldiak",
    en: "Getaways",
    fr: "Escapades"
  },
  "travel-tips": {
    es: "Consejos de Viaje",
    ca: "Consells de Viatge",
    gl: "Consellos de Viaxe",
    eu: "Bidaia Aholkuak",
    en: "Travel Tips",
    fr: "Conseils de Voyage"
  },
  "nomad-life": {
    es: "Vida Nómada",
    ca: "Vida Nòmada",
    gl: "Vida Nómade",
    eu: "Bizitza Nomada",
    en: "Nomad Life",
    fr: "Vie Nomade"
  },
  "about": {
    es: "Sobre NomadGo",
    ca: "Sobre NomadGo",
    gl: "Sobre NomadGo",
    eu: "NomadGo-ri Buruz",
    en: "About NomadGo",
    fr: "À propos de NomadGo"
  },
  // Hero section
  "hero-title": {
    es: "Explora el mundo a tu ritmo",
    ca: "Explora el món al teu ritme",
    gl: "Explora o mundo ao teu ritmo",
    eu: "Esploratu mundua zure erritmora",
    en: "Explore the world at your own pace",
    fr: "Explorez le monde à votre rythme"
  },
  "hero-subtitle": {
    es: "Desde escapadas de fin de semana hasta una vida nómada. ¡Bienvenido a NomadGo!",
    ca: "Des d'escapades de cap de setmana fins a una vida nòmada. Benvingut a NomadGo!",
    gl: "Desde escapadas de fin de semana ata unha vida nómade. Benvido a NomadGo!",
    eu: "Asteburuko ihesaldietatik bizitza nomadara. Ongi etorri NomadGo-ra!",
    en: "From weekend getaways to a nomadic lifestyle. Welcome to NomadGo!",
    fr: "Des escapades de week-end à un style de vie nomade. Bienvenue à NomadGo!"
  },
  "explore-destinations": {
    es: "Explorar Destinos",
    ca: "Explorar Destinacions",
    gl: "Explorar Destinos",
    eu: "Helmugak Esploratu",
    en: "Explore Destinations",
    fr: "Explorer les Destinations"
  },
  // Common buttons and sections
  "all-destinations": {
    es: "Todos los Destinos",
    ca: "Totes les Destinacions",
    gl: "Todos os Destinos",
    eu: "Helmuga Guztiak",
    en: "All Destinations",
    fr: "Toutes les Destinations"
  },
  "filter": {
    es: "Filtrar",
    ca: "Filtrar",
    gl: "Filtrar",
    eu: "Iragazi",
    en: "Filter",
    fr: "Filtrer"
  },
  "search": {
    es: "Buscar",
    ca: "Cercar",
    gl: "Buscar",
    eu: "Bilatu",
    en: "Search",
    fr: "Rechercher"
  },
  "view-all": {
    es: "Ver Todo",
    ca: "Veure Tot",
    gl: "Ver Todo",
    eu: "Dena Ikusi",
    en: "View All",
    fr: "Voir Tout"
  },
  "subscribe": {
    es: "Suscribirse",
    ca: "Subscriure's",
    gl: "Subscribirse",
    eu: "Harpidetu",
    en: "Subscribe",
    fr: "S'abonner"
  },
  "email-placeholder": {
    es: "Tu dirección de correo",
    ca: "La teva adreça de correu",
    gl: "O teu enderezo de correo",
    eu: "Zure helbide elektronikoa",
    en: "Your email address",
    fr: "Votre adresse email"
  },
  "featured-stories": {
    es: "Historias Destacadas",
    ca: "Històries Destacades",
    gl: "Historias Destacadas",
    eu: "Istorio Nabarmenak",
    en: "Featured Stories",
    fr: "Histoires Vedettes"
  },
  "popular-destinations": {
    es: "Destinos Populares",
    ca: "Destinacions Populars",
    gl: "Destinos Populares",
    eu: "Helmuga Popularrak",
    en: "Popular Destinations",
    fr: "Destinations Populaires"
  },
  "latest-adventures": {
    es: "Últimas Aventuras",
    ca: "Últimes Aventures",
    gl: "Últimas Aventuras",
    eu: "Azken Abenturak",
    en: "Latest Adventures",
    fr: "Dernières Aventures"
  },
  "join-community": {
    es: "Únete a Nuestra Comunidad de Viajeros",
    ca: "Uneix-te a la Nostra Comunitat de Viatgers",
    gl: "Únete á Nosa Comunidade de Viaxeiros",
    eu: "Batu Gure Bidaiari Komunitatera",
    en: "Join Our Travel Community",
    fr: "Rejoignez Notre Communauté de Voyageurs"
  },
  "newsletter-desc": {
    es: "Suscríbete a nuestro boletín para recibir consejos de viaje, contenido exclusivo y actualizaciones sobre nuevos destinos.",
    ca: "Subscriu-te al nostre butlletí per rebre consells de viatge, contingut exclusiu i actualitzacions sobre noves destinacions.",
    gl: "Subscríbete ao noso boletín para recibir consellos de viaxe, contido exclusivo e actualizacións sobre novos destinos.",
    eu: "Harpidetu gure buletinera bidaia aholkuak, eduki esklusiboa eta helmuga berrien eguneraketak jasotzeko.",
    en: "Subscribe to our newsletter for travel tips, exclusive content, and updates on new destinations.",
    fr: "Abonnez-vous à notre newsletter pour des conseils de voyage, du contenu exclusif et des mises à jour sur les nouvelles destinations."
  }
};

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
};

// Create context with default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es"); // Default to Spanish

  // Function to translate keys
  const translate = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language] as string;
    }
    return key; // Fallback to key if translation is not found
  };

  // Update document language attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
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
