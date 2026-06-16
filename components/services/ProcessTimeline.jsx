"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ProcessTimeline = ({ tPrefix = 'dt' }) => {
  const { t } = useLanguage();

  const steps = [
    {
      id: '01',
      icon: 'search',
      title: t(`${tPrefix}.process.s1.title`),
      desc: t(`${tPrefix}.process.s1.desc`),
    },
    {
      id: '02',
      icon: 'design_services',
      title: t(`${tPrefix}.process.s2.title`),
      desc: t(`${tPrefix}.process.s2.desc`),
    },
    {
      id: '03',
      icon: 'code',
      title: t(`${tPrefix}.process.s3.title`),
      desc: t(`${tPrefix}.process.s3.desc`),
    },
    {
      id: '04',
      icon: 'bug_report',
      title: t(`${tPrefix}.process.s4.title`),
      desc: t(`${tPrefix}.process.s4.desc`),
    }
  ];

  return (
    <div className="relative py-12">
      {/* Background Line */}
      <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2" />
      
      <div className="space-y-12">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Center Node */}
              <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#06101F] border-2 border-[#22D3EE] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  <span className="material-symbols-outlined text-[#22D3EE] text-[20px]">{step.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-16 ${isEven ? 'md:pl-12 lg:pl-16 text-left' : 'md:pl-0 md:pr-12 lg:pr-16 text-left md:text-right'}`}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="text-[#22D3EE] font-display-md text-[16px] mb-2">{step.id}</div>
                  <h3 className="text-white font-title-lg text-[20px] font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 font-body-md text-[15px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
