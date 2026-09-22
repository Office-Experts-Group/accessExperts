// app/access-azure-cloud-based-solutions/(svgs)/AccessSplitSvg.jsx

// Illustration: a single Access file splitting into a local front end
// and an Azure-hosted back end, connected by a dashed line.
// Used in AzureCapabilities alongside the "Existing Access Databases" copy.
export const AccessSplitSvg = () => (
  <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="asp-headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
    </defs>

    {/* ── Front end window, stays on the local device ── */}
    <rect x="20" y="60" width="180" height="150" rx="6" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" />
    <rect x="20" y="60" width="180" height="26" rx="6" fill="#0d1b2a" />
    <text x="110" y="78" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" letterSpacing="0.5">
      Front End.accdb
    </text>
    <rect x="34" y="98" width="152" height="18" rx="3" fill="#e8f4fa" />
    <rect x="34" y="124" width="100" height="8" rx="2" fill="#c8dce6" />
    <rect x="34" y="140" width="130" height="8" rx="2" fill="#c8dce6" />
    <rect x="34" y="156" width="90" height="8" rx="2" fill="#c8dce6" />
    <rect x="34" y="182" width="70" height="18" rx="3" fill="#046999" opacity="0.9" />
    <text x="69" y="195" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">
      Forms / UI
    </text>
    <text x="110" y="228" textAnchor="middle" fill="#4a5568" fontSize="9" fontWeight="600" letterSpacing="0.5">
      Stays on each PC
    </text>

    {/* ── Connector line and label ── */}
    <path d="M200 135 H 280" stroke="#046999" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
    <circle cx="240" cy="135" r="3" fill="#046999" opacity="0.6" />

    {/* ── Back end, hosted in Azure ── */}
    <rect x="280" y="50" width="180" height="170" rx="6" fill="#0d1b2a" />
    <rect x="280" y="50" width="180" height="26" rx="6" fill="url(#asp-headerGrad)" />
    <text x="370" y="68" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" letterSpacing="0.5">
      Back End — Azure SQL
    </text>

    {/* Table rows inside the dark back-end card */}
    {[92, 116, 140, 164].map((y, i) => (
      <rect
        key={y}
        x="296"
        y={y}
        width="148"
        height="16"
        rx="2"
        fill="rgba(255,255,255,0.08)"
        opacity={i === 0 ? 1 : 0.7}
      />
    ))}
    <rect x="296" y="188" width="60" height="16" rx="8" fill="#27ae60" opacity="0.85" />
    <text x="326" y="199" textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="700">
      LIVE
    </text>
    <text x="370" y="230" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontWeight="600" letterSpacing="0.5">
      Hosted &amp; accessible anywhere
    </text>

    {/* ── Small location pins below, "any location" cue ── */}
    {[
      { x: 60, label: "Office" },
      { x: 130, label: "Home" },
      { x: 200, label: "On the road" },
    ].map(({ x, label }) => (
      <g key={label} transform={`translate(${x},260)`}>
        <path
          d="M8 0c-4.4 0-8 3.4-8 7.6 0 5.7 8 14.4 8 14.4s8-8.7 8-14.4C16 3.4 12.4 0 8 0z"
          fill="#046999"
          opacity="0.75"
        />
        <circle cx="8" cy="7.6" r="3" fill="#fff" />
        <text x="8" y="36" textAnchor="middle" fill="#4a5568" fontSize="8" fontWeight="600">
          {label}
        </text>
      </g>
    ))}
  </svg>
);
