import React, { useState } from 'react';
import { POSTS } from '../../config/site';
import { BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';

export const BlogView: React.FC = () => {
  const [activePost, setActivePost] = useState<typeof POSTS[0] | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>ALLIED ELECTRIC VEHICLES JOURNAL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          E-Bike & Electric Transport Blog
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          In-depth technical guides, battery maintenance tips, and Australian electric bike comparisons.
        </p>
      </div>

      {activePost ? (
        /* Full Article View */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <button
            onClick={() => setActivePost(null)}
            className="text-xs font-mono text-sky-400 hover:underline flex items-center gap-1"
          >
            ← Back to All Blog Articles
          </button>

          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-sky-400 px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
              {activePost.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{activePost.title}</h2>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activePost.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-sky-400" />
                ALLIED Technical Editorial
              </span>
            </div>
          </div>

          <div className="bg-white aspect-[16/9] rounded-2xl overflow-hidden p-2 border border-slate-800">
            <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-6">
            <p className="font-semibold text-white text-base leading-snug">{activePost.excerpt}</p>
            <p>
              When evaluating electric bikes and commercial e-vehicles in Australia, selecting the right battery capacity and motor output is paramount. All ALLIED Electric Bikes supplied by ALLIED FORKLIFTS PTY LTD (ABN 66 060 256 377) feature high-density 36V 15.6Ah LG and 48V Samsung lithium cells designed for longevity in harsh Australian climates.
            </p>
            <p>
              Proper lithium battery health management involves charging after every significant ride, avoiding complete discharge down to 0%, and storing the battery pack at ambient room temperatures (15°C to 25°C). Following these simple guidelines ensures over 800+ complete charge cycles with minimal capacity degradation.
            </p>
            <p>
              For further technical assistance or custom fleet battery pack inquiries, contact our Perth technical hub in Malaga WA on <strong>+61 8 9248 8555</strong>.
            </p>
          </div>
        </div>
      ) : (
        /* Blog Article Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}/`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  e.preventDefault();
                  setActivePost(post);
                }
              }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all cursor-pointer flex flex-col justify-between shadow-xl block"
            >
              <div className="bg-white aspect-[4/3] overflow-hidden p-3 border-b border-slate-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-sky-400 font-bold uppercase">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-sky-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-400 font-semibold font-mono">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

    </div>
  );
};
