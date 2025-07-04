import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Database Upgrades and Migration",
  description:
    "Access database upgrades and migrations made easy. Fix compatibility issues, modernise your system, and improve performance with minimal downtime.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Database Upgrades & Migration Services",
    description:
      "Access database upgrades and migrations made easy. Fix compatibility issues, modernise your system, and improve performance with minimal downtime.",
    url: "https://www.accessexperts.com.au/upgrades-and-migration",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Access Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: ["Microsoft Access database migration"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Access Database Upgrades & Migration Services | Access Experts",
    description:
      "Access database upgrades and migrations made easy. Fix compatibility issues, modernise your system, and improve performance with minimal downtime.",
  },
  alternates: {
    canonical: "/upgrades-and-migration",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/upgrades-and-migration",
      },
      {
        url: "https://www.excelexperts.com.au/services/microsoft-access/upgrades-and-migration",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
