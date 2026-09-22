// app/access-azure-cloud-based-solutions/(svgs)/WebAppLinkSvg.jsx

// Illustration: a browser-based web form submitting data into an Azure
// database, which then feeds the Access front end used by staff.
// Used in AzureCapabilities alongside the "Web Apps Linked to Databases" copy.
export const WebAppLinkSvg = () => (
  <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="wal-accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="wal-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#046999" floodOpacity="0.14" />
      </filter>
    </defs>

    {/* ── Browser window with a simple submission form ── */}
    <rect x="30" y="20" width="200" height="160" rx="6" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" filter="url(#wal-shadow)" />
    <rect x="30" y="20" width="200" height="22" rx="6" fill="#f2f3f5" />
    <circle cx="44" cy="31" r="3" fill="#c0392b" opacity="0.6" />
    <circle cx="55" cy="31" r="3" fill="#e67e22" opacity="0.6" />
    <circle cx="66" cy="31" r="3" fill="#27ae60" opacity="0.6" />
    <rect x="90" y="27" width="120" height="9" rx="4" fill="#fff" stroke="#dbe3ea" strokeWidth="1" />

    <text x="130" y="66" fill="#0d1b2a" fontSize="10" fontWeight="700">
      Client Intake Form
    </text>
    <rect x="42" y="76" width="176" height="16" rx="3" fill="#f6f9fb" stroke="#e2edf4" strokeWidth="1" />
    <text x="50" y="87" fill="#9a9da1" fontSize="8">
      Full name
    </text>
    <rect x="42" y="100" width="176" height="16" rx="3" fill="#f6f9fb" stroke="#e2edf4" strokeWidth="1" />
    <text x="50" y="111" fill="#9a9da1" fontSize="8">
      Email address
    </text>
    <rect x="42" y="124" width="176" height="16" rx="3" fill="#f6f9fb" stroke="#e2edf4" strokeWidth="1" />
    <text x="50" y="135" fill="#9a9da1" fontSize="8">
      Reference number
    </text>
    <rect x="42" y="150" width="80" height="18" rx="3" fill="url(#wal-accentGrad)" />
    <text x="82" y="162" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">
      Submit
    </text>

    {/* Device row icons under the browser, any device cue */}
    {[
      { x: 30, w: 26, label: "desktop" },
      { x: 66, w: 16, label: "tablet" },
      { x: 92, w: 10, label: "phone" },
    ].map(({ x, w }, i) => (
      <rect key={i} x={30 + x - 30 + i * 0} y="192" width={w} height="16" rx="2" fill="none" stroke="#a0a2a6" strokeWidth="1.3" opacity="0.7" />
    ))}
    <text x="60" y="226" fill="#9a9da1" fontSize="8" fontWeight="600" letterSpacing="0.5">
      Runs on any device
    </text>

    {/* ── Arrow from form to database ── */}
    <path d="M235 100 H 300" stroke="#046999" strokeWidth="1.6" markerEnd="url(#wal-arrow)" opacity="0.6" />
    <defs>
      <marker id="wal-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="#046999" opacity="0.6" />
      </marker>
    </defs>

    {/* ── Azure database receiving the submissions ── */}
    <rect x="300" y="40" width="150" height="130" rx="6" fill="#0d1b2a" filter="url(#wal-shadow)" />
    <rect x="300" y="40" width="150" height="24" rx="6" fill="url(#wal-accentGrad)" />
    <text x="375" y="56" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" letterSpacing="0.5">
      Azure Database
    </text>
    {[76, 98, 120, 142].map((y, i) => (
      <rect key={y} x="314" y={y} width="122" height="14" rx="2" fill="rgba(255,255,255,0.08)" opacity={i === 0 ? 1 : 0.7} />
    ))}

    {/* ── Arrow down to Access front end, instant access ── */}
    <path d="M375 172 V 220" stroke="#046999" strokeWidth="1.6" strokeDasharray="5 4" opacity="0.5" />
    <rect x="305" y="222" width="140" height="70" rx="6" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" filter="url(#wal-shadow)" />
    <rect x="305" y="222" width="140" height="20" rx="6" fill="#046999" opacity="0.9" />
    <text x="375" y="236" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">
      Access Front End
    </text>
    <rect x="317" y="250" width="116" height="8" rx="2" fill="#e8f4fa" />
    <rect x="317" y="264" width="80" height="8" rx="2" fill="#e8f4fa" />
    <text x="375" y="314" textAnchor="middle" fill="#4a5568" fontSize="8.5" fontWeight="600" letterSpacing="0.4">
      Instant access to new data
    </text>
  </svg>
);
