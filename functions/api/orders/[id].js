import { checkAdminPasscode, json } from '../../_shared/auth.js';
import { getOrder, saveOrder, deleteOrder } from '../../_shared/store.js';

// GET /api/orders/:id — admin-only (orders carry customer PII: address, phone, email)
export async function onRequestGet({ request, env, params }) {
  const auth = checkAdminPasscode(request, env);
  if (!auth.ok) return json({ error: auth.message }, auth.status);
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  const order = await getOrder(env.REPLY_KV, params.id);
  if (!order) return json({ error: 'Not found' }, 404);
  return json(order);
}

// PATCH /api/orders/:id — admin-only, partial update (status, parsedPaymentDetails, etc.)
export async function onRequestPatch({ request, env, params }) {
  const auth = checkAdminPasscode(request, env);
  if (!auth.ok) return json({ error: auth.message }, auth.status);
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  const existing = await getOrder(env.REPLY_KV, params.id);
  if (!existing) return json({ error: 'Not found' }, 404);
  let patch;
  try {
    patch = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }
  const updated = { ...existing, ...patch, id: existing.id };
  await saveOrder(env.REPLY_KV, updated);
  return json(updated);
}

// DELETE /api/orders/:id — admin-only
export async function onRequestDelete({ request, env, params }) {
  const auth = checkAdminPasscode(request, env);
  if (!auth.ok) return json({ error: auth.message }, auth.status);
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  await deleteOrder(env.REPLY_KV, params.id);
  return json({ ok: true });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}
