"use client";
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ArticleHero from '@/components/ArticleHero';
import SolarArticleContent from '@/components/SolarArticleContent';
import ArticleSidebar from '@/components/ArticleSidebar';
import ArticleProducts from '@/components/ArticleProducts';
import ArticleRelated from '@/components/ArticleRelated';
import BlogCTA from '@/components/BlogCTA';

export default function SolarBlogPage() {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "Solar Rooftop Use Case | Udata" : "Ứng dụng Điện mặt trời mái nhà | Udata";
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#06101F] overflow-clip flex flex-col font-body-md pt-20">
      
      <div className={`relative z-10 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        <ArticleHero customArticle={{
          category: { VI: 'Ứng dụng thực tế', EN: 'Use Case' },
          title: { VI: 'Giám sát vận hành điện mặt trời mái nhà', EN: 'Solar Rooftop Operation Monitoring' },
          excerpt: { 
            VI: 'Uboard hỗ trợ giám sát và điều khiển hệ điện mặt trời mái nhà thông qua Udata Gateway và Udata Cloud. Module này giúp theo dõi công suất phát, sản lượng điện, trạng thái inverter, dữ liệu công tơ, cảnh báo thiết bị và báo cáo vận hành hệ solar.', 
            EN: 'Uboard supports monitoring and controlling rooftop solar systems through Udata Gateway and Udata Cloud. This module tracks power output, energy production, inverter status, meter data, device alerts, and solar operation reports.' 
          },
          readingTime: { VI: '5 phút đọc', EN: '5 min read' },
          date: '12 Tháng 6, 2026',
          thumbnail: '/image/uboard/Uboard-1.webp'
        }} />
        
        {/* Main Body (Content + Sidebar) */}
        <section className="relative py-16 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Article Content (8 cols) */}
          <div className="w-full lg:w-2/3 shrink-0">
            <SolarArticleContent />
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-28">
            <ArticleSidebar customTOC={[
              { id: 'section-1', title: { VI: '1. Uboard giám sát những gì?', EN: '1. What does Uboard monitor?' } },
              { id: 'section-2', title: { VI: '2. Dashboard hiển thị', EN: '2. Dashboard Display' } },
              { id: 'section-3', title: { VI: '3. Kết nối và điều khiển', EN: '3. Connection and Control' } },
              { id: 'section-4', title: { VI: '4. Cảnh báo và báo cáo', EN: '4. Alerts and Reports' } },
              { id: 'section-5', title: { VI: '5. Năng lực triển khai thực tế', EN: '5. Actual Implementation Capacity' } },
              { id: 'section-6', title: { VI: '6. Giá trị vận hành', EN: '6. Operational Value' } },
              { id: 'section-7', title: { VI: '7. Phù hợp với', EN: '7. Suitable For' } }
            ]} customCTA={{ VI: 'Tư vấn giải pháp điện mặt trời mái nhà', EN: 'Consult Solar Rooftop Solutions' }[lang]} />
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
