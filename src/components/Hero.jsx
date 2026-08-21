import { useTranslation } from 'react-i18next';
import { callUrl, whatsappUrl } from '../config';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── BACKGROUND SCENE ── */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Sky gradient – deep night to twilight */}
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a0a1a" />
              <stop offset="40%" stopColor="#0f1f4a" />
              <stop offset="75%" stopColor="#1a3a6e" />
              <stop offset="100%" stopColor="#c2440e" />
            </linearGradient>

            {/* Road gradient */}
            <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#2d2d2d" />
            </linearGradient>

            {/* Horizon glow */}
            <radialGradient id="horizonGlow" cx="50%" cy="100%" r="60%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0f1f4a" stopOpacity="0" />
            </radialGradient>

            {/* Headlight glow */}
            <radialGradient id="headlight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </radialGradient>

            {/* Mountain gradient */}
            <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#0f2040" />
            </linearGradient>
            <linearGradient id="mtnNear" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d1b2e" />
              <stop offset="100%" stopColor="#060e1a" />
            </linearGradient>

            {/* Tree gradient */}
            <linearGradient id="tree" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a2a0a" />
              <stop offset="100%" stopColor="#051005" />
            </linearGradient>

            {/* Overlay for text readability */}
            <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#000000" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
            </linearGradient>

            <filter id="blur2">
              <feGaussianBlur stdDeviation="2" />
            </filter>
            <filter id="blur6">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Sky */}
          <rect width="1440" height="900" fill="url(#sky)" />

          {/* Stars */}
          {[
            [80,60],[200,30],[350,80],[500,20],[650,55],[800,35],[950,70],[1100,25],[1250,60],[1380,40],
            [140,120],[420,100],[700,130],[980,90],[1200,115],[1350,140],[60,160],[300,170],[600,150],
            [900,180],[1150,160],[1400,175],[170,200],[450,220],[730,195],[1020,210],[1300,230],
            [240,250],[520,270],[810,245],[1080,260],[1360,280],[100,300],[380,310],[660,290],
            [940,320],[1220,300],[50,350],[330,340],[610,360],[890,345],[1170,370],[1420,355],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 5 === 0 ? 1.5 : 1}
              fill="white"
              opacity={0.4 + (i % 4) * 0.15}
            >
              <animate
                attributeName="opacity"
                values={`${0.3 + (i % 3) * 0.2};${0.8 + (i % 2) * 0.1};${0.3 + (i % 3) * 0.2}`}
                dur={`${2 + (i % 4)}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* Horizon glow */}
          <rect x="0" y="480" width="1440" height="420" fill="url(#horizonGlow)" />

          {/* Far mountains */}
          <path
            d="M0,620 L80,480 L160,540 L260,420 L380,510 L480,390 L580,470 L680,360 L780,450 L880,380 L980,460 L1080,400 L1180,480 L1280,420 L1380,500 L1440,460 L1440,900 L0,900 Z"
            fill="url(#mtnFar)"
            opacity="0.9"
          />
          {/* Snow caps */}
          <path d="M260,420 L290,450 L230,450 Z" fill="white" opacity="0.15" />
          <path d="M480,390 L510,420 L450,420 Z" fill="white" opacity="0.12" />
          <path d="M680,360 L715,395 L645,395 Z" fill="white" opacity="0.18" />
          <path d="M880,380 L910,410 L850,410 Z" fill="white" opacity="0.13" />
          <path d="M1080,400 L1108,428 L1052,428 Z" fill="white" opacity="0.11" />

          {/* Near mountains */}
          <path
            d="M0,700 L120,580 L220,640 L340,550 L460,620 L560,530 L660,600 L760,520 L860,590 L960,540 L1060,610 L1160,560 L1260,630 L1360,580 L1440,620 L1440,900 L0,900 Z"
            fill="url(#mtnNear)"
          />

          {/* Ground / terrain */}
          <path
            d="M0,780 Q200,760 400,775 Q600,790 800,770 Q1000,755 1200,772 Q1350,782 1440,775 L1440,900 L0,900 Z"
            fill="#0a1a0a"
          />

          {/* Road – perspective vanishing point at center-top */}
          {/* Road base */}
          <path
            d="M580,900 L660,680 L720,620 L780,680 L860,900 Z"
            fill="url(#road)"
          />
          {/* Road shoulders */}
          <path d="M575,900 L655,680 L660,680 L580,900 Z" fill="#111" opacity="0.6" />
          <path d="M860,900 L780,680 L785,680 L865,900 Z" fill="#111" opacity="0.6" />

          {/* Road center dashes – perspective */}
          {[
            { y1: 900, y2: 860, w: 14 },
            { y1: 845, y2: 820, w: 10 },
            { y1: 808, y2: 790, w: 7 },
            { y1: 778, y2: 765, w: 5 },
            { y1: 755, y2: 746, w: 3.5 },
            { y1: 738, y2: 731, w: 2.5 },
          ].map(({ y1, y2, w }, i) => {
            const cx = 720;
            return (
              <rect
                key={i}
                x={cx - w / 2}
                y={y2}
                width={w}
                height={y1 - y2}
                fill="#f5c842"
                opacity="0.7"
                rx="1"
              />
            );
          })}

          {/* Road edge lines */}
          <line x1="580" y1="900" x2="660" y2="680" stroke="#f5c842" strokeWidth="2" opacity="0.5" />
          <line x1="860" y1="900" x2="780" y2="680" stroke="#f5c842" strokeWidth="2" opacity="0.5" />

          {/* Headlight beam from car (cone of light on road) */}
          <path
            d="M710,820 L580,900 L860,900 L730,820 Z"
            fill="url(#headlight)"
            opacity="0.18"
          />

          {/* Car silhouette */}
          <g transform="translate(680, 800)" filter="url(#glow)">
            {/* Car body */}
            <rect x="0" y="12" width="80" height="22" rx="4" fill="#1a1a2e" />
            {/* Cabin */}
            <path d="M14,12 Q20,0 35,0 L55,0 Q68,0 72,12 Z" fill="#0f1525" />
            {/* Windows */}
            <path d="M18,11 Q22,3 34,3 L46,3 Q54,3 57,11 Z" fill="#1e3a5f" opacity="0.8" />
            {/* Wheels */}
            <circle cx="16" cy="34" r="8" fill="#111" />
            <circle cx="16" cy="34" r="4" fill="#333" />
            <circle cx="64" cy="34" r="8" fill="#111" />
            <circle cx="64" cy="34" r="4" fill="#333" />
            {/* Headlights */}
            <ellipse cx="78" cy="20" rx="4" ry="3" fill="#fffbe6" opacity="0.95">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="78" cy="27" rx="4" ry="3" fill="#fffbe6" opacity="0.9">
              <animate attributeName="opacity" values="0.75;0.95;0.75" dur="1.5s" repeatCount="indefinite" />
            </ellipse>
            {/* Tail lights */}
            <rect x="0" y="18" width="5" height="5" rx="1" fill="#dc2626" opacity="0.9">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.2s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Trees – left side */}
          {[
            { x: 80, h: 160, w: 38 },
            { x: 160, h: 130, w: 30 },
            { x: 240, h: 180, w: 42 },
            { x: 320, h: 145, w: 34 },
            { x: 400, h: 165, w: 38 },
            { x: 480, h: 120, w: 28 },
            { x: 540, h: 140, w: 32 },
          ].map(({ x, h, w }, i) => (
            <g key={`tl-${i}`}>
              {/* Trunk */}
              <rect x={x + w / 2 - 3} y={780} width="6" height={30} fill="#2a1a0a" />
              {/* Foliage layers */}
              <polygon
                points={`${x + w / 2},${780 - h} ${x},${780 - h * 0.45} ${x + w},${780 - h * 0.45}`}
                fill="url(#tree)"
              />
              <polygon
                points={`${x + w / 2},${780 - h * 0.6} ${x + w * 0.1},${780 - h * 0.2} ${x + w * 0.9},${780 - h * 0.2}`}
                fill="#0d2a0d"
              />
            </g>
          ))}

          {/* Trees – right side */}
          {[
            { x: 900, h: 155, w: 36 },
            { x: 980, h: 175, w: 40 },
            { x: 1060, h: 135, w: 32 },
            { x: 1140, h: 160, w: 38 },
            { x: 1220, h: 125, w: 30 },
            { x: 1300, h: 170, w: 40 },
            { x: 1380, h: 145, w: 34 },
          ].map(({ x, h, w }, i) => (
            <g key={`tr-${i}`}>
              <rect x={x + w / 2 - 3} y={780} width="6" height={30} fill="#2a1a0a" />
              <polygon
                points={`${x + w / 2},${780 - h} ${x},${780 - h * 0.45} ${x + w},${780 - h * 0.45}`}
                fill="url(#tree)"
              />
              <polygon
                points={`${x + w / 2},${780 - h * 0.6} ${x + w * 0.1},${780 - h * 0.2} ${x + w * 0.9},${780 - h * 0.2}`}
                fill="#0d2a0d"
              />
            </g>
          ))}

          {/* Street lamps – left */}
          {[
            { x: 555, y: 760, h: 60 },
            { x: 600, y: 730, h: 45 },
            { x: 630, y: 710, h: 35 },
          ].map(({ x, y, h }, i) => (
            <g key={`ll-${i}`}>
              <line x1={x} y1={y + h} x2={x} y2={y} stroke="#555" strokeWidth="2" />
              <line x1={x} y1={y} x2={x - 12} y2={y - 8} stroke="#555" strokeWidth="2" />
              <circle cx={x - 12} cy={y - 8} r={3 - i * 0.5} fill="#fffbe6" opacity="0.9">
                <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x - 12} cy={y - 8} r={8 - i} fill="#fffbe6" opacity="0.08" filter="url(#blur6)" />
            </g>
          ))}

          {/* Street lamps – right */}
          {[
            { x: 885, y: 760, h: 60 },
            { x: 840, y: 730, h: 45 },
            { x: 810, y: 710, h: 35 },
          ].map(({ x, y, h }, i) => (
            <g key={`lr-${i}`}>
              <line x1={x} y1={y + h} x2={x} y2={y} stroke="#555" strokeWidth="2" />
              <line x1={x} y1={y} x2={x + 12} y2={y - 8} stroke="#555" strokeWidth="2" />
              <circle cx={x + 12} cy={y - 8} r={3 - i * 0.5} fill="#fffbe6" opacity="0.9">
                <animate attributeName="opacity" values="0.7;1;0.7" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x + 12} cy={y - 8} r={8 - i} fill="#fffbe6" opacity="0.08" filter="url(#blur6)" />
            </g>
          ))}

          {/* Moon */}
          <circle cx="1280" cy="100" r="38" fill="#f5e6c8" opacity="0.9" />
          <circle cx="1295" cy="90" r="32" fill="#0f1f4a" opacity="0.85" />
          {/* Moon glow */}
          <circle cx="1280" cy="100" r="60" fill="#f5e6c8" opacity="0.06" filter="url(#blur6)" />

          {/* Shooting star */}
          <line x1="300" y1="80" x2="380" y2="120" stroke="white" strokeWidth="1.5" opacity="0.6">
            <animate attributeName="opacity" values="0;0.8;0" dur="4s" begin="2s" repeatCount="indefinite" />
          </line>

          {/* Dark overlay for text readability */}
          <rect width="1440" height="900" fill="url(#overlay)" />
        </svg>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          {t('hero.badge')}
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          {t('hero.tagline')} –{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            {t('hero.brand')}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <button
            onClick={scrollToBooking}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
          >
            🚗 {t('hero.bookNow')}
          </button>

          <a
            href={callUrl()}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all hover:scale-105"
          >
            📞 {t('hero.callNow')}
          </a>

          <a
            href={whatsappUrl('Hello! I would like to book a trip with Namma Travels.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-green-500/30 transition-all hover:scale-105"
          >
            💬 {t('hero.whatsapp')}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Happy Customers' },
            { value: '24×7', label: 'Available' },
            { value: '50+', label: 'Vehicles' },
            { value: '10+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-orange-400 drop-shadow">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
