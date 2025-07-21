import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.features': 'Features',
      'nav.howItWorks': 'How It Works',
      'nav.integrations': 'Integrations',
      'nav.pricing': 'Pricing',
      'nav.docs': 'Docs',
      'nav.blog': 'Blog',
      'nav.community': 'Community',
      'nav.about': 'About',
      
      // Hero section
      'hero.title.prefix': 'Secure Code with',
      'hero.title.suffix': 'AI-Powered Scanning',
      'hero.typewriter.1': 'Real-time vulnerability detection',
      'hero.typewriter.2': 'Zero false positives',
      'hero.typewriter.3': 'Lightning-fast scans',
      'hero.typewriter.4': 'Open source security',
      'hero.subtitle': 'Gitswhy OS automatically scans your code for security vulnerabilities, performance issues, and reliability problems - catching issues before they reach production.',
      'hero.cta.primary': 'Start Free Scan',
      'hero.cta.secondary': 'View on GitHub',
      
      // Common
      'common.learnMore': 'Learn More',
      'common.getStarted': 'Get Started',
      'common.readMore': 'Read More',
      'common.comingSoon': 'Coming Soon',
      'common.loading': 'Loading...',
      
      // Features
      'features.title': 'Powerful Security Features',
      'features.subtitle': 'Everything you need to secure your codebase',
      
      // Trust indicators
      'trust.scannedRepos': 'Repositories Scanned',
      'trust.vulnerabilitiesFound': 'Vulnerabilities Found',
      'trust.developers': 'Happy Developers',
      'trust.enterpriseClients': 'Enterprise Clients'
    }
  },
  de: {
    translation: {
      // Navigation
      'nav.features': 'Funktionen',
      'nav.howItWorks': 'Wie es funktioniert',
      'nav.integrations': 'Integrationen',
      'nav.pricing': 'Preise',
      'nav.docs': 'Dokumentation',
      'nav.blog': 'Blog',
      'nav.community': 'Community',
      'nav.about': 'Über uns',
      
      // Hero section
      'hero.title.prefix': 'Sicherer Code mit',
      'hero.title.suffix': 'KI-gestütztem Scanning',
      'hero.typewriter.1': 'Echtzeit-Schwachstellenerkennung',
      'hero.typewriter.2': 'Null falsche Positive',
      'hero.typewriter.3': 'Blitzschnelle Scans',
      'hero.typewriter.4': 'Open-Source-Sicherheit',
      'hero.subtitle': 'Gitswhy OS scannt automatisch Ihren Code auf Sicherheitslücken, Performance-Probleme und Zuverlässigkeitsprobleme - und erkennt Probleme, bevor sie in Produktion gehen.',
      'hero.cta.primary': 'Kostenlosen Scan starten',
      'hero.cta.secondary': 'Auf GitHub ansehen',
      
      // Common
      'common.learnMore': 'Mehr erfahren',
      'common.getStarted': 'Loslegen',
      'common.readMore': 'Weiterlesen',
      'common.comingSoon': 'Bald verfügbar',
      'common.loading': 'Laden...',
      
      // Features
      'features.title': 'Leistungsstarke Sicherheitsfunktionen',
      'features.subtitle': 'Alles was Sie brauchen, um Ihre Codebasis zu sichern',
      
      // Trust indicators
      'trust.scannedRepos': 'Gescannte Repositories',
      'trust.vulnerabilitiesFound': 'Gefundene Schwachstellen',
      'trust.developers': 'Zufriedene Entwickler',
      'trust.enterpriseClients': 'Unternehmenskunden'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;