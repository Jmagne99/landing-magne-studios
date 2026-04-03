import Script from "next/script";

import { Hero } from "@/components/landing/hero";
import { ProcessSteps } from "@/components/landing/process-steps";
import { WhyMicroPyme } from "@/components/landing/why-micro-pyme";
import { magneLandingBg } from "@/lib/magne-landing-bg";

export default function Home() {
  return (
    <main
      className="relative min-h-0 w-full min-w-0 flex-1 overflow-x-hidden"
      style={magneLandingBg}
    >
      <Hero />
      <ProcessSteps />
      <WhyMicroPyme />
      <section
        id="agendar"
        className="scroll-mt-[max(5.5rem,env(safe-area-inset-top,0px)+4rem)] bg-transparent px-3 py-10 pb-[max(7rem,env(safe-area-inset-bottom,0px)+4.5rem)] sm:scroll-mt-28 sm:px-4 sm:py-16 md:py-20"
        aria-labelledby="agendar-heading"
      >
        <h2
          id="agendar-heading"
          className="mb-8 text-center text-xl font-bold tracking-tight text-white sm:mb-10 sm:text-2xl"
        >
          Agendá tu reunión
        </h2>
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12131a]/40 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/F22A9CBdR5qcmndyb1kY"
            title="Calendario — Magne Studios"
            scrolling="no"
            id="F22A9CBdR5qcmndyb1kY_1775186026647"
            className="block min-h-[min(88svh,720px)] w-full min-w-0 border-0 sm:min-h-[650px]"
          />
        </div>
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </section>
    </main>
  );
}
