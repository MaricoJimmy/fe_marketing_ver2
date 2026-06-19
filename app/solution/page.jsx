"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from '@/components/ui/HoverFillButton';
import TrustedBy from '@/components/TrustedBy';
import SolutionChallenges from '@/components/SolutionChallenges';
import SolutionPlatforms from '@/components/SolutionPlatforms';
import SolutionsByIndustry from '@/components/SolutionsByIndustry';
import SolutionUseCases from '@/components/SolutionUseCases';
import SolutionWhyChooseUs from '@/components/SolutionWhyChooseUs';
import SolutionProcess from '@/components/SolutionProcess';
import SolutionFAQ from '@/components/SolutionFAQ';
import SolutionCTA from '@/components/SolutionCTA';
import ScrollReveal from '@/components/ScrollReveal';

export default function SolutionPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "Solutions | Udata" : "Giải pháp | Udata";
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleExploreClick = () => {
    // Scroll down to the next section or navigate
    window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <>
    <div className="min-h-screen lg:h-[calc(100vh-80px)] pt-32 lg:pt-[6vh] pb-12 lg:pb-[4vh] px-6 md:px-12 bg-[#080B10] overflow-hidden flex flex-col justify-center relative">
      {/* Background glow */}
      <div className="absolute top-0 right-[20%] w-[800px] h-[600px] bg-[#22D3EE]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[4vh] xl:gap-16 items-center">
        
        {/* Left Content */}
        <div 
          className="flex flex-col gap-[3vh] transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_8px_#22D3EE]"></span>
            <span className="text-[#22D3EE] text-[10px] md:text-xs font-bold tracking-widest uppercase">
              {lang === 'EN' ? 'AIoT Platform for Green Digital Transformation' : 'NỀN TẢNG AIoT CHO CHUYỂN ĐỔI SỐ XANH'}
            </span>
          </div>

          <h1 className="text-[28px] sm:text-4xl lg:text-[clamp(2.5rem,5vh,3.75rem)] font-bold text-white leading-[1.3] lg:leading-[1.15] tracking-tight">
            {lang === 'EN' ? (
              <>
                Transform enterprise operations with <span className="text-[#22D3EE]">AIoT</span><br className="hidden lg:block" />{' '}
                and <span className="text-[#0EA5E9]">realtime data</span>
              </>
            ) : (
              <>
                Chuyển đổi vận hành doanh nghiệp bằng <span className="text-[#22D3EE]">AIoT</span><br className="hidden lg:block" />{' '}
                và <span className="text-[#0EA5E9]">dữ liệu realtime</span>
              </>
            )}
          </h1>

          <p className="text-[clamp(0.875rem,2.5vh,1.125rem)] text-[#9CA3AF] leading-relaxed max-w-[560px]">
            {lang === 'EN' 
              ? 'Udata helps enterprises connect data from manufacturing, logistics, finance, energy, IoT devices, and internal systems into a centralized operational intelligence layer, thereby optimizing performance and building a data foundation for sustainable development.'
              : 'Udata giúp doanh nghiệp kết nối dữ liệu từ sản xuất, kho vận, tài chính, năng lượng, thiết bị IoT và các hệ thống nội bộ vào một lớp trí tuệ vận hành tập trung từ đó tối ưu hiệu suất và xây dựng nền tảng dữ liệu cho phát triển bền vững.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-[1vh]">
            <HoverFillButton 
              onClick={() => router.push('/dung-thu')}
              className="bg-[#22D3EE] text-[#06101F] px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vh,0.875rem)] rounded-xl font-bold text-[clamp(0.875rem,2vh,1rem)] transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105"
            >
              {lang === 'EN' ? 'Explore Solutions' : 'Xem tình huống ứng dụng'}
            </HoverFillButton>
            <HoverFillButton 
              onClick={() => router.push('/demo')}
              className="border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-white px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vh,0.875rem)] rounded-xl font-bold text-[clamp(0.875rem,2vh,1rem)] hover:bg-[#22D3EE]/10 transition-all flex items-center gap-2"
            >
              {lang === 'EN' ? 'Book a Consultation' : 'Đặt lịch Demo'}
            </HoverFillButton>
          </div>
        </div>

        {/* Right Diagram */}
        <div 
          className="relative w-full aspect-[4/3] max-h-[50vh] xl:max-h-[600px] bg-[#0C1017] border border-white/5 rounded-3xl shadow-2xl transition-all duration-1000 ease-out flex items-center justify-center p-[clamp(1rem,3vh,2rem)] overflow-hidden"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(40px)', transitionDelay: '200ms' }}
        >
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/solution.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay for visual blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1017]/40 via-transparent to-transparent pointer-events-none" />
          {/* Corner dark gradients to hide Gemini watermark */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(circle at top left, #0C1017 0%, transparent 25%), radial-gradient(circle at top right, #0C1017 0%, transparent 25%), radial-gradient(circle at bottom left, #0C1017 0%, transparent 25%), radial-gradient(circle at bottom right, #0C1017 0%, transparent 35%)`
          }} />
        </div>
        
        
      </div>
    </div>
    <ScrollReveal><TrustedBy /></ScrollReveal>
    <ScrollReveal><SolutionChallenges /></ScrollReveal>
    <ScrollReveal><SolutionPlatforms /></ScrollReveal>
    <ScrollReveal><SolutionsByIndustry /></ScrollReveal>
    <ScrollReveal><SolutionUseCases /></ScrollReveal>
    <ScrollReveal><SolutionWhyChooseUs /></ScrollReveal>
    <ScrollReveal><SolutionProcess /></ScrollReveal>
    <ScrollReveal><SolutionFAQ /></ScrollReveal>
    <ScrollReveal><SolutionCTA /></ScrollReveal>
    </>
  );
}
