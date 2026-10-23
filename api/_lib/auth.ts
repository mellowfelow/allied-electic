import type { VercelRequest } from '@vercel/node';

/**
 * Server-side admin passcode check. ADMIN_PASSCODE lives only in Vercel's
 * encrypted env vars — it is never shipped to the browser (never prefixed
 * VITE_, never read client-side).
 */
export function checkAdminPasscode(req: VercelRequest): { ok: true } | { ok: false; status: number; message: string } {
  const configured = process.env.ADMIN_PASSCODE;
  if (!configured) {
    return { ok: false, status: 503, message: 'Admin portal is not configured (ADMIN_PASSCODE unset in Vercel env vars).' };
  }
  const header = (req.headers['x-admin-passcode'] as string) || '';
  if (header !== configured) {
    return { ok: false, status: 401, message: 'Incorrect passcode.' };
  }
  return { ok: true };
}
