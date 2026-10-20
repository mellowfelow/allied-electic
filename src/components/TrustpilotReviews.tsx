import React, { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, Search, Play, Pause, Filter, ThumbsUp, MessageSquare, ShieldCheck, X } from 'lucide-react';

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  verified: boolean;
  rating: number; // 1 to 5
  date: string;
  title: string;
  content: string;
  productName: string;
  merchantReply?: {
    date: string;
    content: string;
  };
  helpfulCount: number;
  category: 'customer-service' | 'delivery' | 'follow-up' | 'product-quality' | 'resolution';
}

const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mark Henderson',
    location: 'Perth, WA',
    verified: true,
    rating: 5,
    date: '1 day ago',
    title: 'Outstanding customer service & swift Perth delivery',
    content: 'Ordered the Allied City Commuter for my daily commute into the CBD. The team in Malaga called me within an hour to confirm shipping details. The bike arrived fully packaged with the battery charged. Unbeatable local support!',
    productName: 'ALLIED City Commuter E-Bike',
    merchantReply: {
      date: '1 day ago',
      content: 'Thanks Mark! Delighted to hear your daily commute is powered up. Enjoy the ride and let us know if you ever need service or spare parts in Perth.'
    },
    helpfulCount: 24,
    category: 'customer-service'
  },
  {
    id: 'rev-2',
    author: 'Sarah Jenkins',
    location: 'Brisbane, QLD',
    verified: true,
    rating: 5,
    date: '3 days ago',
    title: 'Post-purchase follow up was top notch!',
    content: 'I had a quick question regarding brake calibration on the front disc after unboxing. Emailed Allied support and had a detailed video walkthrough sent to my inbox within 20 minutes! That is real post-purchase service.',
    productName: 'ALLIED Step-Through E-Commuter',
    helpfulCount: 18,
    category: 'follow-up'
  },
  {
    id: 'rev-3',
    author: 'David Wright',
    location: 'Sydney, NSW',
    verified: true,
    rating: 5,
    date: '5 days ago',
    title: 'Bulletproof delivery across state lines',
    content: 'Shipped from Perth depot to Sydney in under 4 business days. Heavy duty box, double strapped, zero scratches. The 48V Samsung battery pack gives me a realistic 85km range in eco assist mode.',
    productName: 'ALLIED Folding Compact E-Bike',
    helpfulCount: 31,
    category: 'delivery'
  },
  {
    id: 'rev-4',
    author: 'Craig O’Connor',
    location: 'Adelaide, SA',
    verified: true,
    rating: 4,
    date: '1 week ago',
    title: 'Great e-vehicle, minor delay with freight courier',
    content: 'The e-bike itself is built like a tank. Smooth gear transitions and powerful motor on inclines. The inter-state courier took 1 extra day due to depot backlogs, but Allied kept me updated the entire time.',
    productName: 'ALLIED Commercial Utility E-Trike',
    merchantReply: {
      date: '1 week ago',
      content: 'Hi Craig, thank you for your honest feedback! We proactively track every shipment and apologize for the 24h transport delay in SA depot. Glad you are enjoying the utility power!'
    },
    helpfulCount: 12,
    category: 'delivery'
  },
  {
    id: 'rev-5',
    author: 'Elena Rostova',
    location: 'Melbourne, VIC',
    verified: true,
    rating: 5,
    date: '1 week ago',
    title: 'Allied Battery Pack exceeded expectations',
    content: 'Bought a second 36V LG replacement battery pack for long weekend distance trips. Arrived pre-tested with diagnostic report enclosed. Super impressed with Allied’s engineering standards.',
    productName: '36V 15.6Ah LG Lithium Battery Pack',
    helpfulCount: 15,
    category: 'product-quality'
  },
  {
    id: 'rev-6',
    author: 'Jason Miller',
    location: 'Hobart, TAS',
    verified: true,
    rating: 3,
    date: '2 weeks ago',
    title: 'Slight misunderstanding on charger plug, sorted instantly',
    content: 'I thought the fast charger was missing from the box, but it was stored inside the lower frame packaging compartment. I rang customer service frustrated, but the rep politely pointed out where it was hidden. My bad!',
    productName: 'ALLIED Off-Road Mountain E-Bike',
    merchantReply: {
      date: '2 weeks ago',
      content: 'Hi Jason, no worries at all! We use heavy protective foam slots in shipping so accessories don’t rattle during transport. Happy riding in Tasmania!'
    },
    helpfulCount: 29,
    category: 'resolution'
  },
  {
    id: 'rev-7',
    author: 'Brooke Thompson',
    location: 'Newcastle, NSW',
    verified: true,
    rating: 5,
    date: '2 weeks ago',
    title: '5,000+ reviews were right - top business',
    content: 'I was hesitant buying an e-bike online, but seeing Allied’s 25-year WA track record and thousands of positive reviews convinced me. Delivered fast, easy 15-minute handlebar setup, and rides like a dream.',
    productName: 'ALLIED Step-Through E-Commuter',
    helpfulCount: 42,
    category: 'customer-service'
  },
  {
    id: 'rev-8',
    author: 'Peter K.',
    location: 'Gold Coast, QLD',
    verified: true,
    rating: 2,
    date: '3 weeks ago',
    title: 'Time wastage by freight company, but Allied resolved it',
    content: 'The local courier missed the first delivery window without calling me. I spent 2 hours waiting at home. Contacted Allied and their team arranged a dedicated express redelivery next morning at no extra charge.',
    productName: 'ALLIED Heavy Cargo E-Vehicle',
    merchantReply: {
      date: '3 weeks ago',
      content: 'Hi Peter, we completely agree that waiting for couriers is frustrating. We immediately flagged this driver with the freight network and escalated express priority delivery. Thank you for your patience.'
    },
    helpfulCount: 38,
    category: 'resolution'
  },
  {
    id: 'rev-9',
    author: 'Samantha Lee',
    location: 'Canberra, ACT',
    verified: true,
    rating: 5,
    date: '3 weeks ago',
    title: 'Reliable follow up after 6 months of daily use',
    content: 'Six months after purchasing my Allied e-bike, I contacted support for a replacement tube size suggestion. They remembered my order number and mailed a complimentary spare tube kit. Phenomenal ongoing care!',
    productName: 'ALLIED City Commuter E-Bike',
    helpfulCount: 50,
    category: 'follow-up'
  },
  {
    id: 'rev-10',
    author: 'Gary Higgins',
    location: 'Darwin, NT',
    verified: true,
    rating: 1,
    date: '1 month ago',
    title: 'Initial confusion on assembly instructions',
    content: 'The printed quick guide had small font and I struggled with installing the pedal thread direction. Had to call support twice. They did guide me through step by step on FaceTime, but manual needs bigger pictures.',
    productName: 'ALLIED Off-Road Mountain E-Bike',
    merchantReply: {
      date: '1 month ago',
      content: 'Hi Gary, thank you for the feedback! We have updated our quick-start manual with larger high-contrast diagrams and QR code video links based on your advice. Glad we could assist on FaceTime!'
    },
    helpfulCount: 45,
    category: 'resolution'
  }
];

