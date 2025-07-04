import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Support and Training | Microsoft Access ",
  description:
    "Microsoft Access support specialists offering remote and onsite help, troubleshooting, training, and maintenance Australia-wide.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Support and Training | Microsoft Access ",
    description:
      "Microsoft Access support specialists offering remote and onsite help, troubleshooting, training, and maintenance Australia-wide.",
    url: "https://www.accessexperts.com.au/access-support",
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
  keywords: ["Microsoft Access support"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@AccessExperts",
    title: "Microsoft Access Support and Training | Microsoft Access ",
    description:
      "Microsoft Access support specialists offering remote and onsite help, troubleshooting, training, and maintenance Australia-wide.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/access-support",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/access-support",
      },
      {
        url: "https://www.excelexperts.com.au/services/microsoft-access/access-support",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
