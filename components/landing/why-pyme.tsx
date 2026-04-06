import type { LucideIcon } from "lucide-react";
import { PiggyBank, Sparkles, Users, Zap } from "lucide-react";
import type { ReactNode } from "react";

const REASONS: {
  id: string;
  icon: LucideIcon;
  title: ReactNode;
}[] = [
  {
    id: "price",
    icon: PiggyBank,
    title:
      "Mucho más barato: tu inversión va a producto, no a capas de gestión innecesarias.",
  },
  {
    id: "speed",
    icon: Zap,
    title: (
      <>
        Trabajamos más rápido que una empresa de software tradicional{" "}
        <span className="text-[#7ec85a] drop-shadow-[0_0_12px_rgba(100,175,90,0.22)]">
          (son lentas, caras, y aburridas)
        </span>
        .
      </>
    ),
  },
  {
    id: "tech",
    icon: Users,
    title:
      "Somos jóvenes, y esa es nuestra ventaja, estamos más adelantados que el resto en tecnología.",
  },
];

export function WhyPyme() {
  return (
    <section
      className="relative bg-transparent px-3 pb-14 pt-4 sm:px-6 sm:pb-20 md:pb-28 lg:px-8"
      aria-labelledby="why-pyme-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-medium italic text-white/50 sm:text-base">
            Pero…
          </p>
          <h2
            id="why-pyme-heading"
            className="text-balance text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl md:leading-tight"
          >
            ¿Por qué crear tu app con una{" "}
            <span className="text-[#7ec85a] drop-shadow-[0_0_18px_rgba(100,175,90,0.22)]">
              pyme
            </span>{" "}
            como la nuestra?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base">
            Pagás menos porque nuestro modelo de trabajo combina un equipo reducido
            con las últimas tecnologías en IA: menos costos fijos, más velocidad y
            eficiencia en cada proyecto.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-2xl sm:mt-14">
          <div
            className="absolute bottom-12 left-[1.375rem] top-12 w-px bg-gradient-to-b from-[#7ec85a]/70 via-[#6763ff]/45 to-[#7ec85a]/25 sm:left-[1.75rem]"
            aria-hidden
          />
          <ul className="relative space-y-0">
            {REASONS.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className="relative flex gap-4 pb-12 last:pb-0 sm:gap-6"
                >
                  <div className="relative z-[1] flex shrink-0 flex-col items-center">
                    <div className="flex size-11 items-center justify-center rounded-full border border-[#7ec85a]/35 bg-[#0e0f14] shadow-[0_0_28px_-6px_rgba(100,175,90,0.3)] ring-2 ring-[#12131a] sm:size-14">
                      <Icon
                        className="size-[1.35rem] text-white sm:size-6"
                        strokeWidth={1.35}
                      />
                      {i === 2 && (
                        <Sparkles
                          className="absolute -right-1 -top-1 size-5 text-[#7ec85a] drop-shadow-[0_0_10px_rgba(100,175,90,0.4)]"
                          fill="currentColor"
                          strokeWidth={0}
                          aria-hidden
                        />
                      )}
                      {i === 1 && (
                        <span
                          className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 gap-0.5"
                          aria-hidden
                        >
                          {[0, 1, 2].map((j) => (
                            <span
                              key={j}
                              className="h-1 w-1 rounded-full bg-[#7ec85a]/90 shadow-[0_0_6px_rgba(100,175,90,0.42)]"
                            />
                          ))}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5 sm:pt-1.5">
                    <h3 className="text-pretty text-[0.9rem] font-bold leading-snug text-white [word-break:break-word] sm:text-lg">
                      {item.title}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
