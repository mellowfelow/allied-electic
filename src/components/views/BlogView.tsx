import React from 'react';
import { POSTS } from '../../config/site';
import { BookOpen, Clock, Calendar, ArrowRight, User, ShoppingBag } from 'lucide-react';

interface BlogViewProps {
  selectedSlug: string | null;
  onSelectPost: (slug: string | null) => void;
  onNavigateCategory: (categorySlug: string) => void;
}

// Renders a post's `body` field — plain text where a blank line separates
// paragraphs and a line starting with "## " becomes a subheading. Keeps post
// authoring to plain strings in site.ts instead of JSX/HTML per post.
function renderBody(body: string) {
  const blocks = body.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-xl font-bold text-white pt-2">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').map(line => line.replace(/^- /, ''));
      return (
        <ul key={i} className="list-disc list-inside space-y-1.5 text-slate-300">
          {items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    }
    return <p key={i}>{block}</p>;
  });
}

export const BlogView: React.FC<BlogViewProps> = ({ selectedSlug, onSelectPost, onNavigateCategory }) => {
  const activePost = POSTS.find(p => p.slug === selectedSlug) || null;

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
            onClick={() => onSelectPost(null)}
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

          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800">
            <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-6">
            <p className="font-semibold text-white text-base leading-snug">{activePost.excerpt}</p>
            {renderBody(activePost.body)}
          </div>

          {activePost.faqs && activePost.faqs.length > 0 && (
            <div className="space-y-4 border-t border-slate-800 pt-6">
              <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {activePost.faqs.map((f, i) => (
                  <div key={i} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1.5">
                    <p className="font-semibold text-white text-sm">{f.q}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-slate-800 pt-6">
            <button
              onClick={() => onNavigateCategory(activePost.categorySlug)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              {activePost.ctaText}
            </button>
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
                  onSelectPost(post.slug);
                }
              }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all cursor-pointer flex flex-col justify-between shadow-xl block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
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
