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
  const { t } = useLanguage();
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const whyScrollContainerRef = useRef(null);

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
                    <p className="text-white/70 font-body-md text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                      {t('odc.hero.subtitle')}
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
              <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center">
                <ScrollReveal delay={index * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 h-full hover:bg-white/10 transition-colors group flex flex-col min-h-[250px]">
                    <div className="w-14 h-14 rounded-2xl bg-[#06101F] border border-[#22D3EE]/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[#22D3EE] text-[28px]">
                        {item === 1 ? 'school' : 
                         item === 2 ? 'diversity_3' : 
                         item === 3 ? 'security' : 'verified'}
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

          <TechStack />
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

            <div ref={whyScrollContainerRef} className="relative z-20 flex md:grid md:grid-cols-3 gap-6 overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide pt-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[1, 2, 3].map((item, index) => (
                <div key={item} className="flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center">
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
            { q: t('odc.faq.q3.q'), a: t('odc.faq.q3.a') }
          ]} />
        </section>

      </main>
    </div>
  );
}
