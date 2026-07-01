"use client";
import React, { useRef, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HoverFillButton from '@/components/ui/HoverFillButton';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import FaqAccordion from '@/components/services/FaqAccordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

export default function BuildToOrderPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const whyScrollContainerRef = useRef(null);
  const useCaseTabContainerRef = useRef(null);
  const [whyActiveIndex, setWhyActiveIndex] = useState(0);
  const [useCaseTab, setUseCaseTab] = useState(1);



  useEffect(() => {
    const whyContainer = whyScrollContainerRef.current;
    if (!whyContainer) return;

    let whyScrollInterval;
    const checkAndScrollWhy = () => {
      whyScrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return;
        
        const maxScrollLeft = whyContainer.scrollWidth - whyContainer.clientWidth;
        if (whyContainer.scrollLeft >= maxScrollLeft - 10) {
          whyContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          whyContainer.scrollBy({ left: whyContainer.clientWidth * 0.8, behavior: 'smooth' });
        }
      }, 3500);
    };

    checkAndScrollWhy();

    const handleWhyScroll = () => {
      if (window.innerWidth >= 768) return;
      const scrollPosition = whyContainer.scrollLeft;
      const itemWidth = whyContainer.clientWidth * 0.85; 
      const newIndex = Math.round(scrollPosition / itemWidth);
      setWhyActiveIndex(Math.min(newIndex, 5));
    };

    whyContainer.addEventListener('scroll', handleWhyScroll);

    return () => {
      if (whyScrollInterval) clearInterval(whyScrollInterval);
      whyContainer.removeEventListener('scroll', handleWhyScroll);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      scrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return; // Only auto-scroll on mobile where it is a slider
        
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
        }
      }, 3500);
    };

    checkAndScroll();
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  useEffect(() => {
    const container = whyScrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      scrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return; // Only auto-scroll on mobile where it is a slider
        
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
        }
      }, 3500);
    };

    checkAndScroll();
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#06101F] text-white selection:bg-[#22D3EE]/30 selection:text-white flex flex-col font-body-md overflow-x-hidden">

      <main className="flex-grow pt-24 md:pt-32 pb-20 z-10 relative">
        {/* Hero Section */}
        <section className="relative px-4 md:px-8 mb-24 md:mb-32">
          <div className="max-w-[1440px] mx-auto">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22D3EE]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#10F0CB]/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left">
                  <ScrollReveal>
                    <div className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[#22D3EE] font-display-md text-[9px] sm:text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-wider shadow-[0_0_15px_rgba(34,211,238,0.2)] w-fit mx-auto lg:mx-0">
                      <span className="material-symbols-outlined text-[14px] md:text-[18px] shrink-0">engineering</span>
                      <span className="leading-tight">{t('bto.hero.badge')}</span>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.1}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display-lg font-bold text-white mb-6 leading-[1.1] tracking-tight">
                      {t('bto.hero.title')}
                    </h1>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.2}>
                    <p className="hidden md:block text-white/70 font-body-md text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                      {t('bto.hero.subtitle')}
                    </p>
                    <p className="block md:hidden text-white/70 font-body-md text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                      {t('bto.hero.subtitle_mobile')}
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <HoverFillButton 
                        onClick={() => router.push('/dung-thu')}
                        className="w-fit bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-title-lg text-sm sm:text-base font-bold shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                      >
                        {t('bto.hero.btn1')}
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </HoverFillButton>
                      <button 
                        onClick={() => document.getElementById('bto-use-cases')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-fit bg-white/5 border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-title-lg text-sm sm:text-base font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
                      >
                        {t('bto.hero.btn2')}
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] font-display-md text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)] w-fit mx-auto">
                <span className="leading-tight">{t('bto.benefits.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                {t('bto.benefits.title')}
              </h2>
              <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                {t('bto.benefits.desc')}
              </p>
            </div>
          </ScrollReveal>

          <div ref={scrollContainerRef} className="relative z-20 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center">
                <ScrollReveal delay={index * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 h-full hover:bg-white/10 transition-colors group flex flex-col min-h-[250px]">
                    <div className="w-14 h-14 rounded-2xl bg-[#06101F] border border-[#22D3EE]/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[#22D3EE] text-[28px]">
                        {item === 1 ? 'lightbulb' : 
                         item === 2 ? 'psychology' : 
                         item === 3 ? 'account_tree' : 'trending_up'}
                      </span>
                    </div>
                    <h3 className="text-white font-title-lg text-[20px] font-bold mb-4">{t(`bto.benefits.b${item}.title`)}</h3>
                    <p className="text-white/70 font-body-md text-[15px] leading-relaxed flex-grow">
                      {t(`bto.benefits.b${item}.desc`)}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </section>

        {/* Why Not DIY Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32">
          <div className="bg-gradient-to-b from-[#06101F] to-[#22D3EE]/5 border border-[#22D3EE]/20 rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
            <ScrollReveal>
              <div className="text-center mb-16 relative z-10">
                <div className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] font-display-md text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)] w-fit mx-auto">
                  <span className="leading-tight">{t('bto.diy.badge')}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                  {t('bto.diy.title')}
                </h2>
                <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                  {t('bto.diy.desc')}
                </p>
              </div>
            </ScrollReveal>
            
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-8 px-8 md:mx-0 md:px-0 md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[1, 2, 3, 4].map((item, index) => (
                <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center md:snap-none">
                  <ScrollReveal delay={index * 0.1} className="h-full">
                    <div className="bg-white/5 border border-[#22D3EE]/20 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden group hover:bg-[#22D3EE]/5 transition-all min-h-[220px]">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#22D3EE]/20 transition-colors" />
                      <h3 className="text-white font-title-lg text-[18px] font-bold mb-3 flex items-start gap-3">
                        <span className="material-symbols-outlined text-red-400 group-hover:text-[#22D3EE] transition-colors shrink-0">
                          {item === 1 ? 'timer' : item === 2 ? 'payments' : item === 3 ? 'question_mark' : 'warning'}
                        </span>
                        {t(`bto.diy.c${item}.title`)}
                      </h3>
                      <p className="text-white/70 font-body-sm text-[15px] leading-relaxed flex-grow">
                        {t(`bto.diy.c${item}.desc`)}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
              <ScrollReveal className="lg:col-span-3 h-full">
                <div className="bg-gradient-to-r from-[#22D3EE]/10 to-transparent border border-[#22D3EE]/30 rounded-3xl p-8 h-full flex flex-col justify-center">
                  <span className="text-[#22D3EE] font-display-md text-xs uppercase tracking-widest mb-3 block">{t('bto.answer.badge')}</span>
                  <h3 className="text-white font-display-md text-2xl font-bold mb-6">{t('bto.answer.title')}</h3>
                  <ul className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 font-body-md">
                        <span className="material-symbols-outlined text-[#10F0CB] text-xl shrink-0">check_circle</span>
                        {t(`bto.answer.l${item}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} className="lg:col-span-2 h-full">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-center text-center">
                  <span className="material-symbols-outlined text-[#10F0CB] text-4xl mb-4 mx-auto">query_stats</span>
                  <span className="text-white/50 font-display-md text-xs uppercase tracking-widest mb-2 block">{t('bto.roi.badge')}</span>
                  <h3 className="text-white font-title-lg text-xl font-bold mb-4">{t('bto.roi.title')}</h3>
                  <p className="text-white/70 font-body-sm leading-relaxed">{t('bto.roi.desc')}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] font-display-md text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)] w-fit mx-auto">
                <span className="leading-tight">{t('bto.process.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                {t('bto.process.title')}
              </h2>
              <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                {t('bto.process.desc')}
              </p>
            </div>
          </ScrollReveal>

          <ProcessTimeline tPrefix="bto" stepCount={6} />
        </section>

        {/* BTO Use Cases Section */}
        <section id="bto-use-cases" className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32 scroll-mt-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] font-display-md text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)] w-fit mx-auto">
                <span className="leading-tight">{t('bto.usecase.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                {t('bto.usecase.title')}
              </h2>
              <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                {t('bto.usecase.desc')}
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            {/* Tabs */}
            <div ref={useCaseTabContainerRef} className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-3 pb-2 -mx-4 px-4 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[1, 2, 3, 4].map((item) => (
                <button
                  key={item}
                  onClick={(e) => {
                    setUseCaseTab(item);
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }}
                  className={`flex-none px-6 py-3 rounded-xl font-title-sm text-sm whitespace-nowrap transition-all duration-300 ${
                    useCaseTab === item
                      ? 'bg-[#22D3EE] text-[#06101F] shadow-[0_0_15px_rgba(34,211,238,0.3)] font-bold'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {t(`bto.usecase.u${item}.tag`)}
                </button>
              ))}
            </div>

            {/* Active Content */}
            <ScrollReveal key={`usecase-${useCaseTab}`}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col group hover:bg-white/10 transition-colors shadow-lg overflow-hidden">
                <span className="text-[#10F0CB] bg-[#10F0CB]/10 px-4 py-2 rounded-full font-label-md text-sm uppercase tracking-wider w-fit mb-6 border border-[#10F0CB]/20">
                  {t(`bto.usecase.u${useCaseTab}.tag`)}
                </span>
                <h3 className="text-white font-display-md text-3xl md:text-4xl font-bold mb-8 group-hover:text-[#22D3EE] transition-colors">
                  {t(`bto.usecase.u${useCaseTab}.title`)}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-red-400 before:rounded-full">
                    <span className="text-white font-title-md text-lg font-bold block mb-3">Challenge</span>
                    <p className="text-white/70 font-body-md text-base leading-relaxed">{t(`bto.usecase.u${useCaseTab}.challenge`)}</p>
                  </div>
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#22D3EE] before:rounded-full">
                    <span className="text-white font-title-md text-lg font-bold block mb-3">Solution</span>
                    <p className="text-white/70 font-body-md text-base leading-relaxed">{t(`bto.usecase.u${useCaseTab}.solution`)}</p>
                  </div>
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#10F0CB] before:rounded-full">
                    <span className="text-white font-title-md text-lg font-bold block mb-3">Outcome</span>
                    <div className="flex flex-col gap-3">
                      {t(`bto.usecase.u${useCaseTab}.outcome`).split(', ').map(out => (
                        <div key={out} className="flex items-start gap-3 text-white/80 font-body-md text-base">
                          <span className="material-symbols-outlined text-[#10F0CB] text-[20px] shrink-0 mt-0.5">check</span>
                          <span className="leading-snug">{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between bg-black/20 -mx-8 md:-mx-12 lg:-mx-16 -mb-8 md:-mb-12 lg:-mb-16 p-8 md:p-12 lg:p-16">
                  <span className="text-white/60 font-title-sm text-base">Recommended Offerings:</span>
                  <div className="flex flex-wrap gap-3">
                    {t(`bto.usecase.u${useCaseTab}.offerings`).split(', ').map(offering => (
                      <span key={offering} className="text-white font-label-lg text-sm bg-white/10 px-4 py-2 rounded-lg border border-white/10 shadow-inner">
                        {offering}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32">
          <div className="bg-gradient-to-br from-[#22D3EE]/10 to-[#06101F] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />
            
            <ScrollReveal>
              <div className="text-center mb-16 relative z-10">
                <div className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] font-display-md text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)] w-fit mx-auto">
                  <span className="leading-tight">{t('bto.why.badge')}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                  {t('bto.why.title')}
                </h2>
              </div>
            </ScrollReveal>

            <div ref={whyScrollContainerRef} className="relative z-20 flex md:grid md:grid-cols-3 md:gap-y-12 gap-6 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center">
                  <ScrollReveal delay={index * 0.1}>
                    <div className="text-center bg-white/5 md:bg-transparent border md:border-none border-white/10 rounded-[2rem] p-8 md:p-0 h-full flex flex-col min-h-[250px] md:min-h-0">
                      <div className="w-20 h-20 mx-auto rounded-full bg-[#06101F] border-2 border-[#22D3EE] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        <span className="text-[#22D3EE] font-display-lg text-2xl font-bold">0{item}</span>
                      </div>
                      <h3 className="text-white font-title-lg text-[22px] font-bold mb-4">{t(`bto.why.w${item}.title`)}</h3>
                      <p className="text-white/70 font-body-md text-[16px] leading-relaxed flex-grow">
                        {t(`bto.why.w${item}.desc`)}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>

            {/* Mobile Pagination/Timeline */}
            <div className="md:hidden flex justify-between items-center relative mt-8 w-[90%] mx-auto max-w-[340px] z-20">
              {/* Connecting Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white/10 -z-10" />
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#22D3EE] -z-10 transition-all duration-300"
                style={{ width: `${(whyActiveIndex / 5) * 100}%` }}
              />
              
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => {
                    const container = whyScrollContainerRef.current;
                    if (container && container.children[index]) {
                      container.children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-xl ${
                    index === whyActiveIndex 
                      ? 'bg-[#22D3EE] text-[#06101F] scale-110 shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                      : index < whyActiveIndex
                        ? 'bg-[#22D3EE] text-[#06101F]'
                        : 'bg-[#06101F] text-white/50 border border-white/20'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] font-display-md text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)] w-fit mx-auto">
                <span className="leading-tight">{t('bto.faq.badge')}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-display-lg font-bold text-white mb-6">
                {t('bto.faq.title')}
              </h2>
              <p className="text-white/70 font-body-md text-base max-w-3xl mx-auto">
                {t('bto.faq.desc')}
              </p>
            </div>
          </ScrollReveal>

          <FaqAccordion faqs={[
            { q: t('bto.faq.q1.q'), a: t('bto.faq.q1.a') },
            { q: t('bto.faq.q2.q'), a: t('bto.faq.q2.a') },
            { q: t('bto.faq.q3.q'), a: t('bto.faq.q3.a') },
            { q: t('bto.faq.q4.q'), a: t('bto.faq.q4.a') },
            { q: t('bto.faq.q5.q'), a: t('bto.faq.q5.a') },
            { q: t('bto.faq.q6.q'), a: t('bto.faq.q6.a') },
            { q: t('bto.faq.q7.q'), a: t('bto.faq.q7.a') }
          ]} />
        </section>

        {/* Final CTA Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mt-24 mb-24 md:mb-32">
          <div className="bg-gradient-to-br from-[#22D3EE] to-[#10F0CB] rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none mix-blend-overlay" />
            <ScrollReveal className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-[#06101F] mb-6 max-w-4xl mx-auto">
                {t('bto.cta.title')}
              </h2>
              <p className="text-[#06101F]/80 font-body-md text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                {t('bto.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <HoverFillButton 
                  onClick={() => router.push('/dung-thu')}
                  className="w-full sm:w-auto bg-[#06101F] text-white px-8 py-4 rounded-xl font-title-lg text-base font-bold shadow-xl transition-all flex items-center justify-center gap-2 group whitespace-nowrap border border-[#06101F]"
                >
                  {t('bto.cta.btn1')}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </HoverFillButton>
                <button 
                  onClick={() => document.getElementById('bto-use-cases')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-black/10 border border-black/10 text-[#06101F] px-8 py-4 rounded-xl font-title-lg text-base font-bold hover:bg-black/20 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  {t('bto.cta.btn2')}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </div>
  );
}
