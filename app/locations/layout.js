import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Locations",
  description:
    "Microsoft Access consulting services available across Australia. Remote support and on-site consultants in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and more locations.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Locations",
    description:
      "Microsoft Access consulting services available across Australia. Remote support and on-site consultants in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and more locations.",
    url: "https://www.accessexperts.com.au/locations",
    siteName: "Word Experts",
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
    // Location-based
    "Microsoft Access consultant locations Australia",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Access Experts Consultants Locations",
    description:
      "Microsoft Access consulting services available across Australia. Remote support and on-site consultants in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and more locations.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/locations",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
