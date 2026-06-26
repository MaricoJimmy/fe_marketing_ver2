"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, duration = 0.8, delay = 0, yOffset = 50, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

