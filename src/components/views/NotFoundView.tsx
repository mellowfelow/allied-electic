import React from 'react';
import { SearchX } from 'lucide-react';

interface NotFoundViewProps {
  onNavigateHome: () => void;
  onNavigateShop: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigateHome, onNavigateShop }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 border border-slate-700">
        <SearchX className="w-8 h-8 text-slate-400" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Page Not Found</h1>
      <p className="text-slate-300">
        The page you're looking for doesn't exist or may have been moved. It might be a product that's no
        longer in our catalogue, or a mistyped link.
      </p>
      <div className="flex items-center justify-center gap-3 pt-2">
        <a
          href="/"
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey && e.button === 0) {
              e.preventDefault();
              onNavigateHome();
            }
          }}
          className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors"
        >
          Go to Homepage
        </a>
        <a
          href="/shop/"
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey && e.button === 0) {
              e.preventDefault();
              onNavigateShop();
            }
          }}
          className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 transition-colors"
        >
          Browse Full Catalogue
        </a>
      </div>
    </div>
  );
};
