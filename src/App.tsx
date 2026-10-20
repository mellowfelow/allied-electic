import React, { useState, useEffect } from 'react';
import { SITE, PRODUCTS, Product } from './config/site';
import { OrderItem } from './lib/orderStore';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ChatHub } from './components/ChatHub';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CompareModal } from './components/CompareModal';
import { SearchModal } from './components/SearchModal';
import { RecentlyPurchasedPopup } from './components/RecentlyPurchasedPopup';
import { AdminReplyPortal } from './components/admin/AdminReplyPortal';

// Views
import { HomeView } from './components/views/HomeView';
import { ShopView } from './components/views/ShopView';
import { BlogView } from './components/views/BlogView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { FaqView } from './components/views/FaqView';
import { CompareView } from './components/views/CompareView';

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

  // Synchronize hash location with state to allow opening any tab/page/category/product/admin in a new tab
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.pathname.startsWith('/admin')) {
        setAdminPortalOpen(true);
        return;
      }

      const rawHash = window.location.hash.replace(/^#\/?/, '');
      if (!rawHash) return;

      const parts = rawHash.split('/');
      const route = parts[0];

      if (route === 'admin') {
        setAdminPortalOpen(true);
        return;
      }

      if (route === 'home') {
        setActiveTab('home');
        setSelectedCategory(null);
        setSelectedSubcategory(null);
        setSelectedSubSubcategory(null);
      } else if (route === 'shop' || route === 'category' || route === 'subcategory') {
        setActiveTab('shop');
        setSelectedCategory(parts[1] ? decodeURIComponent(parts[1]) : null);
        setSelectedSubcategory(parts[2] ? decodeURIComponent(parts[2]) : null);
        setSelectedSubSubcategory(parts[3] ? decodeURIComponent(parts[3]) : null);
      } else if (route === 'product') {
        const slug = parts[1] ? decodeURIComponent(parts[1]) : null;
        if (slug) {
          const matched = PRODUCTS.find(p => p.slug === slug || p.id === slug);
          if (matched) {
            setQuickViewProduct(matched);
            setActiveTab('shop');
          }
        }
      } else if (route === 'blog') {
        setActiveTab('blog');
      } else if (route === 'about') {
        setActiveTab('about');
      } else if (route === 'contact') {
        setActiveTab('contact');
      } else if (route === 'faq') {
        setActiveTab('faq');
      } else if (route === 'compare') {
        setActiveTab('compare');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleCompare={handleToggleCompare}
        isCompared={quickViewProduct ? comparedIds.includes(quickViewProduct.id) : false}
      />

      <CompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        products={comparedProducts}
        onRemoveCompare={(id) => setComparedIds(prev => prev.filter(pId => pId !== id))}
        onAddCompare={(p) => handleToggleCompare(p)}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        onSelectCategory={(cat) => {
          handleSelectCategory(cat);
          setActiveTab('shop');
        }}
      />

      {/* Recently Purchased Popup (Every 40.5s) */}
      <RecentlyPurchasedPopup onQuickView={(p) => setQuickViewProduct(p)} />

      {/* Admin Reply Portal Modal */}
      <AdminReplyPortal isOpen={adminPortalOpen} onClose={() => setAdminPortalOpen(false)} />

    </div>
  );
}
