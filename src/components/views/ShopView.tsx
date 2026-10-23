import React, { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS, Product } from '../../config/site';
import { ProductCard } from '../ProductCard';
import { Zap, ChevronRight, ChevronLeft } from 'lucide-react';

const PRODUCTS_PER_PAGE = 16; // 4 columns x 4 rows

interface ShopViewProps {
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null, subcat?: string | null) => void;
  selectedSubcategory?: string | null;
  selectedSubSubcategory?: string | null;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedIds: string[];
}

export const ShopView: React.FC<ShopViewProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory: initialSubcat,
  onAddToCart,
  onQuickView,
  onToggleCompare,
  comparedIds
}) => {
  const [activeSubcat, setActiveSubcat] = useState<string | null>(initialSubcat || null);
  const [priceSort, setPriceSort] = useState<'default' | 'low-high' | 'high-low'>('default');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setActiveSubcat(initialSubcat || null);
  }, [initialSubcat]);

  // Reset to page 1 whenever the filtered set changes shape.
  useEffect(() => {
    setPage(1);
  }, [selectedCategory, activeSubcat, priceSort]);

  let filtered = selectedCategory
    ? PRODUCTS.filter(p => p.category === selectedCategory)
    : PRODUCTS;

  if (activeSubcat) {
    filtered = filtered.filter(p => p.subcategory === activeSubcat);
  }

  if (priceSort === 'low-high') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (priceSort === 'high-low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const pageProducts = filtered.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  const goToPage = (p: number) => {
    setPage(Math.max(1, Math.min(totalPages, p)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentCategoryObj = CATEGORIES.find(c => c.slug === selectedCategory);
  const currentSubcatObj = currentCategoryObj?.subcategories.find(s => s.slug === activeSubcat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header Breadcrumbs & Title */}
      <div className="border-b border-slate-800 pb-6 space-y-3">
        
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <a
            href="/shop/"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                setSelectedCategory(null);
              }
            }}
            className="hover:text-sky-400 transition-colors"
          >
            All Collections
          </a>
          {currentCategoryObj && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <a
                href={`/shop/${currentCategoryObj.slug}/`}
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                    setSelectedCategory(currentCategoryObj.slug, null);
                  }
                }}
                className={`hover:text-sky-400 transition-colors ${!activeSubcat ? 'text-sky-400 font-bold' : ''}`}
              >
                {currentCategoryObj.name}
              </a>
            </>
          )}
          {currentSubcatObj && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-amber-400 font-bold">{currentSubcatObj.name}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-sky-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
            ALLIED Electric Bikes & Vehicles
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {currentSubcatObj?.h1 || currentSubcatObj?.name || currentCategoryObj?.h1 || currentCategoryObj?.name || 'Electric Bikes for Sale Australia'}
        </h1>

        <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
          {currentSubcatObj?.description || currentCategoryObj?.description || 'Browse zero-emission ALLIED electric city bikes, folding e-bikes, trail mountain bikes, cargo platforms, and commercial utility vehicles.'}
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4">
        
        {/* Primary Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-2">Category:</span>
          <a
            href="/shop/"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                setSelectedCategory(null);
                setActiveSubcat(null);
              }
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-colors inline-block ${
              selectedCategory === null
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Collections ({PRODUCTS.length})
          </a>
          {CATEGORIES.map(c => (
            <a
              key={c.slug}
              href={`/shop/${c.slug}/`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  setSelectedCategory(c.slug);
                  setActiveSubcat(null);
                }
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-colors inline-block ${
                selectedCategory === c.slug
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {c.name}
            </a>
          ))}
        </div>

        {/* Subcategories if main category selected */}
        {currentCategoryObj && (
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80">
            <span className="text-xs font-mono text-slate-500 mr-2">Subcategory:</span>
            <a
              href={`/shop/${currentCategoryObj.slug}/`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  setActiveSubcat(null);
                }
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors inline-block ${
                activeSubcat === null
                  ? 'bg-sky-500/20 text-sky-400 font-bold border border-sky-500/40'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All {currentCategoryObj.name}
            </a>
            {currentCategoryObj.subcategories.map(s => (
              <a
                key={s.slug}
                href={`/shop/${currentCategoryObj.slug}/${s.slug}/`}
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                    setActiveSubcat(s.slug);
                  }
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors inline-block ${
                  activeSubcat === s.slug
                    ? 'bg-sky-500/20 text-sky-400 font-bold border border-sky-500/40'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {s.name}
              </a>
            ))}
          </div>
        )}

      </div>

      {/* Grid Display */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
          <Zap className="w-10 h-10 text-slate-600 mx-auto" />
          <p className="text-slate-300 font-bold text-sm">No vehicles match the selected taxonomy category.</p>
          <button
            onClick={() => { setSelectedCategory(null); setActiveSubcat(null); }}
            className="text-xs text-sky-400 underline font-mono"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onToggleCompare={onToggleCompare}
              isCompared={comparedIds.includes(product.id)}
              priority={index < 4}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 font-mono text-sm">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="p-2 rounded-lg border border-slate-800 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`w-9 h-9 rounded-lg border transition-colors ${
                  p === page
                    ? 'bg-sky-500 border-sky-500 text-slate-950 font-bold'
                    : 'border-slate-800 text-slate-300 hover:border-sky-500/50 hover:text-sky-400'
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              className="p-2 rounded-lg border border-slate-800 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
        </div>
      )}

    </div>
  );
};
