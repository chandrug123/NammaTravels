import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import kn from './locales/kn/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, kn: { translation: kn } },
    fallbackLng: 'en',
    supportedLngs: ['en', 'kn'],
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
    interpolation: { escapeValue: false },
  });

export default i18n;

// To add a new language (e.g. Tamil):
// 1. Add translation file: src/i18n/locales/ta/translation.json
// 2. Import it here: import ta from './locales/ta/translation.json'
// 3. Add to resources: ta: { translation: ta }
// 4. Add 'ta' to supportedLngs array
// 5. Add language option in LanguageSwitcher component
