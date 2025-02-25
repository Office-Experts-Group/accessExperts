import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Database Upgrades and Migration",
  description:
    "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimise database performance with minimal disruption.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Database Upgrades & Migration Services",
    description:
      "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimise database performance with minimal disruption.",
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
    type: "article",
  },

  // Additional metadata
  keywords: [
    "Microsoft Access database migration",
    "Microsoft Access upgrade help",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Access Database Upgrades & Migration Services | Access Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specialising in version upgrades, SQL Server migrations, cloud transitions, and performance optimization.",
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
