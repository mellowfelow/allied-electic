import { checkAdminPasscode, json } from '../_shared/auth.js';
import { saveOrder, listOrders } from '../_shared/store.js';

// GET /api/orders — admin-only, lists all orders (newest first)
export async function onRequestGet({ request, env }) {
  const auth = checkAdminPasscode(request, env);
  if (!auth.ok) return json({ error: auth.message }, auth.status);
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  const orders = await listOrders(env.REPLY_KV);
  return json(orders);
}

// POST /api/orders — public, created from checkout (no auth: this is how a
// customer's order reaches the business in the first place)
export async function onRequestPost({ request, env }) {
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  let order;
  try {
    order = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }
  if (!order || typeof order !== 'object' || !order.id || !order.customerName || !order.email || !Array.isArray(order.items)) {
    return json({ error: 'Missing required order fields (id, customerName, email, items)' }, 400);
  }
  order.createdAt = order.createdAt || new Date().toISOString();
  order.status = order.status || 'new';
  await saveOrder(env.REPLY_KV, order);
  return json({ ok: true, id: order.id }, 201);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}
