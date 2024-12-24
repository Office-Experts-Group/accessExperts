export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Microsoft Access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Access is a part of the Microsoft 365 suite of products and is Microsoft's tool to develop databases. In Microsoft Access you can develop a user-friendly front end using forms and rich reports and functionality through using queries and VBA code. Microsoft Access is ideal for managing, storing and analysing large data sets so can be well placed as a tool for creating business applications.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of services do you provide using Microsoft Access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using Microsoft Access, Office Experts provides a variety of services to assist your business. These range from building databases from scratch, to managing and enhancing existing solutions, as well as migrating databases to the cloud or providing additional maintenance and support services.",
      },
    },
    {
      "@type": "Question",
      name: "What can I build using Microsoft Access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Access can be used to build databases that achieve a variety of business needs. Common use cases involve inventory or customer management systems, order processing systems and data entry tools. Access's advanced query and reporting capabilities also allow for advanced data analysis and visualisation as well as automation of tasks through the use of macros and VBA.",
      },
    },
    {
      "@type": "Question",
      name: "How does Microsoft Access compare to Microsoft Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Access and Excel are both powerful tools for managing data, but Microsoft Access is ideal for creating and managing large databases while Microsoft Excel is ideal for data analysis and visualisation using charts, pivot tables and formulas.",
      },
    },
    {
      "@type": "Question",
      name: "Is Microsoft Access cloud based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While Microsoft Access is primarily a desktop database management system, it offers some cloud integration methods, specifically through storing data in a SQL Server with Azure or on SharePoint online. This allows for easy access and leveraging cloud benefits while still using an Access front end. Additionally, you can also save your Access databases in OneDrive or SharePoint for sharing across devices.",
      },
    },
  ],
};

export default faqSchema;
