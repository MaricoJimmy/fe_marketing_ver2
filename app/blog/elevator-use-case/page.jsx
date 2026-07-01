"use client";
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ArticleHero from '@/components/ArticleHero';
import ElevatorArticleContent from '@/components/ElevatorArticleContent';
import ArticleSidebar from '@/components/ArticleSidebar';
import ArticleProducts from '@/components/ArticleProducts';
import ArticleRelated from '@/components/ArticleRelated';
import BlogCTA from '@/components/BlogCTA';

export default function ElevatorBlogPage() {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "Elevator & Machine Monitoring | Udata" : "Ứng dụng Giám sát thang máy và máy móc | Udata";
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#06101F] overflow-clip flex flex-col font-body-md pt-20">
      
      <div className={`relative z-10 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        <ArticleHero customArticle={{
          category: { VI: 'Ứng dụng thực tế', EN: 'Use Case' },
          title: { VI: 'Giám sát thang máy và vận hành máy móc', EN: 'Elevator and Machine Operation Monitoring' },
          excerpt: { 
            VI: 'Uboard giúp theo dõi trạng thái hoạt động, cảnh báo lỗi, thời gian dừng, lịch sử bảo trì và tình trạng kết nối của thang máy, máy móc hoặc thiết bị hạ tầng trên một dashboard tập trung.', 
            EN: 'Uboard helps track operating status, error alerts, downtime, maintenance history, and connection status of elevators, machinery, or infrastructure equipment on a centralized dashboard.' 
          },
          readingTime: { VI: '5 phút đọc', EN: '5 min read' },
          date: '12 Tháng 6, 2026',
          thumbnail: '/image/uboard/Uboard-2.webp'
        }} />
        
        {/* Main Body (Content + Sidebar) */}
        <section className="relative py-16 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Article Content (8 cols) */}
          <div className="w-full lg:w-2/3 shrink-0">
            <ElevatorArticleContent />
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-28">
            <ArticleSidebar customTOC={[
              { id: 'section-1', title: { VI: '1. Uboard giám sát những gì?', EN: '1. What does Uboard monitor?' } },
              { id: 'section-2', title: { VI: '2. Dashboard hiển thị', EN: '2. Dashboard Display' } },
              { id: 'section-3', title: { VI: '3. Cảnh báo và báo cáo', EN: '3. Alerts and Reports' } },
              { id: 'section-4', title: { VI: '4. Giá trị vận hành', EN: '4. Operational Value' } },
              { id: 'section-5', title: { VI: '5. Phù hợp với ai', EN: '5. Suitable For' } }
            ]} customCTA={{ VI: 'Tư vấn giám sát thang máy và máy móc', EN: 'Consult Elevator and Machine Monitoring' }[lang]} />
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
