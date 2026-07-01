"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import TrustedBy from '@/components/TrustedBy';
import SecurityCompliance from '@/components/SecurityCompliance';

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

  // Refs for auto-scrolling containers
  const visionScrollRef = useRef(null);
  const coreScrollRef = useRef(null);

  useEffect(() => {
    document.title = lang === 'EN' ? "About Us | Udata" : "Về chúng tôi | Udata";
  }, [lang]);

  // Auto-scroll logic for mobile
  useEffect(() => {
    const autoScroll = (ref) => {
      const container = ref.current;
      if (!container || window.innerWidth >= 768) return; // Only on mobile
      
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      let nextScroll = container.scrollLeft + container.clientWidth * 0.8; // scroll roughly one card width
      if (nextScroll >= maxScroll - 10) {
        nextScroll = 0; // reset to start
      }
      container.scrollTo({ left: nextScroll, behavior: 'smooth' });
    };

    const interval = setInterval(() => {
      autoScroll(visionScrollRef);
      autoScroll(coreScrollRef);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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
      <div className="max-w-[1440px] mx-auto space-y-xl">
        
        <section 
          ref={headerRef} 
          className="flex flex-col items-center justify-center space-y-6 md:space-y-8 min-h-[50vh] md:min-h-[65vh] w-full mx-auto relative z-10 px-4 md:py-20"
        >
          {/* Animated Background for PC */}
          <div className="hidden md:block absolute inset-0 z-[-1] pointer-events-none overflow-hidden rounded-[2.5rem] bg-surface-container-lowest/30 border border-surface-border/50">
            <div className="absolute inset-0 opacity-60">
              <AnimatedBackground />
            </div>
            {/* Subtle glow and gradient overlays */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-electric-cyan/5 blur-[100px] rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90" />
          </div>

          <div 
            className="inline-block bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-6 py-2.5 rounded-full mb-2 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ 
              transform: headerVisible ? 'translateY(0) scale(1)' : 'translateY(-30px) scale(0.9)', 
              opacity: headerVisible ? 1 : 0 
            }}
          >
            <span className="font-label-sm text-sm md:text-base uppercase tracking-[0.25em] text-[#22D3EE] font-bold text-center">
              {t('about.badge')}
            </span>
          </div>
          
          <h1 
            className="font-display-lg text-[22px] min-[375px]:text-[24px] leading-[1.3] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] text-white md:leading-[1.2] font-bold text-center drop-shadow-2xl max-w-6xl mx-auto transition-all duration-[1500ms] delay-100 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ 
              transform: headerVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)', 
              opacity: headerVisible ? 1 : 0,
              filter: headerVisible ? 'blur(0px)' : 'blur(10px)'
            }}
            dangerouslySetInnerHTML={{ __html: t('about.hero.subtitle') }}
          />
        </section>

        {/* Trusted By Section (Full Width) */}
        <section className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-16 mb-24 overflow-hidden">
          <TrustedBy />
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
                <h2 className="font-display-lg text-2xl min-[375px]:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4 lg:mb-6 leading-tight drop-shadow-md">
                  {t('about.intro.title')}
                </h2>
                <p className="font-body-md text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem] text-on-surface leading-[1.7] md:leading-[1.8]" dangerouslySetInnerHTML={{ __html: t('about.intro.p1') }} />
                <p className="font-body-md text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem] text-on-surface-variant leading-[1.7] md:leading-[1.8]">
                  {t('about.intro.p2')}
                </p>
                <p className="font-body-md text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem] text-on-surface-variant leading-[1.7] md:leading-[1.8]" dangerouslySetInnerHTML={{ __html: t('about.intro.p3') }} />
                <div className="pt-3 lg:pt-5">
                  <div className="inline-block border-l-[3px] md:border-l-4 border-electric-cyan pl-4 md:pl-5 py-1 md:py-2">
                    <p className="font-title-md text-base md:text-lg lg:text-xl text-white italic leading-relaxed">
                      "{t('about.intro.quote')}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[22rem] lg:max-w-[26rem] group cursor-pointer">
                <div className="transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110">
                  <img src="/Asset 5.png" alt="Udata Overview" className="w-full object-contain opacity-85 drop-shadow-[0_0_40px_rgba(34,211,238,0.25)] group-hover:opacity-100 group-hover:drop-shadow-[0_0_60px_rgba(34,211,238,0.4)] transition-all duration-[800ms] animate-[spin_25s_linear_infinite]" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Vision, Mission & Position Section */}
        <section className="relative transition-all duration-[900ms] ease-out -mx-margin-mobile md:mx-0 px-margin-mobile md:px-0">
          <div ref={visionScrollRef} className="flex overflow-x-auto md:flex-col gap-6 md:gap-8 snap-x snap-mandatory pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Vision */}
            <div className="w-[85vw] shrink-0 md:w-full md:shrink snap-center glass-card p-6 md:p-10 rounded-3xl border border-surface-border bg-surface-container-lowest/30 hover:border-[#22D3EE]/50 transition-colors flex flex-col md:flex-row items-center gap-6 md:gap-12 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-full md:w-[45%] shrink-0 rounded-2xl overflow-hidden relative shadow-lg">
                <img src="/image/about_us/udata_vision.png" alt="Vision" className="w-full h-[200px] sm:h-[250px] md:h-[320px] object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="w-full md:w-[55%] flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#22D3EE]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[#22D3EE] text-3xl md:text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>visibility</span>
                  </div>
                  <h3 className="font-display-md text-2xl md:text-3xl text-white font-bold">{t('about.vision.title')}</h3>
                </div>
                <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
                  {t('about.vision.desc')}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="w-[85vw] shrink-0 md:w-full md:shrink snap-center glass-card p-6 md:p-10 rounded-3xl border border-surface-border bg-surface-container-lowest/30 hover:border-[#10B981]/50 transition-colors flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-full md:w-[45%] shrink-0 rounded-2xl overflow-hidden relative shadow-lg">
                <img src="/image/about_us/udata_mission.png" alt="Mission" className="w-full h-[200px] sm:h-[250px] md:h-[320px] object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="w-full md:w-[55%] flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#10B981]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[#10B981] text-3xl md:text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>flag</span>
                  </div>
                  <h3 className="font-display-md text-2xl md:text-3xl text-white font-bold">{t('about.mission.title')}</h3>
                </div>
                <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
                  {t('about.mission.desc')}
                </p>
              </div>
            </div>

            {/* Position */}
            <div className="w-[85vw] shrink-0 md:w-full md:shrink snap-center glass-card p-6 md:p-10 rounded-3xl border border-surface-border bg-surface-container-lowest/30 hover:border-[#3B82F6]/50 transition-colors flex flex-col md:flex-row items-center gap-6 md:gap-12 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-full md:w-[45%] shrink-0 rounded-2xl overflow-hidden relative shadow-lg">
                <img src="/image/about_us/udata_position.png" alt="Position" className="w-full h-[200px] sm:h-[250px] md:h-[320px] object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="w-full md:w-[55%] flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[#3B82F6] text-3xl md:text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>adjust</span>
                  </div>
                  <h3 className="font-display-md text-2xl md:text-3xl text-white font-bold">{t('about.position.title')}</h3>
                </div>
                <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
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
          </div>

          <div ref={coreScrollRef} className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-xl snap-x snap-mandatory pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-margin-mobile md:mx-0 px-margin-mobile md:px-0">
            {/* FIT */}
            <div className="w-[85vw] shrink-0 md:w-auto md:shrink snap-center space-y-4 p-6 glass-card border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors text-left md:text-center">
              <div className="md:mx-auto w-24 h-24 md:w-32 md:h-32 flex items-center justify-start md:justify-center text-electric-cyan">
                <span className="material-symbols-outlined" style={{ fontSize: 'clamp(80px, 8vw, 130px)', fontVariationSettings: '"FILL" 1' }}>psychology</span>
              </div>
              <h3 className="font-title-lg text-2xl text-electric-cyan font-bold uppercase tracking-wide">FIT</h3>
              <h4 className="text-lg text-white font-bold leading-snug">{t('about.core.fit.title')}</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                {t('about.core.fit.desc')}
              </p>
            </div>

            {/* FAST */}
            <div className="w-[85vw] shrink-0 md:w-auto md:shrink snap-center space-y-4 p-6 glass-card border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors text-left md:text-center">
              <div className="md:mx-auto w-24 h-24 md:w-32 md:h-32 flex items-center justify-start md:justify-center text-[#4AA0F0]">
                <span className="material-symbols-outlined" style={{ fontSize: 'clamp(80px, 8vw, 130px)', fontVariationSettings: '"FILL" 1' }}>verified_user</span>
              </div>
              <h3 className="font-title-lg text-2xl text-[#4AA0F0] font-bold uppercase tracking-wide">FAST</h3>
              <h4 className="text-lg text-white font-bold leading-snug">{t('about.core.fast.title')}</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                {t('about.core.fast.desc')}
              </p>
            </div>

            {/* FLEXIBLE */}
            <div className="w-[85vw] shrink-0 md:w-auto md:shrink snap-center space-y-4 p-6 glass-card border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors text-left md:text-center">
              <div className="md:mx-auto w-24 h-24 md:w-32 md:h-32 flex items-center justify-start md:justify-center text-sustainability-green">
                <span className="material-symbols-outlined" style={{ fontSize: 'clamp(80px, 8vw, 130px)', fontVariationSettings: '"FILL" 1' }}>eco</span>
              </div>
              <h3 className="font-title-lg text-2xl text-sustainability-green font-bold uppercase tracking-wide">FLEXIBLE</h3>
              <h4 className="text-lg text-white font-bold leading-snug">{t('about.core.flexible.title')}</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                {t('about.core.flexible.desc')}
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
            <h2 className="font-display-md text-3xl md:text-4xl text-white font-bold mb-3">{t('about.awards.title')}</h2>
            <h3 className="font-title-lg text-xl md:text-2xl text-[#22D3EE] font-medium leading-tight opacity-90">
              {t('about.awards.subtitle')}
            </h3>
          </div>
          
          <div className="space-y-6 mb-12 w-full">
            <p className="font-body-md text-base md:text-[1.1rem] text-white/80 leading-[1.8]" dangerouslySetInnerHTML={{ __html: t('about.awards.p1') }} />
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

        {/* Security & Compliance Section */}
        <section className="relative transition-all duration-[900ms] ease-out mt-8 mb-8">
          <SecurityCompliance />
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
