"use client";
import React from 'react';
import HoverFillButton from './ui/HoverFillButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { ARTICLE_DETAIL_DATA } from '@/data/articleDetailData';

export default function ArticleContent() {
  const { lang } = useLanguage();
  const t = ARTICLE_DETAIL_DATA.content;

  return (
    <div className="w-full flex flex-col gap-10 text-[#D1D5DB] text-[17px] leading-[1.8] font-body-md">
      
      {/* Summary Box */}
      <div className="bg-[#0A0E14] border-l-4 border-[#22D3EE] border-y border-r border-y-white/10 border-r-white/10 rounded-r-2xl p-6 md:p-8 relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-[#22D3EE] text-2xl">menu_book</span>
          <h3 className="text-lg font-bold text-white">{t.summaryTitle[lang]}</h3>
        </div>
        <ul className="space-y-3">
          {t.summaryBullets.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2.5 shrink-0"></span>
              <span>{point[lang]}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Intro Text */}
      {t.intro.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph[lang] }}></p>
      ))}

      {/* Section 1 */}
      <div id="section-1" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">1.</span> {t.section1.title[lang]}
        </h2>
        <p className="mb-4">{t.section1.p1[lang]}</p>
        <p className="mb-4">{t.section1.p2[lang]}</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-[#9CA3AF]">
          {t.section1.bullets.map((item, index) => <li key={index}>{item[lang]}</li>)}
        </ul>
        <p>{t.section1.p3[lang]}</p>
      </div>

      {/* Section 2 */}
      <div id="section-2" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">2.</span> {t.section2.title[lang]}
        </h2>
        <p className="mb-6">{t.section2.p1[lang]}</p>
        
        <h3 className="text-xl font-bold text-white mb-2">{t.section2.h1[lang]}</h3>
        <p className="mb-6">{t.section2.p2[lang]}</p>

        <h3 className="text-xl font-bold text-white mb-2">{t.section2.h2[lang]}</h3>
        <p className="mb-6">{t.section2.p3[lang]}</p>

        <h3 className="text-xl font-bold text-white mb-2">{t.section2.h3[lang]}</h3>
        <p>{t.section2.p4[lang]}</p>
      </div>

      {/* Section 3 */}
      <div id="section-3" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">3.</span> {t.section3.title[lang]}
        </h2>
        <p className="mb-6">{t.section3.p1[lang]}</p>

        <ul className="space-y-4 mb-8">
          {t.section3.items.map((item, index) => (
            <li key={index}>
              <strong className="text-white block mb-1">{item.title[lang]}</strong>
              <span className="text-[#9CA3AF]">{item.desc[lang]}</span>
            </li>
          ))}
        </ul>

        {/* Quote Box */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 relative my-10">
          <span className="material-symbols-outlined text-[64px] text-[#22D3EE] opacity-20 absolute top-4 left-4">format_quote</span>
          <p className="text-xl md:text-2xl text-white font-medium italic relative z-10 text-center px-4 leading-relaxed">
            "{t.section3.quote[lang]}"
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div id="section-4" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">4.</span> {t.section4.title[lang]}
        </h2>
        <p className="mb-6">{t.section4.p1[lang]}</p>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {t.section4.cards.map((card, index) => (
            <div key={index} className="bg-[#0A0E14] border border-white/10 rounded-xl p-5 hover:border-[#22D3EE]/50 transition-colors">
              <span className="material-symbols-outlined text-[#22D3EE] text-3xl mb-3">{card.icon}</span>
              <h4 className="text-white font-bold mb-2">{card.title[lang]}</h4>
              <p className="text-xs text-[#9CA3AF]">{card.desc[lang]}</p>
            </div>
          ))}
        </div>

        <p className="mb-4">{t.section4.p2[lang]}</p>
        <p className="mb-4">{t.section4.p3[lang]}</p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#9CA3AF]">
          {t.section4.bullets.map((q, idx) => <li key={idx}>{q[lang]}</li>)}
        </ul>
      </div>

      {/* Section 5 */}
      <div id="section-5" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">5.</span> {t.section5.title[lang]}
        </h2>
        <p className="mb-4">{t.section5.p1[lang]}</p>
        <p className="mb-4">{t.section5.p2[lang]}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {t.section5.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-[#111827] border border-white/10 rounded-full text-xs text-[#9CA3AF]">{tag[lang]}</span>
          ))}
        </div>
        <p className="mb-4">{t.section5.p3[lang]}</p>
        <p>{t.section5.p4[lang]}</p>
      </div>

      {/* Section 6 */}
      <div id="section-6" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-[#22D3EE]">6.</span> {t.section6.title[lang]}
        </h2>
        <p className="mb-8">{t.section6.p1[lang]}</p>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-white/10 via-[#22D3EE]/30 to-white/10 z-0"></div>
          
          {t.section6.steps.map((step, index) => (
            <div key={index} className={`flex flex-col items-center text-center relative z-10 group ${index > 0 ? "mt-6 md:mt-0" : ""}`}>
              <div className="w-14 h-14 rounded-full bg-[#111827] border border-white/20 flex items-center justify-center text-xl font-bold text-[#22D3EE] mb-4 group-hover:bg-[#22D3EE] group-hover:text-[#06101F] transition-colors">{index + 1}</div>
              <h4 className="text-white font-bold text-sm mb-2">{step.title[lang]}</h4>
              <p className="text-xs text-[#9CA3AF]">{step.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 7 */}
      <div id="section-7" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">7.</span> {t.section7.title[lang]}
        </h2>
        <p className="mb-6">{t.section7.p1[lang]}</p>

        <ul className="space-y-4 mb-6">
          {t.section7.products.map((prod, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#22D3EE] mt-1 shrink-0">{prod.icon}</span>
              <span dangerouslySetInnerHTML={{ __html: `<strong>${prod.title}:</strong> ${prod.desc[lang]}` }}></span>
            </li>
          ))}
        </ul>
        <p>{t.section7.p2[lang]}</p>
      </div>

      {/* Section 8 */}
      <div id="section-8" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">8.</span> {t.section8.title[lang]}
        </h2>
        <p className="mb-4">{t.section8.p1[lang]}</p>
        <p className="mb-4">{t.section8.p2[lang]}</p>
        <p>{t.section8.p3[lang]}</p>
      </div>

      {/* Inline CTA */}
      <div className="mt-8 mb-4 bg-gradient-to-r from-[#0C2442] to-[#0A0E14] border border-[#22D3EE]/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-[#22D3EE]/10 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="relative z-10 flex-1">
          <h3 className="text-2xl font-bold text-white mb-3">{t.inlineCta.title[lang]}</h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">
            {t.inlineCta.desc[lang]}
          </p>
        </div>
        <div className="relative z-10 shrink-0 flex flex-col gap-3 w-full md:w-auto">
          <HoverFillButton 
            onClick={() => window.location.href = '/demo'}
            className="w-full bg-[#22D3EE] text-[#06101F] font-bold py-3.5 px-8 rounded-full flex justify-center items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            {t.inlineCta.btnPrimary[lang]}
          </HoverFillButton>
          <button 
            onClick={() => window.location.href = '/solution'}
            className="w-full border border-white/20 text-white font-semibold py-3.5 px-8 rounded-full hover:bg-white/5 transition-colors text-center"
          >
            {t.inlineCta.btnSecondary[lang]}
          </button>
        </div>
      </div>

    </div>
  );
}

