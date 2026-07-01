"use client";
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ArticleHero from '@/components/ArticleHero';
import UgateAiKnowledgeArticleContent from '@/components/UgateAiKnowledgeArticleContent';
import ArticleSidebar from '@/components/ArticleSidebar';
import ArticleProducts from '@/components/ArticleProducts';
import ArticleRelated from '@/components/ArticleRelated';
import BlogCTA from '@/components/BlogCTA';

export default function UgateAiKnowledgeBlogPage() {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "AI Assistant for Technical Knowledge | Udata" : "Trợ lý AI cho vận hành và quản lý tri thức | Udata";
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
            VI: 'Trợ lý AI cho vận hành và quản lý tri thức kỹ thuật', 
            EN: 'AI Assistant for Operation and Technical Knowledge Management' 
          },
          excerpt: { 
            VI: 'Ugate giúp doanh nghiệp tập trung tài liệu kỹ thuật, kinh nghiệm bảo trì, quy trình xử lý sự cố và dữ liệu vận hành vào một kho tri thức thống nhất.', 
            EN: 'Ugate helps businesses centralize technical documents, maintenance experience, troubleshooting processes, and operational data into a unified knowledge repository.' 
          },
          readingTime: { VI: '6 phút đọc', EN: '6 min read' },
          date: '12/06/2026',
          icon: 'smart_toy',
          thumbnail: '/image/Ugate/Ugate-1.webp'
        }} />
        
        {/* Main Body (Content + Sidebar) */}
        <section className="relative py-16 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Article Content (8 cols) */}
          <div className="w-full lg:w-2/3 shrink-0">
            <UgateAiKnowledgeArticleContent />
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
        <BlogCTA customTitle="Nhận Demo Ugate" />
        
      </div>
    </div>
  );
}
