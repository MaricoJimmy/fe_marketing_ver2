"use client";
import React, { useEffect, useRef } from 'react';

export default function DynamicNodesBG() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const ringsRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let animId;

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates from -1 to 1 based on center of screen
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateParallax = () => {
      // Disable parallax tracking on mobile (<768px) to reduce lag
      if (window.innerWidth < 768) {
        animId = requestAnimationFrame(updateParallax);
        return;
      }

      // Smooth interpolation
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      if (ringsRef.current) {
        // Move rings slightly opposite to mouse (gives depth)
        ringsRef.current.style.transform = `translate(${mouseX * -60}px, ${mouseY * -60}px)`;
      }
      
      if (bgRef.current) {
        // Move dotted background more (further away)
        bgRef.current.style.transform = `translate(${mouseX * -120}px, ${mouseY * -120}px)`;
      }

      animId = requestAnimationFrame(updateParallax);
    };

    animId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div ref={containerRef} className="hidden md:flex pointer-events-none fixed inset-0 w-full h-full overflow-hidden items-center justify-center opacity-80" style={{ zIndex: 0 }}>
      <style>{`
        @keyframes sonar-pulse {
          0% { transform: scale(0.2); opacity: 0.8; border-width: 2px; }
          100% { transform: scale(3.5); opacity: 0; border-width: 1px; }
        }
        .sonar-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(34, 211, 238, 0.6); /* Electric cyan */
          box-shadow: 0 0 40px rgba(34, 211, 238, 0.15) inset;
          animation: sonar-pulse 6s cubic-bezier(0.1, 0.5, 0.9, 0.1) infinite;
        }
      `}</style>
      
      {/* Subtle dotted background to give it depth */}
      <div 
           ref={bgRef}
           className="absolute inset-[-100px] opacity-[0.03]" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', 
             backgroundSize: '30px 30px',
             maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
             WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
           }} 
      />

      <div ref={ringsRef} className="relative flex items-center justify-center">
        {/* Central glowing node - Made much more subtle */}
        <div className="absolute z-10 w-3 h-3 bg-[#22D3EE]/40 rounded-full shadow-[0_0_20px_2px_rgba(34,211,238,0.5)]"></div>
        
        {/* Concentric pulsing rings */}
        <div className="sonar-ring w-[300px] h-[300px]" style={{ animationDelay: '0s' }}></div>
        <div className="sonar-ring w-[300px] h-[300px]" style={{ animationDelay: '2s' }}></div>
        <div className="sonar-ring w-[300px] h-[300px]" style={{ animationDelay: '4s' }}></div>
      </div>

    </div>
  );
}

