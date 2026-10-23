import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkAdminPasscode } from '../_lib/auth.js';
import { isKvConfigured, listOrders, saveOrder } from '../_lib/store.js';
import { sendMail } from '../_lib/mailer.js';
import { orderConfirmationEmail, orderNotificationEmail } from '../_lib/emailTemplates.js';
import { SITE } from '../../src/config/site.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const auth = checkAdminPasscode(req);
    if (!auth.ok) return res.status(auth.status).json({ error: auth.message });
    if (!isKvConfigured()) return res.status(503).json({ error: 'Order store not configured (UPSTASH_REDIS_REST_URL/TOKEN unset).' });
    const orders = await listOrders();
    return res.status(200).json(orders);
  }

  if (req.method === 'POST') {
    const order = req.body;
    if (!order || typeof order !== 'object' || !order.id || !order.customerName || !order.email || !Array.isArray(order.items)) {
      return res.status(400).json({ error: 'Missing required order fields (id, customerName, email, items)' });
    }
    order.createdAt = order.createdAt || new Date().toISOString();
    order.status = order.status || 'new';

    if (isKvConfigured()) {
      await saveOrder(order);
    }

    // Unconditional customer confirmation + admin notification, on every
    // channel (email or WhatsApp checkout) — never skipped because the
    // customer is "already talking to us on WhatsApp".
    const confirmation = orderConfirmationEmail(order);
    const notification = orderNotificationEmail(order);
    const [customerResult, adminResult] = await Promise.all([
      sendMail({ to: order.email, subject: confirmation.subject, html: confirmation.html }),
      sendMail({ to: SITE.reply.channels.email, subject: notification.subject, html: notification.html })
    ]);

    return res.status(201).json({ ok: true, id: order.id, stored: isKvConfigured(), emails: { customer: customerResult, admin: adminResult } });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
