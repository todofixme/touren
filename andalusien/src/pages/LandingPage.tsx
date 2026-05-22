import HeroSection from "@/components/sections/HeroSection";
import CTAGrid from "@/components/sections/CTAGrid";

export default function LandingPage() {
  return (
    <>
      <title>Andalusien 2026 – Rennradtour</title>
      <meta
        name="description"
        content="Informationswebsite für Teilnehmer der einwöchigen Rennradtour durch Andalusien 2026. GPX-Tracks, Hotels und alle wichtigen Details."
      />
      <HeroSection />
      <CTAGrid />
    </>
  );
}
