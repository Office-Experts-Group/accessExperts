import React from "react";

export const metadata = {
  // Basic metadata
  title: "3rd Party Product Integration | Access Experts",
  description:
    "Professional 3rd-party product integration for Microsoft Access. Incorporate your database throughout your business workflows with expert advice and affordable pricing.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Integration Solutions | Access Experts Australia",
    description:
      "Professional 3rd-party product integration for Microsoft Access. Incorporate your database throughout your business workflows with expert advice and affordable pricing.",
    url: "https://www.accessexperts.com.au/3rd-party-product-integration",
    siteName: "Access Experts",
    images: [
      {
        url: "https://www.accessexperts.com.au/logo.png",
        width: 1200,
        height: 630,
        alt: "Access Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: ["Access integration services"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@MSOfficeExperts",
    title: "Microsoft Access Integration Solutions | Access Experts Australia",
    description:
      "Professional 3rd-party product integration for Microsoft Access. Incorporate your database throughout your business workflows with expert advice and affordable pricing.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/3rd-party-product-integration",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
