// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';

i18n
  // Detect user language
  // Learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  // For options see: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true, // Set to false in production
    fallbackLng: 'en', // Fallback language if translation is missing for the detected language
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
    },
    // Optional: Configure language detection (e.g., from URL, localStorage)
    detection: {
      order: ['localStorage', 'navigator'], // Try to load language from localStorage first, then browser
      caches: ['localStorage'], // Cache user language preference in localStorage
    },
  });

export default i18n;