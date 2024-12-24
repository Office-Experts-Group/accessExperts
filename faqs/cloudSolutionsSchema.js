export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are my options to use Microsoft Access on the cloud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use Microsoft Access on the cloud by integrating it with Microsoft Dataverse or SQL Server through Azure. This allows for users to access the data through a Microsoft Access front end tool, ensuring a user friendly environment whilst ensuring the data remains accessible online and on the cloud in a secure environment.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits for using Microsoft Access on the cloud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Access on the cloud facilitates easy collaboration and communication, enhances data security and allows for remote access. Using Microsoft Access on the cloud allows for mutiple users use an Access database at the same time with no loss of data.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to use Microsoft Access on the cloud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you don't have to use Microsoft Access on the cloud. Access works as a standalone desktop application which allows you to create, manage, and analyze databases locally on your computer. However, utilising cloud integration features can enhance accessibility and team collaboration, making it easier to share and access data remotely.",
      },
    },
  ],
};

export default faqSchema;
