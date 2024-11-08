import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Request a Quote – Access Experts – Microsoft Access Database Development",
  description:
    "Submit your Microsoft Access database project requirements, specifications, and files for a detailed quote. Our experienced Access developers provide custom solutions, integration services, and database consulting.",

  // OpenGraph
  openGraph: {
    title: "Request a Quote for Microsoft Access Database Services",
    description:
      "Get a customized quote for your Microsoft Access database needs. From development and integration to troubleshooting and upgrades - our experts deliver tailored solutions with competitive pricing.",
    url: "https://www.accessexperts.com.au/contact-us/request-a-quote/",
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
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Core Services
    "Microsoft Access database quote",

    // Specific Solutions
    "Access SQL Server integration quote",
    "Access database migration estimate",
    "Access Azure cloud integration cost",
    "VBA macro development pricing",

    // Service-specific long tail
    "Access database upgrade consultation",
    "Legacy Access database migration quote",
    "Multi-user Access database setup",
    "Access SharePoint integration pricing",

    // Support Services
    "Access database maintenance quote",
    "Database backup solution pricing",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote for Microsoft Access Database Services",
    description:
      "Get a customized quote for your Microsoft Access database needs. From development and integration to troubleshooting and upgrades - our experts deliver tailored solutions with competitive pricing.",
    images: [
      "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.accessexperts.com.au/contact-us/request-a-quote/",
  robots: {
    index: false,
    follow: false,
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
