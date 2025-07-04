import React from "react";

export const metadata = {
  // Basic metadata
  title: "Meet the Team | Access Experts",
  description:
    "Meet our expert Microsoft Access developers and consultants. Specialists in database design, integration, and business solutions Australia-wide.",

  // OpenGraph
  openGraph: {
    title: "Meet the Team | Access Experts",
    description:
      "Meet our expert Microsoft Access developers and consultants. Specialists in database design, integration, and business solutions Australia-wide.",
    url: "https://www.accessexperts.com.au/meet-the-team",
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
  keywords: ["Microsoft Access developers Australia"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Access Database Team | Access Experts Australia",
    description:
      "Meet our expert Microsoft Access developers and consultants. Specialists in database design, integration, and business solutions Australia-wide.",
  },

  // Additional tags
  alternates: {
    canonical: "/meet-the-team",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
