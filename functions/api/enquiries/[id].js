import { checkAdminPasscode, json } from '../../_shared/auth.js';
import { getEnquiry, saveEnquiry, deleteEnquiry } from '../../_shared/store.js';

// PATCH /api/enquiries/:id — admin-only (e.g. mark replied)
export async function onRequestPatch({ request, env, params }) {
  const auth = checkAdminPasscode(request, env);
  if (!auth.ok) return json({ error: auth.message }, auth.status);
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  const existing = await getEnquiry(env.REPLY_KV, params.id);
  if (!existing) return json({ error: 'Not found' }, 404);
  let patch;
  try {
    patch = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }
  const updated = { ...existing, ...patch, id: existing.id };
  await saveEnquiry(env.REPLY_KV, updated);
  return json(updated);
}

// DELETE /api/enquiries/:id — admin-only
export async function onRequestDelete({ request, env, params }) {
  const auth = checkAdminPasscode(request, env);
  if (!auth.ok) return json({ error: auth.message }, auth.status);
  if (!env.REPLY_KV) return json({ error: 'REPLY_KV binding not configured' }, 503);
  await deleteEnquiry(env.REPLY_KV, params.id);
  return json({ ok: true });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}
