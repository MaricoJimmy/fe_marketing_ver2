"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const TextCard = ({ feature, index, total, scrollYProgress }) => {
  const safeTotal = Math.max(total, 2);
  const centerP = index / (safeTotal - 1);
  const distance = 0.5 / (safeTotal - 1); 

  let yInput, yOutput, opacityInput, opacityOutput, bgInput, bgOutput;

  if (index === 0) {
    // Thẻ đầu tiên
    yInput = [0, 1];
    yOutput = [0, 0];
    opacityInput = [0, distance * 0.2, distance, 1];
    opacityOutput = [1, 1, 0, 0];
    bgInput = [0, 1];
    bgOutput = [0.8, 0.8];
  } else if (index === safeTotal - 1) {
    // Thẻ cuối cùng
    yInput = [0, centerP - distance, 1];
    yOutput = [40, 40, 0];
    opacityInput = [0, centerP - distance, 1];
    opacityOutput = [0, 0, 1];
    bgInput = [0, centerP - distance, 1];
    bgOutput = [0, 0, 0.8];
  } else {
    // Các thẻ ở giữa
    yInput = [0, centerP - distance, centerP, 1];
    yOutput = [40, 40, 0, 0];
    opacityInput = [0, centerP - distance, centerP, centerP + distance * 0.2, centerP + distance, 1];
    opacityOutput = [0, 0, 1, 1, 0, 0];
    bgInput = [0, centerP - distance, centerP, 1];
    bgOutput = [0, 0, 0.8, 0.8];
  }

  const y = useTransform(scrollYProgress, yInput, yOutput);
  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);
  const bgOpacity = useTransform(scrollYProgress, bgInput, bgOutput);

  const backgroundColor = useTransform(bgOpacity, (op) => `rgba(10, 10, 10, ${op})`);
  const borderColor = useTransform(bgOpacity, (op) => `rgba(255, 255, 255, ${op * 0.3})`);

  return (
    <motion.div 
      className="absolute w-full h-full flex flex-col items-center pt-[8%] md:pt-[10%]"
      style={{ opacity, y, zIndex: 20 }}
    >
      <motion.div 
        style={{ backgroundColor, borderColor, borderWidth: '1px' }}
        className="backdrop-blur-md p-3 md:p-8 rounded-lg md:rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.5)] md:shadow-[0_0_40px_rgba(0,0,0,0.8)] text-center w-[95%] md:max-w-2xl"
      >
        <h3 className="text-white font-title-md font-bold text-[13px] sm:text-base md:text-3xl mb-1.5 md:mb-4 bg-gradient-to-r from-white to-[#10F0CB] bg-clip-text text-transparent leading-tight">
          {feature.title}
        </h3>
        <p className="text-white/90 font-body-md text-[10px] sm:text-xs md:text-lg leading-snug md:leading-relaxed whitespace-normal break-words w-full">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function MacbookScroll({ features }) {
  const { lang } = useLanguage();
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Điều khiển ẩn/hiện Header toàn trang
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Gửi event để ẩn Header khi MacbookScroll vào tầm nhìn, hiện lại khi ra ngoài
        const event = new CustomEvent('toggleHeader', { detail: { hide: entry.isIntersecting } });
        window.dispatchEvent(event);
      },
      { threshold: 0.1 } // Kích hoạt khi 10% phần này xuất hiện trên màn hình
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    
    return () => {
      observer.disconnect();
      // Đảm bảo Header hiện lại khi unmount
      window.dispatchEvent(new CustomEvent('toggleHeader', { detail: { hide: false } }));
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (features && features.length > 0) {
      const total = features.length;
      const safeTotal = Math.max(total, 2);
      const distance = 0.5 / (safeTotal - 1);
      
      let newIndex = 0;
      for (let i = total - 1; i >= 0; i--) {
        const centerP = i / (safeTotal - 1);
        // Đổi ảnh ở ngưỡng sớm hơn: khi chữ chưa nhú lên (trước distance)
        if (latest >= centerP - distance * 1.5) {
          newIndex = i;
          break;
        }
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  });

  if (!features || features.length === 0) return null;

  return (
    <>
      {/* MOBILE: Vertical Layout */}
      <div className="block md:hidden relative w-full pt-10 pb-20 px-margin-mobile z-20">
        <div className="text-center px-4 w-full flex flex-col items-center justify-center mb-10 z-20">
          <h2 className="text-3xl font-display-md text-white font-bold tracking-tight">
            {lang === 'EN' ? 'Highlight Features' : 'Tính năng nổi bật'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] mx-auto mt-4 rounded-full opacity-50"></div>
        </div>

        <div className="flex flex-col gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-[95vw] aspect-[16/10] relative mb-6">
                {feature.image ? (
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover drop-shadow-2xl" />
                ) : (
                  <div className="w-full h-full bg-[#161618] flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-white/10">image</span>
                  </div>
                )}
              </div>
              <div className="text-center px-2">
                <h3 className="text-white font-title-md font-bold text-lg sm:text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 font-body-md text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP: Animated Scroll Version */}
      <div ref={wrapperRef} className="hidden md:block relative h-[800vh] w-full mt-32 z-20">
        
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center w-full overflow-hidden">
          
          {/* Tiêu đề nằm trên Macbook */}
          <div className="text-center px-4 w-full flex flex-col items-center justify-center mb-10 z-20">
            <h2 className="text-4xl lg:text-5xl font-display-md text-white font-bold tracking-tight">
              {lang === 'EN' ? 'Highlight Features' : 'Tính năng nổi bật'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] mx-auto mt-6 rounded-full opacity-50"></div>
          </div>

          <div className="relative w-[85vw] lg:w-[75vw] max-w-[1200px] aspect-[16/10] overflow-hidden flex flex-col justify-center items-center shrink-0">
            
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Ảnh nền */}
              <AnimatePresence>
                {features.map((feature, idx) => (
                  idx === activeIndex && (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 z-0 flex items-center justify-center"
                    >
                      {feature.image ? (
                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover scale-[1.02] drop-shadow-2xl opacity-100" />
                      ) : (
                        <div className="w-full h-full bg-[#161618] flex items-center justify-center">
                          <span className="material-symbols-outlined text-6xl text-white/10">image</span>
                        </div>
                      )}
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              {/* Khung giới hạn để Text chỉ xuất hiện TRONG lọt lòng màn hình của ảnh Macbook */}
              <div className="absolute top-[8%] left-[12%] w-[76%] h-[75%] z-20 pointer-events-none">
                {features.map((feature, idx) => (
                  <TextCard 
                    key={idx} 
                    feature={feature} 
                    index={idx} 
                    total={features.length} 
                    scrollYProgress={scrollYProgress} 
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

