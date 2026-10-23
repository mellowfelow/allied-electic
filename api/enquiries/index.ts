import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkAdminPasscode } from '../_lib/auth.js';
import { isKvConfigured, listEnquiries, saveEnquiry } from '../_lib/store.js';
import { sendMail } from '../_lib/mailer.js';
import { enquiryNotificationEmail } from '../_lib/emailTemplates.js';
import { SITE } from '../../src/config/site.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const auth = checkAdminPasscode(req);
    if (!auth.ok) return res.status(auth.status).json({ error: auth.message });
    if (!isKvConfigured()) return res.status(503).json({ error: 'Enquiry store not configured (UPSTASH_REDIS_REST_URL/TOKEN unset).' });
    const enquiries = await listEnquiries();
    return res.status(200).json(enquiries);
  }

  if (req.method === 'POST') {
    const enquiry = req.body;
    if (!enquiry || typeof enquiry !== 'object' || !enquiry.id || !enquiry.name || !enquiry.email || !enquiry.message) {
      return res.status(400).json({ error: 'Missing required enquiry fields (id, name, email, message)' });
    }
    enquiry.createdAt = enquiry.createdAt || new Date().toISOString();
    enquiry.status = enquiry.status || 'new';

    if (isKvConfigured()) {
      await saveEnquiry(enquiry);
    }

    const notification = enquiryNotificationEmail(enquiry);
    const adminResult = await sendMail({ to: SITE.reply.channels.email, subject: notification.subject, html: notification.html });

    return res.status(201).json({ ok: true, id: enquiry.id, stored: isKvConfigured(), emails: { admin: adminResult } });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
