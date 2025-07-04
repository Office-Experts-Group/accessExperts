import React from "react";

export const metadata = {
  // Basic metadata
  title: "Is Access Right for your Company? | Access Experts",
  description:
    "Not sure if Microsoft Access is right for your business? We offer expert analysis of data needs, users, and system compatibility.",

  // OpenGraph
  openGraph: {
    title: "Is Access Right for your Company? | Access Experts",
    description:
      "Not sure if Microsoft Access is right for your business? We offer expert analysis of data needs, users, and system compatibility.",
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
    type: "website",
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
