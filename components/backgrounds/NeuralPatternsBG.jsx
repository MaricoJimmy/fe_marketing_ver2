"use client";
import React, { useEffect, useRef } from 'react';

export default function NeuralPatternsBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const numNodes = 40; // Reduced from 70 to 40 for better performance
    const nodes = [];
    for(let i=0; i<numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5
      });
    }

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Disable heavy drawing on mobile (<768px) to reduce lag
      if (window.innerWidth < 768) {
        animId = requestAnimationFrame(draw);
        return;
      }

      // Update positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off walls smoothly
        if (node.x < 0 || node.x > W) node.vx *= -1;
        if (node.y < 0 || node.y > H) node.vy *= -1;

        // Mouse interaction (repulsion)
        if (mouseX > 0) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          // Quick bounding box check before expensive sqrt
          if (Math.abs(dx) < 200 && Math.abs(dy) < 200) {
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 200) {
              const force = (200 - dist) / 200;
              node.x -= (dx / dist) * force * 2.5;
              node.y -= (dy / dist) * force * 2.5;
            }
          }
        }
      });

      // Draw connections
      const connectDist = 140; // Reduced from 180 to 140
      ctx.lineWidth = 1;

      for (let i = 0; i < numNodes; i++) {
        // Connect to other nodes
        for (let j = i + 1; j < numNodes; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          
          // Fast fail box check
          if (Math.abs(dx) < connectDist && Math.abs(dy) < connectDist) {
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < connectDist) {
              const opacity = 1 - (dist / connectDist);
              if (opacity > 0.05) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.4})`; // Electric Cyan
                ctx.stroke();
              }
            }
          }
        }
        
        // Connect to mouse
        if (mouseX > 0) {
          const dxMouse = nodes[i].x - mouseX;
          const dyMouse = nodes[i].y - mouseY;
          
          if (Math.abs(dxMouse) < 250 && Math.abs(dyMouse) < 250) {
            const distMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
            if (distMouse < 250) {
              const opacity = 1 - (distMouse / 250);
              if (opacity > 0.05) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(mouseX, mouseY);
                ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.8})`; 
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#22D3EE';
        ctx.fill();
        
        // Add subtle glow to node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, 0.15)`;
        ctx.fill();
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
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
      }}
    />
  );
}
