import { useTranslation } from 'react-i18next';
import { config, callUrl, whatsappUrl } from '../config';

const NAV_KEYS = ['home', 'services', 'vehicles', 'travelGuide', 'booking', 'contact'];

const SERVICES_LIST = ['local', 'outstation', 'airport', 'family', 'corporate', 'wedding'];

export default function Footer() {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    const el = document.getElementById(id === 'home' ? 'hero' : id === 'travelGuide' ? 'guide' : id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                N
              </div>
              <span className="font-bold text-xl text-white">
                Namma <span className="text-orange-400">Travels</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              <a
                href={callUrl()}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                📞 Call
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(key)}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {SERVICES_LIST.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors text-left"
                  >
                    {t(`services.${key}.title`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href={callUrl()} className="hover:text-orange-400 transition-colors">
                  📞 {config.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  ✉️ {config.email}
                </a>
              </li>
              <li>📍 {config.address}</li>
              <li className="text-orange-400 font-semibold">🕐 {t('common.available247')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {config.businessName}. {t('footer.rights')}
          </p>
          <p>{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
