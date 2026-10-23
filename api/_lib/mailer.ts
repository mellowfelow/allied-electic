import nodemailer, { Transporter } from 'nodemailer';

let transporter: Transporter | null | undefined;

function getTransporter(): Transporter | null {
  if (transporter !== undefined) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    transporter = null;
    return transporter;
  }
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
  return transporter;
}

export interface SendMailInput {
  to: string;
  subject: string;
  html: string;
}

export interface SendMailResult {
  sent: boolean;
  reason?: string;
}

/** Never throws — returns {sent:false} when SMTP isn't configured or the send fails,
 * so a caller can always fall back gracefully (WhatsApp, a manual follow-up, etc). */
export async function sendMail({ to, subject, html }: SendMailInput): Promise<SendMailResult> {
  const t = getTransporter();
  if (!t) return { sent: false, reason: 'not-configured' };
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  try {
    await t.sendMail({ from, to, subject, html });
    return { sent: true };
  } catch (err) {
    console.error('sendMail failed:', err);
    return { sent: false, reason: 'send-error' };
  }
}
