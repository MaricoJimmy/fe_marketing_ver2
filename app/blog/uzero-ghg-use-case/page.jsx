"use client";
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ArticleHero from '@/components/ArticleHero';
import UzeroGhgArticleContent from '@/components/UzeroGhgArticleContent';
import ArticleSidebar from '@/components/ArticleSidebar';
import ArticleProducts from '@/components/ArticleProducts';
import ArticleRelated from '@/components/ArticleRelated';
import BlogCTA from '@/components/BlogCTA';

export default function UzeroGhgBlogPage() {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "GHG Emissions Management | Udata" : "Quản lý phát thải khí nhà kính GHG | Udata";
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#06101F] overflow-clip flex flex-col font-body-md pt-20">
      
      <div className={`relative z-10 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Hero Section */}
        <ArticleHero customArticle={{
          category: { VI: 'Ứng dụng thực tế', EN: 'Use Case' },
          title: { 
            VI: 'Quản lý phát thải khí nhà kính GHG', 
            EN: 'Greenhouse Gas (GHG) Emissions Management' 
          },
          excerpt: { 
            VI: 'Uzero giúp doanh nghiệp thu thập, tính toán và trực quan hóa dữ liệu phát thải khí nhà kính theo Scope 1, Scope 2 và Scope 3.', 
            EN: 'Uzero helps businesses collect, calculate, and visualize greenhouse gas emissions data across Scope 1, Scope 2, and Scope 3.' 
          },
          readingTime: { VI: '5 phút đọc', EN: '5 min read' },
          date: '12/06/2026',
          icon: 'co2',
          thumbnail: '/image/uzero/auto-calculate.webp'
        }} />
        
        {/* Main Body (Content + Sidebar) */}
        <section className="relative py-16 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Article Content (8 cols) */}
          <div className="w-full lg:w-2/3 shrink-0">
            <UzeroGhgArticleContent />
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-28">
            <ArticleSidebar />
          </div>
          
        </section>

        {/* Article Products Section */}
        <div className="border-t border-white/5 bg-[#0A0E14]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <ArticleProducts />
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-[#06101F]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <ArticleRelated />
          </div>
        </div>
        
        {/* CTA Section */}
        <BlogCTA customTitle="Tư vấn quản lý phát thải với Uzero" />
        
      </div>
    </div>
  );
}
