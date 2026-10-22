import React, { useState, useEffect } from 'react';
import { SITE, BRAND, CATEGORIES, PRODUCTS, FAQ, Product } from '../../config/site';
import { ProductCard } from '../ProductCard';
import { TrustpilotReviews } from '../TrustpilotReviews';
import { money } from '../../lib/order';
import {
  Zap,
  ShieldCheck,
  Truck,
  Phone,
  ArrowRight,
  ChevronDown,
  Building,
  CheckCircle2,
  Award,
  Factory
} from 'lucide-react';

interface HomeViewProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedIds: string[];
  onNavigateCategory: (catSlug: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onAddToCart,
  onQuickView,
  onToggleCompare,
  comparedIds,
  onNavigateCategory,
  onNavigateTab
}) => {
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const heroSlides = [
    {
      title: "Electric Bikes Australia — ALLIED Electric Vehicles",
      subtitle: "High-performance electric city bikes, folding e-bikes, step-through commuters, and heavy utility e-vehicles built for Australian conditions.",
      cta: "Explore Catalogue",
      bg: "/images/hero/hero-electric-bikes-vehicles-lineup.webp",
      focus: "center 80%"
    },
    {
      title: "Step-Through & Commuter Electric City Bikes",
      subtitle: "27.5\" puncture-resistant tyres, high-torque motors, 36V-48V LG/Samsung lithium batteries, and multi-speed gearing.",
      cta: "View City E-Bikes",
      bg: "/images/hero/hero-byron-noosa-city-ebikes.webp"
    },
    {
      title: "Compact Folding Electric Bikes",
      subtitle: "Compact 3-step folding mechanisms with up to 70km range. Folds down in under 15 seconds to fit into car boots or motorhomes.",
      cta: "View Folding Bikes",
      bg: "/images/hero/hero-torquay-folding-ebike.webp"
    },
    {
      title: "Off-Road Mountain & Trail E-Bikes",
      subtitle: "29\" trail tyres, high-torque mid-drive and hub motors, large-capacity LG/Samsung batteries, and air suspension forks for off-road trails.",
      cta: "View Off-Road MTB",
      bg: "/images/hero/hero-ripper-offroad-mtb-ebike.webp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIdx(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filteredProducts = selectedCategoryFilter === 'all'
    ? PRODUCTS.filter(p => p.featured)
    : PRODUCTS.filter(p => p.category === selectedCategoryFilter);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlides[heroSlideIdx].bg}
            alt={heroSlides[heroSlideIdx].title}
            style={{ objectPosition: (heroSlides[heroSlideIdx] as any).focus || 'center' }}
            className="w-full h-full object-cover scale-105 transition-all duration-1000"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/30 to-slate-950/5" />
        </div>

        {/* Hero Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          
          {/* Entity Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>ALLIED FORKLIFTS PTY LTD · ABN 66 060 256 377</span>
          </div>

          {/* Rule 4: Exactly ONE H1 per page on Slide 1; styled div on others */}
          {heroSlideIdx === 0 ? (
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
              {heroSlides[heroSlideIdx].title}
            </h1>
          ) : (
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
              {heroSlides[heroSlideIdx].title}
            </div>
          )}

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {heroSlides[heroSlideIdx].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigateTab('shop')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>{heroSlides[heroSlideIdx].cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 pt-6">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlideIdx(idx)}
                className={`w-10 h-1.5 rounded-full transition-all ${
                  heroSlideIdx === idx ? 'bg-sky-400' : 'bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
          <div className="space-y-1 p-2">
            <p className="text-2xl font-black text-sky-400 font-mono">25+ Years</p>
            <p className="text-xs text-slate-400">Australian Engineering Heritage</p>
          </div>
          <div className="space-y-1 p-2 border-l border-slate-800">
            <p className="text-2xl font-black text-emerald-400 font-mono">3,500+</p>
            <p className="text-xs text-slate-400">Electric Bikes Deployed</p>
          </div>
          <div className="space-y-1 p-2 border-l border-slate-800">
            <p className="text-2xl font-black text-amber-400 font-mono">36V / 48V</p>
            <p className="text-xs text-slate-400">High Density LG/Samsung Lithium</p>
          </div>
          <div className="space-y-1 p-2 border-l border-slate-800">
            <p className="text-2xl font-black text-purple-400 font-mono">Perth HQ</p>
            <p className="text-xs text-slate-400">Western Australia 6090</p>
          </div>
        </div>
      </div>

      {/* Category Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Product Categories</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Electric Bike & Vehicle Categories</h2>
          </div>
          <button
            onClick={() => onNavigateTab('shop')}
            className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`/shop/${cat.slug}/`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  onNavigateCategory(cat.slug);
                }
              }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all cursor-pointer shadow-lg flex flex-col justify-between block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-base text-white group-hover:text-sky-400 transition-colors">{cat.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{cat.description}</p>
                <div className="pt-2 text-xs text-sky-400 font-semibold font-mono flex items-center gap-1">
                  <span>Browse Subcategories →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Featured E-Bikes</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ALLIED Electric Bikes</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                selectedCategoryFilter === 'all'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Featured
            </button>
            {CATEGORIES.map(c => (
              <button
                key={c.slug}
                onClick={() => setSelectedCategoryFilter(c.slug)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  selectedCategoryFilter === c.slug
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onToggleCompare={onToggleCompare}
              isCompared={comparedIds.includes(product.id)}
              priority={index < 4}
            />
          ))}
        </div>
      </section>

      {/* Trustpilot 5,200+ Reviews Slider Grid */}
      <TrustpilotReviews />

      {/* Authority & Entity Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 space-y-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
            <Building className="w-3.5 h-3.5" />
            <span>ALLIED FORKLIFTS PTY LTD · ABN 66 060 256 377</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Australia’s Premier Authorized Reseller & Supplier of Leading E-Bikes
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Established in 2000 in Malaga, Western Australia, <strong>ALLIED FORKLIFTS PTY LTD</strong> (ABN 66 060 256 377) has supplied heavy industrial machinery and zero-emission vehicles across Australia for over a quarter of a century. As an <strong>authorized reseller and fleet distributor</strong>, our specialized division, <strong>ALLIED ELECTRIC VEHICLES</strong>, sources, inspects, sells, and services top-tier electric bikes, lithium battery systems, and commercial utility e-vehicles from leading global manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <ShieldCheck className="w-6 h-6 text-sky-400" />
            <h4 className="font-bold text-white text-base">Authorized Brand Reseller</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We source and supply genuine top-grade electric bikes featuring Tektro disc braking systems, Shimano Altus gearing, and LG/Samsung lithium battery power.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <Zap className="w-6 h-6 text-emerald-400" />
            <h4 className="font-bold text-white text-base">Pre-Delivery Safety Testing</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every bike and vehicle undergoes thorough multi-point assembly inspection and safety testing at our Perth depot prior to customer delivery.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <Award className="w-6 h-6 text-amber-400" />
            <h4 className="font-bold text-white text-base">Australian Support & Warranty</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Backed by our Perth headquarters and warehouse with a 2-Year frame and motor warranty and direct spare parts availability.
            </p>
          </div>
        </div>

        {/* Milestones */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">
            Key Corporate Milestones (2000 - Present)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
            {BRAND.milestones.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-sky-400 font-extrabold text-sm">{m.year}</span>
                <p className="text-slate-300 font-sans text-[11px] leading-tight">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">E-Bike & Vehicle Knowledge Base</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQ.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform ${openFaqIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaqIdx === idx && (
                <div className="p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
