"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from './ui/HoverFillButton';
import LightDashboardMockup from './ui/LightDashboardMockup';

export default function ExperienceCTA() {
  const { t } = useLanguage();
  const router = useRouter();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Two columns moving in opposite directions for the parallel 3D effect
  // Increased range for more pronounced parallax effect
  const col1Y = useTransform(scrollYProgress, [0, 1], [100, -700]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0D1117] border-t border-white/5 min-h-[60vh] md:min-h-[90vh]">

      {/* 2 Parallel Columns 3D Background - Desktop Only */}
      <div 
        className="hidden md:flex absolute inset-0 z-0 overflow-visible pointer-events-none items-center justify-end pr-[5%] lg:pr-[15%]"
        style={{ perspective: "2000px" }}
      >
        <motion.div 
          className="relative w-[1200px] h-[200%] flex gap-8 items-center"
          style={{ 
            rotateX: 50, 
            rotateY: 0,
            rotateZ: -30,
            scale: 1.1
          }}
        >
          {/* Column 1 (Scrolls UP) */}
          <motion.div className="flex flex-col gap-8 w-1/2" style={{ y: col1Y }}>
            <img src="/images/dashboard_mockup_1.png" alt="Mockup" className="w-full rounded-2xl shadow-2xl opacity-80" />
            <img src="/images/dashboard_mockup_2.png" alt="Mockup" className="w-full rounded-2xl shadow-2xl opacity-80" />
            <img src="/images/dashboard_mockup_1.png" alt="Mockup" className="w-full rounded-2xl shadow-2xl opacity-80" />
          </motion.div>

          {/* Column 2 (Scrolls DOWN) */}
          <motion.div className="flex flex-col gap-8 w-1/2" style={{ y: col2Y }}>
            <img src="/images/dashboard_mockup_2.png" alt="Mockup" className="w-full rounded-2xl shadow-2xl opacity-80" />
            <img src="/images/dashboard_mockup_1.png" alt="Mockup" className="w-full rounded-2xl shadow-2xl opacity-80" />
            <img src="/images/dashboard_mockup_2.png" alt="Mockup" className="w-full rounded-2xl shadow-2xl opacity-80" />
          </motion.div>
        </motion.div>

        {/* Soft dark overlays to blend the edges and ensure text readability */}
        <div className="absolute inset-0 bg-[#0D1117]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/10 to-[#0D1117] z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-transparent to-transparent w-full max-w-4xl z-20" />
      </div>

      {/* Static Background - Mobile Only (No Parallax Lag) */}
      <div className="md:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-[20%] top-[10%] w-[120%] opacity-30 transform -rotate-[15deg]">
           <img src="/images/dashboard_mockup_1.png" alt="Mockup" className="w-full rounded-2xl shadow-2xl" />
        </div>
        <div className="absolute inset-0 bg-[#0D1117]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-[#0D1117] z-20" />
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto relative z-50 w-full px-4 md:px-12 lg:px-24 py-16 md:pt-32 md:pb-32 flex flex-col justify-center min-h-[60vh] md:min-h-[90vh]">
        <div className="max-w-2xl relative z-50">
          <h2 className="font-display-lg text-4xl md:text-6xl font-bold text-white leading-[1.15] drop-shadow-2xl tracking-tight mb-6">
            {t('cta.title.part1')}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#10F0CB]">
              {t('cta.title.highlight')}
            </span>
          </h2>
          <p className="font-body-md text-lg md:text-xl text-white/80 drop-shadow-lg font-medium leading-relaxed mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex items-center">
            <HoverFillButton 
              onClick={() => router.push('/dung-thu')}
              className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-8 py-4 rounded-xl font-bold font-title-md text-lg whitespace-nowrap transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2 hover:scale-105"
              rippleColor="bg-[#1D4ED8]"
            >
              {t('cta.btn.demo')}
              <span className="material-symbols-outlined text-base font-bold">arrow_forward</span>
            </HoverFillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

