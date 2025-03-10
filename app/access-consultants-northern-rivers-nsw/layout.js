import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Northern Rivers, NSW",
  description:
    "Expert Microsoft Access consultants in Northern Rivers, NSW specialising in development, integration and support. Access Experts have provided custom solutions for over 25yrs",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Northern Rivers, NSW",
    description:
      "Expert Microsoft Access consultants in Northern Rivers, NSW specialising in development, integration and support. Access Experts have provided custom solutions for over 25yrs",
    url: "https://www.accessexperts.com.au/access-consultants-northern-rivers-nsw",
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
    "Microsoft Access consultants Northern Rivers, NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Northern Rivers, NSW",
    description:
      "Expert Microsoft Access consultants in Northern Rivers, NSW specialising in development, integration and support. Access Experts have provided custom solutions for over 25yrs",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-northern-rivers-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
