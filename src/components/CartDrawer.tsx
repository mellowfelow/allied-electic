import React, { useState } from 'react';
import { SITE, SHOP, CONTACT } from '../config/site';
import { OrderItem, saveOrder, generateOrderRef } from '../lib/orderStore';
import { money } from '../lib/order';
import { waOrderLink } from '../lib/whatsapp';
import { orderMailtoLink } from '../lib/order';
import { X, Trash2, ShoppingBag, Send, AlertTriangle, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (orderId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [useAltDiscount, setUseAltDiscount] = useState(false);
  
  // Checkout Form State
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('WA');
  const [postcode, setPostcode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bank-transfer');
  const [placedOrderRef, setPlacedOrderRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = useAltDiscount ? subtotal * SHOP.cryptoDiscount : 0;
  const shippingFee = subtotal > 0 ? SHOP.shippingFee : 0;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const meetsMinOrder = subtotal >= SHOP.minOrder;

  const handleCheckoutSubmit = async (channel: 'email' | 'whatsapp') => {
    if (!customerName || !email || !phone || !address || !suburb || !postcode) {
      setErrorMessage('Please complete all required fields (Name, Email, Phone, Address, Suburb, Postcode).');
      return;
    }

    setErrorMessage('');
    setSubmitting(true);
    const orderRef = generateOrderRef();

    const orderData = {
      id: orderRef,
      createdAt: new Date().toISOString(),
      customerName,
      email,
      phone,
      companyName,
      address,
      suburb,
      state,
      postcode,
      paymentMethod,
      items,
      subtotal,
      discount: discountAmount,
      shipping: shippingFee,
      total,
      channel,
      status: 'new' as const
    };

    await saveOrder(orderData);
    setSubmitting(false);
    setPlacedOrderRef(orderRef);

    if (channel === 'whatsapp') {
      const itemsFormatted = items.map(i => `${i.quantity}x ${i.name} ($${i.price})`).join('\n');
      const waUrl = waOrderLink(orderRef, itemsFormatted, money(total), customerName);
      window.open(waUrl, '_blank');
    } else {
      // No SMTP backend exists — open the customer's own mail client so the
      // order actually reaches the business, instead of silently vanishing.
      window.location.href = orderMailtoLink(orderRef, items, money(total), customerName, email);
    }

    onClearCart();
    setCheckoutStep('success');
    onOrderPlaced(orderRef);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-sky-400" />
            <h3 className="font-bold text-lg text-white">Commercial Order Cart</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                  <p className="text-slate-400 text-sm font-medium">Your order cart is currently empty.</p>
                  <p className="text-xs text-slate-500">Select electric bikes, scooters, or vehicles from the catalogue.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Cart Item List */}
                  {items.map((item) => (
                    <div key={item.id} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-white truncate">{item.name}</h4>
                        <p className="text-xs font-mono text-sky-400 mt-0.5">{money(item.price)}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-slate-700 rounded-md bg-slate-900">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="px-2 py-1 text-slate-400 hover:text-white text-xs font-bold"
                          >
                            -
                          </button>
                          <span className="px-2.5 text-xs font-mono font-bold text-white">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="px-2 py-1 text-slate-400 hover:text-white text-xs font-bold"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Alt Payment Discount Toggle */}
                  <div className="p-3.5 rounded-lg bg-sky-950/40 border border-sky-800/50 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-sky-300 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        10% Direct Wire / Crypto Discount
                      </p>
                      <p className="text-[11px] text-slate-400">Save {money(subtotal * SHOP.cryptoDiscount)} by paying via Wire or Crypto</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={useAltDiscount}
                      onChange={(e) => setUseAltDiscount(e.target.checked)}
                      className="w-4 h-4 rounded text-sky-500 bg-slate-900 border-slate-700 focus:ring-sky-400"
                    />
                  </div>

                  {/* Min Order Warning */}
                  {!meetsMinOrder && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                      <span>Minimum commercial order requirement is <strong>{money(SHOP.minOrder)}</strong>. Please add more items.</span>
                    </div>
                  )}

                  {/* Summary Breakdown */}
                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>Subtotal (GST Inc):</span>
                      <span>{money(subtotal)}</span>
                    </div>
                    {useAltDiscount && (
                      <div className="flex justify-between text-emerald-400">
                        <span>10% Wire/Crypto Discount:</span>
                        <span>-{money(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-400">
                      <span>Perth Heavy Freight:</span>
                      <span>{money(shippingFee)}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white">
                      <span>Total Amount:</span>
                      <span className="text-sky-400">{money(total)}</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {checkoutStep === 'form' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-slate-800 pb-2">
                Order Delivery & Invoice Details
              </h4>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-3 text-xs">
                <div>
                  <label htmlFor="checkout-name" className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                  <input
                    id="checkout-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    placeholder="e.g. John Mitchell"
                    className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="checkout-email" className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                    <input
                      id="checkout-email"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="john@company.com.au"
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout-phone" className="block text-slate-300 font-semibold mb-1">Phone Number *</label>
                    <input
                      id="checkout-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="0400 000 000"
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkout-company" className="block text-slate-300 font-semibold mb-1">Company / Entity Name (Optional)</label>
                  <input
                    id="checkout-company"
                    type="text"
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    placeholder="e.g. West Coast Mining Pty Ltd"
                    className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label htmlFor="checkout-address" className="block text-slate-300 font-semibold mb-1">Street Address *</label>
                  <input
                    id="checkout-address"
                    type="text"
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="100 Logistics Way"
                    className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label htmlFor="checkout-suburb" className="block text-slate-300 font-semibold mb-1">Suburb *</label>
                    <input
                      id="checkout-suburb"
                      type="text"
                      required
                      value={suburb}
                      onChange={e => setSuburb(e.target.value)}
                      placeholder="Malaga"
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout-state" className="block text-slate-300 font-semibold mb-1">State *</label>
                    <select
                      id="checkout-state"
                      value={state}
                      onChange={e => setState(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="WA">WA</option>
                      <option value="NSW">NSW</option>
                      <option value="VIC">VIC</option>
                      <option value="QLD">QLD</option>
                      <option value="SA">SA</option>
                      <option value="TAS">TAS</option>
                      <option value="NT">NT</option>
                      <option value="ACT">ACT</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="checkout-postcode" className="block text-slate-300 font-semibold mb-1">Postcode *</label>
                    <input
                      id="checkout-postcode"
                      type="text"
                      required
                      value={postcode}
                      onChange={e => setPostcode(e.target.value)}
                      placeholder="6090"
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkout-payment-method" className="block text-slate-300 font-semibold mb-1">Payment Method *</label>
                  <select
                    id="checkout-payment-method"
                    value={paymentMethod}
                    onChange={e => setPaymentMethod(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500 font-mono"
                  >
                    <option value="bank-transfer">Direct Bank Wire / EFT (Recommended)</option>
                    <option value="crypto-pay">Cryptocurrency (USDT/BTC) - 10% Off</option>
                    <option value="commercial-lease">Commercial Lease / Asset Finance</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono">
                Invoice Entity: <strong>{SITE.legalEntity}</strong> (ABN {SITE.abn})
              </div>
            </div>
          )}

          {checkoutStep === 'success' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-bold text-lg text-white">Order Draft Submitted!</h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                Your order reference is <strong className="text-sky-400 font-mono">{placedOrderRef}</strong>.
                {' '}Please keep this reference — quote it in your email or WhatsApp message to confirm the order.
              </p>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs text-left">
                <p className="text-slate-400 font-semibold uppercase tracking-wider font-mono">Next Steps:</p>
                <p className="text-slate-300">1. Click below to view your bank payment instructions & BSB.</p>
                <p className="text-slate-300">2. Transfer funds or upload remittance advice.</p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOrderPlaced(placedOrderRef);
                }}
                className="w-full py-3 rounded-lg bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors text-sm"
              >
                View Payment Details & Copy Bank Info →
              </button>
            </div>
          )}

        </div>

        {/* Drawer Footer Actions */}
        {checkoutStep !== 'success' && (
          <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950 space-y-3">
            {checkoutStep === 'cart' ? (
              <button
                type="button"
                disabled={items.length === 0 || !meetsMinOrder}
                onClick={() => setCheckoutStep('form')}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Order Details</span>
                <span>→</span>
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => handleCheckoutSubmit('email')}
                  className="py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Place Order (Email)</span>
                </button>

                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => handleCheckoutSubmit('whatsapp')}
                  className="py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            )}

            {checkoutStep === 'form' && (
              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="w-full text-center text-xs text-slate-400 hover:text-white py-1"
              >
                ← Back to Cart Summary
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
