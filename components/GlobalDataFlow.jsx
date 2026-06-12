"use client";
import React, { useEffect, useState } from 'react';

export default function GlobalDataFlow() {
  const [streams, setStreams] = useState([]);
  const streamCount = 12;

  useEffect(() => {
    const generatedStreams = Array.from({ length: streamCount }).map((_, i) => {
      const delay = Math.random() * -10;
      const duration = 6 + Math.random() * 8;
      const xPos = Math.random() * 5 - 2.5;
      const left = `${(i / streamCount) * 100}%`;
      const opacity = 0.1 + Math.random() * 0.2;
      
      const nodes = Array.from({ length: 3 }).map((_, j) => ({
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      }));

      return { delay, duration, xPos, left, opacity, nodes };
    });
    setStreams(generatedStreams);
  }, []);

  return (
    <div className="flow-container" id="global-data-flow">
      {streams.map((stream, i) => (
        <div 
          key={i} 
          className="vertical-flow-stream"
          style={{
            animation: `waving-vertical ${stream.duration}s ease-in-out ${stream.delay}s infinite`,
            left: stream.left,
            transform: `rotate(${stream.xPos}deg)`,
            opacity: stream.opacity
          }}
        >
          {stream.nodes.map((node, j) => (
            <div 
              key={j}
              className="absolute w-1 h-1 rounded-full bg-sustainability-green blur-[2px] animate-pulse"
              style={{
                top: node.top,
                left: '-1px',
                animationDelay: node.animationDelay
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

