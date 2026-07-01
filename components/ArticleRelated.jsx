"use client";
import React from 'react';
import { ALL_ARTICLES, getCategoryColor } from '@/data/blogData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ArticleRelated() {
  const { lang } = useLanguage();

  // Let's pick 3 articles as "related"
  const relatedArticles = ALL_ARTICLES.filter(a => ['a2', 'a3', 'a5'].includes(a.id));

  return (
    <section className="pb-16 border-b border-white/5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">
          {lang === 'VI' ? 'Bài viết liên quan' : 'Related Articles'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <div 
            key={article.id} 
            onClick={() => window.location.href = `/blog/${article.id}`}
            className="cursor-pointer group flex flex-row bg-[#0A0E14] border border-white/5 rounded-2xl overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-300 shadow-lg min-h-[160px]"
          >
            {/* Content Side */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <span className={`inline-block px-2 py-1 text-[9px] font-bold uppercase tracking-widest rounded mb-3 line-clamp-1 border ${getCategoryColor(article.category['VI'])}`}>
                  {article.category[lang]}
                </span>
                
                <h3 className="text-[15px] font-bold text-white mb-4 group-hover:text-[#22D3EE] transition-colors leading-snug line-clamp-2">
                  {article.title[lang]}
                </h3>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-[11px] text-[#6B7280] font-medium">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span>
                    {article.readingTime[lang]}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>

            {/* Image Side (Right) */}
            <div className="w-[120px] bg-[#111827] relative border-l border-white/5 shrink-0 overflow-hidden">
              {article.thumbnail ? (
                <img src={article.thumbnail} alt={article.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A0E14] to-[#121b2a]">
                  <span className="material-symbols-outlined text-3xl text-[#22D3EE]/20">image</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

