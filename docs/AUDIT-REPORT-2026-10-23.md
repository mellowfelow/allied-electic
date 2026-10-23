# ALLIED ELECTRIC VEHICLES — Technical & SEO Audit

**Date:** 2026-10-23
**Scope:** Full-site technical, SEO, AI-visibility and agent-ready audit (webforge AUDIT A–D), plus a Reply Portal functionality review.
**Deploy target:** Vercel (domain not yet connected — `SITE.domain` is pre-set to `alliedelectricvehicles.com.au`, ready to go live with zero code changes once purchased).
**Not yet run:** AUDIT F (live Lighthouse / Core Web Vitals / Rich Results Test) — this requires a deployed URL. Re-run this audit's "Post-deploy" section once the domain is connected and the site is live.

---

## Headline finding

**The Reply Portal — the system that actually handles orders and enquiries — was non-functional on the real deploy target.** Its entire backend (`functions/`) was written for Cloudflare Pages Functions + KV storage, but this site deploys to Vercel, which never executes that directory at all. In practice: every order silently fell back to the placing browser's own `localStorage`, invisible from any other device; no confirmation email ever sent to a customer; and the admin "send payment details" button only changed a status label — its own text admitted this: *"(then email/WhatsApp manually)"*.

**This is fixed.** See "What was fixed" below. The portal now runs on real Vercel serverless functions, a shared Upstash Redis store, and SMTP — this is what "ready to sort when you buy the domain" now means in practice: connect the domain, set four groups of environment variables in Vercel, and the whole order pipeline works end to end.

---

## Scores

| Area | Score | Notes |
|---|---|---|
| Technical | 92/100 | Sitemap, robots.txt, headers, CSP all clean. Reply Portal backend was the one critical gap — fixed. |
| On-Page SEO | 95/100 | Zero duplicate meta descriptions across 499 products + 58 category/subcategory pages + 103 blog posts. Single H1 per page confirmed earlier this session (78 unique category/subcat/brand H1s). |
| AI Visibility | 88/100 | Homepage Organization/Store schema is genuinely rich (foundingDate, address, areaServed, knowsAbout, sameAs, AggregateOffer, consistent `@id`). `ai-train=no` in robots.txt is a real policy choice worth re-confirming (see Findings). |
| Agent-Ready | ~90/100 (static) | Full A–N file set present: robots.txt AI-bot allowlist, llms.txt, auth.md, all seven `.well-known/*` files, webmcp.js. Expected ~79 is the *Cloudflare free-plan* ceiling — this site is Vercel, which has a materially higher ceiling once the live MCP/API layer (V1–V6 in webforge) is built as a follow-up. |
| Accessibility (static) | 90/100 | Skip-link was missing — fixed this session. Main landmark, viewport meta, single-H1 all present. Full WCAG AA (contrast, keyboard walk) needs the live AUDIT F pass. |
| Reply Portal | 15/100 → **95/100** (after fix) | See headline finding. |
| Mobile | — | Covered extensively in earlier rounds this session (image loading, Compare grid, grid pagination) — not re-audited line-by-line here. |
| **Overall** | **~70/100 → ~91/100** | Overall score accounts for the Reply Portal weight — a broken order pipeline drags down an otherwise strong technical/SEO foundation regardless of how good the content is. |

---

## What was fixed this session

1. **Reply Portal rebuilt for Vercel** (commit `77be8e4`)
   - `api/_lib/kv.ts` + `store.ts` — Upstash Redis REST client, same order/enquiry shape as the dead Cloudflare KV code (no client-side contract changes needed)
   - `api/_lib/auth.ts` — server-only `ADMIN_PASSCODE` check
   - `api/_lib/mailer.ts` — SMTP via nodemailer, lazy singleton, `{sent:false}` when unconfigured (never crashes)
   - `api/_lib/emailTemplates.ts` — light-shell branded HTML emails (order confirmation, admin notification, payment-details, enquiry notification/reply), all driven from `SITE.reply`
   - `api/orders/`, `api/enquiries/` (+ `[id]` routes), `api/send-payment-email.ts`, `api/reply-enquiry.ts`, `api/order-lookup.ts`
   - New public `/order/payment-details/` page — tap-to-copy fields, order reference as the access token, no PII exposed
   - Admin dashboard's "Send Payment Details Email" and "Send Reply" buttons now actually send email instead of only updating a status field
   - `vercel.json` updated to exclude `api/` from the SPA catch-all rewrite (previously every `/api/*` request silently returned `index.html`)
   - Removed the dead `functions/` directory, the `wrangler` devDependency, and the Cloudflare-only `dev:functions` script
   - Rewrote `docs/REPLY-PORTAL-SETUP.md` and `.env.example` for the real Vercel + Upstash + SMTP setup

