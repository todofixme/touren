import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { target: 7,     label: "Tage" },
  { target: 20,    label: "Strecken" },
  { target: 2420,  label: "Kilometer" },
  { target: 51390, label: "Höhenmeter" },
];

function StatTile({ target, label, active }: { target: number; label: string; active: boolean }) {
  const value = useCountUp(target, 4500, active);
  const formatted = value.toLocaleString("de-DE");
  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border border-t-2 border-t-accent rounded-lg p-4 sm:p-6 flex flex-col items-center gap-1">
      <span className="font-heading text-display-md text-accent leading-none">{formatted}</span>
      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimating(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary-500" />
      {/* Radial accent overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <div className="h-16 shrink-0" />
      <div className="flex-1 flex items-center justify-center">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Accent line top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="accent-line" />
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            Einwöchige Fahrradtour
          </span>
          <span className="accent-line" />
        </div>

        {/* Main headline */}
        <h1 className="font-heading text-display-2xl text-foreground leading-none mb-2">
          ANDALUSIEN
        </h1>
        <h2 className="font-heading text-display-2xl text-accent leading-none mb-12">
          2026
        </h2>

        {/* Teaser text */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Sieben Tage durch das Herz Andalusiens – von Málaga über die Sierra Nevada bis zurück ans Mittelmeer. Hier findest du alle wichtigen Informationen zur Tour.
        </p>

        <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed mb-10">
          Ein bisschen Statistik:
        </p>

        {/* Tour stats */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
          {stats.map((stat) => (
            <StatTile key={stat.label} target={stat.target} label={stat.label} active={animating} />
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-1 group cursor-pointer mx-auto w-fit"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase group-hover:text-foreground transition-colors">
            Scrolle für die wirklich wichtigen Infos
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
          <ChevronDown size={20} className="text-accent animate-bounce" />
        </button>
      </div>
      </div>
    </section>
  );
}
