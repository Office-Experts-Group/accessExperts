import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Melbourne",
  description:
    "Melbourne's trusted Microsoft Access specialists with 25+ years' experience. We deliver tailored database solutions, VBA automation, and integration services for Victorian businesses.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Melbourne",
    description:
      "Melbourne's trusted Microsoft Access specialists with 25+ years' experience. We deliver tailored database solutions, VBA automation, and integration services for Victorian businesses.",

    url: "https://www.accessexperts.com.au/access-consultants-melbourne",
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
    "Microsoft Access consultants Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Melbourne",
    description:
      "Melbourne's trusted Microsoft Access specialists with 25+ years' experience. We deliver tailored database solutions, VBA automation, and integration services for Victorian businesses.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-melbourne",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
