import React from "react";

export const metadata = {
  // Basic metadata
  title: "Request a Quote | Access Experts",
  description:
    "Get a detailed quote for your Microsoft Access project. We offer custom development, integration, and professional consulting.",

  // OpenGraph
  openGraph: {
    title: "Request a Quote | Access Experts",
    description:
      "Get a detailed quote for your Microsoft Access project. We offer custom development, integration, and professional consulting.",
    url: "https://www.accessexperts.com.au/contact-us/request-a-quote",
  },

  // Additional metadata
  keywords: [
    // Core Services
    "Microsoft Access custom database quote",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote for Microsoft Access Database Services",
    description:
      "Get a detailed quote for your Microsoft Access project. We offer custom development, integration, and professional consulting.",
  },
  alternates: {
    canonical: "/contact-us/request-a-quote",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
