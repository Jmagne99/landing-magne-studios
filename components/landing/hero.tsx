"use client";

import { useEffect, useState } from "react";

import { ScheduleButton } from "@/components/landing/schedule-button";
import { cn } from "@/lib/utils";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function Hero() {
  const [floatingCtaVisible, setFloatingCtaVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const ctaFloat = clamp(-scrollY * 0.06, -32, 32);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("agendar");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setFloatingCtaVisible(!entry.isIntersecting);
      },
      { threshold: [0, 0.06, 0.12] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-x-clip overflow-y-visible bg-transparent pb-8 pt-0 sm:overflow-x-visible sm:pb-12 md:pb-14">
      <div className="mx-auto max-w-4xl px-3 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <div
          className={cn(
            "rounded-xl border border-white/[0.1] bg-[#12131a]/95 px-4 py-2.5 text-center shadow-[0_12px_48px_-24px_rgba(0,0,0,0.75)] backdrop-blur-md sm:rounded-2xl sm:px-5 sm:py-3",
            "ring-1 ring-white/[0.04]"
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-[11px] sm:tracking-[0.22em]">
            Magne Studios
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full min-w-0 max-w-5xl flex-col items-center px-3 pb-[max(11rem,calc(env(safe-area-inset-bottom,0px)+10rem))] pt-8 sm:px-6 sm:pb-8 sm:pt-10 md:pb-10 lg:px-8">
        <h1 className="mx-auto flex w-full max-w-4xl flex-col items-center gap-1.5 px-2 text-center sm:gap-2 sm:px-4 md:gap-2.5">
          <span className="block max-w-full break-words font-extrabold uppercase leading-none tracking-tight text-[#9bff00] drop-shadow-[0_0_20px_rgba(155,255,0,0.35)] text-[clamp(1.15rem,4vw,1.875rem)] sm:text-3xl">
            EN 30 DÍAS
          </span>
          <span className="block max-w-full text-balance break-words font-bold uppercase leading-snug tracking-tight text-white text-[clamp(0.9375rem,3.5vw,1.625rem)] sm:text-xl md:text-2xl">
            Tené lista tu aplicación o automatización
          </span>
        </h1>
        <p
          className="mt-4 max-w-[min(100%,24rem)] text-balance text-center text-[0.9375rem] font-extrabold uppercase leading-snug tracking-tight text-[#9bff00] drop-shadow-[0_0_24px_rgba(155,255,0,0.35)] [word-break:break-word] sm:mt-5 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-xl md:leading-snug lg:text-2xl lg:leading-snug"
        >
          Pagando un 75% menos que si contrataras una empresa grande.
        </p>
      </div>

      <div
        className={cn(
          "pointer-events-none fixed bottom-0 left-0 right-0 z-40 flex justify-center px-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 transition-[transform,opacity] duration-300 ease-out sm:px-4 sm:pb-5 md:pb-6",
          floatingCtaVisible
            ? "opacity-100"
            : "pointer-events-none translate-y-[calc(100%+0.75rem)] opacity-0"
        )}
        style={
          floatingCtaVisible
            ? { transform: `translate3d(0, ${ctaFloat}px, 0)` }
            : undefined
        }
      >
        <div
          className={cn(
            "pointer-events-auto flex w-full max-w-4xl flex-col gap-3 rounded-2xl border border-white/[0.1] p-3 shadow-[0_-12px_48px_-24px_rgba(0,0,0,0.65),0_0_40px_-20px_rgba(103,99,255,0.15)] backdrop-blur-md sm:gap-5 sm:rounded-3xl sm:p-5 md:flex-row md:items-center md:justify-between md:gap-8 md:p-7",
            "bg-[#12131a]/95 ring-1 ring-white/[0.05]",
            floatingCtaVisible && "animate-magne-float-cta",
            !floatingCtaVisible && "pointer-events-none"
          )}
        >
          <p className="text-center text-[13px] leading-snug text-white/90 sm:text-sm md:text-left md:text-[0.9375rem] md:leading-relaxed">
            Click en este botón para tener una videollamada de asesoramiento con
            nosotros
          </p>
          <ScheduleButton variant="hero-bar" />
        </div>
      </div>
    </section>
  );
}
