import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Richmond",
  description:
    "Expert Microsoft Access consultants in Richmond specialising in development, integration and support. Access Experts have provided custom solutions for over 25yrs",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Richmond",
    description:
      "Expert Microsoft Access consultants in Richmond specialising in development, integration and support. Access Experts have provided custom solutions for over 25yrs",
    url: "https://www.accessexperts.com.au/access-consultants-richmond",
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
    "Microsoft Access consultants Richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Richmond",
    description:
      "Expert Microsoft Access consultants in Richmond specialising in development, integration and support. Access Experts have provided custom solutions for over 25yrs",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-richmond",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
