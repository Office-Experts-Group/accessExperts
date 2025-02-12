import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Database Upgrades and Migration | Access Experts",
  description:
    "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimise database performance with minimal disruption.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Access Database Upgrades & Migration Services | Access Experts",
    description:
      "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimise database performance with minimal disruption.",
    url: "https://www.accessexperts.com.au/upgrades-and-migration",
  },

  // Additional metadata
  keywords: [
    "Microsoft Access database migration",
    "Microsoft Access upgrade help",
    // Core upgrade/migration services
    // "Access database version upgrade specialist",
    // "Legacy Access database migration",
    // "Database corruption repair services",

    // // Specific migration types
    // "Access to SQL Server migration",
    // "Access database cloud migration",
    // "Azure database migration services",
    // "Access multi-user database conversion",

    // // Version-specific
    // "Access 2010 to 2019 upgrade",
    // "Access 97 database conversion",
    // "Access 2000 database migration",
    // "Access 365 compatibility upgrade",

    // // Problem-specific
    // "Slow Access database optimization",
    // "Access database corruption repair",
    // "Database splitting and optimization",
    // "Access performance troubleshooting",

    // // Solution-specific
    // "Access backend migration SQL Server",
    // "Access Azure cloud integration",
    // "SharePoint database migration",
    // "Access database upsizing services",

    // // Industry-specific
    // "Enterprise Access database migration",
    // "Multi-location database upgrade",
    // "Secure database migration services",
    // "Critical database upgrade planning",

    // // Technology combinations
    // "Access SQL Server integration",
    // "Azure cloud database migration",
    // "SharePoint Access integration",
    // "Office 365 database migration",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Access Database Upgrades & Migration Services | Access Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specialising in version upgrades, SQL Server migrations, cloud transitions, and performance optimization.",
  },
  alternates: {
    canonical: "https://accessexperts.com.au/upgrades-and-migration",
    languages: {
      en: "https://accessexperts.com.au/upgrades-and-migration",
    },
    alternates: [
      {
        url: "https://officeexperts.com.au/services/microsoft-access/upgrades-and-migration",
      },
      {
        url: "https://excelexperts.com.au/services/microsoft-access/upgrades-and-migration",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
