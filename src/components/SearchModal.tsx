import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, POSTS, Product } from '../config/site';
import { money } from '../lib/order';
import { Search, X, Zap, ArrowRight, BookOpen } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (categorySlug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchedProducts = cleanQuery
    ? PRODUCTS.filter(
        p =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.description.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery) ||
          p.specs.batteryType.toLowerCase().includes(cleanQuery) ||
          p.specs.voltage.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedCategories = cleanQuery
    ? CATEGORIES.filter(
        c =>
          c.name.toLowerCase().includes(cleanQuery) ||
          c.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedPosts = cleanQuery
    ? POSTS.filter(
        post =>
          post.title.toLowerCase().includes(cleanQuery) ||
          post.excerpt.toLowerCase().includes(cleanQuery)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-950">
          <Search className="w-5 h-5 text-sky-400 shrink-0" />
          <input
            type="text"
            autoFocus
            aria-label="Search products and articles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e-bikes, scooters, skateboards, batteries, helmets..."
            className="w-full bg-transparent text-white placeholder-slate-500 font-sans text-sm focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-500 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} aria-label="Close search" className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {!cleanQuery ? (
            <div className="p-4 text-center text-xs text-slate-500 font-mono">
              Type keywords above e.g. "Lithium", "Scooter", "Helmet", "Segway", "E-Bike"
            </div>
          ) : (
            <>
              {matchedProducts.length === 0 && matchedCategories.length === 0 && matchedPosts.length === 0 && (
                <div className="p-8 text-center text-slate-400 text-xs font-mono">
                  No matches found for "{query}". Try searching "Scooter", "Helmet", or "Battery".
                </div>
              )}

              {/* Matched Products */}
              {matchedProducts.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-sky-400 uppercase font-mono tracking-wider">
                    Matching Vehicles & Equipment ({matchedProducts.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchedProducts.map((p) => (
                      <a
                        key={p.id}
                        href={`/product/${p.slug}/`}
                        onClick={(e) => {
                          if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                            onSelectProduct(p);
                            onClose();
                          }
                        }}
                        className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors cursor-pointer flex items-center justify-between gap-3 block"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img src={p.images[0]} alt="" className="w-10 h-10 object-contain bg-white rounded-lg p-1 shrink-0" />
                          <div className="min-w-0">
                            <h5 className="font-semibold text-xs text-white truncate">{p.name}</h5>
                            <p className="text-[10px] text-slate-400 font-mono">{p.specs.voltage} · {p.specs.batteryType}</p>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-sky-400 shrink-0">{money(p.price)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Categories */}
              {matchedCategories.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <h4 className="text-[11px] font-bold text-emerald-400 uppercase font-mono tracking-wider">
                    Categories
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5">
                    {matchedCategories.map((c) => (
                      <a
                        key={c.slug}
                        href={`/shop/${c.slug}/`}
                        onClick={(e) => {
                          if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                            onSelectCategory(c.slug);
                            onClose();
                          }
                        }}
                        className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors cursor-pointer flex items-center justify-between block"
                      >
                        <div>
                          <h5 className="font-semibold text-xs text-white">{c.name}</h5>
                          <p className="text-[10px] text-slate-400">{c.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Blog Guides */}
              {matchedPosts.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <h4 className="text-[11px] font-bold text-purple-400 uppercase font-mono tracking-wider">
                    Technical Articles & Guides
                  </h4>
                  <div className="space-y-1.5">
                    {matchedPosts.map((post) => (
                      <div
                        key={post.slug}
                        className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1"
                      >
                        <div className="flex items-center gap-1.5 text-purple-400 font-semibold">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{post.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{post.excerpt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
