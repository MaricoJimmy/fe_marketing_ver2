"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutUs() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  
  // Refs for animations
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const coreValuesRef = useRef(null);
  const awardsRef = useRef(null);

  // States for visibility
  const [headerVisible, setHeaderVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [coreValuesVisible, setCoreValuesVisible] = useState(false);
  const [awardsVisible, setAwardsVisible] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "About Us | Udata" : "Về chúng tôi | Udata";
  }, [lang]);

  useEffect(() => {
    const observerOptions = { threshold: 0.15 };
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) setHeaderVisible(true);
          if (entry.target === introRef.current) setIntroVisible(true);
          if (entry.target === coreValuesRef.current) setCoreValuesVisible(true);
          if (entry.target === awardsRef.current) setAwardsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (introRef.current) observer.observe(introRef.current);
    if (coreValuesRef.current) observer.observe(coreValuesRef.current);
    if (awardsRef.current) observer.observe(awardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-10 md:pb-20 px-margin-mobile md:px-margin-desktop min-h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-[1440px] mx-auto space-y-xl">
        
        <section 
          ref={headerRef} 
          className="flex flex-col items-center justify-center space-y-sm max-w-6xl mx-auto transition-all duration-700 ease-out"
          style={{ transform: headerVisible ? 'translateY(0)' : 'translateY(30px)', opacity: headerVisible ? 1 : 0 }}
        >
          <div className="inline-block bg-primary/10 border border-electric-cyan/30 px-4 py-2 rounded-full mb-4">
            <span className="font-label-sm text-sm uppercase tracking-widest text-electric-cyan font-bold text-center">{t('about.badge')}</span>
          </div>
          <h1 
            className="font-display-lg text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] text-white leading-tight drop-shadow-lg font-bold xl:whitespace-nowrap text-center"
            dangerouslySetInnerHTML={{ __html: t('about.hero.subtitle') }}
          />
        </section>

        {/* Content Block */}
        <section 
          ref={introRef}
          className="relative glass-card rounded-2xl overflow-hidden border border-surface-border bg-surface-container-lowest/30 p-6 md:p-10 lg:p-24 transition-all duration-[900ms] ease-out"
          style={{ transform: introVisible ? 'translateY(0)' : 'translateY(50px)', opacity: introVisible ? 1 : 0 }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Intro & History */}
            <div className="lg:col-span-6 flex flex-col justify-center h-full pr-0 lg:pr-4">
              <div className="space-y-5 lg:space-y-6">
                <h2 className="font-display-lg text-4xl lg:text-5xl text-white font-bold mb-4 lg:mb-6 leading-tight drop-shadow-md">
                  {t('about.intro.title')}
                </h2>
                <p className="font-body-md text-[1.05rem] lg:text-[1.1rem] text-on-surface leading-[1.8]" dangerouslySetInnerHTML={{ __html: t('about.intro.p1') }} />
                <p className="font-body-md text-[1.05rem] lg:text-[1.1rem] text-on-surface-variant leading-[1.8]">
                  {t('about.intro.p2')}
                </p>
                <p className="font-body-md text-[1.05rem] lg:text-[1.1rem] text-on-surface-variant leading-[1.8]" dangerouslySetInnerHTML={{ __html: t('about.intro.p3') }} />
                <div className="pt-3 lg:pt-5">
                  <div className="inline-block border-l-4 border-electric-cyan pl-5 py-2">
                    <p className="font-title-md text-lg lg:text-xl text-white italic leading-relaxed">
                      "{t('about.intro.quote')}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <img src="/Asset 5.png" alt="Udata Overview" className="w-full max-w-[22rem] lg:max-w-[26rem] object-contain opacity-85 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:scale-105 hover:opacity-100 transition-all duration-500" />
            </div>

          </div>
        </section>

        {/* Vision, Mission & Position Section */}
        <section className="relative transition-all duration-[900ms] ease-out">
          <div className="flex flex-col gap-8">
            {/* Vision */}
            <div className="glass-card p-6 md:p-10 rounded-3xl border border-surface-border bg-surface-container-lowest/30 hover:border-[#22D3EE]/50 transition-colors flex flex-col md:flex-row items-center gap-8 md:gap-12 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-full md:w-[45%] shrink-0 rounded-2xl overflow-hidden relative shadow-lg">
                <img src="/image/about_us/udata_vision.png" alt="Vision" className="w-full h-[250px] md:h-[320px] object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="w-full md:w-[55%] flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#22D3EE]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[#22D3EE] text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>visibility</span>
                  </div>
                  <h3 className="font-display-md text-3xl text-white font-bold">{t('about.vision.title')}</h3>
                </div>
                <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
                  {t('about.vision.desc')}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="glass-card p-6 md:p-10 rounded-3xl border border-surface-border bg-surface-container-lowest/30 hover:border-[#10B981]/50 transition-colors flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-full md:w-[45%] shrink-0 rounded-2xl overflow-hidden relative shadow-lg">
                <img src="/image/about_us/udata_mission.png" alt="Mission" className="w-full h-[250px] md:h-[320px] object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="w-full md:w-[55%] flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[#10B981] text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>flag</span>
                  </div>
                  <h3 className="font-display-md text-3xl text-white font-bold">{t('about.mission.title')}</h3>
                </div>
                <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
                  {t('about.mission.desc')}
                </p>
              </div>
            </div>

            {/* Position */}
            <div className="glass-card p-6 md:p-10 rounded-3xl border border-surface-border bg-surface-container-lowest/30 hover:border-[#3B82F6]/50 transition-colors flex flex-col md:flex-row items-center gap-8 md:gap-12 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-full md:w-[45%] shrink-0 rounded-2xl overflow-hidden relative shadow-lg">
                <img src="/image/about_us/udata_position.png" alt="Position" className="w-full h-[250px] md:h-[320px] object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="w-full md:w-[55%] flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[#3B82F6] text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>adjust</span>
                  </div>
                  <h3 className="font-display-md text-3xl text-white font-bold">{t('about.position.title')}</h3>
                </div>
                <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
                  {t('about.position.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section 
          ref={coreValuesRef}
          className="relative glass-card rounded-2xl border border-surface-border bg-surface-container-lowest/30 p-6 md:p-10 lg:p-16 text-center transition-all duration-[900ms] ease-out"
          style={{ transform: coreValuesVisible ? 'scale(1)' : 'scale(0.95)', opacity: coreValuesVisible ? 1 : 0 }}
        >
          <div className="max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="font-display-md text-4xl text-white font-bold">{t('about.core.title')}</h2>
            <h3 className="font-title-lg text-2xl text-electric-cyan font-bold leading-tight">
              {t('about.core.subtitle')}
            </h3>
            <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
              {t('about.core.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            {/* Intelligent */}
            <div className="space-y-4 p-6 glass-card border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors">
              <div className="mx-auto w-24 h-24 flex items-center justify-center text-electric-cyan">
                <span className="material-symbols-outlined" style={{ fontSize: '80px', fontVariationSettings: '"FILL" 1' }}>psychology</span>
              </div>
              <h3 className="font-title-lg text-2xl text-white font-bold uppercase tracking-wide">Intelligent</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                {t('about.core.intelligent.desc')}
              </p>
            </div>

            {/* Reliable */}
            <div className="space-y-4 p-6 glass-card border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors">
              <div className="mx-auto w-24 h-24 flex items-center justify-center text-[#4AA0F0]">
                <span className="material-symbols-outlined" style={{ fontSize: '80px', fontVariationSettings: '"FILL" 1' }}>verified_user</span>
              </div>
              <h3 className="font-title-lg text-2xl text-white font-bold uppercase tracking-wide">Reliable</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                {t('about.core.reliable.desc')}
              </p>
            </div>

            {/* Sustainable */}
            <div className="space-y-4 p-6 glass-card border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors">
              <div className="mx-auto w-24 h-24 flex items-center justify-center text-sustainability-green">
                <span className="material-symbols-outlined" style={{ fontSize: '80px', fontVariationSettings: '"FILL" 1' }}>eco</span>
              </div>
              <h3 className="font-title-lg text-2xl text-white font-bold uppercase tracking-wide">Sustainable</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                {t('about.core.sustainable.desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section 
          ref={awardsRef}
          className="relative glass-card rounded-2xl border border-surface-border bg-surface-container-lowest/30 p-6 md:p-10 lg:p-16 transition-all duration-[900ms] ease-out"
          style={{ transform: awardsVisible ? 'translateY(0)' : 'translateY(50px)', opacity: awardsVisible ? 1 : 0 }}
        >
          <div className="mb-8">
            <h2 className="font-display-md text-4xl text-white font-bold mb-3">{t('about.awards.title')}</h2>
            <h3 className="font-title-lg text-2xl text-electric-cyan font-bold leading-tight">
              {t('about.awards.subtitle')}
            </h3>
          </div>
          
          <div className="space-y-6 mb-12 w-full">
            <p className="font-body-md text-[1.1rem] text-on-surface-variant leading-[1.8]" dangerouslySetInnerHTML={{ __html: t('about.awards.p1') }} />
            <p className="font-body-md text-[1.1rem] text-on-surface-variant leading-[1.8]" dangerouslySetInnerHTML={{ __html: t('about.awards.p2') }} />
          </div>

          <div className="flex flex-col md:flex-row gap-md items-stretch">
            {/* Left: Certificate (needs to be viewed in full) */}
            <div className="w-full md:w-[35%] rounded-xl overflow-hidden shadow-lg hover:shadow-electric-cyan/20 transition-shadow duration-300 bg-white">
              <img src="/image/about_us/award-cert.webp" alt="Giấy chứng nhận Sao Khuê" className="w-full h-full object-contain md:object-cover object-[70%_center]" />
            </div>
            {/* Right: Trophy photo */}
            <div className="w-full md:w-[65%] rounded-xl overflow-hidden shadow-lg hover:shadow-electric-cyan/20 transition-shadow duration-300">
              <img src="/image/about_us/award-trophy.webp" alt="Lễ trao giải Sao Khuê" className="w-full h-full object-cover object-center min-h-[300px] md:min-h-0" />
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="relative glass-card rounded-2xl border border-surface-border bg-surface-container-lowest/30 p-8 md:p-10 lg:p-16 text-center overflow-hidden">
          {/* Background glow for CTA */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 via-transparent to-sustainability-green/10 opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto space-y-6">
            <h2 className="font-display-md text-3xl md:text-5xl text-white font-bold leading-tight md:whitespace-nowrap">
              {t('about.cta.title')}
            </h2>
            <p className="font-body-md text-lg text-on-surface-variant">
              {t('about.cta.subtitle')}
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => router.push('/dung-thu')} className="w-full sm:w-auto px-8 py-3 rounded-full bg-electric-cyan text-background font-title-md font-bold hover:bg-electric-cyan/90 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                {t('about.cta.btn1')}
              </button>
              <button onClick={() => router.push('/dung-thu')} className="w-full sm:w-auto px-8 py-3 rounded-full border border-electric-cyan text-electric-cyan font-title-md font-bold hover:bg-electric-cyan/10 transition-all duration-300">
                {t('about.cta.btn2')}
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
