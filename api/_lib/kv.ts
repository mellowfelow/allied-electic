/**
 * Minimal Upstash Redis REST client (fetch-based, no SDK dependency) — the
 * Vercel-side equivalent of functions/_shared/store.js's Cloudflare KV calls.
 * Configured via UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (Vercel
 * Storage tab → Upstash → Create Database → these two values are shown
 * directly, or set manually from the Upstash console).
 */

function base(): string | undefined {
  return process.env.UPSTASH_REDIS_REST_URL;
}
function token(): string | undefined {
  return process.env.UPSTASH_REDIS_REST_TOKEN;
}

export function isKvConfigured(): boolean {
  return Boolean(base() && token());
}

async function call(path: string, init?: RequestInit): Promise<unknown> {
  const res = await fetch(`${base()}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token()}`, ...(init?.headers || {}) }
  });
  if (!res.ok) {
    throw new Error(`Upstash Redis request failed: ${res.status} ${await res.text().catch(() => '')}`);
  }
  return res.json();
}

export async function kvGet(key: string): Promise<string | null> {
  const data = (await call(`/get/${encodeURIComponent(key)}`)) as { result: string | null };
  return data.result ?? null;
}

export async function kvSet(key: string, value: string): Promise<void> {
  await call(`/set/${encodeURIComponent(key)}`, { method: 'POST', body: value });
}

export async function kvDel(key: string): Promise<void> {
  await call(`/del/${encodeURIComponent(key)}`, { method: 'POST' });
}
