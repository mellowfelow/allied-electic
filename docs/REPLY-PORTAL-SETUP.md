# Reply Portal — Cloudflare Pages Setup

The admin order/enquiry dashboard (`/admin`) is backed by Cloudflare Pages Functions
(`functions/`) and a Cloudflare KV namespace, so orders and enquiries are shared
across every device/browser — not just the one that placed the order.

This only works once the site is deployed to **Cloudflare Pages**. It does nothing
under plain `vite dev` or on another static host (the app falls back to
browser-local storage automatically in that case — see the `dataSource` badge in
the admin dashboard header).

## One-time setup in the Cloudflare dashboard

1. **Create the KV namespace**
   - Cloudflare dashboard → Workers & Pages → KV → Create a namespace
   - Name it anything, e.g. `allied-ev-reply-portal`

2. **Bind it to this Pages project**
   - Your Pages project → Settings → Functions → KV namespace bindings
   - Variable name: `REPLY_KV` (must match exactly — this is what `functions/` reads)
   - KV namespace: the one you just created
   - Do this for both the Production and Preview environments

3. **Set the admin passcode**
   - Your Pages project → Settings → Environment variables
   - Add `ADMIN_PASSCODE` (type: **Secret/Encrypted**) with a strong value
   - Do this for both Production and Preview
   - This is read only by the Functions in `functions/` — it is never bundled
     into the public JS, unlike the old client-side-only gate this replaced

4. **Redeploy** so the new binding/env var takes effect.

## Verifying it worked

Once deployed, open `/admin`, enter the passcode, and check the badge next to
the Refresh button in the header:
- **"Live Shared Inbox"** (green) — connected to KV, working as intended.
- **"Local-Only (API Unreachable)"** (amber) — the Functions aren't reachable
  or `REPLY_KV` isn't bound; the dashboard is only showing this browser's own
  local data. Re-check steps 1–2.

## Local development

- `npm run dev` (plain Vite) — fastest for UI work, but `/api/*` isn't served,
  so the app silently falls back to `localStorage`.
- `npm run dev:functions` — builds the site and runs it through
  `wrangler pages dev` with a local (emulated) KV namespace and
  `ADMIN_PASSCODE=dev-passcode`, so you can exercise the real API locally
  before deploying.

## What this does and doesn't cover

- Orders and enquiries are now persisted server-side and visible from any
  device via the passcode-gated API — this is the core "shared inbox" fix.
- It does **not** send email. "Place Order (Email)" opens a `mailto:` to the
  business (and WhatsApp checkout opens a pre-filled WhatsApp message) — there
  is still no SMTP integration. Adding one (per the webforge Reply Portal spec:
  `functions/_shared/mailer.js`, a raw-socket SMTP client, `SMTP_*` env vars)
  is a separate, larger follow-up if automated email confirmations are wanted.
