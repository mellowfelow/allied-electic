# Reply Portal — Vercel Setup

The admin order/enquiry dashboard (`/admin`) is backed by Vercel serverless
functions (`api/`), an Upstash Redis store for the shared order/enquiry
inbox, and SMTP for outbound email (order confirmations, admin notifications,
payment-details and enquiry-reply emails).

This only works once the site is deployed to **Vercel**. Under plain
`vite dev`, `/api/*` isn't served at all, so the app falls back to
browser-local storage automatically (see the `dataSource` badge in the admin
dashboard header) and emails don't send.

## One-time setup in the Vercel dashboard

1. **Create the Upstash Redis database** (shared order/enquiry inbox)
   - Vercel project → Storage tab → Browse Storage → Upstash → Create Database
   - Choose the region closest to your users; copy the two values it gives you
   - Add as project Environment Variables (Production **and** Preview):
     - `UPSTASH_REDIS_REST_URL`
     - `UPSTASH_REDIS_REST_TOKEN`

2. **Set the admin passcode**
   - Project → Settings → Environment Variables
   - Add `ADMIN_PASSCODE` (a strong value) for Production and Preview
   - Read only by `api/_lib/auth.ts`, server-side — never bundled into the
     public JS (never prefix it `VITE_`)

3. **Set SMTP credentials** (outbound email)
   - Any standard SMTP provider works — Zoho, Gmail with an app password,
     Amazon SES, etc.
   - Add for Production and Preview:
     - `SMTP_HOST`, `SMTP_PORT` (587 for STARTTLS, 465 for implicit TLS),
       `SMTP_USER`, `SMTP_PASS`
     - `SMTP_FROM` (optional — defaults to `SMTP_USER`)
   - Without these, every email send returns `{sent:false}` and the API still
     responds normally — orders/enquiries still save, the admin UI just shows
     "email not sent" and the WhatsApp links remain available as a fallback.
   - **Deliverability (DNS, not code):** add SPF/DKIM/DMARC records for
     `alliedelectricvehicles.com.au` once SMTP is live — see `.env.example`
     for the exact record templates. Without these, legitimate emails risk
     landing in spam.

4. **Redeploy** so the new env vars take effect.

## Verifying it worked

Once deployed, open `/admin`, enter the passcode, and check the badge next to
the Refresh button in the header:
- **"Live Shared Inbox"** (green) — connected to Upstash Redis, working as
  intended.
- **"Local-Only (API Unreachable)"** (amber) — `UPSTASH_REDIS_REST_URL`/
  `_TOKEN` aren't set, or the functions aren't reachable; the dashboard is
  only showing this browser's own local data. Re-check step 1.

Then place a test order through checkout and confirm:
- A confirmation email arrives at the order's email address.
- A notification email arrives at `sales@alliedelectricvehicles.com.au`.
- The order appears in `/admin` → Orders from a *different* browser/device
  (proves the shared store, not just localStorage, is working).
- In the admin composer, paste a test payment detail, click **Send Payment
  Details Email**, and confirm it actually arrives (not just marks the status).

## Local development

- `npm run dev` (plain Vite) — fastest for UI work, but `/api/*` isn't served;
  the app silently falls back to `localStorage` and no emails send. Fine for
  styling/layout work, not for testing the portal itself.
- `vercel dev` (Vercel CLI, `npm i -g vercel` then `vercel dev`) — runs the
  real `api/` functions locally against a `.env` file (gitignored; copy
  `.env.example` and fill in real or sandbox credentials) so you can exercise
  the full flow — storage, auth, and email — before deploying.

## What this covers

- Orders and enquiries persist server-side (Upstash Redis) and are visible
  from any device via the passcode-gated API — the shared-inbox fix.
- **Order confirmation + admin notification emails send automatically** on
  every order, regardless of checkout channel (email or WhatsApp) — this was
  previously a `mailto:`/WhatsApp-link-only flow with no real email backend.
- The admin composer's **"Send Payment Details Email"** button now actually
  sends the email (via `/api/send-payment-email`), instead of only marking
  the order's status.
- **"Send Reply & Mark Replied"** on an enquiry now actually emails the
  customer (via `/api/reply-enquiry`), instead of only updating status.
- A public `/order/payment-details/?id=<ref>` page lets the customer view and
  tap-to-copy each payment field directly (linked from the payment-details
  email) — order ID doubles as the access token, same pattern as the email
  link; no PII (address/phone) is exposed via this endpoint.
- WhatsApp remains available everywhere as a fallback/alternative channel —
  it was not removed, just no longer the *only* way these messages reach
  the customer.
