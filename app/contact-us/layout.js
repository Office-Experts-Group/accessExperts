import React from "react";

export const metadata = {
  // Basic metadata
  title: "Contact Us | Access Experts ",
  description:
    "Contact our Microsoft Access database experts for consulting, development, and support services. Available for projects across Australia with competitive pricing and prompt service.",

  // OpenGraph
  openGraph: {
    title: "Contact Us | Access Experts ",
    description:
      "Get in touch with our Microsoft Access database specialists for custom development, integration, support, and consulting services across Australia.",
    url: "https://www.accessexperts.com.au/contact-us",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
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
    // Core Access services
    "Microsoft Access consultant contact",
    // "Access database expert inquiry",
    // "Database development quote",
    // "Access consulting services Australia",

    // // Location-specific
    // "Access database consultants Sydney",
    // "Microsoft Access experts Melbourne",
    // "Database developers Brisbane",
    // "Access consulting Perth",

    // // Service-specific long tail
    // "Microsoft Access database migration consulting",
    // "Custom Access form development quote",
    // "Database integration specialist contact",
    // "Access VBA programming consultation",
    // "Database upgrade assessment request",

    // // Specific solutions
    // "Access SQL Server integration quote",
    // "Database corruption repair inquiry",
    // "Access Azure cloud migration contact",
    // "Multi-user database setup consultation",
    // "Access SharePoint integration quote",

    // // Support-specific
    // "Access database emergency support",
    // "Database performance optimization contact",
    // "Access troubleshooting consultation",
    // "Database maintenance quote request",
    // "Access version upgrade assessment",

    // // Business process
    // "Access workflow automation quote",
    // "Custom reporting solutions inquiry",
    // "Database security audit request",
    // "Access data migration consultation",
    // "Legacy database modernization quote",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@AccessExperts",
    title:
      "Contact Access Experts – Microsoft Access Database Consulting & Development",
    description:
      "Get in touch with our Microsoft Access database specialists for custom development, integration, support, and consulting services across Australia.",
    images: ["/logo.png"],
  },

  // Additional tags
  alternates: {
    canonical: "https://accessexperts.com.au/contact-us",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
