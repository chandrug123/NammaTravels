import { useTranslation } from 'react-i18next';
import { config, callUrl, whatsappUrl } from '../config';

export default function Contact() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: '📞',
      title: t('contact.callNow'),
      value: config.phone,
      href: callUrl(),
      color: 'bg-blue-500',
      label: t('contact.available'),
    },
    {
      icon: '💬',
      title: t('contact.whatsapp'),
      value: 'WhatsApp Chat',
      href: whatsappUrl('Hello Namma Travels! I need travel assistance.'),
      color: 'bg-green-500',
      label: t('contact.available'),
      external: true,
    },
    {
      icon: '✉️',
      title: t('contact.email'),
      value: config.email,
      href: `mailto:${config.email}`,
      color: 'bg-orange-500',
      label: 'Response within 2 hours',
    },
    {
      icon: '📍',
      title: t('contact.address'),
      value: config.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(config.address)}`,
      color: 'bg-red-500',
      label: 'Find us on Maps',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-orange-500 text-xl font-semibold">{t('contact.subtitle')}</p>
        </div>

        {/* 24x7 Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center mb-12">
          <div className="text-5xl mb-3">🕐</div>
          <h3 className="text-2xl font-bold mb-2">{t('contact.available')}</h3>
          <p className="text-orange-100 mb-6">{t('contact.availableDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={callUrl()}
              className="bg-white text-orange-600 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors"
            >
              📞 {t('contact.callNow')}
            </a>
            <a
              href={whatsappUrl('Hello! I need travel assistance from Namma Travels.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              💬 {t('contact.whatsapp')}
            </a>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-orange-200 rounded-2xl p-6 text-center hover:shadow-md transition-all"
            >
              <div
                className={`${card.color} w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-2 break-all">{card.value}</p>
              <span className="text-xs text-orange-500 font-medium">{card.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
