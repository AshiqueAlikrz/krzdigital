import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  ttl: number;
  spin: number;
  white: boolean;
  ambient: boolean;
};

const MAX_SPARKS = 320;

// Draws a four-point star centred on the origin
const star = (ctx: CanvasRenderingContext2D, r: number) => {
  const inner = r * 0.22;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const radius = i % 2 === 0 ? r : inner;
    const angle = (i * Math.PI) / 4;
    ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
  }
  ctx.closePath();
  ctx.fill();
};

const Glitter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sparks: Spark[] = [];
    let frame = 0;
    let last: { x: number; y: number } | null = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.2 + 0.8;
      sparks.push({
        x: x + (Math.random() - 0.5) * 18,
        y: y + (Math.random() - 0.5) * 18,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.4,
        size: Math.random() * 4.5 + 1.5,
        life: 0,
        ttl: Math.random() * 22 + 18,
        spin: Math.random() * Math.PI,
        white: Math.random() < 0.3,
        ambient: false,
      });
      if (sparks.length > MAX_SPARKS) sparks.shift();
    };

    // Slow twinkles scattered across the page, independent of the pointer
    const spawnAmbient = () => {
      sparks.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.2 - 0.05,
        size: Math.random() * 3.5 + 1,
        life: 0,
        ttl: Math.random() * 140 + 120,
        spin: Math.random() * Math.PI,
        white: Math.random() < 0.4,
        ambient: true,
      });
      if (sparks.length > MAX_SPARKS) sparks.shift();
    };

    const onMove = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      if (spotRef.current) {
        spotRef.current.style.opacity = "1";
        spotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      // More sparks the faster the pointer travels
      const dist = last ? Math.hypot(x - last.x, y - last.y) : 0;
      const count = Math.min(8, 2 + Math.floor(dist / 8));
      for (let i = 0; i < count; i++) spawn(x, y);
      last = { x, y };
    };

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = "lighter";
      if (Math.random() < 0.22) spawnAmbient();

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++;
        if (s.life >= s.ttl) {
          sparks.splice(i, 1);
          continue;
        }
        s.x += s.vx;
        s.y += s.vy;
        if (!s.ambient) {
          s.vx *= 0.96;
          s.vy = s.vy * 0.96 + 0.03;
        }

        const t = s.life / s.ttl;
        // Ambient sparks fade in and out; pointer sparks fade out while twinkling
        const alpha = s.ambient
          ? Math.sin(t * Math.PI) * (0.5 + 0.3 * Math.sin(s.life * 0.12 + s.spin))
          : (1 - t) * (0.55 + 0.45 * Math.sin(s.life * 0.8 + s.spin));
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.spin + s.life * 0.02);
        ctx.globalAlpha = Math.max(alpha, 0);
        ctx.fillStyle = s.white ? "#ffffff" : "#06d6a0";
        ctx.shadowColor = "#06d6a0";
        ctx.shadowBlur = 10;
        star(ctx, s.ambient ? s.size : s.size * (1 - t * 0.5));
        ctx.restore();
      }

      frame = requestAnimationFrame(tick);
    };

    resize();
    frame = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={spotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 h-[32rem] w-[32rem] rounded-full opacity-0 transition-opacity duration-700"
        style={{
          background: "radial-gradient(circle, rgba(6,214,160,0.13) 0%, transparent 65%)",
          willChange: "transform",
        }}
      />
      <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 h-full w-full" />
    </>
  );
};

export default Glitter;
