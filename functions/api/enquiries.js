import { checkAdminPasscode, json } from '../_shared/auth.js';
import { saveEnquiry, listEnquiries } from '../_shared/store.js';

// GET /api/enquiries — admin-only
export async function onRequestGet({ request, env }) {
  const auth = checkAdminPasscode(request, env);
  if (!auth.ok) return json({ error: auth.message }, auth.status);
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  const enquiries = await listEnquiries(env.REPLY_KV);
  return json(enquiries);
}

// POST /api/enquiries — public, created from the contact form
export async function onRequestPost({ request, env }) {
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  let enquiry;
  try {
    enquiry = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }
  if (!enquiry || typeof enquiry !== 'object' || !enquiry.id || !enquiry.name || !enquiry.email || !enquiry.message) {
    return json({ error: 'Missing required enquiry fields (id, name, email, message)' }, 400);
  }
  enquiry.createdAt = enquiry.createdAt || new Date().toISOString();
  enquiry.status = enquiry.status || 'new';
  await saveEnquiry(env.REPLY_KV, enquiry);
  return json({ ok: true, id: enquiry.id }, 201);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}
