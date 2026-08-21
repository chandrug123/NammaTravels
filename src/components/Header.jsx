import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { config, callUrl } from '../config';

const NAV_KEYS = ['home', 'services', 'vehicles', 'travelGuide', 'booking', 'contact'];

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id === 'home' ? 'hero' : id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              N
            </div>
            <span className="font-bold text-xl text-gray-900">
              Namma <span className="text-orange-500">Travels</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key === 'travelGuide' ? 'guide' : key)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-md hover:bg-orange-50"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={callUrl()}
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              📞 {config.phone}
            </a>
          </div>

          {/* Mobile: lang switcher + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
              <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
              <div className="w-5 h-0.5 bg-current transition-all" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 space-y-1">
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key === 'travelGuide' ? 'guide' : key)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
            <div className="px-4 pt-2">
              <a
                href={callUrl()}
                className="block text-center bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                📞 {config.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
