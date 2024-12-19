import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Database Upgrades and Migration - Access Experts",
  description:
    "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimize database performance with minimal disruption.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Access Database Upgrades & Migration Services | Access Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specializing in version upgrades, SQL Server migrations, cloud transitions, and performance optimization.",
    url: "https://www.accessexperts.com.au/upgrades-and-migration/",
    siteName: "Access Experts",
    images: [
      {
        url: "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Access Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Core upgrade/migration services
    "Microsoft Access database migration services",
    "Access database version upgrade specialist",
    "Legacy Access database migration",
    "Database corruption repair services",

    // Specific migration types
    "Access to SQL Server migration",
    "Access database cloud migration",
    "Azure database migration services",
    "Access multi-user database conversion",

    // Version-specific
    "Access 2010 to 2019 upgrade",
    "Access 97 database conversion",
    "Access 2000 database migration",
    "Access 365 compatibility upgrade",

    // Problem-specific
    "Slow Access database optimization",
    "Access database corruption repair",
    "Database splitting and optimization",
    "Access performance troubleshooting",

    // Solution-specific
    "Access backend migration SQL Server",
    "Access Azure cloud integration",
    "SharePoint database migration",
    "Access database upsizing services",

    // Industry-specific
    "Enterprise Access database migration",
    "Multi-location database upgrade",
    "Secure database migration services",
    "Critical database upgrade planning",

    // Technology combinations
    "Access SQL Server integration",
    "Azure cloud database migration",
    "SharePoint Access integration",
    "Office 365 database migration",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Access Database Upgrades & Migration Services | Access Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specializing in version upgrades, SQL Server migrations, cloud transitions, and performance optimization.",
    images: [
      "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.accessexperts.com.au/upgrades-and-migration/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
