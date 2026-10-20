import React from 'react';
import { BRAND, SITE, CONTACT } from '../../config/site';
import { Building2, ShieldCheck, Zap, Award, CheckCircle2, MapPin, Truck } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
          <Building2 className="w-3.5 h-3.5" />
          <span>ESTABLISHED 2000 · PERTH WESTERN AUSTRALIA</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          About ALLIED ELECTRIC VEHICLES
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A specialized commercial EV & heavy industrial equipment division of <strong>ALLIED FORKLIFTS PTY LTD</strong> (ABN 66 060 256 377).
        </p>
      </div>

      {/* Entity Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
          Australian Business Registration & Entity Profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase">Entity Name</span>
            <p className="text-sky-400 font-bold text-sm">ALLIED FORKLIFTS PTY LTD</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase">ABN & GST Status</span>
            <p className="text-emerald-400 font-bold text-sm">ABN 66 060 256 377 (Active GST Registered)</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase">Main Location & HQ</span>
            <p className="text-white font-bold">{CONTACT.address}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase">National Fleet Warranty</span>
            <p className="text-amber-400 font-bold">3-Year Vehicle / 8-Year LiFePO4 Battery</p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
          <p>
            For over 25 years, ALLIED FORKLIFTS PTY LTD has stood as a cornerstone of Western Australia's equipment supply and fleet logistics industry. Operating from our Perth headquarters in Malaga, our specialized division, <strong>ALLIED ELECTRIC VEHICLES</strong>, acts as an <strong>authorized reseller, fleet supplier, and service provider</strong> for premier electric bike, scooter, skateboard, self-balancing EV, and mobility vehicle brands across Australia.
          </p>
          <p>
            We do not manufacture electric bikes; instead, we partner with established, top-tier global manufacturers to curate, inspect, stock, and distribute genuine electric bikes and commercial utility vehicles. Every vehicle and battery pack undergoes rigorous pre-delivery inspection, safety testing, and assembly check at our Malaga WA workshop before dispatch, backed by complete local Australian warranty support and direct spare parts availability.
          </p>
        </div>
      </div>

      {/* Differentiation Highlights */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white uppercase font-mono tracking-wider">
          Why Australian Industry Chooses ALLIED
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BRAND.differentiation.map((diff, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-200 font-semibold leading-snug">{diff}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Milestones */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <h3 className="text-lg font-bold text-white uppercase font-mono tracking-wider">
          Company History & Growth
        </h3>
        <div className="space-y-4 font-mono text-xs">
          {BRAND.milestones.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-sky-400 font-black text-base px-3 py-1 rounded bg-sky-500/10 border border-sky-500/20 shrink-0 text-center">
                {m.year}
              </span>
              <p className="text-slate-200 font-sans text-xs leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
