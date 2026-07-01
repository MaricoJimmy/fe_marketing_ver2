"use client";
import React, { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import AnimatedBackground from '@/components/AnimatedBackground'
import HeroSection from '@/components/HeroSection'
import TrustedBy from '@/components/TrustedBy'
import CoreInsight from '@/components/CoreInsight'
import BentoGrid from '@/components/BentoGrid'
import Workflow from '@/components/Workflow'
import CaseStudies from '@/components/CaseStudies'
import SecurityCompliance from '@/components/SecurityCompliance'
import ExperienceCTA from '@/components/ExperienceCTA'

export default function Home() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.title = lang === 'EN' ? "Udata | AIoT Data Collection & Analytics Platform" : "Udata | Nền tảng thu thập, giám sát và phân tích dữ liệu";
  }, [lang]);

  return (
    <>
      <HeroSection />
      <TrustedBy />
      <CoreInsight />
      <BentoGrid />
      <Workflow />
      <CaseStudies />
      <SecurityCompliance />
      <ExperienceCTA />
    </>
  )
}
