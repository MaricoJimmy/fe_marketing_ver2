import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ARTICLE_DETAIL_DATA } from '../data/articleDetailData';

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

export default function ArticleSidebar() {
  const { lang } = useLanguage();
  const t = ARTICLE_DETAIL_DATA.sidebar;

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
          {TOC_ITEMS.map((item) => (
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

      {/* Expert CTA */}
      <div className="bg-gradient-to-br from-[#0C2442] to-[#0A0E14] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/10 rounded-full blur-[40px] pointer-events-none"></div>
        
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <div className="w-12 h-12 rounded-full bg-[#111827] border border-white/20 overflow-hidden flex items-center justify-center">
            {/* Placeholder for Expert Avatar */}
            <span className="material-symbols-outlined text-2xl text-[#9CA3AF]">support_agent</span>
          </div>
          <div>
            <h3 className="text-base font-bold text-white leading-tight">{t.expertTitle[lang]}</h3>
            <p className="text-[#22D3EE] text-xs">{t.expertSubtitle[lang]}</p>
          </div>
        </div>
        
        <p className="text-sm text-[#9CA3AF] mb-6 relative z-10">
          {t.expertDesc[lang]}
        </p>
        
        <button 
          onClick={() => window.location.href = '/demo'}
          className="w-full bg-[#22D3EE] text-[#06101F] font-bold py-3 rounded-xl flex justify-center items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.2)] relative z-10"
        >
          {t.expertBtn[lang]}
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      {/* Featured Products */}
      <div className="bg-[#0A0E14] border border-white/10 rounded-2xl p-6">
        <h3 className="text-base font-bold text-white mb-5">{t.productsTitle[lang]}</h3>
        
        <div className="flex flex-col gap-4">
          <a href="/product/ugate" className="group flex items-center gap-4 hover:bg-white/5 p-2 rounded-xl transition-colors -mx-2">
            <div className="w-10 h-10 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#22D3EE]/30">
              <span className="material-symbols-outlined text-[#22D3EE] text-xl">router</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white group-hover:text-[#22D3EE] transition-colors">Ugate</h4>
              <p className="text-[#6B7280] text-[11px] truncate">{t.productDescUgate[lang]}</p>
            </div>
            <span className="material-symbols-outlined text-[#9CA3AF] text-sm group-hover:translate-x-1 group-hover:text-white transition-all">arrow_forward</span>
          </a>
          
          <div className="w-full h-[1px] bg-white/5"></div>

          <a href="/solution" className="group flex items-center gap-4 hover:bg-white/5 p-2 rounded-xl transition-colors -mx-2">
            <div className="w-10 h-10 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#10F0CB]/30">
              <span className="material-symbols-outlined text-[#10F0CB] text-xl">dashboard</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white group-hover:text-[#10F0CB] transition-colors">Uboard</h4>
              <p className="text-[#6B7280] text-[11px] truncate">{t.productDescUboard[lang]}</p>
            </div>
            <span className="material-symbols-outlined text-[#9CA3AF] text-sm group-hover:translate-x-1 group-hover:text-white transition-all">arrow_forward</span>
          </a>
          
          <div className="w-full h-[1px] bg-white/5"></div>

          <a href="/sustainability" className="group flex items-center gap-4 hover:bg-white/5 p-2 rounded-xl transition-colors -mx-2">
            <div className="w-10 h-10 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#34D399]/30">
              <span className="material-symbols-outlined text-[#34D399] text-xl">co2</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white group-hover:text-[#34D399] transition-colors">Uzero</h4>
              <p className="text-[#6B7280] text-[11px] truncate">{t.productDescUzero[lang]}</p>
            </div>
            <span className="material-symbols-outlined text-[#9CA3AF] text-sm group-hover:translate-x-1 group-hover:text-white transition-all">arrow_forward</span>
          </a>
        </div>
      </div>

    </div>
  );
}
