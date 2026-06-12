"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ARTICLE_DETAIL_DATA } from '@/data/articleDetailData';

export default function ArticleProducts() {
  const { lang } = useLanguage();
  const t = ARTICLE_DETAIL_DATA.products;

  const PRODUCTS = [
    {
      id: 'ugate',
      name: 'Ugate',
      desc: t.ugateDesc[lang],
      icon: 'router',
      link: '/product/ugate',
      color: '#22D3EE'
    },
    {
      id: 'uboard',
      name: 'Uboard',
      desc: t.uboardDesc[lang],
      icon: 'dashboard',
      link: '/solution',
      color: '#10F0CB'
    },
    {
      id: 'uzero',
      name: 'Uzero',
      desc: t.uzeroDesc[lang],
      icon: 'co2',
      link: '/sustainability',
      color: '#34D399'
    }
  ];

  return (
    <section className="py-16 border-t border-white/5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">{t.title[lang]}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <a 
            key={product.id}
            href={product.link}
            className="group flex items-center p-6 rounded-2xl bg-[#0A0E14] border border-white/5 hover:border-white/20 transition-all duration-300 gap-5 shadow-lg"
          >
            <div 
              className="w-16 h-16 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center shrink-0 transition-colors"
              style={{ borderColor: `rgba(255,255,255,0.1)`, ...{'--hover-border': product.color} }}
            >
              <span 
                className="material-symbols-outlined text-[32px] opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ color: product.color }}
              >
                {product.icon}
              </span>
            </div>
            <div className="flex flex-col">
              <h3 
                className="text-lg font-bold text-white mb-1 transition-colors"
                style={{ '--hover-color': product.color }}
              >
                <span className="group-hover:text-[var(--hover-color)]">{product.name}</span>
              </h3>
              <p className="text-[#9CA3AF] text-xs leading-relaxed line-clamp-2 mb-2">
                {product.desc}
              </p>
              <span 
                className="text-xs font-semibold flex items-center gap-1 transition-colors"
                style={{ color: product.color }}
              >
                {t.btnLearnMore[lang]}
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

