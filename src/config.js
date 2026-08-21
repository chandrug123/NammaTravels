export const config = {
  phone: import.meta.env.VITE_PHONE_NUMBER || '+919876543210',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210',
  email: import.meta.env.VITE_BUSINESS_EMAIL || 'info@nammatravels.com',
  businessName: import.meta.env.VITE_BUSINESS_NAME || 'Namma Travels',
  address: import.meta.env.VITE_BUSINESS_ADDRESS || 'Bangalore, Karnataka, India',
};

export const whatsappUrl = (message = '') =>
  `https://wa.me/${config.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const callUrl = () => `tel:${config.phone}`;
