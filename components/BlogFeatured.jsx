"use client";
import React from 'react';
import { FEATURED_ARTICLES, getCategoryColor } from '@/data/blogData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogFeatured() {
  const { lang } = useLanguage();
  
  const mainArticle = FEATURED_ARTICLES[0];
  const sideArticles = FEATURED_ARTICLES.slice(1, 3);

  return (
    <section id="blog-featured" className="relative py-20 px-6 md:px-12 bg-[#06101F] z-10 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            {lang === 'VI' ? 'Bài viết nổi bật' : 'Featured Articles'}
          </h2>
          <button 
            onClick={() => document.getElementById('blog-grid').scrollIntoView({ behavior: 'smooth' })}
            className="text-[#22D3EE] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            {lang === 'VI' ? 'Xem tất cả' : 'View All'}
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>

        {/* Featured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Large Article (Left) */}
          {mainArticle && (
            <div 
              onClick={() => window.location.href = `/blog/${mainArticle.id}`}
              className="cursor-pointer lg:col-span-7 group flex flex-col md:flex-row bg-[#0A0E14] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              
              {/* Content Side */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <span className={`inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full mb-6 border ${getCategoryColor(mainArticle.category['VI'])}`}>
                    {mainArticle.category[lang]}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#22D3EE] transition-colors leading-snug text-balance">
                    {mainArticle.title[lang]}
                  </h3>
                  
                  <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 line-clamp-3">
                    {mainArticle.excerpt[lang]}
                  </p>
                </div>
                
                {/* Meta & CTA */}
                <div className="flex items-center justify-between text-[#6B7280] text-xs font-medium">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {mainArticle.readingTime[lang]}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      {mainArticle.date}
                    </span>
                  </div>
                  <button className="text-[#22D3EE] flex items-center gap-1 group-hover:gap-2 transition-all">
                    {lang === 'VI' ? 'Đọc bài viết' : 'Read Article'}
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-2/5 md:min-w-[280px] h-64 md:h-auto bg-[#111827] relative border-l border-white/5 overflow-hidden">
                {mainArticle.thumbnail ? (
                  <img src={mainArticle.thumbnail} alt={mainArticle.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#06101F] to-[#0A0E14] flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-[#22D3EE]/20">image</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Side Articles (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((article) => (
              <div 
                key={article.id} 
                onClick={() => window.location.href = `/blog/${article.id}`}
                className="cursor-pointer group flex-1 bg-[#0A0E14] border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative overflow-hidden shadow-lg"
              >
                {/* Background Image Glow */}
                {article.thumbnail && (
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <img src={article.thumbnail} alt="" className="w-full h-full object-cover mask-image:linear-gradient(to_left,black,transparent)" />
                  </div>
                )}
                
                <div>
                  <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded mb-4 border ${getCategoryColor(article.category['VI'])}`}>
                    {article.category[lang]}
                  </span>
                  
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#22D3EE] transition-colors leading-snug line-clamp-2">
                    {article.title[lang]}
                  </h3>
                  
                  <p className="text-[#9CA3AF] text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2">
                    {article.excerpt[lang]}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto relative z-10">
                  <div className="flex items-center gap-3 text-[#6B7280] text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {article.readingTime[lang]}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      {article.date}
                    </span>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-[#06101F] transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

