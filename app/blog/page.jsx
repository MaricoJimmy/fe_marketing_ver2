"use client";
import React, { useEffect, useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import BlogHero from '@/components/BlogHero';
import BlogTopics from '@/components/BlogTopics';

import BlogFeatured from '@/components/BlogFeatured';
import BlogGrid from '@/components/BlogGrid';
import BlogCTA from '@/components/BlogCTA';
import ScrollReveal from '@/components/ScrollReveal';

export default function BlogPage() {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "Blog | Udata" : "Góc nhìn | Udata";
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-[#06101F] overflow-hidden flex flex-col font-body-md">
      {/* Background for Hero */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden h-[800px]">
        {/* We use the custom background in BlogHero instead of AnimatedBackground to match the mockup */}
      </div>

      <div className={`relative z-10 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <BlogHero />
        
        <ScrollReveal><BlogTopics /></ScrollReveal>
        
        <ScrollReveal><BlogFeatured /></ScrollReveal>
        
        <ScrollReveal><BlogGrid /></ScrollReveal>

        <ScrollReveal><BlogCTA /></ScrollReveal>
      </div>
    </div>
  );
}
