import React from "react";
import PropTypes from "prop-types";

import { Roboto } from "next/font/google";

import HeadTop from "../../../components/HeadTop";
import Header from "./(components)/Header";
import CookieConsent from "../../../components/CookieConsent";
import Footer from "./(components)/Footer";
import Copyright from "../../../components/Copyright";
import ScrollBtn from "../../../components/ScrollBtn";

import "./global.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // Basic metadata
  title:
    "Access Experts – Microsoft Access Database Design, Development and Consulting",
  description:
    "Our Australia-wide, cross-industry Access database consultants deliver prompt, quality service with competitive pricing. Specializing in database design, development, integration, support, data manipulation and reporting solutions.",

  // OpenGraph
  openGraph: {
    title:
      "Access Experts | Microsoft Access Database Consulting & Development",
    description:
      "Expert Microsoft Access database consultants delivering custom database solutions, integration services, and support across Australia. Specialized in data management, reporting, and system optimization.",
    url: "https://www.accessexperts.com.au/",
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
    // Core Access Services
    "Microsoft Access database consulting",
    "Custom Access database development",
    "Access database integration services",
    "Access database maintenance support",

    // Specific Solutions
    "Access Azure cloud database migration",
    "Access SQL Server integration",
    "Access SharePoint connectivity",
    "Access database version upgrades",
    "Access VBA macro development",
    "Access database corruption repair",

    // Specialized Features
    "Access multi-user database setup",
    "Access cloud-based solutions",
    "Access database performance optimization",
    "Access data migration services",
    "Access database security implementation",

    // Integration Specific
    "Access financial system integration",
    "Access CRM database integration",
    "Access accounting package integration",
    "Access Office 365 integration",
    "Access cloud backup solutions",

    // Location Based
    "Access database consultants Sydney",
    "Access database experts Melbourne",
    "Access developers Brisbane",
    "Access consulting Perth",
    "Access database services Gold Coast",

    // Industry Solutions
    "Access inventory management systems",
    "Access customer database solutions",
    "Access reporting automation",
    "Access data analysis tools",
    "Access business process automation",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Access Experts | Microsoft Access Database Consulting & Development",
    description:
      "Expert Microsoft Access database consultants delivering custom database solutions, integration services, and support across Australia. Specialized in data management, reporting, and system optimization.",
    images: [
      "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.accessexperts.com.au/",
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
  return (
    <html lang="en-AU">
      <body className={roboto.className}>
        <HeadTop />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Copyright />
        <ScrollBtn />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
