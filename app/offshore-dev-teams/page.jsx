"use client";
import React, { useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HoverFillButton from '@/components/ui/HoverFillButton';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';
import TechStack from '@/components/services/TechStack';
import FaqAccordion from '@/components/services/FaqAccordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

export default function OffshoreDevTeamsPage() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const whyScrollContainerRef = useRef(null);
  const techScrollContainerRef = useRef(null);
  const govScrollContainerRef = useRef(null);
  const shortageScrollContainerRef = useRef(null);
  const modelScrollContainerRef = useRef(null);
  const resourceScrollContainerRef = useRef(null);

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

  useEffect(() => {
    const container = techScrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      scrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return;
        
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
    const container = govScrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      scrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return;
        
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
    const container = shortageScrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      scrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return;
        
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
    const container = modelScrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      scrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return;
        
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
    const container = resourceScrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      scrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return;
        
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
                      <span className="material-symbols-outlined text-[14px] md:text-[18px] shrink-0">group_add</span>
                      <span className="leading-tight">{t('odc.hero.badge')}</span>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.1}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display-lg font-bold text-white mb-6 leading-[1.1] tracking-tight">
                      {t('odc.hero.title')}
                    </h1>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.2}>
                    <p className="text-white/70 font-body-md text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed hidden md:block">
                      {t('odc.hero.subtitle')}
                    </p>
                    {/* Short mobile version */}
                    <p className="text-white/70 font-body-md text-base mx-auto mb-8 leading-relaxed md:hidden">
                      {lang === 'EN' 
                        ? 'Dedicated AI engineering teams with clear governance, expert execution, and transparent delivery.'
                        : 'Đội ngũ kỹ sư AI chuyên trách với quy trình quản trị rõ ràng, thực thi bởi chuyên gia và phân phối minh bạch.'}
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <HoverFillButton 
                        onClick={() => router.push('/dung-thu')}
                        className="w-fit bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-title-lg text-sm sm:text-base font-bold shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                      >
                        {t('odc.hero.btn1')}
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </HoverFillButton>

                      {/* Secondary CTA */}
                      <button 
                        onClick={() => {
                          const modelsSection = document.getElementById('odc-models');
                          if (modelsSection) {
                            modelsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-fit border border-[#22D3EE]/30 bg-[#22D3EE]/5 hover:bg-[#22D3EE]/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-title-lg text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                      >
                        {t('odc.hero.btn2')}
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
              <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest mb-4 block">
                {t('odc.benefits.badge')}
              </span>
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                {t('odc.benefits.title')}
              </h2>
              <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                {t('odc.benefits.desc')}
              </p>
            </div>
          </ScrollReveal>

          <div ref={scrollContainerRef} className="relative z-20 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center md:snap-none">
                <ScrollReveal delay={index * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 h-full hover:bg-white/10 transition-colors group flex flex-col min-h-[250px]">
                    <div className="w-14 h-14 rounded-2xl bg-[#06101F] border border-[#22D3EE]/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[#22D3EE] text-[28px]">
                        {item === 1 ? 'psychology' : 
                         item === 2 ? 'rocket_launch' : 
                         item === 3 ? 'account_tree' : 'visibility'}
                      </span>
                    </div>
                    <h3 className="text-white font-title-lg text-[20px] font-bold mb-4">{t(`odc.benefits.b${item}.title`)}</h3>
                    <p className="text-white/70 font-body-md text-[15px] leading-relaxed flex-grow">
                      {t(`odc.benefits.b${item}.desc`)}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </section>

        {/* Talent Shortage Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32">
          <div className="bg-gradient-to-br from-[#22D3EE]/5 to-[#06101F] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <ScrollReveal>
              <div className="text-center mb-16 relative z-10">
                <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest mb-4 block">
                  {t('odc.shortage.badge')}
                </span>
                <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                  {t('odc.shortage.title')}
                </h2>
                <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                  {t('odc.shortage.desc')}
                </p>
              </div>
            </ScrollReveal>

            <div ref={shortageScrollContainerRef} className="relative z-10 flex md:grid md:grid-cols-3 gap-8 mb-12 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-8 px-8 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[1, 2, 3].map((item, index) => (
                <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center md:snap-none">
                  <ScrollReveal delay={index * 0.1}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-white/10 transition-colors min-h-[300px]">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#22D3EE]/20 to-[#10F0CB]/20 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-[#22D3EE] text-3xl">
                        {item === 1 ? 'trending_down' : item === 2 ? 'handshake' : 'rocket_launch'}
                      </span>
                    </div>
                    <h3 className="text-white font-title-lg text-xl font-bold mb-4">{t(`odc.shortage.c${item}.title`)}</h3>
                    <p className="text-white/70 font-body-md leading-relaxed flex-grow">
                      {t(`odc.shortage.c${item}.desc`)}
                    </p>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] p-[1px] rounded-2xl relative z-10">
                <div className="bg-[#06101F] rounded-2xl p-6 md:p-8 flex items-center gap-6">
                  <span className="material-symbols-outlined text-[#22D3EE] text-4xl shrink-0 hidden sm:block">lightbulb</span>
                  <p className="text-white font-title-md text-lg md:text-xl font-bold leading-relaxed">
                    {t('odc.shortage.highlight')}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Delivery Model Section */}
        <section id="odc-models" className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32 scroll-mt-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest mb-4 block">
                {t('odc.model.badge')}
              </span>
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                {t('odc.model.title')}
              </h2>
              <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                {t('odc.model.desc')}
              </p>
            </div>
          </ScrollReveal>

          <div ref={modelScrollContainerRef} className="relative z-10 flex md:grid md:grid-cols-3 gap-8 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[1, 2, 3].map((item, index) => (
              <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center md:snap-none">
                <ScrollReveal delay={index * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col h-full hover:bg-white/10 transition-colors group relative overflow-hidden min-h-[350px]">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#22D3EE]/5 rounded-full blur-[30px] group-hover:bg-[#22D3EE]/10 transition-colors pointer-events-none" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-[#06101F] border border-[#22D3EE]/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:scale-110 transition-transform relative z-10">
                    <span className="material-symbols-outlined text-[#22D3EE] text-[32px]">
                      {item === 1 ? 'engineering' : item === 2 ? 'manage_accounts' : 'task_alt'}
                    </span>
                  </div>
                  <h3 className="text-white font-title-lg text-2xl font-bold mb-4 relative z-10">{t(`odc.model.m${item}.title`)}</h3>
                  <p className="text-white/70 font-body-md leading-relaxed flex-grow relative z-10">
                    {t(`odc.model.m${item}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            </div>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center text-[#22D3EE] font-body-md text-lg italic max-w-4xl mx-auto">
              "{t('odc.model.support')}"
            </div>
          </ScrollReveal>
        </section>

        {/* [x] 2.5 Create "Scalable AI Resources" Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest mb-4 block">
                {t('odc.resource.badge')}
              </span>
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                {t('odc.resource.title')}
              </h2>
              <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                {t('odc.resource.desc')}
              </p>
            </div>
          </ScrollReveal>

          <div ref={resourceScrollContainerRef} className="relative z-10 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center md:snap-none">
                <ScrollReveal delay={index * 0.1}>
                  <div className="bg-[#06101F] border border-white/10 rounded-2xl p-8 hover:border-[#22D3EE]/50 hover:bg-white/5 transition-all group flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)] min-h-[300px]">
                    <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#22D3EE]/20 group-hover:border-[#22D3EE]/30 transition-colors">
                      <span className="material-symbols-outlined text-white/70 group-hover:text-[#22D3EE] transition-colors">
                        {item === 1 ? 'psychology' : 
                         item === 2 ? 'code' : 
                         item === 3 ? 'database' : 
                         item === 4 ? 'bug_report' : 
                         item === 5 ? 'cloud_sync' : 'assignment'}
                      </span>
                    </div>
                    <h3 className="text-white font-title-lg text-xl font-bold group-hover:text-[#22D3EE] transition-colors">
                      {t(`odc.resource.r${item}.title`)}
                    </h3>
                  </div>
                  <p className="text-white/70 font-body-md leading-relaxed flex-grow">
                    {t(`odc.resource.r${item}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest mb-4 block">
                {t('odc.tech.badge')}
              </span>
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                {t('odc.tech.title')}
              </h2>
              <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                {t('odc.tech.desc')}
              </p>
            </div>
          </ScrollReveal>

          <div ref={techScrollContainerRef} className="relative z-10 flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center md:snap-none">
                <ScrollReveal delay={index * 0.1}>
                  <div className="bg-[#06101F] border border-white/10 rounded-3xl p-8 hover:border-[#22D3EE]/50 hover:bg-white/5 transition-all group flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)] min-h-[300px]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#22D3EE]/20 to-[#10F0CB]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#22D3EE] text-3xl">
                        {item === 1 ? 'smart_toy' : 
                         item === 2 ? 'terminal' : 
                         item === 3 ? 'dataset' : 'cloud'}
                      </span>
                    </div>
                    <h3 className="text-white font-title-lg text-2xl font-bold">
                      {t(`odc.tech.t${item}.title`)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                    {t(`odc.tech.t${item}.tags`).split(', ').map(tag => (
                      <span key={tag} className="bg-white/5 border border-white/10 text-white/80 font-label-md px-3 py-1.5 rounded-lg text-sm group-hover:bg-[#22D3EE]/10 group-hover:text-[#22D3EE] group-hover:border-[#22D3EE]/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
        </section>

        {/* Talent & Governance Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 md:mb-32">
          <div className="bg-gradient-to-br from-[#22D3EE]/5 to-[#06101F] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <ScrollReveal>
              <div className="text-center mb-16 relative z-10">
                <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest mb-4 block">
                  {t('odc.gov.badge')}
                </span>
                <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                  {t('odc.gov.title')}
                </h2>
                <p className="text-white/70 font-body-md text-lg max-w-3xl mx-auto">
                  {t('odc.gov.desc')}
                </p>
              </div>
            </ScrollReveal>

            <div ref={govScrollContainerRef} className="relative z-10 flex lg:grid lg:grid-cols-3 gap-8 mb-12 overflow-x-auto overflow-y-hidden lg:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-8 px-8 lg:mx-0 lg:px-0 lg:overflow-visible lg:pb-0 lg:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[1, 2, 3].map((item, index) => (
                <div key={item} className="flex-none w-[85vw] sm:w-[340px] lg:w-auto snap-center lg:snap-none">
                  <ScrollReveal delay={index * 0.1}>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col hover:bg-white/10 transition-colors min-h-[300px]">
                      <span className="text-[#10F0CB] font-label-md text-xs uppercase tracking-wider mb-4 block">
                        {t(`odc.gov.g${item}.label`)}
                      </span>
                      <h3 className="text-white font-title-lg text-2xl font-bold mb-6">{t(`odc.gov.g${item}.title`)}</h3>
                      <ul className="space-y-4">
                        {t(`odc.gov.g${item}.bullets`).split(', ').map(bullet => (
                          <li key={bullet} className="flex items-start gap-3 text-white/80 font-body-md">
                            <span className="material-symbols-outlined text-[#22D3EE] text-[20px] shrink-0 mt-0.5">check_circle</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="text-center text-white/60 font-body-md text-lg italic max-w-4xl mx-auto relative z-10">
                "{t('odc.gov.bottom')}"
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
                <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest mb-4 block">
                  {t('odc.why.badge')}
                </span>
                <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white mb-6">
                  {t('odc.why.title')}
                </h2>
              </div>
            </ScrollReveal>

            <div ref={whyScrollContainerRef} className="relative z-20 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-8 px-8 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[1, 2, 3, 4].map((item, index) => (
                <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center md:snap-none">
                  <ScrollReveal delay={index * 0.1}>
                    <div className="text-center bg-white/5 md:bg-transparent border md:border-none border-white/10 rounded-[2rem] p-8 md:p-0 h-full flex flex-col min-h-[250px]">
                      <div className="w-20 h-20 mx-auto rounded-full bg-[#06101F] border-2 border-[#22D3EE] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        <span className="text-[#22D3EE] font-display-lg text-2xl font-bold">0{item}</span>
                      </div>
                      <h3 className="text-white font-title-lg text-[22px] font-bold mb-4">{t(`odc.why.w${item}.title`)}</h3>
                      <p className="text-white/70 font-body-md text-[16px] leading-relaxed flex-grow">
                        {t(`odc.why.w${item}.desc`)}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest mb-4 block">
                {t('odc.faq.badge')}
              </span>
              <h2 className="text-2xl md:text-4xl font-display-lg font-bold text-white mb-6">
                {t('odc.faq.title')}
              </h2>
              <p className="text-white/70 font-body-md text-base max-w-3xl mx-auto">
                {t('odc.faq.desc')}
              </p>
            </div>
          </ScrollReveal>

          <FaqAccordion faqs={[
            { q: t('odc.faq.q1.q'), a: t('odc.faq.q1.a') },
            { q: t('odc.faq.q2.q'), a: t('odc.faq.q2.a') },
            { q: t('odc.faq.q3.q'), a: t('odc.faq.q3.a') },
            { q: t('odc.faq.q4.q'), a: t('odc.faq.q4.a') },
            { q: t('odc.faq.q5.q'), a: t('odc.faq.q5.a') },
            { q: t('odc.faq.q6.q'), a: t('odc.faq.q6.a') },
            { q: t('odc.faq.q7.q'), a: t('odc.faq.q7.a') }
          ]} />
        </section>

        {/* Final CTA Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 mt-24 mb-24 md:mb-32">
          <div className="bg-gradient-to-br from-[#22D3EE] to-[#10F0CB] rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            
            <ScrollReveal>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-[#06101F] mb-6">
                  {t('odc.cta.title')}
                </h2>
                <p className="text-[#06101F]/80 font-body-md text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
                  {t('odc.cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={() => router.push('/dung-thu')}
                    className="w-full sm:w-auto bg-[#06101F] text-white px-8 py-4 rounded-xl font-title-lg text-base font-bold shadow-xl hover:-translate-y-1 transition-transform flex items-center justify-center gap-2 group whitespace-nowrap"
                  >
                    {t('odc.cta.btn1')}
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button 
                    onClick={() => {
                      const modelsSection = document.getElementById('odc-models');
                      if (modelsSection) {
                        modelsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-[#06101F] border border-[#06101F]/10 px-8 py-4 rounded-xl font-title-lg text-base font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap backdrop-blur-sm"
                  >
                    {t('odc.cta.btn2')}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </div>
  );
}
