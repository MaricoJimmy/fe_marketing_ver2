"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-colors hover:bg-white/10">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-5 sm:p-6 text-left"
      >
        <h3 className="text-white font-title-lg text-[15px] sm:text-[16px] font-semibold pr-4">
          {question}
        </h3>
        <span 
          className="material-symbols-outlined text-[#22D3EE] transition-transform duration-300 flex-shrink-0"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          keyboard_arrow_down
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/70 font-body-md text-[14px] leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4 max-w-3xl mx-auto w-full">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.q}
          answer={faq.a}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;
