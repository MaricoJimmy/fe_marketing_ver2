"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HoverFillButton({ children, className, rippleColor = 'bg-[#1F40AF]', onClick }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const updatePos = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (e) => {
    updatePos(e);
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    updatePos(e);
    setIsHovered(false);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group ${className}`}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white w-full h-full flex items-center justify-center gap-2">
        {children}
      </span>
      <motion.span
        className={`absolute rounded-full pointer-events-none z-0 ${rippleColor}`}
        style={{ left: pos.x - 10, top: pos.y - 10, width: 20, height: 20 }}
        animate={{ scale: isHovered ? 40 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </button>
  );
}

