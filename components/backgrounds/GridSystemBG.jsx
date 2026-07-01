"use client";
import React, { useEffect, useRef } from 'react';

export default function GridSystemBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    let W, H;
    const cellSize = 80;
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      W = canvas.width;
      H = canvas.height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Active cells that are fading in/out
    const activeCells = [];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      
      // Disable heavy drawing on mobile (<768px) to reduce lag
      if (window.innerWidth < 768) {
        animId = requestAnimationFrame(draw);
        return;
      }
      
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      // Randomly spawn a new active cell
      if (Math.random() < 0.12) {
        activeCells.push({
          col: Math.floor(Math.random() * (W / cellSize)),
          row: Math.floor(Math.random() * (H / cellSize)),
          life: 0,
          maxLife: 60 + Math.random() * 80
        });
      }

      // Draw static grid lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; // Much more visible
      ctx.lineWidth = 1;
      
      for (let x = 0; x <= W; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
      }
      for (let y = 0; y <= H; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
      }
      ctx.stroke();

      // Draw active (highlighted) cells
      for (let i = activeCells.length - 1; i >= 0; i--) {
        const cell = activeCells[i];
        cell.life++;
        
        let opacity = 0;
        // Fade in and fade out logic
        if (cell.life < cell.maxLife / 2) {
          opacity = (cell.life / (cell.maxLife / 2)) * 0.8;
        } else {
          opacity = (1 - (cell.life - cell.maxLife / 2) / (cell.maxLife / 2)) * 0.8;
        }

        ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`; // Electric Cyan
        ctx.fillRect(cell.col * cellSize, cell.row * cellSize, cellSize, cellSize);

        // Remove dead cells
        if (cell.life >= cell.maxLife) {
          activeCells.splice(i, 1);
        }
      }

      // Apply Flashlight (Spotlight) mask
      ctx.globalCompositeOperation = 'destination-in';
      const mask = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 800);
      mask.addColorStop(0, 'rgba(0,0,0,1)');
      mask.addColorStop(0.4, 'rgba(0,0,0,0.8)');
      mask.addColorStop(1, 'rgba(0,0,0,0.15)'); // Don't fade out completely
      ctx.fillStyle = mask;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';

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
      className="pointer-events-none fixed inset-0 w-full h-full opacity-80"
      style={{ zIndex: 0 }}
    />
  );
}

