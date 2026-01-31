"use client";

import { useEffect, useRef } from "react";

export default function LavaLamp() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    let t = 0;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const blobs = Array.from({ length: 7 }).map(() => ({
      x: Math.random() * width,
      y: height / 2 + (Math.random() - 0.5) * 30,
      r: 32 + Math.random() * 18,
      vx: 0.15 + Math.random() * 0.25,
      vy: 0,
    }));

    const GREEN = [80, 255, 160];

    function render() {
      t += 0.01;

      ctx.clearRect(0, 0, width, height);

      const image = ctx.createImageData(width, height);
      const data = image.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let field = 0;

          for (const b of blobs) {
            const dx = x - b.x;
            const dy = y - b.y;
            field += (b.r * b.r) / (dx * dx + dy * dy + 1);
          }

          if (field > 1.15) {
            const idx = (y * width + x) * 4;
            data[idx] = GREEN[0];
            data[idx + 1] = GREEN[1];
            data[idx + 2] = GREEN[2];
            data[idx + 3] = Math.min(255, field * 110);
          }
        }
      }

      ctx.putImageData(image, 0, 0);

      // physics update
      for (const b of blobs) {
        const dx = b.x - mouse.current.x;
        const dy = b.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const force = (120 - dist) * 0.002;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
          b.r += force * 12; // heat expansion
        }

        // subtle baseline heat source
        const heat = 0.0006;

        // gentle horizontal convection
        b.vx += Math.sin(t + b.y * 0.02) * heat;

        // slow vertical circulation (lava roll)
        b.vy += Math.cos(t * 0.7 + b.x * 0.01) * heat * 0.6;

        // very slight radius breathing
        b.r += Math.sin(t + b.x * 0.05) * 0.03;


        b.x += b.vx;
        b.y += b.vy;

        // viscosity
        b.vx *= 0.985;
        b.vy *= 0.985;
        b.r *= 0.998;

        // soft horizontal bounds
        const margin = 60;

        if (b.x < margin) {
        const pull = (margin - b.x) * 0.0008;
        b.vx += pull;
        }

        if (b.x > width - margin) {
        const pull = (b.x - (width - margin)) * 0.0008;
        b.vx -= pull;
        }


        // vertical equilibrium
        b.y += (height / 2 - b.y) * 0.01;
      }

      requestAnimationFrame(render);
    }

    render();

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-28"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mouse.current.x = e.clientX - rect.left;
              mouse.current.y = e.clientY - rect.top;
            }}
            onMouseLeave={() => {
              mouse.current.x = -9999;
              mouse.current.y = -9999;
            }}
          />
        </div>
  );
}