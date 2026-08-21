# Namma Travels 🚗

A modern, professional, mobile-friendly travel booking website with full **English / ಕನ್ನಡ** (Kannada) i18n support.

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS v4**
- **react-i18next** – internationalization
- **react-hook-form** – booking form validation
- **i18next-browser-languagedetector** – auto language detection

## Project Structure

```
src/
├── i18n/
│   ├── index.js                  # i18n configuration
│   └── locales/
│       ├── en/translation.json   # English translations
│       └── kn/translation.json   # Kannada translations
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Vehicles.jsx
│   ├── TravelGuide.jsx
│   ├── BookingForm.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── FloatingButtons.jsx
│   └── LanguageSwitcher.jsx
├── pages/
│   └── Home.jsx
├── config.js                     # Business config from env vars
└── main.jsx
```

## Setup

```bash
# 1. Clone the repo
git clone <repo-url>
cd NammaTravels

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env with your actual phone/WhatsApp/email details

# 4. Start development server
npm run dev

# 5. Build for production
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and update:

| Variable | Description | Example |
|---|---|---|
| `VITE_PHONE_NUMBER` | Business phone (with country code) | `+919876543210` |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number (no `+`) | `919876543210` |
| `VITE_BUSINESS_EMAIL` | Contact email | `info@nammatravels.com` |
| `VITE_BUSINESS_NAME` | Business name | `Namma Travels` |
| `VITE_BUSINESS_ADDRESS` | Business address | `Bangalore, Karnataka, India` |

## Adding a New Language

1. Create translation file: `src/i18n/locales/<code>/translation.json`  
   (copy `en/translation.json` as a template)
2. In `src/i18n/index.js`:
   ```js
   import ta from './locales/ta/translation.json';
   // add to resources:
   ta: { translation: ta }
   // add to supportedLngs:
   supportedLngs: ['en', 'kn', 'ta']
   ```
3. In `src/components/LanguageSwitcher.jsx`, add to `LANGUAGES` array:
   ```js
   { code: 'ta', label: 'Tamil', native: 'தமிழ்' }
   ```

Supported future languages: Tamil (ta), Telugu (te), Hindi (hi), Malayalam (ml), Marathi (mr)

## Deployment

### GitHub Pages (Recommended – Auto Deploy)

1. Push this repo to GitHub (repo name: `NammaTravels`)
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Add the following **Repository Secrets** under **Settings → Secrets → Actions**:

| Secret | Value |
|---|---|
| `VITE_PHONE_NUMBER` | `+919876543210` |
| `VITE_WHATSAPP_NUMBER` | `919876543210` |
| `VITE_BUSINESS_EMAIL` | `info@nammatravels.com` |
| `VITE_BUSINESS_NAME` | `Namma Travels` |
| `VITE_BUSINESS_ADDRESS` | `Bangalore, Karnataka, India` |

4. Push to `main` branch — GitHub Actions will build and deploy automatically.
5. Site will be live at: `https://<your-username>.github.io/NammaTravels/`

> **Note:** If your repo name is different from `NammaTravels`, update `VITE_BASE_URL` in `.github/workflows/deploy.yml` to match.

### Netlify / Vercel
```bash
npm run build
# Deploy the dist/ folder
```

Add environment variables in your hosting dashboard.

### Nginx (self-hosted)
```bash
npm run build
# Serve dist/ with nginx
# Add: try_files $uri $uri/ /index.html;  (for SPA routing)
```

## Features

- ✅ English / ಕನ್ನಡ language switcher (persists via localStorage)
- ✅ Hero section with Book Now / Call Now / WhatsApp buttons
- ✅ 10 service categories
- ✅ 6 vehicle types with enquiry buttons
- ✅ Travel guide section
- ✅ Booking form with validation (bilingual error messages)
- ✅ Book via WhatsApp (pre-filled message)
- ✅ 24×7 contact section
- ✅ Floating WhatsApp button (always visible)
- ✅ Floating Call button (mobile only)
- ✅ Fully responsive (mobile / tablet / desktop)
- ✅ SEO meta tags
- ✅ Noto Sans Kannada font for proper Kannada rendering
- ✅ No hardcoded sensitive data (all via env vars)
