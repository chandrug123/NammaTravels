import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  // Add future languages here: { code: 'ta', label: 'Tamil', native: 'தமிழ்' }
];

export default function LanguageSwitcher({ mobile = false }) {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className={`flex items-center gap-1 ${mobile ? 'justify-center' : ''}`}>
      {LANGUAGES.map((lang, idx) => (
        <span key={lang.code} className="flex items-center">
          {idx > 0 && <span className="text-gray-400 mx-1 text-sm">|</span>}
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
              current === lang.code
                ? 'text-orange-500 font-bold'
                : 'text-gray-600 hover:text-orange-500'
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.native}
          </button>
        </span>
      ))}
    </div>
  );
}
