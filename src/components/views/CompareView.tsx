import React, { useState } from 'react';
import { Product, PRODUCTS, CATEGORIES } from '../../config/site';
import { money } from '../../lib/order';
import { SlidersHorizontal, Plus, Trash2, ShoppingCart, Zap, Check, Search, Eye } from 'lucide-react';

interface CompareViewProps {
  comparedIds: string[];
  onToggleCompare: (product: Product) => void;
  onRemoveCompare: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const CompareView: React.FC<CompareViewProps> = ({
  comparedIds,
  onToggleCompare,
  onRemoveCompare,
  onAddToCart,
  onQuickView,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [pickerOpen, setPickerOpen] = useState(false);

  const comparedProducts = PRODUCTS.filter(p => comparedIds.includes(p.id));

  const availableProducts = PRODUCTS.filter(p => !comparedIds.includes(p.id));

  const filteredAvailable = availableProducts.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategoryFilter === 'all' || p.category === selectedCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>SPECIFICATION COMPARATOR</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              Compare Electric Bikes & Vehicles
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Compare technical specs, battery capacities, ranges, motor outputs, and prices side-by-side across all E-Bikes, Utility Vehicles, Batteries, Chargers, and Spare Parts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {comparedProducts.length < 4 && (
              <button
                onClick={() => setPickerOpen(!pickerOpen)}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs font-mono flex items-center gap-2 shadow-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Item to Compare ({comparedProducts.length}/4)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Selection Picker Panel */}
      {(pickerOpen || comparedProducts.length === 0) && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h3 className="font-bold text-white text-base">Select Products to Add to Comparison</h3>
              <p className="text-xs text-slate-400 font-mono">Choose from electric bikes, cargo vehicles, battery packs, chargers & accessories</p>
            </div>
            {comparedProducts.length > 0 && (
              <button
                onClick={() => setPickerOpen(false)}
                className="text-xs text-slate-400 hover:text-white font-mono"
              >
                Done Selecting ×
              </button>
            )}
          </div>

          {/* Search & Category Filter Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any model e.g. Segway, Trek, Battery, Charger, Helmet..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-sky-500"
              />
            </div>
            <div className="sm:col-span-4">
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-sky-500"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map(c => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-80 overflow-y-auto pr-1">
            {filteredAvailable.map(p => (
              <div
                key={p.id}
                onClick={() => {
                  onToggleCompare(p);
                  if (comparedProducts.length + 1 >= 4) setPickerOpen(false);
                }}
                className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/50 cursor-pointer flex items-center gap-3 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-xl p-1 shrink-0 flex items-center justify-center border border-slate-800">
                  <img src={p.images[0]} alt={p.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white group-hover:text-sky-400 truncate">{p.name}</p>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">{p.shortDescription}</p>
                  <p className="text-xs font-mono font-bold text-sky-400 mt-1">{money(p.price)}</p>
                </div>
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Plus className="w-4 h-4" />
                </div>
              </div>
            ))}
            {filteredAvailable.length === 0 && (
              <p className="col-span-full text-center text-xs font-mono text-slate-500 py-6">
                No matching products found in picker filter.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Comparison Table View */}
      {comparedProducts.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Comparing {comparedProducts.length} Selected Items
            </span>
            <button
              onClick={() => comparedProducts.forEach(p => onRemoveCompare(p.id))}
              className="text-xs text-rose-400 hover:underline font-mono"
            >
              Clear All Comparison Items
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/50">
                  <th className="p-4 text-slate-400 font-bold uppercase w-48 shrink-0">Specification</th>
                  {comparedProducts.map((p) => (
                    <th key={p.id} className="p-4 min-w-[240px] text-center border-l border-slate-800 align-top">
                      <div className="space-y-3">
                        {/* Product Image Frame */}
                        <div className="w-32 h-24 mx-auto bg-white rounded-xl p-2 border border-slate-800 flex items-center justify-center">
                          <img src={p.images[0]} alt={p.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        
                        <div>
                          <p className="font-bold text-white text-sm font-sans line-clamp-2">{p.name}</p>
                          <p className="text-sky-400 font-black text-base mt-1">{money(p.price)}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{p.category}</p>
                        </div>

                        <div className="flex items-center justify-center gap-2 pt-1">
                          <button
                            onClick={() => onAddToCart(p)}
                            className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-[11px] flex items-center gap-1 transition-colors"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </button>
                          <button
                            onClick={() => onQuickView(p)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                            title="Quick View"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onRemoveCompare(p.id)}
                            className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Electrical System</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center">{p.specs.voltage || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Battery Capacity</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center font-bold text-sky-400">{p.specs.batteryType || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Range per Charge</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center font-bold text-emerald-400">{p.specs.range || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Motor Output</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center">{p.specs.motorPower || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Top Speed</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center">{p.specs.topSpeed || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Payload Capacity</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center">{p.specs.payloadCapacity || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Charge Time</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center">{p.specs.chargeTime || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Weight</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center">{p.specs.weight || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Warranty</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-center text-amber-400 font-bold">{p.specs.warranty || 'N/A'}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-slate-950/30">Key Features</td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 border-l border-slate-800 text-left align-top">
                      <ul className="space-y-1.5 text-[11px] text-slate-300">
                        {p.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
