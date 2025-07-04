import React from "react";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials | Access Experts",
  description:
    "Discover how clients rate our Microsoft Access database services, from custom development to integration and support across a variety of industries.",

  // OpenGraph
  openGraph: {
    title: "Client Testimonials | Access Experts",
    description:
      "Discover how clients rate our Microsoft Access database services, from custom development to integration and support across a variety of industries.",
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
    "Microsoft Access client testimonials",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Access Experts",
    description:
      "Discover how clients rate our Microsoft Access database services, from custom development to integration and support across a variety of industries.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/client-testimonials",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
