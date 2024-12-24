export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Microsoft Access integrate with other applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Microsoft Access can integrate with various applications, includng Microsoft Office apps like Excel, Word, and Outlook, as well as SQL Server, SharePoint, and other databases. Additionally, Microsoft Access can integrate with Microsoft Dataverse and Power Platform.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of integrating with other applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Integrating Microsoft Access with other applications streamlines data import and export processes, enhances efficiency and reduces manual effort while boosting productivity.",
      },
    },
  ],
};

export default faqSchema;
