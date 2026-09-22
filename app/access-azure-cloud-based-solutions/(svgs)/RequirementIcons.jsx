// app/access-azure-cloud-based-solutions/(svgs)/RequirementIcons.jsx

// A small set of single-purpose line icons used on the AzureRequirements
// cards. Kept in one file since each icon is tiny and shares a stroke style.

export const WindowsIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 6.5 12 5.3v6.7H4zm0 15 8 1.2v-6.7H4zm9 1.3 11 1.6v-9.6H13zm0-16.3v9.4h11V5z"
      fill="#046999"
    />
  </svg>
);

export const InstallIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="4"
      y="4"
      width="20"
      height="20"
      rx="3"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M14 9v8M10.5 14 14 17.5 17.5 14"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 20.5h10"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const DriverIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="14" cy="14" r="9.5" stroke="#046999" strokeWidth="1.6" />
    <path
      d="M14 8.5v3M14 16.5v3M8.5 14h3M16.5 14h3"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="14" cy="14" r="2.5" fill="#046999" />
  </svg>
);

export const InternetIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="14" cy="14" r="9.5" stroke="#046999" strokeWidth="1.6" />
    <path
      d="M4.5 14h19M14 4.5c2.5 2.6 3.8 6 3.8 9.5s-1.3 6.9-3.8 9.5c-2.5-2.6-3.8-6-3.8-9.5s1.3-6.9 3.8-9.5Z"
      stroke="#046999"
      strokeWidth="1.4"
    />
  </svg>
);

export const SubscriptionIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="4.5"
      y="7"
      width="19"
      height="14"
      rx="2.5"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path d="M4.5 11.5h19" stroke="#046999" strokeWidth="1.6" />
    <path
      d="M8 16h6"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
