import { useTranslation } from 'react-i18next';
import { callUrl, whatsappUrl } from '../config';

export default function FloatingButtons() {
  const { t } = useTranslation();

  return (
    <>
      {/* WhatsApp floating button - always visible */}
      <a
        href={whatsappUrl('Hello Namma Travels! I need travel assistance.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg shadow-green-500/40 flex items-center justify-center text-2xl transition-all hover:scale-110"
        aria-label={t('common.whatsappUs')}
        title={t('common.whatsappUs')}
      >
        💬
      </a>

      {/* Call floating button - mobile only */}
      <a
        href={callUrl()}
        className="fixed bottom-24 right-6 z-50 sm:hidden bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg shadow-blue-500/40 flex items-center justify-center text-2xl transition-all hover:scale-110"
        aria-label={t('common.callUs')}
        title={t('common.callUs')}
      >
        📞
      </a>
    </>
  );
}
