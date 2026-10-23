import React, { useEffect, useState } from 'react';
import { SITE } from '../../config/site';
import { money, paymentTermsLines } from '../../lib/order';
import { CopyField } from '../CopyField';
import { CreditCard, AlertCircle, Loader2 } from 'lucide-react';

interface LookupResult {
  id: string;
  customerName: string;
  total: number;
  status: string;
  parsedPaymentDetails: { label: string; value: string }[];
}

export const OrderPaymentDetailsView: React.FC = () => {
  const [state, setState] = useState<'loading' | 'ok' | 'not-found' | 'no-details-yet'>('loading');
  const [order, setOrder] = useState<LookupResult | null>(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('id');
    if (!id) {
      setState('not-found');
      return;
    }
    fetch(`/api/order-lookup?id=${encodeURIComponent(id)}`)
      .then(async (res) => {
        if (!res.ok) {
          setState('not-found');
          return;
        }
        const data: LookupResult = await res.json();
        setOrder(data);
        setState(data.parsedPaymentDetails.length > 0 ? 'ok' : 'no-details-yet');
      })
      .catch(() => setState('not-found'));
  }, []);

  return (
    <div className="max-w-xl mx-auto px-4 py-16 space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
          <CreditCard className="w-3.5 h-3.5" />
          <span>PAYMENT DETAILS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Your Payment Details</h1>
      </div>

      {state === 'loading' && (
        <div className="flex items-center justify-center py-16 text-slate-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      )}

      {state === 'not-found' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
          <p className="text-white font-semibold text-sm">We couldn't find that order.</p>
          <p className="text-xs text-slate-400">
            Check the link from your payment-details email, or contact us at{' '}
            <a href={`mailto:${SITE.reply.channels.email}`} className="text-sky-400 hover:underline">
              {SITE.reply.channels.email}
            </a>
            .
          </p>
        </div>
      )}

      {state === 'no-details-yet' && order && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
          <AlertCircle className="w-10 h-10 text-sky-400 mx-auto" />
          <p className="text-white font-semibold text-sm">Order {order.id} received</p>
          <p className="text-xs text-slate-400">
            We're preparing your payment details — you'll receive a follow-up email shortly with everything you need.
          </p>
        </div>
      )}

      {state === 'ok' && order && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <p className="text-xs text-slate-400 font-mono">Order Reference</p>
              <p className="text-lg font-bold text-sky-400 font-mono">{order.id}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 font-mono">Total Due</p>
              <p className="text-lg font-bold text-white">{money(order.total)}</p>
            </div>
          </div>

          <div className="space-y-1">
            {order.parsedPaymentDetails.map((f, i) => (
              <CopyField key={i} label={f.label} value={f.value} />
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Payment Terms</p>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {paymentTermsLines(order.id).map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
