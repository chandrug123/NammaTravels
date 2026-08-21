import { useTranslation } from 'react-i18next';
import { whatsappUrl } from '../config';

const VEHICLES = [
  {
    key: 'cars',
    emoji: '🚗',
    gradient: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    imgBg: 'bg-blue-100',
  },
  {
    key: 'suv',
    emoji: '🚙',
    gradient: 'from-green-500 to-green-700',
    bg: 'bg-green-50',
    imgBg: 'bg-green-100',
  },
  {
    key: 'luxury',
    emoji: '⭐',
    gradient: 'from-yellow-500 to-orange-600',
    bg: 'bg-yellow-50',
    imgBg: 'bg-yellow-100',
  },
  {
    key: 'tempo',
    emoji: '🚐',
    gradient: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    imgBg: 'bg-purple-100',
  },
  {
    key: 'minibus',
    emoji: '🚌',
    gradient: 'from-red-500 to-red-700',
    bg: 'bg-red-50',
    imgBg: 'bg-red-100',
  },
  {
    key: 'bus',
    emoji: '🚌',
    gradient: 'from-gray-600 to-gray-800',
    bg: 'bg-gray-50',
    imgBg: 'bg-gray-100',
  },
];

export default function Vehicles() {
  const { t } = useTranslation();

  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            {t('vehicles.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t('vehicles.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map(({ key, emoji, gradient, bg, imgBg }) => (
            <div
              key={key}
              className={`${bg} rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group`}
            >
              {/* Vehicle image area */}
              <div className={`${imgBg} h-44 flex items-center justify-center relative overflow-hidden`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`vehicles.${key}.title`)}
                </h3>
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">{t('vehicles.capacity')}:</span>
                    {t(`vehicles.${key}.capacity`)}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="font-semibold text-gray-800 shrink-0">{t('vehicles.bestFor')}:</span>
                    <span>{t(`vehicles.${key}.bestFor`)}</span>
                  </div>
                </div>
                <a
                  href={whatsappUrl(
                    `Hi! I'm interested in booking a ${t(`vehicles.${key}.title`)} from Namma Travels.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center bg-gradient-to-r ${gradient} text-white font-semibold py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity text-sm`}
                >
                  {t('vehicles.enquire')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
