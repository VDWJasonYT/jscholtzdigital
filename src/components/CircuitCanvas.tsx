import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../motion";

/** Crisp animated circuit grid. Pauses when the user prefers reduced motion. */
export default function CircuitCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let running = true;
    const packets = Array.from({ length: 18 }, (_, i) => ({
      axis: i % 2 === 0 ? "x" : "y",
      pos: Math.random(),
      speed: 0.0008 + (i % 5) * 0.00025,
      offset: Math.random(),
    }));

    const draw = (animate: boolean) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      if (w === 0 || h === 0) return;
      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const gap = 36;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(30, 128, 237, 0.22)";
      ctx.beginPath();
      for (let x = 0; x <= w; x += gap) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
      }
      for (let y = 0; y <= h; y += gap) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
      }
      ctx.stroke();

      ctx.fillStyle = "rgb(30, 128, 237)";
      for (let x = 0; x <= w; x += gap) {
        for (let y = 0; y <= h; y += gap) {
          if ((x / gap + y / gap) % 4 === 0) ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }

      if (animate) {
        ctx.fillStyle = "rgb(30, 128, 237)";
        for (const p of packets) {
          p.pos = (p.pos + p.speed) % 1;
          if (p.axis === "x") {
            const y = Math.floor(p.offset * (h / gap)) * gap + 0.5;
            ctx.fillRect(p.pos * w - 4, y - 1, 8, 2);
          } else {
            const x = Math.floor(p.offset * (w / gap)) * gap + 0.5;
            ctx.fillRect(x - 1, p.pos * h - 4, 2, 8);
          }
        }
      }
    };

    const resize = () => draw(!reduced);
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const tick = () => {
      if (!running) return;
      if (!reduced && !document.hidden) {
        frame += 1;
        if (frame % 2 === 0) draw(true);
      }
      requestAnimationFrame(tick);
    };
    if (!reduced) requestAnimationFrame(tick);

    return () => {
      running = false;
      ro.disconnect();
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
