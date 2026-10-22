// Regenerates public/sitemap.xml from src/config/site.ts (the single source of
// truth) so the sitemap can never drift from the real catalog/categories/posts
// again. Run via `npm run gen:sitemap` (wired into prebuild).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_TS = path.join(ROOT, 'src/config/site.ts');
const OUT = path.join(ROOT, 'public/sitemap.xml');

const content = fs.readFileSync(SITE_TS, 'utf-8');

function section(startMarker, endMarker) {
  const start = content.indexOf(startMarker);
  const end = content.indexOf(endMarker, start);
  return content.slice(start, end === -1 ? undefined : end);
}

// --- domain ---
const domainMatch = content.match(/domain:\s*'([^']+)'/);
const domain = domainMatch ? domainMatch[1] : 'alliedelectricvehicles.com.au';
const base = `https://${domain}`;

// --- categories + subcategories ---
const categoriesSrc = section('export const CATEGORIES', 'export const PRODUCTS');
const categoryBlocks = categoriesSrc.match(/\{\s*slug: '[^']+',[\s\S]*?\n  \}/g) || [];
const categories = categoryBlocks.map(block => {
  const slug = block.match(/slug: '([^']+)'/)[1];
  const subSlugs = [...block.matchAll(/\{ slug: '([^']+)', name:/g)].map(m => m[1]);
  return { slug, subSlugs };
});

// --- brands ---
const brandsSrc = section('export const BRANDS', 'export function getProductsForBrand');
const brandSlugs = [...brandsSrc.matchAll(/slug: '([^']+)',/g)].map(m => m[1]);

// --- products ---
const productsSrc = section('export const PRODUCTS', '\nexport const POSTS');
const productSlugs = [...productsSrc.matchAll(/    slug: '([^']+)',/g)].map(m => m[1]);

// --- posts ---
const postsSrc = section('export const POSTS', '\nexport const FAQ');
const postSlugs = [...postsSrc.matchAll(/    slug: '([^']+)',/g)].map(m => m[1]);

const today = new Date().toISOString().slice(0, 10);

const urls = [];
const add = (loc, priority, changefreq = 'weekly') => {
  urls.push({ loc: `${base}/${loc}`, priority, changefreq });
};

add('', '1.0');
add('shop/', '0.9');
for (const cat of categories) {
  add(`shop/${cat.slug}/`, '0.8');
  for (const sub of cat.subSlugs) {
    add(`shop/${cat.slug}/${sub}/`, '0.7');
  }
}
add('brands/', '0.7');
for (const slug of brandSlugs) {
  add(`brands/${slug}/`, '0.6');
}
add('blog/', '0.6');
for (const slug of postSlugs) {
  add(`blog/${slug}/`, '0.5', 'monthly');
}
add('about/', '0.5', 'monthly');
add('contact/', '0.5', 'monthly');
add('faq/', '0.5', 'monthly');
for (const slug of productSlugs) {
  add(`product/${slug}/`, '0.6');
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(OUT, xml, 'utf-8');
console.log(`Generated ${urls.length} URLs -> ${OUT}`);
