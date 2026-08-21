import { useTranslation } from 'react-i18next';

const SERVICE_KEYS = [
  { key: 'local', icon: '🏙️' },
  { key: 'outstation', icon: '🛣️' },
  { key: 'airport', icon: '✈️' },
  { key: 'family', icon: '👨‍👩‍👧‍👦' },
  { key: 'corporate', icon: '💼' },
  { key: 'wedding', icon: '💍' },
  { key: 'group', icon: '👥' },
  { key: 'custom', icon: '🗺️' },
  { key: 'guide', icon: '🧭' },
  { key: 'emergency', icon: '🆘' },
];

export default function Services() {
  const { t } = useTranslation();

  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            {t('services.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICE_KEYS.map(({ key, icon }) => (
            <div
              key={key}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-orange-200 transition-all group cursor-pointer"
              onClick={scrollToBooking}
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                {t(`services.${key}.title`)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t(`services.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
