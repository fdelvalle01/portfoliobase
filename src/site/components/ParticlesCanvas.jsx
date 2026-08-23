import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * 160 puntos derivando hacia la derecha — equivalente al config de
 * react-tsparticles del sitio anterior, sin la dependencia.
 */
export default function ParticlesCanvas() {
  const canvasRef = useRef(null);
  const themeRef = useRef("dark");
  const { theme } = useTheme();

  themeRef.current = theme;

  useEffect(() => {
    // Quien pide menos movimiento no recibe la animación de partículas.
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    let ctx = null;
    try {
      ctx = canvas.getContext("2d");
    } catch (e) {
      ctx = null;
    }
    if (!ctx) return undefined;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let raf = null;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const points = [];
    for (let i = 0; i < 160; i += 1) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.4,
        o: Math.random() * 0.5 + 0.15,
        s: Math.random() * 0.18 + 0.04,
      });
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      const col = themeRef.current === "light" ? "109,40,217" : "199,112,240";
      for (const p of points) {
        p.x += p.s;
        if (p.x > width + 2) {
          p.x = -2;
          p.y = Math.random() * height;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.2832);
        ctx.fillStyle = `rgba(${col},${p.o})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />;
}
