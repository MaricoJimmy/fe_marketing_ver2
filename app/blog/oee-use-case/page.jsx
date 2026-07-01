"use client";
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ArticleHero from '@/components/ArticleHero';
import OeeArticleContent from '@/components/OeeArticleContent';
import ArticleSidebar from '@/components/ArticleSidebar';
import ArticleProducts from '@/components/ArticleProducts';
import ArticleRelated from '@/components/ArticleRelated';
import BlogCTA from '@/components/BlogCTA';

export default function OeeBlogPage() {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "OEE Use Case | Udata" : "Ứng dụng OEE | Udata";
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#06101F] overflow-clip flex flex-col font-body-md pt-20">
      
      <div className={`relative z-10 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        <ArticleHero customArticle={{
          category: { VI: 'Ứng dụng thực tế', EN: 'Use Case' },
          title: { VI: 'Quản lý hiệu suất và bảo dưỡng máy (OEE)', EN: 'Overall Equipment Effectiveness (OEE)' },
          excerpt: { 
            VI: 'Uboard giúp nhà máy theo dõi hiệu suất thiết bị, thời gian dừng máy và tình trạng bảo trì trên một nền tảng dữ liệu vận hành tập trung.', 
            EN: 'Uboard helps factories monitor equipment performance, downtime, and maintenance status on a centralized operational data platform.' 
          },
          readingTime: { VI: '5 phút đọc', EN: '5 min read' },
          date: '12 Tháng 6, 2026',
          thumbnail: '/image/uboard/Uboard-3.webp'
        }} />
        
        {/* Main Body (Content + Sidebar) */}
        <section className="relative py-16 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Article Content (8 cols) */}
          <div className="w-full lg:w-2/3 shrink-0">
            <OeeArticleContent />
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-28">
            <ArticleSidebar customTOC={[
              { id: 'section-1', title: { VI: '1. Bài toán thực tế', EN: '1. Real-world Challenges' } },
              { id: 'section-2', title: { VI: '2. Uboard hỗ trợ như thế nào?', EN: '2. How does Uboard help?' } },
              { id: 'section-3', title: { VI: '3. Dữ liệu có thể kết nối', EN: '3. Connectable Data' } },
              { id: 'section-4', title: { VI: '4. Giá trị mang lại & Phù hợp với ai', EN: '4. Value & Suitability' } },
              { id: 'section-5', title: { VI: '5. Trọng tâm theo dõi', EN: '5. Tracking Focus' } }
            ]} customCTA={{ VI: 'Tư vấn module EMS cho doanh nghiệp', EN: 'Consult EMS Module for Business' }[lang]} />
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
