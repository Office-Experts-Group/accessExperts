import React from "react";

import MicrosoftAccessAlternatives from "./(components)/MicrosoftAccessAlternatives";

export default function Page() {
  // Article Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Microsoft Access Alternatives 2026: Expert Guide to Database Migration",
    description:
      "Comprehensive guide to Microsoft Access alternatives including SQL Server, Power Platform, and custom solutions. Expert advice on choosing the right database migration path.",
    image: "https://www.accessexperts.com.au/logo.png",
    datePublished: "2026-01-15T00:00:00.000Z",
    dateModified: "2026-01-15T00:00:00.000Z",
    author: {
      "@type": "Person",
      name: "Daniel Thomas",
    },
    publisher: {
      "@type": "Organization",
      name: "Access Experts",
      url: "https://www.accessexperts.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://www.accessexperts.com.au/logo.png",
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.accessexperts.com.au/blog/microsoft-access-alternatives-guide",
    },
  };

  // FAQ Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best alternative to Microsoft Access in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best alternative depends on your specific needs. SQL Server is ideal for scalability and enterprise requirements, Microsoft Power Platform works well for organisations needing mobile access within the Microsoft ecosystem, and cloud-based SaaS solutions offer simplicity for straightforward database needs. A professional assessment is recommended to determine the right solution for your situation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I still use Microsoft Access in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Microsoft Access is still fully supported and works well for many Australian businesses. Access 2021 and Microsoft 365 versions integrate with modern tools like Power BI, Azure, and SharePoint. In many cases, modernising your existing Access database is more cost-effective than migrating to a completely new platform.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to migrate from Microsoft Access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Migration costs range from $3,000 to $150,000+ AUD depending on database complexity and chosen solution. Simple SQL Server migrations might cost $7,500-$45,000, Power Platform rebuilds typically run $15,000-$75,000, and custom web applications can exceed $45,000. A professional database assessment ($750-$2,250) provides accurate estimates for your specific situation.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Access database migration take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Migration timelines vary from 2 weeks to 12 months depending on complexity. Simple backend migrations to SQL Server take 4-8 weeks, Power Platform rebuilds require 8-16 weeks, and custom web applications typically take 3-12 months. Phased migrations help minimise disruption to your business operations.",
        },
      },
      {
        "@type": "Question",
        name: "Will my users need retraining after migration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "User retraining depends on your migration approach. SQL Server backend with Access frontend requires minimal retraining, while migrations to Power Apps or custom web applications require comprehensive training programs. Budget 10-20 hours of training per user for significant interface changes.",
        },
      },
      {
        "@type": "Question",
        name: "What are the main limitations of Microsoft Access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Microsoft Access has a 2GB database size limit, supports maximum 255 concurrent connections (though performance degrades beyond 15-20 active users), lacks true cloud-native capabilities, is Windows-only, and has limited API integration options. However, many of these limitations can be addressed through optimisation or hybrid solutions before requiring full migration.",
        },
      },
      {
        "@type": "Question",
        name: "Is SQL Server better than Access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SQL Server excels at scalability, security, and multi-user performance, handling terabytes of data and thousands of concurrent users. However, Access remains superior for rapid development, ease of use, and cost-effectiveness for small teams. Many businesses benefit from a hybrid approach using SQL Server backend with Access frontend.",
        },
      },
      {
        "@type": "Question",
        name: "Can Microsoft Access connect to SQL Server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Microsoft Access works seamlessly with SQL Server through linked tables. This hybrid approach allows you to keep Access's familiar interface while leveraging SQL Server's scalability and performance. It's often the most cost-effective migration path, requiring minimal user retraining while solving capacity and concurrency issues.",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.accessexperts.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.accessexperts.com.au/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Microsoft Access Alternatives Guide",
        item: "https://www.accessexperts.com.au/blog/microsoft-access-alternatives-guide",
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* The actual blog content */}
      <MicrosoftAccessAlternatives />
    </>
  );
}
