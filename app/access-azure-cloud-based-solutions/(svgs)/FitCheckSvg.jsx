// app/access-azure-cloud-based-solutions/(svgs)/FitCheckSvg.jsx

// Illustration: a simple decision/balance scale weighing an Access icon
// against a Windows device constraint. Used in AzureFit.
export const FitCheckSvg = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="fcs-accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="fcs-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#046999" floodOpacity="0.14" />
      </filter>
    </defs>

    {/* ── Balance beam ── */}
    <rect x="60" y="90" width="280" height="4" rx="2" fill="#046999" opacity="0.35" transform="rotate(-4 200 92)" />
    <rect x="196" y="40" width="8" height="160" rx="4" fill="#dbe3ea" />
    <circle cx="200" cy="40" r="8" fill="#046999" />

    {/* Left pan — cost effective, cloud based */}
    <g transform="translate(60,86) rotate(-4)">
      <line x1="10" y1="6" x2="-6" y2="46" stroke="#a0a2a6" strokeWidth="1.4" />
      <line x1="10" y1="6" x2="30" y2="46" stroke="#a0a2a6" strokeWidth="1.4" />
      <path d="M-10 46 Q 12 66 34 46 L 34 46 Q 12 58 -10 46 Z" fill="url(#fcs-accentGrad)" filter="url(#fcs-shadow)" />
    </g>
    <g transform="translate(38,110)">
      <rect width="60" height="60" rx="6" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" filter="url(#fcs-shadow)" />
      <text x="30" y="26" textAnchor="middle" fill="#046999" fontSize="9" fontWeight="700">
        SQL
      </text>
      <text x="30" y="40" textAnchor="middle" fill="#4a5568" fontSize="7.5">
        Cloud based
      </text>
    </g>

    {/* Right pan — Windows only constraint */}
    <g transform="translate(340,86) rotate(-4)">
      <line x1="-10" y1="6" x2="-26" y2="46" stroke="#a0a2a6" strokeWidth="1.4" />
      <line x1="-10" y1="6" x2="10" y2="46" stroke="#a0a2a6" strokeWidth="1.4" />
      <path d="M-30 46 Q -8 66 14 46 L 14 46 Q -8 58 -30 46 Z" fill="#c0392b" opacity="0.85" filter="url(#fcs-shadow)" />
    </g>
    <g transform="translate(280,110)">
      <rect width="60" height="60" rx="6" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" filter="url(#fcs-shadow)" />
      <path d="M20 20 30 18.5v11.5h-10zm12-1.7 16-2v13.7H32z" fill="#c0392b" opacity="0.85" />
      <text x="30" y="46" textAnchor="middle" fill="#4a5568" fontSize="7.5">
        Windows only
      </text>
    </g>

    {/* ── Base ── */}
    <path d="M170 218 L 230 218 L 250 240 L 150 240 Z" fill="#0d1b2a" opacity="0.9" />
    <rect x="150" y="240" width="100" height="8" rx="2" fill="#0d1b2a" />
  </svg>
);
