import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Client Testimonials | Access Experts - Microsoft Access Database Solutions",
  description:
    "Read what our clients say about their experience with Access Experts. Discover how our database solutions have helped businesses across Australia improve their data management and efficiency.",

  // OpenGraph
  openGraph: {
    title: "Client Testimonials | Access Experts - Database Solutions",
    description:
      "Read trusted reviews from businesses we've helped with Microsoft Access database solutions. Our clients share their experiences with custom database development, integration, and support services.",
    url: "https://www.accessexperts.com.au/client-testimonials/",
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
    // Review-focused keywords
    "Access database consultant reviews",
    "Microsoft Access developer testimonials",
    "Database solution case studies",
    "Access Experts client feedback",

    // Solution-specific reviews
    "Custom database solution reviews",
    "Access integration project testimonials",
    "Database migration success stories",
    "Access automation client feedback",

    // Location-specific testimonials
    "Database consultant reviews Australia",
    "Access developer testimonials Sydney",
    "Database solution reviews Melbourne",
    "Access Experts feedback Brisbane",

    // Industry feedback
    "Business database solution reviews",
    "Enterprise Access database testimonials",
    "Database consulting client stories",
    "Access development project reviews",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Access Experts - Database Solutions",
    description:
      "Read trusted reviews from businesses we've helped with Microsoft Access database solutions. Our clients share their experiences with custom database development, integration, and support services.",
    images: [
      "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.accessexperts.com.au/client-testimonials/",
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
