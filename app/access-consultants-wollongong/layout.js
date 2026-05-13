import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Wollongong",
  description:
    "Australia-wide Microsoft Access consulting team with consultants servicing Wollongong and the Illawarra. Database design, VBA development, integration, and support tailored for local businesses with 25+ years’ experience.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Wollongong",
    description:
      "Australia-wide Microsoft Access consulting team with consultants servicing Wollongong and the Illawarra. Database design, VBA development, integration, and support tailored for local businesses with 25+ years’ experience.",

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
      "Australia-wide Microsoft Access consulting team with consultants servicing Wollongong and the Illawarra. Database design, VBA development, integration, and support tailored for local businesses with 25+ years’ experience.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
