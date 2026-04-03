import {
  CircleDollarSign,
  Cog,
  FileCheck2,
  Layers,
  MousePointer2,
  Rocket,
  Sparkles,
  UserRound,
  X,
  Zap,
} from "lucide-react";

import { ScheduleButton } from "@/components/landing/schedule-button";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    label: "Paso 1",
    title: "Comenzamos a trabajar juntos",
    rotation: "md:-rotate-[2.5deg]",
    delay: "0s",
    visual: "scope" as const,
  },
  {
    label: "Paso 2",
    title: "Desarrollo en ~30 días",
    rotation: "",
    delay: "0.4s",
    visual: "build" as const,
  },
  {
    label: "Paso 3",
    title: "Pruebas y lanzamiento",
    rotation: "md:rotate-[2.5deg]",
    delay: "0.8s",
    visual: "value" as const,
  },
];

function StepVisual({ type }: { type: "scope" | "build" | "value" }) {
  if (type === "scope") {
    return (
      <div className="relative flex h-[120px] w-full items-center justify-center sm:h-[140px]">
        <div
          className="animate-magne-glow-pulse absolute inset-8 rounded-full bg-[#6763ff]/25 blur-3xl"
          aria-hidden
        />
        <div className="relative flex items-end gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "relative flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-[#1a1b24] shadow-lg transition-transform",
                i === 1 &&
                  "z-10 scale-110 border-[#9bff00]/40 shadow-[0_0_32px_-4px_rgba(155,255,0,0.55)]"
              )}
            >
              <UserRound
                className={cn(
                  "size-7",
                  i === 1 ? "text-[#9bff00]" : "text-white/25"
                )}
                strokeWidth={1.5}
              />
              {i === 1 && (
                <MousePointer2 className="absolute -right-1 -bottom-0 size-5 text-white drop-shadow-md" />
              )}
            </div>
          ))}
        </div>
        <FileCheck2
          className="absolute right-4 top-2 size-9 text-[#6763ff] opacity-90 drop-shadow-[0_0_12px_rgba(103,99,255,0.6)]"
          strokeWidth={1.25}
        />
      </div>
    );
  }

  if (type === "build") {
    return (
      <div className="relative flex h-[120px] w-full items-center justify-center sm:h-[140px]">
        <div
          className="animate-magne-glow-pulse absolute inset-6 rounded-full bg-[#9bff00]/20 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <Layers
              className="size-16 text-[#6763ff] drop-shadow-[0_0_24px_rgba(103,99,255,0.7)]"
              strokeWidth={1.2}
            />
            <Zap
              className="absolute size-9 text-[#9bff00] drop-shadow-[0_0_20px_rgba(155,255,0,0.9)]"
              fill="currentColor"
              strokeWidth={0}
            />
          </div>
          <div className="mt-2 flex justify-center gap-1">
            <Sparkles className="size-4 text-[#9bff00]/80" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              ~30 días
            </span>
            <Sparkles className="size-4 text-[#6763ff]/80" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-[120px] w-full items-center justify-center sm:h-[140px]">
      <div
        className="animate-magne-glow-pulse absolute inset-6 rounded-full bg-[#6763ff]/30 blur-3xl"
        aria-hidden
      />
      <div className="relative flex items-center gap-3">
        <div className="relative">
          <Cog
            className="size-[4.5rem] text-[#9bff00] drop-shadow-[0_0_28px_rgba(155,255,0,0.55)]"
            strokeWidth={1.1}
          />
          <CircleDollarSign
            className="absolute inset-0 m-auto size-10 text-[#6763ff] drop-shadow-[0_0_16px_rgba(103,99,255,0.8)]"
            strokeWidth={1.25}
          />
        </div>
        <Rocket
          className="size-12 text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          strokeWidth={1.2}
        />
      </div>
    </div>
  );
}

export function ProcessSteps() {
  return (
    <div className="relative bg-transparent pt-8 pb-14 sm:pt-10 sm:pb-20 md:pt-12 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex flex-col items-center sm:mb-8 md:mb-10">
            <ScheduleButton />
          </div>
          <h2 className="mx-auto flex w-full max-w-2xl flex-col items-stretch gap-2 text-balance text-center text-lg font-bold leading-snug tracking-tight text-white sm:gap-2.5 sm:text-xl md:max-w-3xl md:text-2xl md:leading-snug">
            <span className="block w-full">
              Así es como Magne Studios
            </span>
            <span className="block w-full">
              construye tu app en tres pasos.
            </span>
            <span className="mt-1 block w-full text-balance text-lg font-extrabold uppercase leading-tight tracking-tight text-[#9bff00] drop-shadow-[0_0_20px_rgba(155,255,0,0.3)] [word-break:break-word] sm:mt-1.5 sm:text-3xl md:text-4xl">
              Hasta un 75% menos que una empresa grande.
            </span>
          </h2>
        </div>

        <div className="mt-10 grid max-w-lg gap-8 max-md:mx-auto md:mt-14 md:max-w-none md:grid-cols-3 md:gap-6 lg:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.label}
              className={cn(
                "[perspective:1200px] group relative transition-transform duration-500 hover:z-10 hover:scale-[1.02]",
                step.rotation
              )}
            >
              <div
                className="animate-magne-card-float rounded-2xl p-[1px] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.85)] transition-[transform] duration-500 group-hover:-translate-y-1"
                style={{ animationDelay: step.delay }}
              >
                <div className="rounded-2xl bg-gradient-to-br from-[#6763ff]/45 via-white/[0.12] to-[#9bff00]/35 p-[1px]">
                <div className="relative overflow-hidden rounded-2xl bg-[#12131a]/95 backdrop-blur-xl">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)",
                      backgroundSize: "200% 200%",
                    }}
                  />
                  <div className="relative flex items-start justify-between border-b border-white/[0.06] px-3 py-2.5 sm:px-4 sm:py-3">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#6763ff]/80">
                      {step.label}
                    </span>
                    <button
                      type="button"
                      className="rounded-md p-0.5 text-white/25 transition-colors hover:bg-white/5 hover:text-white/50"
                      aria-label="Cerrar"
                    >
                      <X className="size-4" strokeWidth={1.5} />
                    </button>
                  </div>
                  <div className="px-3 pb-2 pt-1 sm:px-4">
                    <h3 className="text-[13px] font-semibold leading-snug text-white sm:text-sm">
                      {step.title}
                    </h3>
                  </div>
                  <div className="border-t border-white/[0.04] px-2 pb-4 sm:px-2 sm:pb-5">
                    <StepVisual type={step.visual} />
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
