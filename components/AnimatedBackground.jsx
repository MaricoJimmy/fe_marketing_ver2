"use client";
import { useEffect, useRef } from 'react';

export default function AnimatedBackground({ className, style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const beams = [
      { x: 0.12, angle: -0.35, speed: 0.0003,  width: 280, color: [74, 160, 240],  alpha: 0.18 },
      { x: 0.45, angle:  0.20, speed: 0.0002,  width: 200, color: [118, 192, 248], alpha: 0.13 },
      { x: 0.72, angle: -0.15, speed: 0.0004,  width: 160, color: [167, 139, 250], alpha: 0.12 },
      { x: 0.30, angle:  0.40, speed: 0.00025, width: 120, color: [74, 160, 240],  alpha: 0.10 },
      { x: 0.85, angle: -0.28, speed: 0.00035, width: 90,  color: [118, 192, 248], alpha: 0.08 },
    ];
    beams.forEach((b, i) => { b.phase = i * 1.3; });
    beams.forEach((b, i) => { b.phase = i * 1.3; });

    const draw = (t) => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Disable heavy drawing on mobile (<768px) to reduce lag
      if (window.innerWidth < 768) {
        animId = requestAnimationFrame(draw);
        return;
      }

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      beams.forEach((b) => {
        const swing = Math.sin(t * b.speed + b.phase) * 0.35;
        
        // Mouse interaction: slightly bend rays towards mouse
        const ox = b.x * W;
        const oy = 0;
        
        let targetAngle = b.angle + swing;
        if (mouseX > 0) {
          const dx = mouseX - ox;
          const dy = Math.max(mouseY - oy, 100);
          const angleToMouse = Math.atan2(dx, dy);
          // Interpolate beam angle towards mouse angle (max influence 25%)
          targetAngle = targetAngle * 0.75 + angleToMouse * 0.25;
        }
        
        const angle = targetAngle;
        const len = H * 1.4;
        const ex = ox + Math.sin(angle) * len;
        const ey = oy + Math.cos(angle) * len;
        const halfW = b.width / 2;
        const perpX = -Math.cos(angle);
        const perpY =  Math.sin(angle);
        const [r, g, bl] = b.color;

        // Wide soft bloom
        const grad = ctx.createLinearGradient(ox, oy, ex, ey);
        grad.addColorStop(0,   `rgba(${r},${g},${bl},${b.alpha * 0.9})`);
        grad.addColorStop(0.4, `rgba(${r},${g},${bl},${b.alpha * 0.5})`);
        grad.addColorStop(1,   `rgba(${r},${g},${bl},0)`);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ox + perpX * halfW,      oy + perpY * halfW);
        ctx.lineTo(ox - perpX * halfW,      oy - perpY * halfW);
        ctx.lineTo(ex - perpX * halfW * 3,  ey - perpY * halfW * 3);
        ctx.lineTo(ex + perpX * halfW * 3,  ey + perpY * halfW * 3);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();

        // Sharp core line
        const coreGrad = ctx.createLinearGradient(ox, oy, ex, ey);
        coreGrad.addColorStop(0,   `rgba(${r},${g},${bl},0.6)`);
        coreGrad.addColorStop(0.5, `rgba(${r},${g},${bl},0.2)`);
        coreGrad.addColorStop(1,   `rgba(${r},${g},${bl},0)`);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = coreGrad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className || "pointer-events-none fixed inset-0 w-full h-full"}
      style={style || { zIndex: 0 }}
    />
  );
}

