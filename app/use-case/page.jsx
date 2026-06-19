"use client";
import React, { useEffect } from 'react';
import NeuralPatternsBG from '@/components/backgrounds/NeuralPatternsBG';
import { useLanguage } from '@/contexts/LanguageContext';
import UseCaseHero from '@/components/UseCaseHero';
import UseCaseSteps from '@/components/UseCaseSteps';
import UseCaseGrid from '@/components/UseCaseGrid';
import UseCaseMetrics from '@/components/UseCaseMetrics';
import UseCaseCTA from '@/components/UseCaseCTA';

export default function UseCasePage() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = lang === 'EN' ? "Use Cases | Udata" : "Ứng dụng | Udata";
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#06101F] overflow-hidden flex flex-col font-body-md">
      {/* Background for Hero */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden h-[1000px]">
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#0A0E14] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full">
        <UseCaseHero />
        <UseCaseSteps />
        <UseCaseMetrics />
        <UseCaseGrid />
        <UseCaseCTA />
      </div>
    </div>
  );
}
