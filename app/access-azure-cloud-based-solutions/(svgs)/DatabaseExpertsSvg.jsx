// app/access-azure-cloud-based-solutions/(svgs)/DatabaseExpertsSvg.jsx

// Illustration: a database schema being reviewed/annotated, representing
// analysis and design work. Used in AzureExperts alongside the closing copy.
export const DatabaseExpertsSvg = () => (
  <svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="dbe-accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="dbe-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#046999" floodOpacity="0.14" />
      </filter>
    </defs>

    {/* ── Three related table schemas, linked with connector lines ── */}
    <path d="M140 90 L 230 140" stroke="#046999" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.4" />
    <path d="M320 90 L 230 140" stroke="#046999" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.4" />
    <path d="M230 200 L 230 140" stroke="#046999" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.4" />

    {/* Table — Clients */}
    <g filter="url(#dbe-shadow)">
      <rect x="60" y="40" width="120" height="78" rx="5" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" />
    </g>
    <rect x="60" y="40" width="120" height="22" rx="5" fill="#0d1b2a" />
    <text x="120" y="55" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" letterSpacing="0.4">
      tbl_Clients
    </text>
    {[70, 84, 98].map((y) => (
      <rect key={y} x="70" y={y} width="100" height="8" rx="2" fill="#e8f4fa" />
    ))}

    {/* Table — Orders */}
    <g filter="url(#dbe-shadow)">
      <rect x="260" y="40" width="120" height="78" rx="5" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" />
    </g>
    <rect x="260" y="40" width="120" height="22" rx="5" fill="#0d1b2a" />
    <text x="320" y="55" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" letterSpacing="0.4">
      tbl_Orders
    </text>
    {[70, 84, 98].map((y) => (
      <rect key={y} x="270" y={y} width="100" height="8" rx="2" fill="#e8f4fa" />
    ))}

    {/* Central relationship table */}
    <g filter="url(#dbe-shadow)">
      <rect x="160" y="150" width="140" height="90" rx="5" fill="url(#dbe-accentGrad)" />
    </g>
    <text x="230" y="175" textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="700" letterSpacing="0.4">
      tbl_Relationships
    </text>
    {[190, 204, 218].map((y, i) => (
      <rect key={y} x="176" y={y} width="108" height="8" rx="2" fill="rgba(255,255,255,0.28)" opacity={i === 0 ? 1 : 0.7} />
    ))}

    {/* ── Magnifying glass, cue for analysis ── */}
    <g transform="translate(300,235)">
      <circle cx="18" cy="18" r="16" fill="#fff" stroke="#046999" strokeWidth="2" filter="url(#dbe-shadow)" />
      <line x1="29" y1="29" x2="42" y2="42" stroke="#046999" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 18a8 8 0 0 1 8-8" stroke="#046999" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    </g>

    {/* ── Small checklist card, bottom-left, design/documentation cue ── */}
    <g transform="translate(60,250)">
      <rect width="130" height="80" rx="5" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" filter="url(#dbe-shadow)" />
      <text x="14" y="22" fill="#0d1b2a" fontSize="8.5" fontWeight="700">
        Solution Design
      </text>
      {[
        { y: 36, done: true },
        { y: 52, done: true },
        { y: 68, done: false },
      ].map(({ y, done }, i) => (
        <g key={i}>
          <rect x="14" y={y - 8} width="12" height="12" rx="3" fill={done ? "#046999" : "none"} stroke="#046999" strokeWidth="1.4" />
          {done && <path d={`M16.5 ${y - 2} l2 2 4 -4.5`} stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
          <rect x="32" y={y - 6} width="82" height="6" rx="2" fill="#dbe3ea" />
        </g>
      ))}
    </g>

    {/* ── Decorative accent dots ── */}
    {[
      { cx: 400, cy: 60, r: 4, op: 0.3 },
      { cx: 30, cy: 200, r: 5, op: 0.22 },
    ].map(({ cx, cy, r, op }, i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#046999" opacity={op} />
    ))}
  </svg>
);
