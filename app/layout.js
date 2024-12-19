import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";
import ResponsivePlaceholder from "../components/ResponsivePlaceholder";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false, // Client-side only
});

import Footer from "./(components)/Footer";

const Copyright = dynamic(() => import("../components/Copyright"), {
  loading: () => (
    <ResponsivePlaceholder
      desktopHeight={112}
      mobileHeight={80}
      showSpinner={false}
    />
  ),
  ssr: true,
});

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
  preload: true,
  display: "swap",
  variable: "--font-aptos",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-garamond",
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
      "Expert Microsoft Access database consultants delivering custom database solutions, integration services, and support across Australia. Specialised in data management, reporting, and system optimisation.",
    url: "https://www.accessexperts.com.au/",
    siteName: "Access Experts",
    images: [
      {
        url: "https://www.accessexperts.com.au/logo.jpg",
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
    "access consultant",
    "access consulting",
    "access contractor",
    "access developer",
    "access expert",
    "access professional",
    "access programmer",
    "access specialist",
    "access support",
    "database consultant",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Access Experts | Microsoft Access Database Consulting & Development",
    description:
      "Expert Microsoft Access database consultants delivering custom database solutions, integration services, and support across Australia. Specialised in data management, reporting, and system optimization.",
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
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "16x16" },
    ],
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

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
