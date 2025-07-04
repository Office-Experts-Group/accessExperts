import React from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import AhrefsAnalytics from "../components/AhrefsAnalytics";
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
import ScrollIndicator from "../components/ScrollIndicator";

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
  title: "Microsoft Access Database Design, Development and Consulting",
  description:
    "Access database consultants Australia-wide. Experts in design, development, support, integration, reporting & data solutions.",
  alternates: {
    canonical: "https://www.accessexperts.com.au",
    alternate: [
      { url: "https://www.officeexperts.com.au/services/microsoft-access" },
    ],
  },
  // OpenGraph
  openGraph: {
    title:
      "Access Experts | Microsoft Access Database Consulting & Development",
    description:
      "Access database consultants Australia-wide. Experts in design, development, support, integration, reporting & data solutions.",
    url: "https://www.accessexperts.com.au",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 620,
        alt: "Access Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Google Search Console
  verification: {
    google: "NncXxsP6RdHFQ2RWy6ekT_WtaDPOk8DF5XZCYNPH_ww",
  },

  // Additional metadata
  keywords: ["Microsoft Access database consulting"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Access Experts | Microsoft Access Database Consulting & Development",
    description:
      "Access database consultants Australia-wide. Experts in design, development, support, integration, reporting & data solutions.",
    images: ["/logo.png"],
  },

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

  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.accessexperts.com.au"
      : "http://localhost:3000"
  ),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={`${aptos.variable} ${garamond.variable}`}>
        <AhrefsAnalytics />
        <HeadTop />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Copyright />
        <ScrollIndicator />
        <ScrollBtn />
      </body>
    </html>
  );
}
