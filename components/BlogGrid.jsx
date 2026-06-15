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
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {lang === 'VI' ? 'Tất cả góc nhìn' : 'All Insights'}
          </h2>

          {/* Filter Menu */}
          <div className="flex flex-wrap items-center gap-3">
            {BLOG_CATEGORIES.map((categoryObj, index) => {
              const catLabel = categoryObj[lang];
              const isActive = activeCategory === catLabel;
              return (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(categoryObj)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
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
                className="cursor-pointer group flex flex-col bg-[#0A0E14] border border-white/5 rounded-3xl overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-300 shadow-lg"
              >
                
                {/* Thumbnail (Top) */}
                <div className="w-full h-48 bg-[#111827] relative border-b border-white/5 shrink-0 overflow-hidden">
                  {article.thumbnail ? (
                    <img src={article.thumbnail} alt={article.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A0E14] to-[#121b2a]">
                      <span className="material-symbols-outlined text-4xl text-[#22D3EE]/20">image</span>
                    </div>
                  )}
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md border ${getCategoryColor(article.category['VI'])}`}>
                      {article.category[lang]}
                    </span>
                  </div>
                </div>

                {/* Content (Bottom) */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#22D3EE] transition-colors leading-snug line-clamp-2">
                    {article.title[lang]}
                  </h3>
                  
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {article.excerpt[lang]}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
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
                    <button className="text-[#22D3EE] flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
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

