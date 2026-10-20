import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from '../config/site';
import { CheckCircle2, ShoppingBag, X, Zap, ExternalLink } from 'lucide-react';
import { money } from '../lib/order';

interface RecentlyPurchasedPopupProps {
  onQuickView?: (product: Product) => void;
}

const BUYERS = [
  { name: 'Mick T.', location: 'Malaga, WA', timeAgo: '2 minutes ago' },
  { name: 'Sarah B.', location: 'Brisbane, QLD', timeAgo: '4 minutes ago' },
  { name: 'David W.', location: 'Sydney, NSW', timeAgo: '7 minutes ago' },
  { name: 'Jessica K.', location: 'Gold Coast, QLD', timeAgo: '10 minutes ago' },
  { name: 'Liam R.', location: 'Perth, WA', timeAgo: '12 minutes ago' },
  { name: 'Greg H.', location: 'Adelaide, SA', timeAgo: '15 minutes ago' },
  { name: 'Marcus P.', location: 'Melbourne, VIC', timeAgo: '18 minutes ago' },
  { name: 'Elena R.', location: 'Hobart, TAS', timeAgo: '22 minutes ago' },
];

export const RecentlyPurchasedPopup: React.FC<RecentlyPurchasedPopupProps> = ({ onQuickView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<{
    buyer: typeof BUYERS[0];
    product: Product;
  } | null>(null);

  const DISPLAY_DURATION_MS = 6000; // Visible for 6 seconds
  const INTERVAL_MS = 40500;        // Pops up every 40.5 seconds as requested!

  const triggerNextPopup = () => {
    // Select random product and buyer
    const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    const randomBuyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];

    setCurrentOrder({
      buyer: randomBuyer,
      product: randomProduct,
    });

    setIsVisible(true);

    // Hide after DISPLAY_DURATION_MS
    setTimeout(() => {
      setIsVisible(false);
    }, DISPLAY_DURATION_MS);
  };

  useEffect(() => {
    // Initial popup trigger after 5 seconds to show first one quickly
    const initialTimer = setTimeout(() => {
      triggerNextPopup();
    }, 5000);

    // Recurring interval every 40.5 seconds
    const intervalTimer = setInterval(() => {
      triggerNextPopup();
    }, INTERVAL_MS);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  if (!currentOrder) return null;

  const { buyer, product } = currentOrder;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-10 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="relative bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 shadow-2xl shadow-cyan-950/50 rounded-2xl p-4 max-w-sm w-[340px] text-slate-100 overflow-hidden group">
        
        {/* Animated Top Active Progress Bar */}
        <div
          className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 transition-all ease-linear ${
            isVisible ? 'w-full duration-[6000ms]' : 'w-0 duration-0'
          }`}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-full transition-colors z-10"
          aria-label="Dismiss order notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3">
          
          {/* Product Thumbnail Frame */}
          <div
            onClick={() => onQuickView && onQuickView(product)}
            className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-800 p-1 shrink-0 cursor-pointer overflow-hidden group-hover:border-cyan-500/50 transition-colors relative"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
            </div>
          </div>

          {/* Details Column */}
          <div className="flex-1 min-w-0 space-y-1 pr-4">
            
            {/* Verified Buyer Header */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-bold truncate">{buyer.name}</span>
              <span className="text-slate-400">({buyer.location})</span>
            </div>

            {/* Action & Product Title */}
            <p className="text-xs text-slate-200 leading-snug line-clamp-2">
              <span className="text-slate-400 font-medium">Just ordered </span>
              <strong className="text-white hover:text-cyan-300 cursor-pointer" onClick={() => onQuickView && onQuickView(product)}>
                {product.name}
              </strong>
            </p>

            {/* Price & Time Ago Footer */}
            <div className="flex items-center justify-between text-[11px] pt-0.5 border-t border-slate-800/80">
              <span className="font-mono font-bold text-emerald-400">{money(product.price)}</span>
              <span className="text-[10px] text-slate-400 font-mono">{buyer.timeAgo}</span>
            </div>

          </div>

        </div>

        {/* Live Purchase Pulse Indicator */}
        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-semibold">ALLIED Dispatch System</span>
          </div>
          <span className="text-cyan-400 font-bold">Verified Australia Order</span>
        </div>

      </div>
    </div>
  );
};
