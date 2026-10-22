import React from 'react';
import { BRANDS, getProductsForBrand, Product } from '../../config/site';
import { ProductCard } from '../ProductCard';
import { Zap, ChevronRight } from 'lucide-react';

interface BrandViewProps {
  selectedBrand: string | null;
  onNavigateBrand: (slug: string | null) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedIds: string[];
}

export const BrandView: React.FC<BrandViewProps> = ({
  selectedBrand,
  onNavigateBrand,
  onAddToCart,
  onQuickView,
  onToggleCompare,
  comparedIds
}) => {
  const brand = BRANDS.find(b => b.slug === selectedBrand);

  // /brands/ index — lists every stocked brand with a dedicated page
  if (!brand) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="border-b border-slate-800 pb-6 space-y-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              ALLIED Electric Bikes & Vehicles
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Shop by Brand</h1>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            Genuine, authorized stock from the electric vehicle brands ALLIED carries — Perth-based service and spare parts for every model.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS.map(b => (
            <a
              key={b.slug}
              href={`/brands/${b.slug}/`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  e.preventDefault();
                  onNavigateBrand(b.slug);
                }
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 transition-colors group"
            >
              <h2 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">{b.name}</h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">{b.description}</p>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-sky-400 mt-4">
                Shop {b.name} <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  const filtered = getProductsForBrand(brand.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

      <div className="border-b border-slate-800 pb-6 space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <a
            href="/brands/"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                e.preventDefault();
                onNavigateBrand(null);
              }
            }}
            className="hover:text-sky-400 transition-colors"
          >
            Shop by Brand
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-bold">{brand.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-sky-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
            ALLIED Electric Bikes & Vehicles
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{brand.h1}</h1>

        <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">{brand.description}</p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
          <Zap className="w-10 h-10 text-slate-600 mx-auto" />
          <p className="text-slate-300 font-bold text-sm">No {brand.name} products currently in stock.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onToggleCompare={onToggleCompare}
              isCompared={comparedIds.includes(product.id)}
            />
          ))}
        </div>
      )}

    </div>
  );
};
