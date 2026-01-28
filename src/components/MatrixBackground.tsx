"use client";

import React, { useEffect, useRef } from "react";

const MatrixBackground = () => {
     const canvasRef = useRef<HTMLCanvasElement>(null);

     useEffect(() => {
          const canvas = canvasRef.current;
          if (!canvas) return;

          const ctx = canvas.getContext("2d");
          if (!ctx) return;

          let width = (canvas.width = window.innerWidth);
          let height = (canvas.height = window.innerHeight);

          const columns = Math.floor(width / 20);
          const drops: number[] = new Array(columns).fill(1);

          // Katakana characters + numbers
          const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789";

          const draw = () => {
               ctx.fillStyle = "rgba(2, 6, 23, 0.05)"; // Fade effect
               ctx.fillRect(0, 0, width, height);

               ctx.fillStyle = "#0f0"; // Green text
               ctx.font = "15px monospace";

               for (let i = 0; i < drops.length; i++) {
                    const text = chars[Math.floor(Math.random() * chars.length)];
                    // Randomly vary color slightly for depth
                    const isWhite = Math.random() > 0.975;
                    ctx.fillStyle = isWhite ? "#fff" : "#10b981"; // Emerald-500

                    ctx.fillText(text, i * 20, drops[i] * 20);

                    if (drops[i] * 20 > height && Math.random() > 0.975) {
                         drops[i] = 0;
                    }

                    drops[i]++;
               }
          };

          const interval = setInterval(draw, 50);

          const handleResize = () => {
               width = canvas.width = window.innerWidth;
               height = canvas.height = window.innerHeight;
          };

          window.addEventListener("resize", handleResize);

          return () => {
               clearInterval(interval);
               window.removeEventListener("resize", handleResize);
          };
     }, []);

     return (
          <canvas
               ref={canvasRef}
               className="fixed inset-0 z-0 pointer-events-none opacity-20"
               style={{ mixBlendMode: "screen" }}
          />
     );
};

export default MatrixBackground;
