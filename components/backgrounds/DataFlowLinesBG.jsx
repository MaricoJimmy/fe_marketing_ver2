"use client";
import React, { useEffect, useRef } from 'react';

export default function DataFlowLinesBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const waves = [
      { yOffset: 0.5, amplitude: 60, frequency: 0.002, speed: 0.001, color: 'rgba(34, 211, 238, 0.5)' }, // Electric cyan
      { yOffset: 0.5, amplitude: 100, frequency: 0.0015, speed: 0.0015, color: 'rgba(16, 240, 203, 0.2)' }, // Sustain teal
      { yOffset: 0.5, amplitude: 40, frequency: 0.003, speed: 0.0008, color: 'rgba(31, 64, 175, 0.5)' }, // Deep blue
      { yOffset: 0.5, amplitude: 70, frequency: 0.0025, speed: 0.0012, color: 'rgba(34, 211, 238, 0.3)' },
    ];

    let time = 0;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      time += 1;
      
      // Disable heavy drawing on mobile (<768px) to reduce lag
      if (window.innerWidth < 768) {
        animId = requestAnimationFrame(draw);
        return;
      }
      
      // Smooth mouse tracking
      mouseX += (targetMouseX - mouseX) * 0.1;

      waves.forEach((wave, idx) => {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 10) {
          
          let currentAmp = wave.amplitude;
          
          // Mouse interaction (water ripple effect)
          if (mouseX > 0) {
            const distToMouse = Math.abs(x - mouseX);
            if (distToMouse < 400) {
              const effect = (400 - distToMouse) / 400;
              // Increase amplitude near mouse, offset by mouseY
              currentAmp += effect * 250 * (1 + (mouseY / H));
            }
          }

          const y = H * wave.yOffset + Math.sin(x * wave.frequency + time * wave.speed + (idx * 0.5)) * currentAmp;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2.5;
        
        // Removed expensive shadowBlur
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 w-full h-full opacity-60"
      style={{ 
        zIndex: 0,
        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
      }}
    />
  );
}

