import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { SITE, CATEGORIES, PRODUCTS, FAQ, Product } from './config/site';
import { OrderItem } from './lib/orderStore';
import { useSEO } from './lib/seo';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ChatHub } from './components/ChatHub';
import { RecentlyPurchasedPopup } from './components/RecentlyPurchasedPopup';

// Lazily loaded: not needed for the initial paint of any route, so keeping
// them out of the main bundle shrinks the parse/execute cost on first load.
const ProductDetailModal = lazy(() => import('./components/ProductDetailModal').then(m => ({ default: m.ProductDetailModal })));
const CompareModal = lazy(() => import('./components/CompareModal').then(m => ({ default: m.CompareModal })));
const SearchModal = lazy(() => import('./components/SearchModal').then(m => ({ default: m.SearchModal })));
const AdminReplyPortal = lazy(() => import('./components/admin/AdminReplyPortal').then(m => ({ default: m.AdminReplyPortal })));

// Views
import { HomeView } from './components/views/HomeView';
import { ShopView } from './components/views/ShopView';
import { BlogView } from './components/views/BlogView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { FaqView } from './components/views/FaqView';
import { CompareView } from './components/views/CompareView';
import { NotFoundView } from './components/views/NotFoundView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState<string | null>(null);
  
  // Cart State
  const [cartItems, setCartItems] = useState<OrderItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem(SITE.cartKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Compare State
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  
  // Modals & Drawers
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Real (flat) URL routing via the History API — no "#" fragments. Vercel's
  // vercel.json and Cloudflare's public/_redirects both rewrite unmatched paths
  // to /index.html, so a direct hit or deep link to e.g. /shop/electric-bikes/
  // resolves server-side before this client router ever runs. `vite dev` does
  // the same for local dev automatically.
  const applyPath = (pathname: string) => {
    if (pathname.startsWith('/admin')) {
      setAdminPortalOpen(true);
      return;
    }
    setAdminPortalOpen(false);

    const parts = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
    const route = parts[0];

    if (!route) {
      setActiveTab('home');
      setSelectedCategory(null);
      setSelectedSubcategory(null);
      setSelectedSubSubcategory(null);
    } else if (route === 'shop') {
      setActiveTab('shop');
      setSelectedCategory(parts[1] ? decodeURIComponent(parts[1]) : null);
      setSelectedSubcategory(parts[2] ? decodeURIComponent(parts[2]) : null);
      setSelectedSubSubcategory(parts[3] ? decodeURIComponent(parts[3]) : null);
      setQuickViewProduct(null);
    } else if (route === 'product') {
      const slug = parts[1] ? decodeURIComponent(parts[1]) : null;
      const matched = slug ? PRODUCTS.find(p => p.slug === slug || p.id === slug) : undefined;
      if (matched) {
        setQuickViewProduct(matched);
        setActiveTab('shop');
      } else {
        setQuickViewProduct(null);
        setActiveTab('not-found');
      }
    } else if (route === 'blog') {
      setActiveTab('blog');
      setQuickViewProduct(null);
    } else if (route === 'about') {
      setActiveTab('about');
      setQuickViewProduct(null);
    } else if (route === 'contact') {
      setActiveTab('contact');
      setQuickViewProduct(null);
    } else if (route === 'faq') {
      setActiveTab('faq');
      setQuickViewProduct(null);
    } else if (route === 'compare') {
      setActiveTab('compare');
      setQuickViewProduct(null);
    } else {
      setActiveTab('not-found');
      setQuickViewProduct(null);
    }
  };

  // Guards the URL->state effect below from immediately overwriting the URL
  // again with stale default state before this state update has committed —
  // without this, a direct deep link (e.g. /shop/electric-bikes/) gets its
  // URL clobbered back to "/" on first render, before applyPath's setState
  // calls take effect.
  const isSyncingFromUrl = useRef(true);

  useEffect(() => {
    const applyFromLocation = () => {
      isSyncingFromUrl.current = true;
      applyPath(window.location.pathname);
    };
    applyFromLocation();
    window.addEventListener('popstate', applyFromLocation);
    return () => window.removeEventListener('popstate', applyFromLocation);
  }, []);

  // Keep the URL in sync with UI state (so every view is a real, shareable,
  // bookmarkable, server-resolvable path — not just an in-memory tab switch).
  useEffect(() => {
    if (isSyncingFromUrl.current) {
      isSyncingFromUrl.current = false;
      return;
    }
    let path = '/';
    if (quickViewProduct) {
      path = `/product/${quickViewProduct.slug}/`;
    } else if (activeTab === 'shop') {
      path = selectedCategory
        ? `/shop/${selectedCategory}${selectedSubcategory ? `/${selectedSubcategory}` : ''}/`
        : '/shop/';
    } else if (activeTab !== 'home') {
      path = `/${activeTab}/`;
    }
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
  }, [activeTab, selectedCategory, selectedSubcategory, quickViewProduct]);

  const handleSelectCategory = (cat: string | null, subcat?: string | null, subSubcat?: string | null) => {
    setSelectedCategory(cat);
    setSelectedSubcategory(subcat || null);
    setSelectedSubSubcategory(subSubcat || null);
  };

  // Cart Helpers
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, quantity: 1 }
      ];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Compare Helpers
  const handleToggleCompare = (product: Product) => {
    setComparedIds(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      }
      if (prev.length >= 4) {
        alert('You can compare up to 4 vehicles simultaneously.');
        return prev;
      }
      return [...prev, product.id];
    });
  };

  const [adminPortalOpen, setAdminPortalOpen] = useState(false);
  const comparedProducts = PRODUCTS.filter(p => comparedIds.includes(p.id));

  // Per-route SEO: title/meta/canonical/JSON-LD for this hash-routed SPA.
  const activeCategoryObj = CATEGORIES.find(c => c.slug === selectedCategory);
  const activeSubcatObj = activeCategoryObj?.subcategories.find(s => s.slug === selectedSubcategory);

  const seoByTab: Record<string, { title: string; description: string; path: string; jsonLd?: object[]; image?: string; noindex?: boolean }> = {
    home: {
      title: 'Electric Bikes Australia | Scooters, Mobility & Electric Vehicles',
      description: 'Shop electric bikes Australia-wide — plus electric scooters, hoverboards and mobility EVs. Genuine stock, Perth-based service and nationwide delivery.',
      path: '',
      jsonLd: [{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }]
    },
    shop: {
      title: activeSubcatObj?.h1 || activeSubcatObj?.name || activeCategoryObj?.h1 || activeCategoryObj?.name || 'Electric Bikes for Sale Australia',
      description: activeSubcatObj?.description || activeCategoryObj?.description || 'Shop electric bikes for sale Australia-wide, plus kids electric bikes, electric mountain bikes, conversion kits and more — ALLIED\'s full EV catalogue.',
      path: selectedCategory ? `shop/${selectedCategory}${selectedSubcategory ? `/${selectedSubcategory}` : ''}` : 'shop',
      image: activeCategoryObj?.image,
      jsonLd: [{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
          { '@type': 'ListItem', position: 2, name: 'Shop', item: `https://${SITE.domain}/shop/` },
          ...(activeCategoryObj ? [{ '@type': 'ListItem', position: 3, name: activeCategoryObj.name, item: `https://${SITE.domain}/shop/${activeCategoryObj.slug}/` }] : [])
        ]
      }]
    },
    blog: {
      title: 'E-Bike & Electric Transport Blog',
      description: 'In-depth technical guides, lithium battery maintenance tips, and Australian electric bike comparisons from ALLIED.',
      path: 'blog'
    },
    about: {
      title: 'Electric Bikes Perth | About Us',
      description: 'ALLIED is Perth\'s electric bike specialist — 25+ years supplying electric bikes, scooters, mobility and off-road EVs across Australia from our Perth, WA depot.',
      path: 'about',
      jsonLd: [{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        about: { '@id': `https://${SITE.domain}/#organization` }
      }]
    },
    contact: {
      title: 'Electric Bike Shop Perth | Contact Us',
      description: 'Contact ALLIED, your electric bike shop in Perth, WA — technical specifications, spare parts, or mobile service bookings.',
      path: 'contact'
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Charging, lithium battery life, warranty terms and freight delivery answers for ALLIED electric bikes and vehicles.',
      path: 'faq',
      jsonLd: [{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }]
    },
    compare: {
      title: 'Compare Electric Bikes & Vehicles',
      description: 'Compare specifications, range, battery capacity and pricing across ALLIED electric bikes and vehicles side by side.',
      path: 'compare'
    },
    'not-found': {
      title: 'Page Not Found',
      description: 'The page you requested could not be found.',
      path: 'not-found',
      noindex: true
    }
  };

  const productSeo = quickViewProduct ? {
    title: quickViewProduct.name,
    description: quickViewProduct.shortDescription.slice(0, 155),
    path: `product/${quickViewProduct.slug}`,
    image: quickViewProduct.images[0],
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: quickViewProduct.name,
      description: quickViewProduct.shortDescription,
      image: quickViewProduct.images,
      sku: quickViewProduct.id,
      brand: { '@type': 'Brand', name: SITE.name },
      offers: {
        '@type': 'Offer',
        url: `https://${SITE.domain}/product/${quickViewProduct.slug}/`,
        priceCurrency: 'AUD',
        price: quickViewProduct.price,
        availability: 'https://schema.org/InStock',
        seller: { '@id': `https://${SITE.domain}/#organization` }
      }
    }]
  } : null;

  useSEO(productSeo || seoByTab[activeTab] || seoByTab.home);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      
      {/* Primary Header */}
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        compareCount={comparedIds.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenCompare={() => setCompareModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
      />

      {/* Main Content Area */}
      <main id="main" className="flex-1">
        
        {activeTab === 'home' && (
          <HomeView
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onToggleCompare={handleToggleCompare}
            comparedIds={comparedIds}
            onNavigateCategory={(cat) => {
              handleSelectCategory(cat);
              setActiveTab('shop');
            }}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'shop' && (
          <ShopView
            selectedCategory={selectedCategory}
            setSelectedCategory={handleSelectCategory}
            selectedSubcategory={selectedSubcategory}
            selectedSubSubcategory={selectedSubSubcategory}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onToggleCompare={handleToggleCompare}
            comparedIds={comparedIds}
          />
        )}

        {activeTab === 'blog' && <BlogView />}

        {activeTab === 'about' && <AboutView />}

        {activeTab === 'contact' && <ContactView />}

        {activeTab === 'faq' && <FaqView />}

        {activeTab === 'compare' && (
          <CompareView
            comparedIds={comparedIds}
            onToggleCompare={handleToggleCompare}
            onRemoveCompare={(id) => setComparedIds(prev => prev.filter(pId => pId !== id))}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activeTab === 'not-found' && (
          <NotFoundView
            onNavigateHome={() => setActiveTab('home')}
            onNavigateShop={() => {
              setSelectedCategory(null);
              setSelectedSubcategory(null);
              setActiveTab('shop');
            }}
          />
        )}

      </main>

      {/* Floating Chat Hub */}
      <ChatHub />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        setSelectedCategory={(cat) => handleSelectCategory(cat)}
      />

      {/* Drawers and Modals */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderPlaced={() => {}}
      />

      <Suspense fallback={null}>
        {quickViewProduct && (
          <ProductDetailModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            onAddToCart={handleAddToCart}
            onToggleCompare={handleToggleCompare}
            isCompared={quickViewProduct ? comparedIds.includes(quickViewProduct.id) : false}
          />
        )}

        {compareModalOpen && (
          <CompareModal
            isOpen={compareModalOpen}
            onClose={() => setCompareModalOpen(false)}
            products={comparedProducts}
            onRemoveCompare={(id) => setComparedIds(prev => prev.filter(pId => pId !== id))}
            onAddCompare={(p) => handleToggleCompare(p)}
            onAddToCart={handleAddToCart}
          />
        )}

        {searchModalOpen && (
          <SearchModal
            isOpen={searchModalOpen}
            onClose={() => setSearchModalOpen(false)}
            onSelectProduct={(p) => setQuickViewProduct(p)}
            onSelectCategory={(cat) => {
              handleSelectCategory(cat);
              setActiveTab('shop');
            }}
          />
        )}

        {adminPortalOpen && (
          <AdminReplyPortal isOpen={adminPortalOpen} onClose={() => setAdminPortalOpen(false)} />
        )}
      </Suspense>

      {/* Recently Purchased Popup (Every 40.5s) */}
      <RecentlyPurchasedPopup onQuickView={(p) => setQuickViewProduct(p)} />

    </div>
  );
}
