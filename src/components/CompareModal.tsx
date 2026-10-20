import React, { useState } from 'react';
import { Product, PRODUCTS } from '../config/site';
import { money } from '../lib/order';
import { X, Zap, Trash2, ShoppingCart, Plus, Check } from 'lucide-react';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemoveCompare: (id: string) => void;
  onAddCompare: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  products,
  onRemoveCompare,
  onAddCompare,
  onAddToCart
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerSearch, setPickerSearch] = useState('');

  if (!isOpen) return null;

  const availableToAdd = PRODUCTS.filter(
    p => !products.some(cp => cp.id === p.id)
  );

  const filteredPickerProducts = pickerSearch
    ? availableToAdd.filter(
        p =>
          p.name.toLowerCase().includes(pickerSearch.toLowerCase()) ||
          p.category.toLowerCase().includes(pickerSearch.toLowerCase())
      )
    : availableToAdd;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Side-by-Side Specification Comparator</h3>
              <p className="text-xs text-slate-400 font-mono">
                Compare E-Bikes, Scooters, Skateboards, Mobility Vehicles, Batteries & Spare Parts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {products.length < 4 && (
              <button
                type="button"
                onClick={() => setShowPicker(!showPicker)}
                className="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-colors shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product ({products.length}/4)</span>
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close compare"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Inline Product Picker Panel */}
        {showPicker && (
          <div className="p-4 bg-slate-950 border-b border-slate-800 space-y-3 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-sky-400 uppercase tracking-wider">
                Select Any E-Bike, Battery or Part to Compare:
              </span>
              <button
                onClick={() => setShowPicker(false)}
                className="text-xs text-slate-400 hover:text-white font-mono"
              >
                Close Picker ×
              </button>
            </div>

            <input
              type="text"
              value={pickerSearch}
              onChange={(e) => setPickerSearch(e.target.value)}
              placeholder="Search by name e.g. Segway, Trek, Battery, Helmet..."
              className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-sky-500"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto pt-1">
              {filteredPickerProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onAddCompare(p);
                    if (products.length + 1 >= 4) setShowPicker(false);
                  }}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center gap-2 transition-colors group"
                >
                  <div className="w-9 h-9 bg-white rounded p-1 shrink-0 flex items-center justify-center">
                    <img src={p.images[0]} alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-white group-hover:text-sky-400 truncate">{p.name}</p>
                    <p className="text-[10px] text-sky-400 font-mono">{money(p.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="p-4 sm:p-6 overflow-x-auto overflow-y-auto flex-1">
          {products.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Zap className="w-12 h-12 text-slate-700 mx-auto" />
              <div className="space-y-1">
                <p className="text-slate-300 font-bold text-sm">No items currently selected for comparison.</p>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Click "Add Product" above or tap "Compare" on any product card across the catalogue to add items here.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPicker(true)}
                className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Select Products to Compare Now</span>
              </button>
            </div>
          ) : (
            <table className="w-full text-left border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="p-3 bg-slate-950 text-slate-400 font-bold uppercase w-48 shrink-0">Model Detail</th>
                  {products.map((p) => (
                    <th key={p.id} className="p-3 bg-slate-950 text-white font-bold min-w-[220px] align-top">
                      <div className="space-y-3">
                        
                        {/* Product Header Image */}
                        <div className="bg-white aspect-[4/3] rounded-xl overflow-hidden p-3 flex items-center justify-center border border-slate-800">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between items-start gap-2">
                            <span className="line-clamp-2 text-sky-400 font-sans font-bold text-xs">{p.name}</span>
                            <button
                              onClick={() => onRemoveCompare(p.id)}
                              className="p-1 text-slate-500 hover:text-red-400 transition-colors shrink-0"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-sm text-white font-extrabold font-mono">{money(p.price)}</p>
                        </div>

                        <button
                          onClick={() => onAddToCart(p)}
                          className="w-full py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors shadow-md"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </button>

                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Category</td>
                  {products.map(p => (
                    <td key={p.id} className="p-3 text-slate-300 font-sans uppercase text-[11px]">
                      {p.category.replace(/-/g, ' ')}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">System Voltage</td>
                  {products.map(p => <td key={p.id} className="p-3 text-slate-200">{p.specs.voltage}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Battery Technology</td>
                  {products.map(p => <td key={p.id} className="p-3 text-emerald-400 font-bold">{p.specs.batteryType}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Operating Range</td>
                  {products.map(p => <td key={p.id} className="p-3 text-slate-200">{p.specs.range}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Top Speed / Output</td>
                  {products.map(p => <td key={p.id} className="p-3 text-slate-200">{p.specs.topSpeed}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Payload / Capacity</td>
                  {products.map(p => <td key={p.id} className="p-3 text-sky-400 font-bold">{p.specs.payloadCapacity}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Motor Power / Spec</td>
                  {products.map(p => <td key={p.id} className="p-3 text-slate-200">{p.specs.motorPower}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Charge Time</td>
                  {products.map(p => <td key={p.id} className="p-3 text-slate-200">{p.specs.chargeTime}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Dimensions (LxWxH)</td>
                  {products.map(p => <td key={p.id} className="p-3 text-slate-200">{p.specs.dimensions}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Weight</td>
                  {products.map(p => <td key={p.id} className="p-3 text-slate-200">{p.specs.weight}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950">Warranty Terms</td>
                  {products.map(p => <td key={p.id} className="p-3 text-sky-300 font-bold">{p.specs.warranty}</td>)}
                </tr>
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
};
