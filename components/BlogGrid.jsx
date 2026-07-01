"use client";
import React, { useState } from 'react';
import { ALL_ARTICLES, BLOG_CATEGORIES, getCategoryColor } from '@/data/blogData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogGrid() {
  const { lang } = useLanguage();
  const defaultCategory = lang === 'VI' ? 'Tất cả' : 'All';
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [displayCount, setDisplayCount] = useState(6);

  // Sync default category when language changes
  React.useEffect(() => {
    setActiveCategory(lang === 'VI' ? 'Tất cả' : 'All');
  }, [lang]);

  // Listen for category selection from BlogTopics
  React.useEffect(() => {
    const handleCategorySelect = (e) => {
      const catObj = e.detail;
      if (catObj && catObj[lang]) {
        setActiveCategory(catObj[lang]);
        setDisplayCount(6);
      }
    };
    window.addEventListener('blogCategorySelect', handleCategorySelect);
    return () => window.removeEventListener('blogCategorySelect', handleCategorySelect);
  }, [lang]);

  // Filter articles based on active category
  const filteredArticles = ALL_ARTICLES.filter(article => {
    if (activeCategory === 'Tất cả' || activeCategory === 'All') return true;
    return article.category[lang] === activeCategory || article.category['VI'] === activeCategory;
  });

  // Articles to show based on load more state
  const visibleArticles = filteredArticles.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6); // Load 6 more each time
  };

  const handleCategoryChange = (categoryObj) => {
    setActiveCategory(categoryObj[lang]);
    setDisplayCount(6); // Reset count when changing category
  };

  return (
    <section id="blog-grid" className="relative py-20 px-6 md:px-12 bg-[#06101F] z-10 w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">
            {lang === 'VI' ? 'Tất cả góc nhìn' : 'All Insights'}
          </h2>

          {/* Filter Menu */}
          <div className="flex flex-row overflow-x-auto gap-2 md:gap-3 pb-2 scrollbar-hide snap-x md:flex-wrap" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {BLOG_CATEGORIES.map((categoryObj, index) => {
              const catLabel = categoryObj[lang];
              const isActive = activeCategory === catLabel;
              return (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(categoryObj)}
                  className={`shrink-0 snap-start px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#22D3EE] border-[#22D3EE] text-[#06101F] font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                      : 'bg-[#111827] border-white/10 text-[#9CA3AF] hover:border-white/30 hover:text-white'
                  }`}
                >
                  {catLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {visibleArticles.length > 0 ? (
            visibleArticles.map((article) => (
              <div 
                key={article.id} 
                onClick={() => window.location.href = `/blog/${article.id}`}
                className="cursor-pointer group flex flex-row md:flex-col bg-[#0A0E14] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-300 shadow-lg"
              >
                
                {/* Thumbnail */}
                <div className="w-[110px] sm:w-[160px] md:w-full min-h-[110px] md:h-48 bg-[#111827] relative border-r md:border-r-0 md:border-b border-white/5 shrink-0 overflow-hidden">
                  {article.thumbnail ? (
                    <img src={article.thumbnail} alt={article.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A0E14] to-[#121b2a]">
                      <span className="material-symbols-outlined text-3xl md:text-4xl text-[#22D3EE]/20">image</span>
                    </div>
                  )}
                  
                  {/* Floating Category Badge (desktop only) */}
                  <div className="absolute top-4 left-4 hidden md:block">
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md border ${getCategoryColor(article.category['VI'])}`}>
                      {article.category[lang]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col justify-center md:justify-start">
                  
                  {/* Category Badge (mobile only) */}
                  <span className={`md:hidden inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded border w-fit mb-1.5 ${getCategoryColor(article.category['VI'])}`}>
                    {article.category[lang]}
                  </span>

                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 md:mb-3 group-hover:text-[#22D3EE] transition-colors leading-snug line-clamp-3 md:line-clamp-2">
                    {article.title[lang]}
                  </h3>
                  
                  {/* Excerpt hidden on mobile */}
                  <p className="hidden md:block text-[#9CA3AF] text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {article.excerpt[lang]}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-2 md:pt-4 md:border-t md:border-white/5">
                    <div className="flex items-center gap-2 md:gap-3 text-[#6B7280] text-[9px] sm:text-[10px] md:text-xs font-medium">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px] md:text-[14px]">schedule</span>
                        {article.readingTime[lang]}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px] md:text-[14px]">calendar_today</span>
                        {article.date}
                      </span>
                    </div>
                    
                    <button className="hidden md:flex text-[#22D3EE] items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      <span className="font-semibold text-sm">{lang === 'VI' ? 'Đọc' : 'Read'}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-[#0A0E14] rounded-3xl border border-white/5">
              <span className="material-symbols-outlined text-4xl text-white/20 mb-3">search_off</span>
              <p className="text-[#9CA3AF]">
                {lang === 'VI' ? 'Không tìm thấy bài viết nào trong chủ đề này.' : 'No articles found in this topic.'}
              </p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {displayCount < filteredArticles.length && (
          <div className="flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-xl border border-white/20 text-[#9CA3AF] font-medium hover:text-white hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              {lang === 'VI' ? 'Xem thêm bài viết' : 'Load more articles'}
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

