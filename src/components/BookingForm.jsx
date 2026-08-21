import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { whatsappUrl } from '../config';

const VEHICLE_KEYS = ['cars', 'suv', 'luxury', 'tempo', 'minibus', 'bus'];

export default function BookingForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Booking enquiry:', data);
    setSubmitted(true);
  };

  const buildWhatsAppMessage = () => {
    const d = getValues();
    return `Hello Namma Travels!
Name: ${d.name || ''}
Mobile: ${d.mobile || ''}
Pickup: ${d.pickup || ''}
Destination: ${d.destination || ''}
Travel Date: ${d.travelDate || ''}
Return Date: ${d.returnDate || ''}
Vehicle: ${d.vehicleType || ''}
Passengers: ${d.passengers || ''}
Requirements: ${d.requirements || ''}`;
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 ${
      hasError ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
    }`;

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-orange-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('booking.success')}</h3>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-orange-500 hover:text-orange-600 font-medium underline"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-orange-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            {t('booking.title')}
          </h2>
          <p className="text-gray-500 text-lg">{t('booking.subtitle')}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.name')} *
                </label>
                <input
                  {...register('name', { required: t('booking.errors.nameRequired') })}
                  className={inputClass(errors.name)}
                  placeholder="Rajesh Kumar"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.mobile')} *
                </label>
                <input
                  {...register('mobile', {
                    required: t('booking.errors.mobileRequired'),
                    pattern: { value: /^[6-9]\d{9}$/, message: t('booking.errors.mobileInvalid') },
                  })}
                  className={inputClass(errors.mobile)}
                  placeholder="9876543210"
                  type="tel"
                />
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.whatsapp')}
                </label>
                <input
                  {...register('whatsapp')}
                  className={inputClass(false)}
                  placeholder="9876543210"
                  type="tel"
                />
              </div>

              {/* Pickup */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.pickup')} *
                </label>
                <input
                  {...register('pickup', { required: t('booking.errors.pickupRequired') })}
                  className={inputClass(errors.pickup)}
                  placeholder="Bangalore"
                />
                {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup.message}</p>}
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.destination')} *
                </label>
                <input
                  {...register('destination', { required: t('booking.errors.destinationRequired') })}
                  className={inputClass(errors.destination)}
                  placeholder="Mysore"
                />
                {errors.destination && (
                  <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>
                )}
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.travelDate')} *
                </label>
                <input
                  {...register('travelDate', { required: t('booking.errors.dateRequired') })}
                  className={inputClass(errors.travelDate)}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.travelDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.travelDate.message}</p>
                )}
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.returnDate')}
                </label>
                <input
                  {...register('returnDate')}
                  className={inputClass(false)}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.vehicleType')} *
                </label>
                <select
                  {...register('vehicleType', { required: t('booking.errors.vehicleRequired') })}
                  className={inputClass(errors.vehicleType)}
                >
                  <option value="">{t('booking.selectVehicle')}</option>
                  {VEHICLE_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {t(`vehicles.${k}.title`)}
                    </option>
                  ))}
                </select>
                {errors.vehicleType && (
                  <p className="text-red-500 text-xs mt-1">{errors.vehicleType.message}</p>
                )}
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.passengers')} *
                </label>
                <input
                  {...register('passengers', { required: t('booking.errors.passengersRequired') })}
                  className={inputClass(errors.passengers)}
                  type="number"
                  min="1"
                  max="60"
                  placeholder="4"
                />
                {errors.passengers && (
                  <p className="text-red-500 text-xs mt-1">{errors.passengers.message}</p>
                )}
              </div>

              {/* Requirements - full width */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t('booking.requirements')}
                </label>
                <textarea
                  {...register('requirements')}
                  className={`${inputClass(false)} resize-none`}
                  rows={3}
                  placeholder="Any special requirements..."
                />
              </div>
            </div>

            {/* Submit buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg"
              >
                📋 {t('booking.requestQuote')}
              </button>
              <a
                href={whatsappUrl(buildWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg text-center"
              >
                💬 {t('booking.bookWhatsapp')}
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
