import React from "react";

export const metadata = {
  // Basic metadata
  title: "Request a Quote | Access Experts",
  description:
    "Submit your Microsoft Access database project requirements, specifications, and files for a detailed quote. Our experienced Access developers provide custom solutions, integration services, and database consulting.",

  // OpenGraph
  openGraph: {
    title: "Request a Quote | Access Experts",
    description:
      "Submit your Microsoft Access database project requirements, specifications, and files for a detailed quote. Our experienced Access developers provide custom solutions, integration services, and database consulting.",
    url: "https://www.accessexperts.com.au/contact-us/request-a-quote",
  },

  // Additional metadata
  keywords: [
    // Core Services
    "Microsoft Access custom database quote",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote for Microsoft Access Database Services",
    description:
      "Get a customised quote for your Microsoft Access database needs. From development and integration to troubleshooting and upgrades - our experts deliver tailored solutions with competitive pricing.",
  },
  alternatives: {
    canonical: "/contact-us/request-a-quote",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
