import React from "react";

export const metadata = {
  // Basic metadata
  title: "Integrate Microsoft Access with Power BI | Access Experts",
  description:
    "Integrate Microsoft Access with Power BI to create interactive dashboards and modern analytics.",

  // OpenGraph
  openGraph: {
    title: "Integrate Microsoft Access with Power BI | Access Experts",
    description:
      "Integrate Microsoft Access with Power BI to create interactive dashboards and modern analytics.",
    url: "https://www.accessexperts.com.au/integrate-access-with-power-bi",
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
  keywords: ["access power bi integration australia"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Integrate Microsoft Access with Power BI | Access Experts",
    description:
      "Integrate Microsoft Access with Power BI to create interactive dashboards and modern analytics.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical:
      "https://www.accessexperts.com.au/integrate-access-with-power-bi",
  },
};

export default function IntegrateAccessWithPowerBILayout({ children }) {
  return <>{children}</>;
}
