import React from "react";

export const metadata = {
  // Basic metadata
  title: "Is Access Right for your Company? | Access Experts",
  description:
    "Professional consultation on Microsoft Access database solutions for business. Expert analysis of data management needs, user requirements, and system compatibility.",

  // OpenGraph
  openGraph: {
    title: "Is Access Right for your Company? | Access Experts",
    description:
      "Professional consultation on Microsoft Access database solutions for business. Expert analysis of data management needs, user requirements, and system compatibility.",
    url: "https://www.accessexperts.com.au/is-access-right-for-your-company",
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
  keywords: ["Custom Access database development"],
  alternates: {
    canonical: "/is-access-right-for-your-company",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company",
      },
      {
        url: "https://www.excelexperts.com.au/services/microsoft-access/is-access-right-for-your-company",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
