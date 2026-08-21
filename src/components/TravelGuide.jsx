import { useTranslation } from 'react-i18next';

const GUIDE_ITEMS = [
  { key: 'destination', icon: '📍' },
  { key: 'sightseeing', icon: '🏛️' },
  { key: 'planning', icon: '📋' },
  { key: 'local', icon: '🗺️' },
  { key: 'itinerary', icon: '📅' },
  { key: 'group', icon: '👨‍👩‍👧‍👦' },
];

export default function TravelGuide() {
  const { t } = useTranslation();

  return (
    <section id="guide" className="py-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">{t('guide.title')}</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">{t('guide.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDE_ITEMS.map(({ key, icon }) => (
            <div
              key={key}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-bold text-xl mb-2 text-orange-300">{t(`guide.${key}.title`)}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{t(`guide.${key}.desc`)}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
            <p className="text-xl font-semibold mb-4 text-orange-300">
              🧭 Need a personalized travel plan?
            </p>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              {t('common.bookNow')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
