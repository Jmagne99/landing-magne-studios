import Script from "next/script";

const BOOKING_IFRAME_SRC =
  "https://api.leadconnectorhq.com/widget/booking/F22A9CBdR5qcmndyb1kY";

/**
 * Calendario LeadConnector (GoHighLevel). Mantiene #agendar para CTAs con href="#agendar".
 */
export function BookingSection() {
  return (
    <section
      id="agendar"
      className="scroll-mt-[max(5.5rem,env(safe-area-inset-top,0px)+4rem)] bg-transparent px-3 py-10 pb-[max(7rem,env(safe-area-inset-bottom,0px)+4.5rem)] sm:scroll-mt-28 sm:px-4 sm:py-16 md:py-20"
      aria-labelledby="agendar-heading"
    >
      <h2
        id="agendar-heading"
        className="mb-4 text-center text-xl font-bold tracking-tight text-white sm:mb-5 sm:text-2xl"
      >
        Agendá tu reunión
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-balance text-center text-[0.8125rem] italic leading-relaxed text-white/70 sm:mb-10 sm:max-w-2xl sm:text-sm md:text-[0.9375rem]">
        Por capacidad del equipo, abrimos solo 6 proyectos nuevos por mes. Si tu
        idea tiene fecha, conviene que hablemos ya.
      </p>
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12131a]/40 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04]">
        <iframe
          src={BOOKING_IFRAME_SRC}
          title="Calendario — Magne Studios"
          scrolling="no"
          id="F22A9CBdR5qcmndyb1kY_1775186026647"
          className="block min-h-[min(88svh,720px)] w-full min-w-0 border-0 sm:min-h-[650px]"
          allow="clipboard-read; clipboard-write; fullscreen"
        />
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
