import React, { useState, useEffect } from 'react';
import { SITE, CATEGORIES, CONTACT } from '../config/site';
import { BrandLogo } from './BrandLogo';
import {
  ShoppingCart,
  Search,
  Zap,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  SlidersHorizontal,
  ShieldCheck,
  Tag
} from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenCompare: () => void;
  onOpenAdmin?: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null, subcat?: string | null) => void;
  onNavigateBrand: (slug: string | null) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  compareCount,
  onOpenCart,
  onOpenSearch,
  onOpenCompare,
  onOpenAdmin,
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  onNavigateBrand,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeHoverCategory, setActiveHoverCategory] = useState<string>(CATEGORIES[0].slug);
  const [announcementIdx, setAnnouncementIdx] = useState(0);

  const announcements = [
    `⚡ AUSTRALIA-WIDE FREIGHT FROM PERTH DEPOT · ABN ${SITE.abn}`,
    `⚡ 10% DISCOUNT ON DIRECT BANK WIRE & CRYPTOCURRENCY PAYMENTS`,
    `⚡ MINIMUM ORDER AUD $300 INC GST · ALLIED E-BIKES & VEHICLES`,
    `⚡ 2-YEAR WARRANTY ON ALLIED ELECTRIC BIKES & MOTORS`
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeCategoryObj = CATEGORIES.find(c => c.slug === activeHoverCategory) || CATEGORIES[0];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-950 via-cyan-900 to-slate-950 text-cyan-300 text-xs py-1.5 px-4 font-mono border-b border-sky-900/40 text-center flex items-center justify-center gap-2">
        <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
        <span className="truncate">{announcements[announcementIdx]}</span>
      </div>

      {/* Primary Header Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Entity Branding */}
          <a
            href="/"
            className="cursor-pointer"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                setActiveTab('home');
                setSelectedCategory(null);
              }
            }}
          >
            <BrandLogo size="md" showSubtitle={true} />
          </a>

          {/* Desktop Navigation: Shop, Blog, About, Contact, Compare */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-200">
            
            {/* 1. Shop with Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <a
                href="/shop/"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                    setActiveTab('shop');
                  }
                }}
                className={`px-3.5 py-2 rounded-lg flex items-center gap-1 transition-colors ${
                  activeTab === 'shop' ? 'text-sky-400 bg-sky-500/10 font-bold' : 'hover:text-sky-400 hover:bg-slate-900'
                }`}
              >
                <span>Shop</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </a>

              {/* Mega Dropdown Menu */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 animate-in fade-in duration-150 z-50">
                  
                  {/* Left Column: Categories List (5 cols) */}
                  <div className="col-span-5 border-r border-slate-800/80 pr-4 space-y-1.5">
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Collections & Categories
                    </h4>
                    {CATEGORIES.map((cat) => (
                      <a
                        key={cat.slug}
                        href={`/shop/${cat.slug}/`}
                        onMouseEnter={() => setActiveHoverCategory(cat.slug)}
                        onClick={(e) => {
                          if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                            setActiveTab('shop');
                            setSelectedCategory(cat.slug);
                            setMegaMenuOpen(false);
                          }
                        }}
                        className={`p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between block ${
                          activeHoverCategory === cat.slug
                            ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30 font-bold'
                            : 'hover:bg-slate-800/60 text-slate-200'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <h5 className="text-xs truncate">{cat.name}</h5>
                          <p className="text-[10px] text-slate-400 truncate mt-0.5">{cat.subcategories.length} Subcategories</p>
                        </div>
                        <ChevronRight className="w-4 h-4 shrink-0 text-slate-500" />
                      </a>
                    ))}
                  </div>

                  {/* Right Column: Subcategories for Hovered Category (7 cols) */}
                  <div className="col-span-7 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <h4 className="text-xs font-bold text-white uppercase font-mono">
                        {activeCategoryObj.name}
                      </h4>
                      <a
                        href={`/shop/${activeCategoryObj.slug}/`}
                        onClick={(e) => {
                          if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                            setActiveTab('shop');
                            setSelectedCategory(activeCategoryObj.slug);
                            setMegaMenuOpen(false);
                          }
                        }}
                        className="text-[11px] text-sky-400 font-mono hover:underline flex items-center gap-1"
                      >
                        <span>View All Category →</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-1 gap-3 max-h-[360px] overflow-y-auto pr-1">
                      {activeCategoryObj.subcategories.map((subcat) => (
                        <a
                          key={subcat.slug}
                          href={`/shop/${activeCategoryObj.slug}/${subcat.slug}/`}
                          onClick={(e) => {
                            if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                              setActiveTab('shop');
                              setSelectedCategory(activeCategoryObj.slug, subcat.slug);
                              setMegaMenuOpen(false);
                            }
                          }}
                          className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-sky-500/50 transition-colors cursor-pointer group block"
                        >
                          <h5 className="font-bold text-xs text-white group-hover:text-sky-400 flex items-center justify-between">
                            <span>{subcat.name}</span>
                            <Zap className="w-3 h-3 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h5>
                          <p className="text-[10px] text-slate-400 leading-relaxed mt-1">{subcat.description}</p>
                        </a>
                      ))}
                    </div>

                  </div>

                  <div className="col-span-12 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>GST Inclusive AUD Pricing · Australia-wide Express Freight</span>
                    <a
                      href="/shop/"
                      onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                          setActiveTab('shop');
                          setSelectedCategory(null);
                          setMegaMenuOpen(false);
                        }
                      }}
                      className="text-sky-400 font-semibold hover:underline"
                    >
                      Browse Entire Catalogue →
                    </a>
                  </div>

                </div>
              )}
            </div>

            {/* 2. Brands */}
            <a
              href="/brands/"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  e.preventDefault();
                  onNavigateBrand(null);
                }
              }}
              className={`px-3.5 py-2 rounded-lg transition-colors ${activeTab === 'brands' ? 'text-sky-400 bg-sky-500/10 font-bold' : 'hover:text-sky-400 hover:bg-slate-900'}`}
            >
              Brands
            </a>

            {/* 3. Blog */}
            <a
              href="/blog/"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  setActiveTab('blog');
                }
              }}
              className={`px-3.5 py-2 rounded-lg transition-colors ${activeTab === 'blog' ? 'text-sky-400 bg-sky-500/10 font-bold' : 'hover:text-sky-400 hover:bg-slate-900'}`}
            >
              Blog
            </a>

            {/* 4. About */}
            <a
              href="/about/"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  setActiveTab('about');
                }
              }}
              className={`px-3.5 py-2 rounded-lg transition-colors ${activeTab === 'about' ? 'text-sky-400 bg-sky-500/10 font-bold' : 'hover:text-sky-400 hover:bg-slate-900'}`}
            >
              About
            </a>

            {/* 5. Contact */}
            <a
              href="/contact/"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  setActiveTab('contact');
                }
              }}
              className={`px-3.5 py-2 rounded-lg transition-colors ${activeTab === 'contact' ? 'text-sky-400 bg-sky-500/10 font-bold' : 'hover:text-sky-400 hover:bg-slate-900'}`}
            >
              Contact
            </a>

            {/* 6. Compare */}
            <a
              href="/compare/"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  setActiveTab('compare');
                }
              }}
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'compare' ? 'text-sky-400 bg-sky-500/10 font-bold' : 'hover:text-sky-400 hover:bg-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4 text-sky-400" />
              <span>Compare</span>
              {compareCount > 0 && (
                <span className="bg-sky-500 text-slate-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {compareCount}
                </span>
              )}
            </a>

          </nav>

          {/* Action Tools (Search & Cart) */}
          <div className="flex items-center gap-2">
            
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Search catalog"
            >
              <Search className="w-5 h-5" />
            </button>



            {/* Shopping Cart Button */}
            <button
              type="button"
              onClick={onOpenCart}
              className="relative px-3.5 py-2.5 rounded-lg bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-semibold flex items-center gap-2 text-sm shadow-lg shadow-sky-600/20 transition-all"
              aria-label="View Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-6 space-y-4">
          <div className="space-y-1">
            <button
              onClick={() => { setActiveTab('shop'); setSelectedCategory(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'shop' ? 'bg-sky-500/10 text-sky-400' : 'text-slate-200'}`}
            >
              Shop
            </button>
            <button
              onClick={() => { onNavigateBrand(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-2 ${activeTab === 'brands' ? 'bg-sky-500/10 text-sky-400' : 'text-slate-200'}`}
            >
              <Tag className="w-4 h-4 text-sky-400" />
              <span>Brands</span>
            </button>
            <button
              onClick={() => { setActiveTab('blog'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'blog' ? 'bg-sky-500/10 text-sky-400' : 'text-slate-200'}`}
            >
              Blog
            </button>
            <button
              onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'about' ? 'bg-sky-500/10 text-sky-400' : 'text-slate-200'}`}
            >
              About
            </button>
            <button
              onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'contact' ? 'bg-sky-500/10 text-sky-400' : 'text-slate-200'}`}
            >
              Contact
            </button>
            <button
              onClick={() => { setActiveTab('compare'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center justify-between ${
                activeTab === 'compare' ? 'bg-sky-500/10 text-sky-400 font-bold' : 'text-slate-200'
              }`}
            >
              <span>Compare Products</span>
              {compareCount > 0 && <span className="bg-sky-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">{compareCount}</span>}
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Perth, WA 6090</span>
            <a href={`tel:${CONTACT.phone}`} className="text-sky-400 hover:underline">{CONTACT.phone}</a>
          </div>
        </div>
      )}
    </header>
  );
};
