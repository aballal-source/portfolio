"use client";

import React, { useCallback, useRef, useState } from "react";
import LavaLamp from "./LavaLamp";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMouse({ x, y });
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <LavaLamp />
      {/* Cursor-reactive gradient mesh (behind text) */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at ${20 + mouse.x * 60}% ${30 + mouse.y * 40}%,
              rgba(74, 222, 128, 0.08),
              transparent 50%
            ),
            radial-gradient(
              ellipse 60% 80% at ${70 + (1 - mouse.x) * 20}% ${60 + (1 - mouse.y) * 30}%,
              rgba(120, 113, 108, 0.06),
              transparent 45%
            ),
            radial-gradient(
              ellipse 70% 40% at ${mouse.x * 100}% ${mouse.y * 100}%,
              rgba(41, 37, 36, 0.4),
              transparent 40%
            ),
            linear-gradient(to bottom, rgb(0,0,0), rgb(15,15,15))
          `,
          transition: "background 0.15s ease-out",
        }}
      />

      {/* Centered content — very little text */}
      <div className="text-center relative z-0">
        <h1 className="text-4xl md:text-5xl font-display text-green-400 tracking-wide cursor-default">
          Ahmed Ballal
        </h1>
        <p className="text-lg md:text-xl text-stone-300 mt-2 tracking-tight cursor-default">
          Software Engineer
        </p>
        <p className="text-sm text-stone-500 lowercase mt-4 tracking-wide cursor-default">
          shipping calm, usable software
        </p>
      </div>
    </section>
    
  );
}
