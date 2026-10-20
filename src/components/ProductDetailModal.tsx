import React, { useState } from 'react';
import { Product, SITE, CONTACT } from '../config/site';
import { money } from '../lib/order';
import { waLink } from '../lib/whatsapp';
import { X, Check, ShieldCheck, Zap, Truck, Phone, MessageSquare, ShoppingCart, SlidersHorizontal, Download, Coins } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isCompared: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleCompare,
  isCompared
}) => {
  if (!product) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const handleWhatsAppQuote = () => {
    const message = `Inquiry regarding ${product.name} (Price: ${money(product.price)}). Please send technical spec sheet and fleet discount availability.`;
    window.open(waLink(message), '_blank');
  };

  const cryptoPrice = product.price * 0.9;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
              {product.category.replace(/-/g, ' ')}
            </span>
            <span className="text-xs text-slate-400 font-mono">SKU: {product.id.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close product details"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Image Gallery */}
            <div className="space-y-3">
              <div className="bg-white aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-slate-800">
                <img
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`w-16 h-12 rounded-lg bg-white p-1 border ${
                        activeImageIdx === idx ? 'border-sky-500 ring-2 ring-sky-500/30' : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Entity Compliance Badge */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
                <p className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Australian Standard Compliance</span>
                </p>
                <p className="text-[11px] text-slate-400">
                  Backed by ALLIED FORKLIFTS PTY LTD (ABN 66 060 256 377). Perth WA mobile fleet service.
                </p>
              </div>
            </div>

            {/* Right Product Overview & Price */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">{product.name}</h2>
                <p className="text-xs text-slate-400 mt-1">{product.shortDescription}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">STANDARD PRICE (AUD GST INC)</p>
                    <p className="text-2xl font-black text-sky-400 font-mono">{money(product.price)}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Stock Available Perth Depot
                    </span>
                  </div>
                </div>

                {/* Crypto Payment 10% Discount Callout */}
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-amber-300">Crypto Payment Special (-10%)</p>
                      <p className="text-[10px] text-slate-400">Pay via BTC, USDT, or ETH at checkout</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-amber-300 font-mono">{money(cryptoPrice)}</span>
                    <span className="block text-[9px] font-mono text-amber-400 uppercase">10% Savings</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-sky-500/20 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart Order</span>
                  </button>

                  <button
                    onClick={() => onToggleCompare(product)}
                    className={`py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      isCompared
                        ? 'bg-sky-950 text-sky-400 border-sky-500/50'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>{isCompared ? 'Comparing Spec' : 'Add to Compare'}</span>
                  </button>
                </div>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Request Fleet Tender Quote via WhatsApp</span>
                </button>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase font-mono tracking-wider">Key Engineering Features</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-400" />
              <span>Full Technical Specifications Sheet</span>
            </h4>

            <div className="rounded-xl border border-slate-800 overflow-hidden font-mono text-xs">
              <div className="grid grid-cols-2 p-2.5 bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold">
                <span>Specification Parameter</span>
                <span>Engineering Detail</span>
              </div>
              
              <div className="divide-y divide-slate-800/80 bg-slate-900/50">
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">System Voltage</span>
                  <span>{product.specs.voltage}</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">Battery Technology</span>
                  <span className="text-emerald-400 font-bold">{product.specs.batteryType}</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">Operating Range</span>
                  <span>{product.specs.range}</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">Top Speed</span>
                  <span>{product.specs.topSpeed}</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">Payload Capacity</span>
                  <span className="text-sky-400 font-bold">{product.specs.payloadCapacity}</span>
                </div>
                {product.specs.towingCapacity && (
                  <div className="grid grid-cols-2 p-2.5 text-slate-200">
                    <span className="text-slate-400">Towing Capacity</span>
                    <span>{product.specs.towingCapacity}</span>
                  </div>
                )}
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">Motor Power & Drive</span>
                  <span>{product.specs.motorPower}</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">Full Charge Time</span>
                  <span>{product.specs.chargeTime}</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">Dimensions (L x W x H)</span>
                  <span>{product.specs.dimensions}</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 text-slate-200">
                  <span className="text-slate-400">Tare Weight</span>
                  <span>{product.specs.weight}</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 text-slate-200 bg-sky-950/20">
                  <span className="text-sky-400 font-semibold">Warranty Terms</span>
                  <span className="text-sky-300 font-bold">{product.specs.warranty}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              {product.description}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