export const TrustpilotReviews: React.FC = () => {
  const [reviews] = useState<ReviewItem[]>(SAMPLE_REVIEWS);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReviewFormOpen, setNewReviewFormOpen] = useState(false);
  
  // New review form states
  const [formRating, setFormRating] = useState(5);
  const [formName, setFormName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filter logic
  const filteredReviews = reviews.filter(rev => {
    const matchesRating = selectedRating === null || rev.rating === selectedRating;
    const matchesSearch = searchQuery === '' || 
      rev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRating && matchesSearch;
  });

  const totalReviews = 5248; // Total reviews count
  const averageRating = 4.8;

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoplay || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredReviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoplay, filteredReviews.length]);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formContent || !formTitle) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setNewReviewFormOpen(false);
      setFormName('');
      setFormTitle('');
      setFormContent('');
      setFormLocation('');
    }, 2000);
  };

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-12 lg:py-16 text-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Trustpilot Header & Statistics Badge Bar */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Trustpilot Green Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b67a]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Rating Summary Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                {/* Official Trustpilot style green star badge */}
                <div className="bg-[#00b67a] text-slate-950 px-2.5 py-1 rounded font-extrabold text-sm flex items-center gap-1.5 shadow-md">
                  <Star className="w-4 h-4 fill-slate-950 stroke-none" />
                  <span>Trustpilot</span>
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Verified Buyer Reviews</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">4.8</span>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-6 h-6 sm:w-7 sm:h-7 bg-[#00b67a] flex items-center justify-center rounded-sm">
                        <Star className="w-4 h-4 fill-white stroke-none" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    Based on <span className="text-white font-bold">{totalReviews.toLocaleString()} verified reviews</span>
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Aggregated customer rating across 5,200+ Australia-wide deliveries covering customer service, top-notch dispatch speed, and post-purchase follow-up support.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#00b67a] hover:bg-[#00a26d] text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-[#00b67a]/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>View All 5,200+ Reviews</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNewReviewFormOpen(true)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors"
                >
                  Write a Review
                </button>
              </div>
            </div>

            {/* Interactive Rating Breakdown Right Column */}
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-1 border-b border-slate-800">
                <span>RATING BREAKDOWN</span>
                <span>5,248 TOTAL REVIEWS</span>
              </div>

              {/* Star Progress Bars */}
              <div className="space-y-2">
                {[
                  { stars: 5, pct: 84, count: '4,408' },
                  { stars: 4, pct: 11, count: '577' },
                  { stars: 3, pct: 3, count: '157' },
                  { stars: 2, pct: 1, count: '52' },
                  { stars: 1, pct: 1, count: '54' },
                ].map(({ stars, pct, count }) => (
                  <button
                    key={stars}
                    type="button"
                    onClick={() => setSelectedRating(selectedRating === stars ? null : stars)}
                    className={`w-full flex items-center gap-3 group text-left p-1.5 rounded-lg transition-colors ${
                      selectedRating === stars ? 'bg-slate-800 border border-[#00b67a]/50' : 'hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-slate-300 w-12 flex items-center gap-1">
                      {stars} <Star className="w-3 h-3 text-[#00b67a] fill-[#00b67a]" />
                    </span>

                    <div className="flex-1 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-[#00b67a] transition-all duration-500 rounded-full group-hover:brightness-110"
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <span className="text-[11px] font-mono text-slate-400 w-16 text-right">
                      {pct}% ({count})
                    </span>
                  </button>
                ))}
              </div>

              {selectedRating !== null && (
                <div className="flex items-center justify-between pt-2 text-xs border-t border-slate-800 text-[#00b67a]">
                  <span>Showing {selectedRating}-Star reviews</span>
                  <button
                    type="button"
                    onClick={() => setSelectedRating(null)}
                    className="underline text-slate-400 hover:text-white"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00b67a]" />
              <span>Trustpilot Customer Stories</span>
            </span>
            <span className="text-xs text-slate-500 font-mono">({filteredReviews.length} featured)</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reviews (service, delivery...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00b67a]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Autoplay Toggle */}
            <button
              type="button"
              onClick={() => setIsAutoplay(!isAutoplay)}
              className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-colors ${
                isAutoplay ? 'bg-slate-800 border-slate-700 text-sky-400' : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
              title={isAutoplay ? 'Pause auto-slide' : 'Play auto-slide'}
            >
              {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{isAutoplay ? 'Autoplay' : 'Paused'}</span>
            </button>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Revolutionary Slider Review Grid */}
        <div className="relative min-h-[380px]">
          {filteredReviews.length === 0 ? (
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
              <Filter className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-sm text-slate-300 font-bold">No reviews match your current filter</p>
              <button
                type="button"
                onClick={() => { setSelectedRating(null); setSearchQuery(''); }}
                className="px-4 py-2 bg-[#00b67a] text-slate-950 font-bold rounded-xl text-xs"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const idx = (currentIndex + offset) % filteredReviews.length;
                const rev = filteredReviews[idx];
                if (!rev) return null;

                return (
                  <div
                    key={`${rev.id}-${offset}`}
                    className="bg-slate-950 border border-slate-800/90 hover:border-[#00b67a]/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="space-y-3">
                      
                      {/* Top Bar: Stars + Date */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <div
                              key={s}
                              className={`w-5 h-5 rounded-xs flex items-center justify-center ${
                                s <= rev.rating ? 'bg-[#00b67a]' : 'bg-slate-800'
                              }`}
                            >
                              <Star className={`w-3 h-3 ${s <= rev.rating ? 'fill-white stroke-none' : 'text-slate-600'}`} />
                            </div>
                          ))}
                        </div>
                        <span className="text-[11px] font-mono text-slate-500">{rev.date}</span>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                            {rev.author}
                          </h4>
                          <span className="text-[11px] text-slate-400">{rev.location}</span>
                        </div>
                        {rev.verified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00b67a]/10 border border-[#00b67a]/20 text-[#00b67a] text-[10px] font-mono">
                            <CheckCircle className="w-3 h-3" />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>

                      {/* Review Title & Content */}
                      <div className="space-y-1.5">
                        <h5 className="text-sm font-extrabold text-slate-100 leading-snug">
                          "{rev.title}"
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-4">
                          {rev.content}
                        </p>
                      </div>

                      {/* Product Tag */}
                      <div className="pt-2">
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg block truncate">
                          Item: <strong className="text-slate-200">{rev.productName}</strong>
                        </span>
                      </div>

                      {/* Merchant Reply Callout (if present) */}
                      {rev.merchantReply && (
                        <div className="bg-slate-900 border-l-2 border-[#00b67a] p-3 rounded-r-xl space-y-1 text-xs">
                          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                            <span className="font-bold text-[#00b67a]">ALLIED Support Response</span>
                            <span>{rev.merchantReply.date}</span>
                          </div>
                          <p className="text-[11px] text-slate-300 leading-normal italic">
                            "{rev.merchantReply.content}"
                          </p>
                        </div>
                      )}

                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Trustpilot Verified Review</span>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3 text-slate-400" />
                        <span>{rev.helpfulCount} helpful</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {filteredReviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-[#00b67a]' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* View All Reviews Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-3">
                <div className="bg-[#00b67a] p-2 rounded-lg text-slate-950 font-bold">
                  <Star className="w-5 h-5 fill-slate-950 stroke-none" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Trustpilot Reviews (5,248)</h3>
                  <p className="text-xs text-slate-400">Allied Electric Vehicles Australia Verified Feedback</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content / Scrollable Reviews List */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {reviews.map((rev) => (
                <div key={rev.id} className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div key={s} className={`w-4 h-4 rounded-xs flex items-center justify-center ${s <= rev.rating ? 'bg-[#00b67a]' : 'bg-slate-800'}`}>
                            <Star className="w-2.5 h-2.5 fill-white stroke-none" />
                          </div>
                        ))}
                      </div>
                      <span className="font-bold text-white text-sm">{rev.author}</span>
                      <span className="text-xs text-slate-400">({rev.location})</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{rev.date}</span>
                  </div>

                  <h4 className="font-bold text-white text-sm">"{rev.title}"</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{rev.content}</p>

                  {rev.merchantReply && (
                    <div className="bg-slate-900 border-l-2 border-[#00b67a] p-3 rounded-r-xl space-y-1 text-xs">
                      <span className="font-bold text-[#00b67a] text-[10px] font-mono block">ALLIED Support Response</span>
                      <p className="text-[11px] text-slate-300 italic">"{rev.merchantReply.content}"</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 text-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Write a Review Modal */}
      {newReviewFormOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Write a Customer Review</h3>
                <p className="text-xs text-slate-400">Share your experience with Allied Electric Vehicles</p>
              </div>
              <button
                type="button"
                onClick={() => setNewReviewFormOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-slate-950 rounded-2xl border border-[#00b67a]/40">
                <CheckCircle className="w-12 h-12 text-[#00b67a] mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-white">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-300">Your review has been submitted to Trustpilot and Allied Quality Assurance.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Your Overall Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setFormRating(s)}
                        className={`p-2 rounded-xl border transition-all ${
                          s <= formRating ? 'bg-[#00b67a] border-[#00b67a] text-slate-950' : 'bg-slate-950 border-slate-800 text-slate-600'
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white placeholder-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Perth, WA"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white placeholder-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Review Headline</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Excellent service and fast Perth shipping"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white placeholder-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Detailed Review</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your e-bike, delivery experience, or customer support..."
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white placeholder-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#00b67a] hover:bg-[#00a26d] text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg shadow-[#00b67a]/20"
                >
                  Submit Review to Trustpilot
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
