import React, { useState } from 'react';
import { FAQ, SITE } from '../../config/site';
import { ChevronDown, Zap, HelpCircle } from 'lucide-react';

export const FaqView: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>TECHNICAL & FLEET KNOWLEDGE BASE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Frequently Asked Technical Questions
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Comprehensive guide to charging, lithium battery life, Australian mine site compliance, and warranty terms.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-colors"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4"
            >
              <span>{item.question}</span>
              <ChevronDown className={`w-4 h-4 text-sky-400 shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIdx === idx && (
              <div className="p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
