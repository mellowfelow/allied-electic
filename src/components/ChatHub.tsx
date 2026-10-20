import React, { useState } from 'react';
import { SITE, CONTACT } from '../config/site';
import { MessageSquare, Phone, Mail, X, Zap, Send, ShieldCheck } from 'lucide-react';
import { waLink } from '../lib/whatsapp';

export const ChatHub: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const url = waLink('I have a technical inquiry regarding ALLIED Commercial Electric Vehicles.');
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-3.5 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-slate-950 font-bold shadow-xl hover:scale-105 transition-all flex items-center gap-2 group"
          aria-label="Contact ALLIED Specialists"
        >
          <div className="relative">
            <Zap className="w-6 h-6 fill-slate-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          </div>
          <span className="text-xs uppercase font-mono tracking-wider font-extrabold pr-1 hidden sm:inline">
            Perth EV Hub
          </span>
        </button>
      )}

      {/* Expanded Chat Hub Drawer Panel */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-sky-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{SITE.name}</h4>
                <p className="text-[10px] text-slate-400 font-mono">Perth Fleet Advisory · WA 6090</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Options */}
          <div className="p-4 space-y-3">
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with our Perth industrial engineers for fleet quotes, battery technical specs, or warranty advice.
            </p>

            <button
              onClick={handleWhatsApp}
              className="w-full p-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <div className="text-left">
                  <p className="text-white font-bold">WhatsApp Direct Advisory</p>
                  <p className="text-[10px] text-emerald-400/80">Opens with "Hi ALLIED ELECTRIC VEHICLES,"</p>
                </div>
              </div>
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href={`tel:${CONTACT.phone}`}
              className="w-full p-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 font-semibold text-xs flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400" />
                <div className="text-left">
                  <p className="text-white font-bold">Call Perth Sales ({CONTACT.phone})</p>
                  <p className="text-[10px] text-slate-400">Mon - Fri: 7am - 5pm AWST</p>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="w-full p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-2.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Email Fleet Tender Team ({CONTACT.email})</span>
            </a>

            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>ALLIED FORKLIFTS PTY LTD (ABN 66 060 256 377)</span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
