import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Canberra",
  description:
    "Australia-wide Microsoft Access consulting team with consultants servicing Canberra and the ACT. Experienced in government, enterprise, reporting, secure data management, database development, and system integration.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Canberra",
    description:
      "Australia-wide Microsoft Access consulting team with consultants servicing Canberra and the ACT. Experienced in government, enterprise, reporting, secure data management, database development, and system integration.",

    url: "https://www.accessexperts.com.au/access-consultants-canberra",
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
    "Microsoft Access consultants Canberra",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Canberra",
    description:
      "Australia-wide Microsoft Access consulting team with consultants servicing Canberra and the ACT. Experienced in government, enterprise, reporting, secure data management, database development, and system integration.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-canberra",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
