import sgMail from "@sendgrid/mail";
import { getEmailSignature } from "../../../utils/emailSignature";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const VALID_FILE_TYPES = [
  // Documents
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.oasis.opendocument.text",
  "application/rtf",
  "text/plain",
  "text/csv",
  "text/html",
  "text/markdown",

  // Images
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/svg+xml",
  "image/tiff",
  "image/avif",

  // Archives (if needed)
  "application/zip",
  "application/x-rar-compressed",

  // Spreadsheets
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.oasis.opendocument.spreadsheet",
];

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      file,
      filename,
      type,
      name,
      email,
      phone,
      message,
      operatingSystem,
      softwareVersions,
      website,
      honeypot,
    } = body;

    if (honeypot) {
      return new Response("Bot submission detected", { status: 400 });
    }

    // File validation
    if (
      file &&
      (!VALID_FILE_TYPES.includes(type) ||
        (typeof file === "string" &&
          Buffer.byteLength(file, "base64") > MAX_FILE_SIZE))
    ) {
      return new Response("Invalid file type or size", { status: 400 });
    }

    // Destructure file properties correctly
    const {
      file: { content: fileContent, name: fileName, type: fileType } = {},
      ...rest
    } = body;

    // Create attachments array if file exists
    const attachments = fileContent
      ? [
          {
            content: fileContent,
            filename: fileName,
            type: fileType,
          },
        ]
      : [];

    const { htmlSignature, textSignature } = getEmailSignature();

    const clientTextMessage = `
      You have received a new quote request from ${name} (${email}).
      Phone: ${phone || "Not provided"}.
      Operating System: ${operatingSystem || "Not provided"}.
      Software Versions: ${softwareVersions || "Not provided"}.
      Website: ${website || "Not provided"}.
      Message: ${message}

      ${textSignature}
    `;

    const customerTextMessage = `
      Hi ${name},

      Thank you for reaching out. We've received your quote request:

      Operating System: ${operatingSystem || "Not provided"}.
      Software Versions: ${softwareVersions || "Not provided"}.
      Website: ${website || "Not provided"}.
      Message: ${message}

      We'll get back to you soon!

      ${textSignature}
    `;

    const clientHtmlMessage = `
      <p>You have received a new quote request from <strong>${name}</strong> (${email}).</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Operating System:</strong> ${
        operatingSystem || "Not provided"
      }</p>
      <p><strong>Software Versions:</strong> ${
        softwareVersions || "Not provided"
      }</p>
      <p><strong>Website:</strong> ${website || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      ${htmlSignature}
    `;

    const customerHtmlMessage = `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out. We've received your quote request:</p>
      <p><strong>Operating System:</strong> ${
        operatingSystem || "Not provided"
      }</p>
      <p><strong>Software Versions:</strong> ${
        softwareVersions || "Not provided"
      }</p>
      <p><strong>Website:</strong> ${website || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p>We'll get back to you soon!</p>
      ${htmlSignature}
    `;

    // Send email consult@accessexperts.com.au
    await sgMail.send({
      from: "consult@officeexperts.com.au",
      to: "consult@accessexperts.com.au",
      subject: "New Quote Request Submission",
      text: clientTextMessage,
      html: clientHtmlMessage,
      attachments,
    });

    // Send email joshua@officeexperts.com.au
    await sgMail.send({
      from: "consult@officeexperts.com.au",
      to: "joshua@officeexperts.com.au",
      subject: "New Quote Request Submission",
      text: clientTextMessage,
      html: clientHtmlMessage,
      attachments,
    });

    // Send confirmation email to the customer
    await sgMail.send({
      from: "consult@accessexperts.com.au",
      to: email,
      subject: "Thank you for your quote request!",
      text: customerTextMessage,
      html: customerHtmlMessage,
    });

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
