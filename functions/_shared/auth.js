/**
 * Server-side admin passcode check. Unlike the old client-only gate, ADMIN_PASSCODE
 * here lives only in Cloudflare Pages env vars — it is never shipped to the browser.
 */
export function checkAdminPasscode(request, env) {
  if (!env.ADMIN_PASSCODE) {
    return { ok: false, status: 503, message: 'Admin portal is not configured (ADMIN_PASSCODE unset in Cloudflare Pages env vars).' };
  }
  const header = request.headers.get('X-Admin-Passcode') || '';
  if (header !== env.ADMIN_PASSCODE) {
    return { ok: false, status: 401, message: 'Incorrect passcode.' };
  }
  return { ok: true };
}

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
}
