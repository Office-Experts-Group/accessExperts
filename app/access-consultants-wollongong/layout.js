import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Wollongong",
  description:
    "Trusted Microsoft Access consultants serving Wollongong and the Illawarra. Professional database design, VBA development, and data integration tailored to your business needs.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Wollongong",
    description:
      "Trusted Microsoft Access consultants serving Wollongong and the Illawarra. Professional database design, VBA development, and data integration tailored to your business needs.",

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
      "Trusted Microsoft Access consultants serving Wollongong and the Illawarra. Professional database design, VBA development, and data integration tailored to your business needs.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
