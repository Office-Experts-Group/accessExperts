import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Wollongong",
  description:
    "Microsoft Access consultants in Wollongong with 25+ years' experience. Custom database development, integration, and support services.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Wollongong",
    description:
      "Microsoft Access consultants in Wollongong with 25+ years' experience. Custom database development, integration, and support services.",
    url: "https://www.accessexperts.com.au/access-consultants-wollongong",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "Microsoft Access consultants Wollongong",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Wollongong",
    description:
      "Microsoft Access consultants in Wollongong with 25+ years' experience. Custom database development, integration, and support services.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
