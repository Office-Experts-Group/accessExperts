import React from "react";

export const metadata = {
  // Basic metadata
  title: "Your Access Database Isn't Dead — It Just Needs a Cloud Strategy",
  description:
    "Don't abandon your Microsoft Access database. Learn how to modernise it with cloud technologies like Azure SQL, SharePoint, and Power Platform while keeping your existing forms, reports, and business logic intact.",

  // OpenGraph
  openGraph: {
    title: "Your Access Database Isn't Dead — It Just Needs a Cloud Strategy",
    description:
      "Don't abandon your Microsoft Access database. Learn how to modernise it with cloud technologies like Azure SQL, SharePoint, and Power Platform while keeping your existing forms, reports, and business logic intact.",
    url: "https://www.accessexperts.com.au/blog/your-access-database-needs-a-cloud-strategy",
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
  keywords: ["Access database cloud strategy"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Your Access Database Isn't Dead — It Just Needs a Cloud Strategy",
    description:
      "Don't abandon your Microsoft Access database. Learn how to modernise it with cloud technologies like Azure SQL, SharePoint, and Power Platform while keeping your existing forms, reports, and business logic intact.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/your-access-database-needs-a-cloud-strategy",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
