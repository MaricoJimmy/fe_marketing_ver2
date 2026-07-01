"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ARTICLE_DETAIL_DATA } from '@/data/articleDetailData';
import { FEATURED_ARTICLES } from '@/data/blogData';

const TOC_ITEMS = [
  { id: 'section-1', title: { VI: '1. Dữ liệu vận hành là gì?', EN: '1. What is operational data?' } },
  { id: 'section-2', title: { VI: '2. Vì sao dữ liệu là điểm bắt đầu của chuyển đổi số xanh?', EN: '2. Why is data the starting point for green digital transformation?' } },
  { id: 'section-3', title: { VI: '3. Khi dữ liệu phân mảnh, doanh nghiệp mất gì?', EN: '3. When data is fragmented, what does a business lose?' } },
  { id: 'section-4', title: { VI: '4. Dữ liệu realtime thay đổi cách doanh nghiệp vận hành như thế nào?', EN: '4. How does real-time data change operations?' } },
  { id: 'section-5', title: { VI: '5. Mối liên hệ giữa dữ liệu vận hành, ESG và carbon', EN: '5. Connection between operational data, ESG, and carbon' } },
  { id: 'section-6', title: { VI: '6. Doanh nghiệp nên bắt đầu từ đâu?', EN: '6. Where should a business start?' } },
  { id: 'section-7', title: { VI: '7. Vai trò của hệ sinh thái Udata', EN: '7. The role of the Udata ecosystem' } },
  { id: 'section-8', title: { VI: '8. Kết luận', EN: '8. Conclusion' } }
];

export default function ArticleSidebar({ customTOC, customCTA }) {
  const { lang } = useLanguage();
  const t = ARTICLE_DETAIL_DATA.sidebar;
  const tocItems = customTOC || TOC_ITEMS;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header if exists
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      
      {/* Table of Contents */}
      <div className="bg-[#0A0E14] border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#22D3EE]">format_list_bulleted</span>
          {t.tocTitle[lang]}
        </h3>
        <nav className="flex flex-col space-y-3">
          {tocItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-sm text-[#9CA3AF] hover:text-[#22D3EE] transition-colors flex items-start gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 group-hover:bg-[#22D3EE] shrink-0 transition-colors"></span>
              <span className="leading-snug">{item.title[lang]}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Featured Articles */}
      <div className="bg-[#0A0E14] border border-white/10 rounded-2xl p-6">
        <h3 className="text-base font-bold text-white mb-5">{lang === 'EN' ? 'Featured Articles' : 'Bài viết nổi bật'}</h3>
        
        <div className="flex flex-col gap-4">
          {FEATURED_ARTICLES.slice(0, 3).map((article, index) => (
            <React.Fragment key={article.id}>
              <a href={`/blog/${article.id}`} className="group flex items-center gap-4 hover:bg-white/5 p-2 rounded-xl transition-colors -mx-2">
                <div className="w-14 h-14 rounded-lg bg-[#111827] border border-white/10 overflow-hidden shrink-0 group-hover:border-[#22D3EE]/30 relative">
                  <img src={article.thumbnail} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[13px] font-bold text-white group-hover:text-[#22D3EE] transition-colors line-clamp-2 leading-tight mb-1">{article.title[lang]}</h4>
                  <p className="text-[#6B7280] text-[11px] truncate">{article.date}</p>
                </div>
              </a>
              {index < 2 && <div className="w-full h-[1px] bg-white/5"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
}

