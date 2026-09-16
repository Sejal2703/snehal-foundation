const nodemailer = require("nodemailer");

const createTransporter = () => {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};


const sendContactNotification = async ({
  name,
  email,
  subject,
  message,
}) => {
  const transporter = createTransporter();

  // Email configuration is not available yet.
  // MongoDB will still save the message normally.
  if (!transporter) {
    console.log(
      "Email notification skipped: SMTP credentials are not configured."
    );

    return;
  }

  if (!process.env.ADMIN_EMAIL) {
    console.log(
      "Email notification skipped: ADMIN_EMAIL is not configured."
    );

    return;
  }

  await transporter.sendMail({
    from: `"Snehal Foundation Website" <${process.env.SMTP_USER}>`,

    to: process.env.ADMIN_EMAIL,

    replyTo: email,

    subject: `New Contact Message: ${subject}`,

    text: `
New Contact Message
===================

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

===================
Snehal Foundation Website
`,

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">

        <h2 style="color: #1d4ed8;">
          New Contact Message
        </h2>

        <hr />

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Subject:</strong> ${subject}
        </p>

        <h3>Message</h3>

        <p>
          ${message.replace(/\n/g, "<br />")}
        </p>

        <hr />

        <p style="color: #64748b; font-size: 13px;">
          This message was submitted through the
          Snehal Foundation website.
        </p>

      </div>
    `,
  });

  console.log(
    `Contact notification email sent to ${process.env.ADMIN_EMAIL}`
  );
};


module.exports = {
  sendContactNotification,
};