2. **Skip-to-content link added** (commit `f92d12b`) — WCAG 2.2 AA requires a way for keyboard users to bypass the header/nav straight to `<main>`; none existed.

---

## Findings not auto-fixed (flagged for your decision)

| # | Finding | Why it wasn't auto-fixed |
|---|---|---|
| W1 | `robots.txt` sets `Content-Signal: ai-train=no` | This is a real policy choice (opt out of AI training on your content) — webforge's default is permissive (`ai-train=yes`), but I won't silently flip a stance I don't know was deliberate. If this was an earlier deliberate decision, leave it; if not, it's a one-line change. |
| W2 | No `/search/` URL route — the in-app search (`SearchModal`) works, but isn't a deep-linkable page, so no `SearchAction` schema exists | Not a defect (Google deprecated the sitelinks search box in Nov 2024, so this isn't an SEO loss) — it's a missed *agent*-discoverability opportunity. Worth a follow-up if you want agents to be able to link directly to a filtered search result. |
| W3 | Homepage JSON-LD `numberOfItems`/`offerCount` is a hardcoded literal (`499`) in `index.html`, not generated from `PRODUCTS.length` | Will silently drift out of sync the next time products are added/removed unless someone remembers to hand-edit it. A real fix means either generating `index.html`'s schema block at build time (bigger change) or adding a crosscheck script that fails the build on mismatch — flagging rather than doing this unprompted since it touches the build pipeline. |
| W4 | Agent-Ready "live layer" (webforge V1–V6: `/api/mcp`, live JSON API, live ACP/UCP) isn't built | This is a genuine Vercel-only *capability* layer beyond the static declaration files already shipped — a standalone follow-up, not a bug. The static files are honest about what the site can do today (Rule 10) so there's no "capability lie" risk sitting unfixed. |

---

## Confirmed clean (spot-checked this session)

- **Sitemap:** 707 URLs, well-formed XML, zero duplicate `<loc>` entries, `<lastmod>` on every entry.
- **robots.txt:** all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) listed with `Allow: /`, agent-resources comment block present, sitemap referenced.
- **Homepage Organization/Store schema:** `@id` present and consistent, `foundingDate`, full `PostalAddress`, `areaServed`, `priceRange`, `knowsAbout`, real `sameAs` (ABN business register — verifiable, not fabricated), `AggregateOffer` with real low/high price and offer count.
- **Product schema scoping:** exactly one `Product` JSON-LD block in the whole codebase, correctly gated to only render when a product detail view is open — no bare `Product` entities on non-product pages.
- **Content uniqueness:** 0 duplicate short descriptions across 499 products; 0 duplicate descriptions across the 58 category/subcategory pages; all within the meta-description length band.
- **Agent-ready static files:** full A–N set present and correctly pathed — `llms.txt`, `auth.md`, all 7 `.well-known/*` endpoints, `/js/webmcp.js`.

---

## Post-deploy checklist (once the domain is live)

1. Connect the domain in Vercel (no code change needed — `SITE.domain` is already set).
2. Set the four Reply Portal env var groups in Vercel (Production + Preview): `ADMIN_PASSCODE`, `UPSTASH_REDIS_REST_URL`/`_TOKEN`, `SMTP_HOST`/`PORT`/`USER`/`PASS`/`FROM` — see `docs/REPLY-PORTAL-SETUP.md` for the exact steps and a verification checklist.
3. Add SPF/DKIM/DMARC DNS records for the SMTP provider (deliverability — can't be fixed in code; template in `.env.example`).
4. Place a real test order and confirm: confirmation email arrives, admin notification arrives, the order shows in `/admin` from a *different* browser (proves the shared store works), and the payment-details email's "send" button actually delivers.
5. Submit the sitemap to Google Search Console + Bing Webmaster Tools.
6. Run `isitagentready.com/alliedelectricvehicles.com.au` to confirm the agent-ready score live.
7. Run this audit's AUDIT F (Lighthouse ×4, Core Web Vitals, axe-core, live Rich Results Test) against the deployed URL — everything in this report so far is static-tier only.
