// app/access-azure-cloud-based-solutions/(svgs)/AzureCloudSyncSvg.jsx

// Illustration: an Access database syncing up to an Azure-hosted cloud database.
// Used in AzureIntro as the right-hand visual alongside the capability list.
//
// The cloud path below is built symmetrically around CLOUD_CX (280) so the
// text and lock icon sitting on that same x-coordinate land in the true
// visual centre of the shape, not just its bounding box.
const CLOUD_CX = 280;

export const AzureCloudSyncSvg = () => (
  <svg
    viewBox="0 0 560 440"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="acs-cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a85bf" />
        <stop offset="100%" stopColor="#046999" />
      </linearGradient>
      <linearGradient id="acs-cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8f4fa" />
        <stop offset="100%" stopColor="#d0eaf6" />
      </linearGradient>
      <filter id="acs-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow
          dx="0"
          dy="8"
          stdDeviation="14"
          floodColor="#046999"
          floodOpacity="0.18"
        />
      </filter>
      <filter id="acs-shadowSoft" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="8"
          floodColor="#046999"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* ── Decorative accent dots, scattered around the canvas ── */}
    {[
      { cx: 60, cy: 65, r: 5, op: 0.3 },
      { cx: 500, cy: 85, r: 6, op: 0.22 },
      { cx: 470, cy: 45, r: 3.5, op: 0.35 },
      { cx: 40, cy: 280, r: 4, op: 0.25 },
      { cx: 520, cy: 360, r: 5, op: 0.2 },
    ].map(({ cx, cy, r, op }, i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#046999" opacity={op} />
    ))}

    {/* ── Dotted connection path from database up to the cloud ── */}
    <path
      d="M 218 310 C 218 245, 275 225, 275 165"
      stroke="#046999"
      strokeWidth="1.75"
      strokeDasharray="6 6"
      fill="none"
      opacity="0.4"
    />

    {/* ── Cloud shape, built as three overlapping circles plus a base,
         symmetric left/right around CLOUD_CX (280) so text centres cleanly ── */}
    <g filter="url(#acs-shadow)">
      <circle cx={CLOUD_CX - 78} cy="205" r="46" fill="url(#acs-cloudGrad)" />
      <circle cx={CLOUD_CX + 78} cy="205" r="46" fill="url(#acs-cloudGrad)" />
      <circle cx={CLOUD_CX - 30} cy="168" r="56" fill="url(#acs-cloudGrad)" />
      <circle cx={CLOUD_CX + 30} cy="168" r="56" fill="url(#acs-cloudGrad)" />
      <rect
        x={CLOUD_CX - 108}
        y="188"
        width="216"
        height="70"
        rx="35"
        fill="url(#acs-cloudGrad)"
      />
    </g>

    {/* ── Lock icon, centred on CLOUD_CX, sits above the label ── */}
    <g transform={`translate(${CLOUD_CX - 13},155)`}>
      <rect
        x="0"
        y="7"
        width="26"
        height="20"
        rx="3"
        fill="#fff"
        opacity="0.95"
      />
      <path
        d="M4 7V6a9 9 0 0 1 18 0v1"
        stroke="#fff"
        strokeWidth="2.8"
        fill="none"
        opacity="0.95"
      />
      <circle cx="13" cy="16" r="2.3" fill="#046999" />
    </g>

    {/* Cloud label, centred on CLOUD_CX */}
    <text
      x={CLOUD_CX}
      y="207"
      textAnchor="middle"
      fill="#fff"
      fontSize="16"
      fontWeight="700"
      letterSpacing="0.4"
    >
      Azure Cloud
    </text>
    <text
      x={CLOUD_CX}
      y="226"
      textAnchor="middle"
      fill="rgba(255,255,255,0.75)"
      fontSize="10"
      letterSpacing="2"
    >
      SQL SERVER
    </text>

    {/* ── Access database window, sits below the cloud ── */}
    <g filter="url(#acs-shadowSoft)">
      <rect
        x="98"
        y="310"
        width="222"
        height="130"
        rx="7"
        fill="#fff"
        stroke="#e2edf4"
        strokeWidth="1.5"
      />
    </g>
    <rect x="98" y="310" width="222" height="30" rx="7" fill="#0d1b2a" />
    <circle cx="114" cy="325" r="3.75" fill="#c0392b" opacity="0.75" />
    <circle cx="128" cy="325" r="3.75" fill="#e67e22" opacity="0.75" />
    <circle cx="142" cy="325" r="3.75" fill="#27ae60" opacity="0.75" />
    <text
      x="219"
      y="329"
      textAnchor="middle"
      fill="#fff"
      fontSize="10"
      fontWeight="700"
      letterSpacing="0.4"
    >
      Database.accdb
    </text>

    {/* Column headers row */}
    <text
      x="110"
      y="357"
      fill="#9a9da1"
      fontSize="7.5"
      fontWeight="700"
      letterSpacing="0.6"
    >
      ID
    </text>
    <text
      x="150"
      y="357"
      fill="#9a9da1"
      fontSize="7.5"
      fontWeight="700"
      letterSpacing="0.6"
    >
      CLIENT
    </text>
    <text
      x="245"
      y="357"
      fill="#9a9da1"
      fontSize="7.5"
      fontWeight="700"
      letterSpacing="0.6"
    >
      STATUS
    </text>

    {/* Table rows inside the Access window */}
    {[365, 386, 407].map((y, i) => (
      <g key={y}>
        <rect
          x="110"
          y={y}
          width="193"
          height="15"
          rx="2"
          fill="url(#acs-cellGrad)"
          opacity={i === 0 ? 1 : 0.6}
        />
        <circle cx="120" cy={y + 7.5} r="2.3" fill="#046999" opacity="0.7" />
        <rect
          x="264"
          y={y + 3.5}
          width="32"
          height="7.5"
          rx="3.75"
          fill="#27ae60"
          opacity={0.6 - i * 0.1}
        />
      </g>
    ))}

    {/* ── Two small satellite devices reading from the cloud ── */}
    <g>
      <rect
        x="392"
        y="255"
        width="84"
        height="58"
        rx="6"
        fill="#fff"
        stroke="#e2edf4"
        strokeWidth="1.5"
        filter="url(#acs-shadowSoft)"
      />
      <rect
        x="403"
        y="266"
        width="62"
        height="7.5"
        rx="2"
        fill="#046999"
        opacity="0.7"
      />
      <rect x="403" y="281" width="40" height="5.5" rx="2" fill="#c8dce6" />
      <rect x="403" y="294" width="50" height="5.5" rx="2" fill="#c8dce6" />
      <path
        d="M388 283 C 364 272, 342 245, 328 218"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        fill="none"
        opacity="0.35"
      />
    </g>

    <g>
      <rect
        x="400"
        y="331"
        width="73"
        height="73"
        rx="9"
        fill="#fff"
        stroke="#e2edf4"
        strokeWidth="1.5"
        filter="url(#acs-shadowSoft)"
      />
      <rect x="411" y="342" width="51" height="34" rx="4" fill="#e8f4fa" />
      <rect x="411" y="381" width="51" height="7.5" rx="2" fill="#c8dce6" />
      <path
        d="M400 344 C 368 310, 340 245, 322 213"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        fill="none"
        opacity="0.35"
      />
    </g>
  </svg>
);
