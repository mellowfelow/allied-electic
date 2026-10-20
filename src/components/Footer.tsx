import React from 'react';
import { SITE, CONTACT, BRAND, CATEGORIES } from '../config/site';
import { BrandLogo } from './BrandLogo';
import { Zap, ShieldCheck, Truck, Phone } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  setSelectedCategory: (cat: string | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, setSelectedCategory }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      
      {/* Top Value Proposition Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-semibold text-white text-sm">25+ Years Industrial Heritage</h5>
              <p className="text-xs text-slate-400">ABN {SITE.abn} · Allied Forklifts Pty Ltd</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-semibold text-white text-sm">Samsung & LG Lithium Power</h5>
              <p className="text-xs text-slate-400">High Capacity 36V & 48V Cells</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-semibold text-white text-sm">Aust-Wide Express Freight</h5>
              <p className="text-xs text-slate-400">From Perth Logistics Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-semibold text-white text-sm">Perth Technical Support</h5>
              <p className="text-xs text-slate-400">Mon - Fri: 7am - 5pm AWST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Entity Summary */}
        <div className="md:col-span-2 space-y-4">
          <BrandLogo size="md" showSubtitle={false} />
          <p className="text-xs leading-relaxed text-slate-400">
            {BRAND.description}
          </p>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1 font-mono text-xs">
            <p className="text-slate-300"><strong className="text-sky-400">Entity:</strong> ALLIED FORKLIFTS PTY LTD</p>
            <p className="text-slate-300"><strong className="text-sky-400">ABN:</strong> 66 060 256 377 (Active GST Registered)</p>
            <p className="text-slate-300"><strong className="text-sky-400">Location:</strong> Perth, WA 6090, Australia</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider font-mono">Electric Vehicles & Bikes</h4>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <a
                  href={`/shop/${cat.slug}/`}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                      setActiveTab('shop');
                      setSelectedCategory(cat.slug);
                    }
                  }}
                  className="hover:text-sky-400 transition-colors"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company & Support */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider font-mono">Company</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="/about/"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                    setActiveTab('about');
                  }
                }}
                className="hover:text-sky-400 transition-colors"
              >
                About Allied
              </a>
            </li>
            <li>
              <a
                href="/contact/"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                    setActiveTab('contact');
                  }
                }}
                className="hover:text-sky-400 transition-colors"
              >
                Contact Perth HQ
              </a>
            </li>
            <li>
              <a
                href="/faq/"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                    setActiveTab('faq');
                  }
                }}
                className="hover:text-sky-400 transition-colors"
              >
                Technical FAQ
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal Copyright */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} ALLIED ELECTRIC VEHICLES. Division of ALLIED FORKLIFTS PTY LTD (ABN 66 060 256 377). All Rights Reserved.
          </p>
          <p>
            All prices in AUD and include 10% GST unless noted otherwise. Minimum order value $300 AUD.
          </p>
        </div>
      </div>

    </footer>
  );
};
