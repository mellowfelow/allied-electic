import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkAdminPasscode } from './_lib/auth.js';
import { isKvConfigured, getOrder, saveOrder } from './_lib/store.js';
import { sendMail } from './_lib/mailer.js';
import { paymentDetailsEmail } from './_lib/emailTemplates.js';

// POST /api/send-payment-email — admin-only. Body: { orderId, fields: [{label,value}], termsLines: string[] }
// Sends the parsed payment-detail fields to the customer and marks the order
// payment_details_sent — the one place this actually happens, rather than the
// admin UI merely claiming it did.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const auth = checkAdminPasscode(req);
  if (!auth.ok) return res.status(auth.status).json({ error: auth.message });

  const { orderId, fields, termsLines } = req.body || {};
  if (!orderId || !Array.isArray(fields) || !Array.isArray(termsLines)) {
    return res.status(400).json({ error: 'Missing required fields (orderId, fields[], termsLines[])' });
  }

  let order: Record<string, unknown> | null = null;
  if (isKvConfigured()) {
    order = await getOrder(orderId);
  }
  // Fall back to the minimal shape the client already has, if the shared
  // store isn't configured — the email can still send.
  const orderForEmail = order || (req.body.order as Record<string, unknown>) || { id: orderId, customerName: 'Customer', total: 0 };

  const email = paymentDetailsEmail(
    orderForEmail as { id: string; customerName: string; total: number },
    fields,
    termsLines
  );
  const customerEmail = (orderForEmail as { email?: string }).email || req.body.customerEmail;
  if (!customerEmail) return res.status(400).json({ error: 'No customer email available to send to.' });

  const result = await sendMail({ to: customerEmail, subject: email.subject, html: email.html });

  if (order && isKvConfigured()) {
    await saveOrder({ ...order, status: 'payment_details_sent', parsedPaymentDetails: fields });
  }

  return res.status(200).json({ ok: true, email: result });
}
