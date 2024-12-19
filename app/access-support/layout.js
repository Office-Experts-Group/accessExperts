import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Access: Help and Training – Access Experts – Database Solutions",
  description:
    "Expert Microsoft Access database consultants providing remote and onsite support, troubleshooting, training, and maintenance services. Available Australia-wide with competitive rates.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Help & Training | Access Database Experts",
    description:
      "Professional Microsoft Access database support and training services. Remote or onsite assistance for database issues, custom training, and expert consultancy.",
    url: "https://www.accessexperts.com.au/access-support/",
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
    // Core Access support services
    "Microsoft Access database troubleshooting",
    "Access database remote support services",
    "Professional Access database training",
    "Access database maintenance assistance",

    // Location-specific
    "Microsoft Access consultants Sydney",
    "Access database experts Melbourne",
    "Database support services Brisbane",
    "Access consulting Perth",

    // Service-specific long tail
    "Remote Access database error resolution",
    "Custom Access database training programs",
    "Microsoft Access VBA code review services",
    "Database performance optimization Access",
    "Access database upgrade assistance",

    // Task-specific
    "Access database corruption repair",
    "Microsoft Access data recovery services",
    "Access form development support",
    "Database query optimization Access",
    "Access report troubleshooting help",

    // Technology combinations
    "Access SQL Server integration support",
    "Microsoft 365 Access database sync",
    "SharePoint Access database connection",
    "Azure cloud Access database migration",

    // Specific solutions
    "Access multi-user database support",
    "Database security implementation Access",
    "Access automation script debugging",
    "Custom Access report development",
    "Database normalization consulting Access",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@AccessExperts",
    title: "Microsoft Access Help & Training | Access Database Experts",
    description:
      "Professional Microsoft Access database support and training services. Remote or onsite assistance for database issues, custom training, and expert consultancy.",
    images: [
      "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.accessexperts.com.au/access-support/",
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
