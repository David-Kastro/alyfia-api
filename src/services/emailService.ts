import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // Você pode usar outro serviço, se preferir
  auth: {
    user: process.env.EMAIL_USER, // Configure no .env: EMAIL_USER
    pass: process.env.EMAIL_PASS, // Configure no .env: EMAIL_PASS
  },
});

/**
 * Envia um email de notificação.
 * @param to - Endereço de email do destinatário.
 * @param subject - Assunto do email.
 * @param html - Conteúdo HTML do email.
 */
export const sendEmail = async (
  to: string,
  subject: string,
  html: string
): Promise<void> => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    });
    console.log(`Email sent to ${to} with subject: "${subject}"`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
