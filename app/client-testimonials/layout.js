import React from "react";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials | Access Experts",
  description:
    "Read trusted reviews from businesses we've helped with Microsoft Access database solutions. Our clients share their experiences with custom database development, integration, and support services.",

  // OpenGraph
  openGraph: {
    title: "Client Testimonials | Access Experts",
    description:
      "Read trusted reviews from businesses we've helped with Microsoft Access database solutions. Our clients share their experiences with custom database development, integration, and support services.",
    url: "https://www.accessexperts.com.au/client-testimonials",
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
    // Review-focused keywords
    "Microsoft Access consultant reviews",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Access Experts",
    description:
      "Read trusted reviews from businesses we've helped with Microsoft Access database solutions. Our clients share their experiences with custom database development, integration, and support services.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/client-testimonials",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
