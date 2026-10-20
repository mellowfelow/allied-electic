import { useEffect } from 'react';
import { SITE } from '../config/site';

interface SEOInput {
  title: string;
  description: string;
  path: string; // e.g. '', 'shop', 'shop/city-commuter-ebikes', 'blog/some-slug'
  jsonLd?: object[];
  image?: string; // absolute or root-relative URL for og:image / twitter:image
  noindex?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Updates document.title, meta description/OG/Twitter tags, the canonical link,
 * and a per-route JSON-LD block for this client-side-routed SPA. Routes use real
 * paths (History API pushState in App.tsx, not "#" fragments), and the host's
 * rewrite config (vercel.json / public/_redirects) serves index.html for any
 * unmatched path, so each canonical URL below is a genuinely resolvable,
 * deep-linkable, indexable page — not just an in-memory tab switch.
 */
export function useSEO({ title, description, path, jsonLd, image, noindex }: SEOInput) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
    document.title = fullTitle;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);

    const canonicalUrl = `https://${SITE.domain}/${path ? `${path}/` : ''}`;
    upsertMeta('property', 'og:url', canonicalUrl);
    let canonicalLink = document.getElementById('canonical-link') as HTMLLinkElement | null;
    if (canonicalLink) canonicalLink.href = canonicalUrl;

    const imageUrl = image
      ? (image.startsWith('http') ? image : `https://${SITE.domain}${image}`)
      : `https://${SITE.domain}/favicon.svg`;
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    // Per-route JSON-LD (replaces previous route's block; global Organization/WebSite stay in index.html)
    const existing = document.getElementById('route-schema');
    if (existing) existing.remove();
    if (jsonLd && jsonLd.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'route-schema';
      script.textContent = JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, jsonLd]);
}
