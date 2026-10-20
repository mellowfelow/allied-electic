import React from 'react';
import { Product } from '../config/site';
import { money } from '../lib/order';
import { Zap, SlidersHorizontal, Plus, Eye, Coins, BatteryCharging } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isCompared: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  onToggleCompare,
  isCompared
}) => {
  const cryptoPrice = product.price * 0.9;

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-sky-500/10 relative">
      
      {/* Top Image Container with 4:3 aspect ratio */}
      <div className="relative bg-white aspect-[4/3] w-full overflow-hidden flex items-center justify-center p-4">
        
        {/* Top-Left Badge (Only Product Badge on Image) */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950 text-sky-400 border border-sky-500/30 shadow-md">
            {product.badge}
          </span>
        )}

        {/* Compare Checkbox */}
        <button
          type="button"
          onClick={() => onToggleCompare(product)}
          className={`absolute top-3 right-3 z-10 p-1.5 rounded-md text-xs font-mono font-semibold flex items-center gap-1 transition-all ${
            isCompared
              ? 'bg-sky-500 text-slate-950 shadow-md'
              : 'bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-950'
          }`}
          title="Compare Specifications"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden sm:inline">{isCompared ? 'Comparing' : 'Compare'}</span>
        </button>

        {/* Product Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Quick View Overlay Button */}
        <a
          href={`/product/${product.slug}/`}
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey && e.button === 0) {
              e.preventDefault();
              onQuickView(product);
            }
          }}
          className="absolute inset-x-4 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity py-2 rounded-lg bg-slate-950/90 text-sky-400 text-xs font-semibold font-mono flex items-center justify-center gap-1.5 border border-sky-500/40 backdrop-blur-sm"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Full Technical Specs</span>
        </a>
      </div>

      {/* Product Content Details (Lower Card) */}
      <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          <a
            href={`/product/${product.slug}/`}
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                e.preventDefault();
                onQuickView(product);
              }
            }}
            className="font-bold text-white text-base hover:text-sky-400 transition-colors cursor-pointer line-clamp-1 block"
          >
            {product.name}
          </a>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Specs Chips */}
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 truncate">
              <Zap className="w-3 h-3 text-sky-400 shrink-0" />
              <span className="truncate">{product.specs.voltage}</span>
            </div>
            <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 truncate">
              <BatteryCharging className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">{product.specs.batteryType}</span>
            </div>
          </div>
        </div>

        {/* 10% Crypto Discount Badge on Lower Card Body */}
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-amber-300 text-[11px] font-mono shadow-sm">
          <div className="flex items-center gap-1.5 min-w-0">
            <Coins className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-bold text-amber-300 text-[10px] sm:text-[11px] truncate">10% Off Crypto Payment</span>
          </div>
          <span className="font-extrabold text-amber-300 text-[11px] shrink-0 ml-1">{money(cryptoPrice)}</span>
        </div>

        {/* Price & Add to Cart Footer */}
        <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">STANDARD PRICE</p>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-extrabold text-white font-mono">{money(product.price)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="px-3.5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>

      </div>

    </div>
  );
};
