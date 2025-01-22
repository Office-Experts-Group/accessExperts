import React from "react";
import dynamic from "next/dynamic";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false, // Client-side only
});

const Footer = dynamic(() => import("./(components)/Footer"), {
  ssr: true, // We want this server rendered but loaded dynamically
});

const Copyright = dynamic(() => import("../components/Copyright"));
const ScrollBtn = dynamic(() => import("../components/ScrollBtn"), {
  ssr: false, // Client-side only as it depends on scroll
});

import "./global.css";

const aptos = localFont({
  src: [
    {
      path: "../public/fonts/aptos/Aptos.ttf",

      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-garamond",
});

export const metadata = {
  // Basic metadata
  title:
    "Access Experts – Microsoft Access Database Design, Development and Consulting",
  description:
    "Our Australia-wide, cross-industry Access database consultants deliver prompt, quality service with competitive pricing. Specialising in database design, development, integration, support, data manipulation and reporting solutions.",

  // OpenGraph
  openGraph: {
    title:
      "Access Experts | Microsoft Access Database Consulting & Development",
    description:
      "Expert Microsoft Access database consultants delivering custom database solutions, integration services, and support across Australia. specialised in data management, reporting, and system optimisation.",
    url: "https://www.accessexperts.com.au/",
    siteName: "Access Experts",
    images: [
      {
        url: "https://www.accessexperts.com.au/logo.webp",
        width: 1200,
        height: 620,
        alt: "Access Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    "Microsoft Access database consulting",
    "Microsoft Access development",
    "Access consulting",
    "Access professionals",
    "Access consultants",
    "Access database experts",
    "Microsoft Access developers",
    "Access database consultants",
    // Core Access Services
    // "Custom Access database development",
    // "Access database integration services",
    // "Access database maintenance support",

    // // Specific Solutions
    // "Access Azure cloud database migration",
    // "Access SQL Server integration",
    // "Access SharePoint connectivity",
    // "Access database version upgrades",
    // "Access VBA macro development",
    // "Access database corruption repair",

    // // specialised Features
    // "Access multi-user database setup",
    // "Access cloud-based solutions",
    // "Access database performance optimization",
    // "Access data migration services",
    // "Access database security implementation",

    // // Integration Specific
    // "Access financial system integration",
    // "Access CRM database integration",
    // "Access accounting package integration",
    // "Access Office 365 integration",
    // "Access cloud backup solutions",

    // // Location Based
    // "Access database consultants Sydney",
    // "Access database experts Melbourne",
    // "Access developers Brisbane",
    // "Access consulting Perth",
    // "Access database services Gold Coast",

    // // Industry Solutions
    // "Access inventory management systems",
    // "Access customer database solutions",
    // "Access reporting automation",
    // "Access data analysis tools",
    // "Access business process automation",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Access Experts | Microsoft Access Database Consulting & Development",
    description:
      "Expert Microsoft Access database consultants delivering custom database solutions, integration services, and support across Australia. specialised in data management, reporting, and system optimization.",
    images: ["https://www.accessexperts.com.au/logo.webp"],
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
      <body className={`${aptos.variable} ${garamond.variable}`}>
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
