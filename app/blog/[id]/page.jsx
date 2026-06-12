"use client";
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ArticleHero from '@/components/ArticleHero';
import ArticleContent from '@/components/ArticleContent';
import ArticleSidebar from '@/components/ArticleSidebar';
import ArticleProducts from '@/components/ArticleProducts';
import ArticleRelated from '@/components/ArticleRelated';
import BlogNewsletter from '@/components/BlogNewsletter';
import BlogCTA from '@/components/BlogCTA';

export default function BlogDetailPage() {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "Vì sao dữ liệu vận hành là nền tảng của chuyển đổi số xanh? | Udata";
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-[#06101F] overflow-clip flex flex-col font-body-md">
      
      <div className={`relative z-10 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Hero Section */}
        <ArticleHero />
        
        {/* Main Body (Content + Sidebar) */}
        <section className="relative py-16 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Article Content (8 cols) */}
          <div className="w-full lg:w-2/3 shrink-0">
            <ArticleContent />
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-28">
            <ArticleSidebar />
          </div>

        </section>

        {/* Bottom Sections */}
        <div className="px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col">
          <ArticleProducts />
          <ArticleRelated />
        </div>


        {/* Final CTA */}
        <BlogCTA />

      </div>
    </div>
  );
}
