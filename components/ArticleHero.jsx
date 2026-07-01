"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ARTICLE_DETAIL_DATA } from '@/data/articleDetailData';
import { FEATURED_ARTICLES } from '@/data/blogData';

export default function ArticleHero({ customArticle }) {
  const { lang } = useLanguage();
  const article = customArticle || FEATURED_ARTICLES[0];
  const t = ARTICLE_DETAIL_DATA;

  return (
    <section className="relative pt-32 pb-16 px-6 md:px-12 bg-[#06101F] z-10 w-full overflow-hidden border-b border-white/5">
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#22D3EE]/10 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#10F0CB]/5 to-transparent rounded-full blur-[120px]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 mask-image:linear-gradient(to_bottom,black,transparent)"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-8">
          <a href="/" className="hover:text-white transition-colors">{t.breadcrumb.home[lang]}</a>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <a href="/blog" className="hover:text-white transition-colors">{t.breadcrumb.blog[lang]}</a>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[#22D3EE] uppercase tracking-wider">{article.category[lang]}</span>
        </nav>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start w-full">
            <span className="inline-block px-4 py-1.5 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              {article.category[lang]}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title[lang]}
            </h1>
            
            <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-3xl">
              {article.excerpt[lang]}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-[#6B7280] text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">schedule</span>
                {article.readingTime[lang]}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">person</span>
                {t.authorLabel[lang]} Udata Editorial Team
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[500px] shrink-0 relative">
            {/* Image Glow */}
            <div className="absolute inset-0 bg-[#10F0CB] blur-[100px] opacity-20 rounded-full"></div>
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0E14] aspect-[4/3] group shadow-[0_0_50px_rgba(34,211,238,0.15)]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay z-10"></div>
              <img 
                src={article.thumbnail} 
                alt={article.title[lang]} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101F] via-transparent to-transparent opacity-60 z-10"></div>
            </div>
            
            {/* Tech accents */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#22D3EE]/30 rounded-br-3xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#10F0CB]/30 rounded-tl-3xl"></div>
          </div>

        </div>

      </div>
    </section>
  );
}

