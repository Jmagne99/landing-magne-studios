import { BookingSection } from "@/components/landing/booking-section";
import { Hero } from "@/components/landing/hero";
import { ProcessSteps } from "@/components/landing/process-steps";
import { WhyPyme } from "@/components/landing/why-pyme";
import { magneLandingBg } from "@/lib/magne-landing-bg";

export default function Home() {
  return (
    <main
      className="relative min-h-0 w-full min-w-0 flex-1 overflow-x-hidden"
      style={magneLandingBg}
    >
      <Hero />
      <ProcessSteps />
      <WhyPyme />
      <BookingSection />
    </main>
  );
}
