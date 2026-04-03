import { cn } from "@/lib/utils";

type ScheduleButtonProps = {
  href?: string;
  className?: string;
  variant?: "hero-bar" | "section";
};

export function ScheduleButton({
  href = "#agendar",
  className,
  variant = "section",
}: ScheduleButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex touch-manipulation items-center justify-center rounded-full border border-transparent text-[#14161f] transition-all outline-none",
        "bg-[#9bff00] font-bold uppercase tracking-[0.12em] shadow-[0_0_28px_rgba(155,255,0,0.45),0_8px_24px_-8px_rgba(0,0,0,0.35)]",
        "hover:bg-[#8aed00] hover:shadow-[0_0_38px_rgba(155,255,0,0.55)] active:scale-[0.98]",
        "focus-visible:ring-2 focus-visible:ring-[#9bff00]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d12]",
        variant === "section" &&
          "animate-magne-float-cta min-h-[48px] w-full max-w-[min(100%,320px)] text-[11px] sm:min-h-[52px] sm:max-w-[340px] sm:text-xs sm:tracking-wider md:min-h-[56px] md:max-w-[380px] md:px-12 md:text-[13px]",
        variant === "section" && "px-8 sm:px-10",
        variant === "hero-bar" &&
          "h-12 min-h-[48px] w-full shrink-0 px-6 text-[11px] tracking-wider sm:w-auto sm:px-10 sm:text-xs",
        className
      )}
    >
      Quiero agendar
    </a>
  );
}
