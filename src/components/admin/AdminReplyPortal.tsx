import React, { useState, useEffect } from 'react';
import { SITE } from '../../config/site';
import {
  Order,
  getOrders,
  updateOrderStatus,
  markPaymentConfirmed,
  deleteOrder
} from '../../lib/orderStore';
import {
  Enquiry,
  getEnquiries,
  markEnquiryReplied,
  deleteEnquiry
} from '../../lib/enquiryStore';
import { parsePaymentDetail, money, paymentTermsLines, ParsedPaymentField } from '../../lib/order';
import { waLinkTo, waPaymentDetailsMessage } from '../../lib/whatsapp';
import { CopyField } from '../CopyField';
import { BrandLogo } from '../BrandLogo';
import {
  ShieldCheck,
  Lock,
  KeyRound,
  LayoutDashboard,
  ShoppingBag,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Trash2,
  Eye,
  ExternalLink,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Mail,
  User,
  MapPin,
  RefreshCw,
  X,
  FileText,
  Search,
  Filter
} from 'lucide-react';

export const AdminReplyPortal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  // Passcode gate state
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [dataSource, setDataSource] = useState<'shared' | 'local' | null>(null);

  // Portal view tab
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'enquiries' | 'composer'>('dashboard');

  // Data state
  const [orders, setOrders] = useState<Order[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  // Selected Order for detail / composer
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // Composer fields
  const [rawPaymentText, setRawPaymentText] = useState(
    `Bank: Commonwealth Bank of Australia\nBSB: 066-123\nAccount Number: 1045 8892\nAccount Name: ALLIED FORKLIFTS PTY LTD\nPayID: finance@alliedelectricvehicles.com.au\nReference: Use Order Ref Number`
  );
  const [parsedFields, setParsedFields] = useState<ParsedPaymentField[]>([]);
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);

  // Enquiry reply state
  const [enquiryReplyText, setEnquiryReplyText] = useState('');
  const [enquiryRepliedSuccess, setEnquiryRepliedSuccess] = useState(false);

  // Enquiry filter & search state
  const [enquiryFilter, setEnquiryFilter] = useState<'all' | 'new' | 'replied' | 'wholesale'>('all');
  const [enquirySearch, setEnquirySearch] = useState('');

  const filteredEnquiries = enquiries.filter(enq => {
    if (enquiryFilter === 'new' && enq.status !== 'new') return false;
    if (enquiryFilter === 'replied' && enq.status !== 'replied') return false;
    if (enquiryFilter === 'wholesale' && enq.type !== 'wholesale') return false;

    if (!enquirySearch.trim()) return true;
    const q = enquirySearch.toLowerCase();
    return (
      enq.name.toLowerCase().includes(q) ||
      enq.email.toLowerCase().includes(q) ||
      enq.phone.toLowerCase().includes(q) ||
      (enq.company && enq.company.toLowerCase().includes(q)) ||
      enq.subject.toLowerCase().includes(q) ||
      enq.message.toLowerCase().includes(q)
    );
  });

  // Load orders & enquiries from the shared Cloudflare KV store (via /api/orders
  // and /api/enquiries), falling back to this browser's localStorage if the API
  // isn't reachable (e.g. local `vite dev` without `wrangler pages dev`).
  const refreshData = async () => {
    const [ordersRes, enquiriesRes] = await Promise.all([
      getOrders(passcode),
      getEnquiries(passcode)
    ]);
    setOrders(ordersRes.orders);
    setEnquiries(enquiriesRes.enquiries);
    setDataSource(ordersRes.shared && enquiriesRes.shared ? 'shared' : 'local');
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      refreshData();
    }
  }, [isOpen, isAuthenticated]);

  useEffect(() => {
    setParsedFields(parsePaymentDetail(rawPaymentText));
  }, [rawPaymentText]);

  // Security: the passcode is verified server-side by the /api/orders Cloudflare
  // Function against ADMIN_PASSCODE (a Pages env var, never shipped to the
  // browser) — not compared against anything hardcoded or bundled in this file.
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/orders', { headers: { 'X-Admin-Passcode': passcode } });
      if (res.ok) {
        setIsAuthenticated(true);
      } else if (res.status === 503) {
        setAuthError('Admin portal is not configured. Set ADMIN_PASSCODE in Cloudflare Pages → Settings → Environment Variables.');
      } else {
        setAuthError('Incorrect passcode.');
      }
    } catch (err) {
      setAuthError('Could not reach the admin API. If you are running `vite dev` locally, use `wrangler pages dev` instead to test the Reply Portal.');
    } finally {
      setAuthLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-6xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-100">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" showSubtitle={false} />
            <div className="h-6 w-px bg-slate-800 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[11px] font-bold">
                REPLY PORTAL v11.1
              </span>
              <span className="text-xs text-slate-400 font-mono">ALLIED FORKLIFTS PTY LTD</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && dataSource && (
              <span
                className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
                  dataSource === 'shared'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                }`}
                title={dataSource === 'shared' ? 'Connected to the shared Cloudflare KV store' : 'API unreachable — showing this browser\'s local data only'}
              >
                {dataSource === 'shared' ? 'Live Shared Inbox' : 'Local-Only (API Unreachable)'}
              </span>
            )}
            {isAuthenticated && (
              <button
                type="button"
                onClick={refreshData}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-1.5 text-xs font-mono"
                title="Refresh Data"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Passcode Gate Screen */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-6 bg-slate-950">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full space-y-6 shadow-2xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/10">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Allied Admin Reply Portal</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Passcode protected hub for order dispatch & enquiry response management.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="Enter Passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                {authError && (
                  <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl font-mono">
                    {authError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {authLoading ? 'Checking…' : 'Unlock Admin Portal'}
                </button>
              </form>

              <p className="text-[11px] text-slate-500 font-mono">
                ABN 66 060 256 377 · Malaga WA Headquarters
              </p>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Body */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-950">
            
            {/* Left Sidebar Navigation */}
            <div className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-4 space-y-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('dashboard')}
                className={`w-full p-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                  activeTab === 'dashboard' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard Hub</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('orders')}
                className={`w-full p-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                  activeTab === 'orders' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Orders List</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono font-extrabold text-cyan-400">
                  {orders.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('enquiries')}
                className={`w-full p-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                  activeTab === 'enquiries' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquiries & Leads</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono font-extrabold text-cyan-400">
                  {enquiries.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('composer')}
                className={`w-full p-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                  activeTab === 'composer' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Payment Details Composer</span>
              </button>

              <div className="pt-6 border-t border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={() => setIsAuthenticated(false)}
                  className="w-full p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-mono flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Lock Dashboard</span>
                </button>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* TAB 1: Dashboard Overview */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">Admin Command Center</h2>
                    <p className="text-xs text-slate-400">Live order management and customer communication hub.</p>
                  </div>

                  {/* Stat Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-[11px] font-mono text-slate-400 uppercase">Total Orders</span>
                      <p className="text-2xl font-black text-cyan-400">{orders.length}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-[11px] font-mono text-slate-400 uppercase">New Pending Orders</span>
                      <p className="text-2xl font-black text-amber-400">
                        {orders.filter(o => o.status === 'new').length}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-[11px] font-mono text-slate-400 uppercase">Payments Confirmed</span>
                      <p className="text-2xl font-black text-emerald-400">
                        {orders.filter(o => o.status === 'payment_confirmed').length}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-[11px] font-mono text-slate-400 uppercase">Customer Inquiries</span>
                      <p className="text-2xl font-black text-purple-400">{enquiries.length}</p>
                    </div>
                  </div>

                  {/* Quick Action Banner */}
                  <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-teal-950 border border-cyan-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Send Custom Payment Details to Customer</h4>
                      <p className="text-xs text-slate-300">
                        Paste bank details or crypto wallet once. Auto-splits into copyable fields with email and WhatsApp link.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('composer')}
                      className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs whitespace-nowrap shadow-lg shadow-cyan-500/20"
                    >
                      Open Composer →
                    </button>
                  </div>

                  {/* Recent Orders Overview */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-white font-mono uppercase">Recent Orders</h3>
                    {orders.length === 0 ? (
                      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 text-xs">
                        No orders recorded yet. Orders placed at checkout will automatically appear here.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {orders.slice(0, 5).map(ord => (
                          <div key={ord.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between gap-4 text-xs">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold font-mono text-cyan-400">{ord.id}</span>
                                <span className="text-slate-200 font-semibold">{ord.customerName}</span>
                                <span className="text-slate-400">({ord.suburb}, {ord.state})</span>
                              </div>
                              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                {ord.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="font-mono font-bold text-emerald-400 block">{money(ord.total)}</span>
                              <span className="text-[10px] text-slate-400 uppercase font-mono">{ord.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: Orders Manager */}
              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h2 className="text-xl font-bold text-white">Orders Management</h2>
                      <p className="text-xs text-slate-400">Manage orders, update status, and dispatch payment instructions.</p>
                    </div>
                  </div>

                  {orders.length === 0 ? (
                    <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                      <ShoppingBag className="w-8 h-8 text-slate-600 mx-auto" />
                      <p className="text-sm text-slate-300 font-bold">No orders recorded in system</p>
                      <p className="text-xs text-slate-500">When customers place orders via Email or WhatsApp, they save directly to this portal.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map(ord => (
                        <div key={ord.id} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
                          
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                            <div className="flex items-center gap-3">
                              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-xs rounded-lg">
                                {ord.id}
                              </span>
                              <div>
                                <h4 className="font-bold text-white text-sm">{ord.customerName}</h4>
                                <span className="text-xs text-slate-400">{ord.email} · {ord.phone}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 flex-wrap">
                              <select
                                value={ord.status}
                                onChange={async (e) => {
                                  await updateOrderStatus(ord.id, e.target.value as Order['status'], passcode);
                                  refreshData();
                                }}
                                className="px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-950 border border-slate-800 text-cyan-400 focus:outline-none focus:border-cyan-500"
                              >
                                <option value="new">Status: New</option>
                                <option value="payment_details_sent">Status: Details Sent</option>
                                <option value="payment_confirmed">Status: Payment Confirmed</option>
                                <option value="dispatched">Status: Dispatched</option>
                                <option value="cancelled">Status: Cancelled</option>
                              </select>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedOrder(ord);
                                  setActiveTab('composer');
                                }}
                                className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
                              >
                                Send Payment Details
                              </button>
                              <button
                                type="button"
                                onClick={async () => {
                                  await deleteOrder(ord.id, passcode);
                                  refreshData();
                                }}
                                className="p-1.5 text-slate-500 hover:text-amber-400"
                                title="Delete order"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Address & Items */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono text-slate-500 uppercase">Delivery Address</span>
                              <p className="text-slate-300">
                                {ord.address}, {ord.suburb} {ord.state} {ord.postcode}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] font-mono text-slate-500 uppercase">Order Total & Method</span>
                              <p className="text-emerald-400 font-bold font-mono text-sm">
                                {money(ord.total)} <span className="text-slate-400 font-normal text-xs">({ord.paymentMethod})</span>
                              </p>
                            </div>
                          </div>

                          {/* Items List */}
                          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1 text-xs">
                            <span className="text-[10px] font-mono text-slate-500 uppercase">Items Ordered</span>
                            {ord.items.map((i, idx) => (
                              <div key={idx} className="flex justify-between text-slate-300">
                                <span>{i.quantity}x {i.name}</span>
                                <span className="font-mono">{money(i.price * i.quantity)}</span>
                              </div>
                            ))}
                          </div>

                          {/* WhatsApp Pre-filled link */}
                          <div className="pt-2 flex items-center justify-between text-xs">
                            <span className="text-slate-500 text-[11px] font-mono">Channel: {ord.channel}</span>
                            <a
                              href={waLinkTo(ord.phone, `Hi ${ord.customerName}, regarding your ALLIED Electric order ${ord.id}...`)}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-400 hover:underline flex items-center gap-1 font-mono"
                            >
                              <span>WhatsApp Customer →</span>
                            </a>
                          </div>

                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Enquiries Lead Manager */}
              {activeTab === 'enquiries' && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-white">Inquiries & Leads</h2>
                      <p className="text-xs text-slate-400">Manage customer messages, wholesale quote requests, and support leads.</p>
                    </div>

                    {/* Stats Summary Pills */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 font-mono">
                        Total: <strong className="text-white">{enquiries.length}</strong>
                      </span>
                      <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-400 font-mono">
                        New: <strong>{enquiries.filter(e => e.status === 'new').length}</strong>
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-400 font-mono">
                        Replied: <strong>{enquiries.filter(e => e.status === 'replied').length}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Filter Pills & Search Control Bar */}
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                    {/* Status Filter Tabs */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                      <button
                        type="button"
                        onClick={() => setEnquiryFilter('all')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                          enquiryFilter === 'all' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400 hover:text-white'
                        }`}
                      >
                        All ({enquiries.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setEnquiryFilter('new')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                          enquiryFilter === 'new' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400 hover:text-white'
                        }`}
                      >
                        New Leads ({enquiries.filter(e => e.status === 'new').length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setEnquiryFilter('replied')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                          enquiryFilter === 'replied' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400 hover:text-white'
                        }`}
                      >
                        Replied ({enquiries.filter(e => e.status === 'replied').length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setEnquiryFilter('wholesale')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                          enquiryFilter === 'wholesale' ? 'bg-purple-500 text-white font-bold' : 'bg-slate-950 text-slate-400 hover:text-white'
                        }`}
                      >
                        Wholesale ({enquiries.filter(e => e.type === 'wholesale').length})
                      </button>
                    </div>

                    {/* Search Input Box */}
                    <div className="relative shrink-0 sm:w-64">
                      <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={enquirySearch}
                        onChange={(e) => setEnquirySearch(e.target.value)}
                        placeholder="Filter inquiries..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-8 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                      {enquirySearch && (
                        <button
                          type="button"
                          onClick={() => setEnquirySearch('')}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Enquiry List Cards */}
                  {enquiries.length === 0 ? (
                    <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                      <MessageSquare className="w-8 h-8 text-slate-600 mx-auto" />
                      <p className="text-sm text-slate-300 font-bold">No customer inquiries recorded</p>
                      <p className="text-xs text-slate-500">Contact form submissions from the website will automatically route to this dashboard.</p>
                    </div>
                  ) : filteredEnquiries.length === 0 ? (
                    <div className="p-10 text-center bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                      <Filter className="w-8 h-8 text-slate-600 mx-auto" />
                      <p className="text-sm text-slate-300 font-bold">No inquiries match your filter criteria</p>
                      <p className="text-xs text-slate-500">Try adjusting your search terms or clearing status filters.</p>
                      <button
                        type="button"
                        onClick={() => {
                          setEnquiryFilter('all');
                          setEnquirySearch('');
                        }}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded-xl text-xs transition-colors"
                      >
                        Clear Search & Reset Filters
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredEnquiries.map(enq => (
                        <div key={enq.id} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 text-xs shadow-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-bold text-white text-sm">{enq.name}</h4>
                                {enq.company && (
                                  <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[10px] font-mono">
                                    {enq.company}
                                  </span>
                                )}
                              </div>
                              <span className="text-slate-400 text-xs">{enq.email} · {enq.phone}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {enq.type === 'wholesale' && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30">
                                  Wholesale Quote
                                </span>
                              )}
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                                enq.status === 'replied' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                              }`}>
                                {enq.status === 'replied' ? 'Replied' : 'New Lead'}
                              </span>
                              <button
                                type="button"
                                onClick={async () => {
                                  await deleteEnquiry(enq.id, passcode);
                                  refreshData();
                                }}
                                className="p-1.5 text-slate-500 hover:text-amber-400 transition-colors"
                                title="Delete enquiry"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <strong className="text-white block font-semibold">{enq.subject}</strong>
                            <p className="text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 font-sans">
                              {enq.message}
                            </p>
                          </div>

                          {enq.replyMessage && (
                            <div className="bg-cyan-950/40 border border-cyan-500/30 p-3.5 rounded-xl space-y-1">
                              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 font-bold uppercase">
                                <span>Sent Reply</span>
                                {enq.repliedAt && <span>{enq.repliedAt.split('T')[0]}</span>}
                              </div>
                              <p className="text-slate-200">{enq.replyMessage}</p>
                            </div>
                          )}

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-800">
                            <span className="text-slate-500 font-mono text-[10px]">Received: {enq.createdAt}</span>
                            <div className="flex items-center gap-2">
                              {selectedEnquiry?.id === enq.id ? (
                                <button
                                  type="button"
                                  onClick={() => setSelectedEnquiry(null)}
                                  className="px-3 py-1.5 text-slate-400 hover:text-white text-xs font-semibold"
                                >
                                  Cancel Reply
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedEnquiry(enq);
                                    setEnquiryReplyText(`Hi ${enq.name},\n\nThank you for contacting ALLIED Electric Vehicles. Regarding your inquiry on "${enq.subject}"...\n\nBest regards,\nALLIED Electric Vehicles Team`);
                                  }}
                                  className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                                >
                                  <Send className="w-3.5 h-3.5" />
                                  <span>Draft & Send Reply</span>
                                </button>
                              )}
                              <a
                                href={`mailto:${enq.email}?subject=RE: ${encodeURIComponent(enq.subject)}`}
                                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                <span>Mail App</span>
                              </a>
                            </div>
                          </div>

                          {/* Expanded Inline Reply Draft Box */}
                          {selectedEnquiry?.id === enq.id && (
                            <div className="pt-3 border-t border-slate-800 space-y-3 bg-slate-950 p-4 rounded-xl border border-cyan-500/30 shadow-inner">
                              <div className="flex items-center justify-between">
                                <label className="block text-[11px] font-mono font-bold text-cyan-400 uppercase">
                                  Compose Response to {enq.name} ({enq.email})
                                </label>
                                <span className="text-[10px] font-mono text-slate-500">Auto-saves status to 'Replied'</span>
                              </div>
                              <textarea
                                rows={4}
                                value={enquiryReplyText}
                                onChange={(e) => setEnquiryReplyText(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500 leading-relaxed font-sans"
                              />
                              <div className="flex justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={async () => {
                                    await markEnquiryReplied(enq.id, enquiryReplyText, passcode);
                                    setSelectedEnquiry(null);
                                    refreshData();
                                  }}
                                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Save & Mark Replied</span>
                                </button>
                              </div>
                            </div>
                          )}

                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: Payment Details Composer */}
              {activeTab === 'composer' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">Payment Details Composer & Dispatch</h2>
                    <p className="text-xs text-slate-400">
                      Paste one raw block of payment details. The parser splits it into individual copyable fields for the customer.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Left Paste Input Box */}
                    <div className="space-y-4">
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
                        Raw Payment Info Paste Box
                      </label>
                      <textarea
                        rows={8}
                        value={rawPaymentText}
                        onChange={(e) => setRawPaymentText(e.target.value)}
                        placeholder="Paste bank account BSB, account number, PayID or crypto wallet..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500 leading-relaxed"
                      />

                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                        <span className="font-bold text-cyan-400 font-mono">PARSER PREVIEW ({parsedFields.length} fields)</span>
                        <div className="space-y-2">
                          {parsedFields.map((f, idx) => (
                            <CopyField key={idx} label={f.label} value={f.value} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Customer Email & WhatsApp Dispatch Preview */}
                    <div className="space-y-4 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                      <h4 className="font-bold text-white text-sm">Customer Email & WhatsApp Dispatch</h4>

                      {emailSentSuccess ? (
                        <div className="p-6 text-center space-y-2 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                          <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                          <h5 className="font-bold text-white text-sm">Order Status Updated</h5>
                          <p className="text-xs text-slate-300">Marked 'payment_details_sent'. Use the WhatsApp button below or your own mail client to actually send the details — no SMTP is configured on this static site.</p>
                        </div>
                      ) : (
                        <div className="space-y-4 text-xs">
                          <div>
                            <label className="block text-slate-400 mb-1">Select Order to Dispatch To</label>
                            {orders.length > 0 ? (
                              <select
                                value={selectedOrder ? selectedOrder.id : ''}
                                onChange={(e) => {
                                  const found = orders.find(o => o.id === e.target.value);
                                  setSelectedOrder(found || null);
                                }}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 font-mono text-cyan-400 font-bold focus:outline-none focus:border-cyan-500"
                              >
                                {orders.map(o => (
                                  <option key={o.id} value={o.id}>
                                    {o.id} — {o.customerName} ({money(o.total)})
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type="text"
                                value={selectedOrder ? selectedOrder.id : 'AEV-DEMO88'}
                                readOnly
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 font-mono text-cyan-400 font-bold"
                              />
                            )}
                          </div>

                          <div>
                            <label className="block text-slate-400 mb-1">Customer Email</label>
                            <input
                              type="email"
                              value={selectedOrder ? selectedOrder.email : 'sales@clientcompany.com.au'}
                              readOnly
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-300 font-mono"
                            />
                          </div>

                          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                            <span className="text-[10px] text-slate-500 font-mono uppercase">Payment Terms Lines (Auto-included in email & WA)</span>
                            <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4">
                              {paymentTermsLines(selectedOrder ? selectedOrder.id : 'AEV-DEMO88').map((t, i) => (
                                <li key={i}>{t}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2 flex flex-col gap-2">
                            <button
                              type="button"
                              onClick={async () => {
                                if (selectedOrder) {
                                  await updateOrderStatus(selectedOrder.id, 'payment_details_sent', passcode, parsedFields);
                                  refreshData();
                                }
                                setEmailSentSuccess(true);
                                setTimeout(() => setEmailSentSuccess(false), 3500);
                              }}
                              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                            >
                              <Mail className="w-4 h-4" />
                              <span>Mark "Payment Details Sent" (then email/WhatsApp manually)</span>
                            </button>

                            <a
                              href={waLinkTo(
                                selectedOrder ? selectedOrder.phone : '61400000000',
                                `Hi ${selectedOrder ? selectedOrder.customerName : 'Customer'}, here are your ALLIED Electric payment details for order ${
                                  selectedOrder ? selectedOrder.id : 'AEV-DEMO88'
                                }:\n\n${parsedFields.map(f => `${f.label}: ${f.value}`).join('\n')}\n\nPlease include your order reference (${selectedOrder ? selectedOrder.id : 'AEV-DEMO88'}) with payment.`
                              )}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                            >
                              <Send className="w-4 h-4" />
                              <span>Send via WhatsApp Direct →</span>
                            </a>
                          </div>

                        </div>
                      )}

                    </div>

                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
