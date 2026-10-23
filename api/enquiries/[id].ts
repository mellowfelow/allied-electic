import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkAdminPasscode } from '../_lib/auth.js';
import { isKvConfigured, getEnquiry, saveEnquiry, deleteEnquiry } from '../_lib/store.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const auth = checkAdminPasscode(req);
  if (!auth.ok) return res.status(auth.status).json({ error: auth.message });
  if (!isKvConfigured()) return res.status(503).json({ error: 'Enquiry store not configured (UPSTASH_REDIS_REST_URL/TOKEN unset).' });

  const id = req.query.id as string;

  if (req.method === 'GET') {
    const enquiry = await getEnquiry(id);
    if (!enquiry) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json(enquiry);
  }

  if (req.method === 'PATCH') {
    const existing = await getEnquiry(id);
    if (!existing) return res.status(404).json({ error: 'Not found' });
    const patch = req.body || {};
    const updated = { ...existing, ...patch, id: existing.id };
    await saveEnquiry(updated);
    return res.status(200).json(updated);
  }

  if (req.method === 'DELETE') {
    await deleteEnquiry(id);
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', 'GET, PATCH, DELETE');
  return res.status(405).json({ error: 'Method not allowed' });
}
