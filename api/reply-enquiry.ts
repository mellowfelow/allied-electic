import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkAdminPasscode } from './_lib/auth.js';
import { isKvConfigured, getEnquiry, saveEnquiry } from './_lib/store.js';
import { sendMail } from './_lib/mailer.js';
import { enquiryReplyEmail } from './_lib/emailTemplates.js';

// POST /api/reply-enquiry — admin-only. Body: { enquiryId, replyText }
// Sends the reply to the customer and marks the enquiry replied.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const auth = checkAdminPasscode(req);
  if (!auth.ok) return res.status(auth.status).json({ error: auth.message });

  const { enquiryId, replyText } = req.body || {};
  if (!enquiryId || !replyText) {
    return res.status(400).json({ error: 'Missing required fields (enquiryId, replyText)' });
  }

  let enquiry: Record<string, unknown> | null = null;
  if (isKvConfigured()) {
    enquiry = await getEnquiry(enquiryId);
  }
  const enquiryForEmail = enquiry || (req.body.enquiry as Record<string, unknown>);
  if (!enquiryForEmail) return res.status(404).json({ error: 'Enquiry not found and no fallback data supplied.' });

  const email = enquiryReplyEmail(enquiryForEmail as { name: string; subject: string }, replyText);
  const customerEmail = (enquiryForEmail as { email?: string }).email;
  if (!customerEmail) return res.status(400).json({ error: 'No customer email available to send to.' });

  const result = await sendMail({ to: customerEmail, subject: email.subject, html: email.html });

  if (enquiry && isKvConfigured()) {
    await saveEnquiry({ ...enquiry, status: 'replied', replyMessage: replyText, repliedAt: new Date().toISOString() });
  }

  return res.status(200).json({ ok: true, email: result });
}
