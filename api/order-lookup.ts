import type { VercelRequest, VercelResponse } from '@vercel/node';
import { isKvConfigured, getOrder } from './_lib/store.js';

// GET /api/order-lookup?id=AEV-XXXXXX — public, no admin passcode. The order
// reference itself is the access token (unguessable 6-char alphabet, per
// generateOrderRef in src/lib/orderStore.ts), matching the pattern used by
// the payment-details email link. Returns only what the customer-facing
// payment page needs — never the full order (no address/phone/PII).
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const id = req.query.id as string;
  if (!id) return res.status(400).json({ error: 'Missing id' });
  if (!isKvConfigured()) return res.status(503).json({ error: 'Order store not configured.' });

  const order = await getOrder(id);
  if (!order) return res.status(404).json({ error: 'Not found' });

  return res.status(200).json({
    id: order.id,
    customerName: order.customerName,
    total: order.total,
    status: order.status,
    parsedPaymentDetails: order.parsedPaymentDetails || []
  });
}
