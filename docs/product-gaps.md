# Product Gap Analysis — ALLIED ELECTRIC VEHICLES

**Phase 8 result: no major stocking gaps found.** This is an audit of an already-built, fully
live catalog (499 real products across all 10 categories / 48 subcategories), not a greenfield
build — so the usual "transactional cluster with no absorbing page" signal mostly doesn't apply
here. Every keyword cluster researched this session mapped cleanly onto an existing category or
subcategory page (see `keyword-map.md`). Spot-checked the two brand names that came up
repeatedly in Semrush's related-keyword data (Bosch — `bosch ebike battery` 5,500 vol, and
Sur-Ron — a common high-volume dirt-bike brand) against the live product catalog: **both are
already stocked** (Bosch batteries under Batteries, Parts & Kits; Sur-Ron under Electric Bikes →
Electric Dirt & Motorbikes). No brand gap.

---

## Demand gaps (not stocking gaps)

Four subcategories exist on the live site with real product pages, but returned no measurable
Semrush search volume in the Australia database this session. These are **not** candidates for
removal — they're real, legitimate product types — but they shouldn't be relied on to drive
organic search traffic on their own, and their page copy should lean on the parent category's
keywords rather than inventing a dedicated primary with no demand signal behind it.

| Subcategory | Category | What was tried | Result |
|---|---|---|---|
| `mini-electric-skateboards` | Electric Skateboards | "mini electric skateboard" | No dedicated data found |
| `electric-unicycles` | Self-Balancing EV | Not yet searched (quota-limited this session) | **Follow-up needed** |
| `hoverboard-kart-attachments` | Self-Balancing EV | Not yet searched (quota-limited this session) | **Follow-up needed** |
| `electric-jetboards` | Electric Water Sports | "electric jetboard" / "electric jet board" | All rows returned `n/a` — zero measurable AU volume |

**Recommendation:** these four pages should rely on internal linking from their (well-trafficked)
parent category and on the category-level primary keyword for SEO weight, rather than being
treated as standalone organic-traffic pages. `electric-unicycles` and `hoverboard-kart-attachments`
specifically still need a dedicated Semrush pull once the daily refresh quota resets — see the
quota note in `keyword-research-progress.md`.

---

## Category-level observation

With 48 real subcategories already live and comprehensive brand coverage (Bosch, Shimano,
Bafang, Sur-Ron, Ninebot/Segway, Dualtron, Evolve and others all present in the catalog per
`src/config/site.ts`), this site is in the unusual position of having **more product breadth
than most competitors' keyword footprints** — several subcategories (e.g. `farm-utility-quads`,
`electric-jetboards`, the Batteries & Parts range) are stocked ahead of visible AU search demand.
That's a legitimate first-mover position, not a gap to fix. No new category, brand, or product
page is recommended from this session's research.
