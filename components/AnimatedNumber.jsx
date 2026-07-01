"use client";
import React, { useState, useEffect } from 'react';

export default function AnimatedNumber({ value, isVisible, duration = 2000 }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrentValue(0);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo for a fast start and slow, smooth ending
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCurrentValue(Math.floor(easeProgress * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentValue(value);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return <span>{currentValue}</span>;
}

