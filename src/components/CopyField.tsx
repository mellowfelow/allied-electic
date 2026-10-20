import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyFieldProps {
  label: string;
  value: string;
  codeStyle?: boolean;
}

export const CopyField: React.FC<CopyFieldProps> = ({ label, value, codeStyle = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors gap-2 my-1.5">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider min-w-[120px]">{label}</span>
      <div className="flex items-center gap-2 grow justify-between sm:justify-end overflow-hidden">
        <span className={`text-sm ${codeStyle ? 'font-mono text-cyan-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800/80' : 'text-slate-100 font-medium'} truncate`}>
          {value}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition-all shrink-0 ${
            copied
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/30'
          }`}
          aria-label={`Copy ${label}`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
