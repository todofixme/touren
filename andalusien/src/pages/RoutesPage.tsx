import { useEffect, useRef, useState } from "react";
import { Monitor } from "lucide-react";
import { stageRoutes, type RouteVariant } from "@/data/routes";
import { applyGpx2gmConfig, interceptGpxFetch, overrideGpx2gmIcons } from "@/config/gpx2gm";

const VARIANT_LABELS: Record<RouteVariant["type"], string> = {
  kurz: "Kurz",
  lang: "Lang",
  gravel: "Gravel",
};

const VARIANT_COLORS: Record<RouteVariant["type"], string> = {
  kurz: "border-green-500/60 text-green-400",
  lang: "border-accent/60 text-accent",
  gravel: "border-amber-500/60 text-amber-400",
};

interface ActiveTrack {
  day: number;
  variantIdx: number;
  file: string;
}

export default function RoutesPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeTrack, setActiveTrack] = useState<ActiveTrack>({
    day: 1,
    variantIdx: 0,
    file: stageRoutes[0].variants[0].file,
  });
  const [libraryReady, setLibraryReady] = useState(false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Load GPX2GM library — re-runs when isMobile changes so map reinits on desktop
  useEffect(() => {
    if (isMobile) return;

    // Apply config before script load — library reads window globals on start
    applyGpx2gmConfig();

    // Cleanup previous instance if any
    const existingScript = document.querySelector(
      'script[src*="GPX2GM.js"]'
    ) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = "GM_Utils/GPX2GM.js?autoload=false";
    script.async = true;
    script.onload = () => {
      setLibraryReady(true);
    };
    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      setLibraryReady(false);
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.innerHTML = "";
      }
      if (window.JB?.GPX2GM) {
        delete (window as unknown as Record<string, unknown>).JB;
      }
    };
  }, [isMobile]);

  // Initialize map when library is ready
  useEffect(() => {
    if (!libraryReady || !mapRef.current) return;

    // Set initial class for the map div (library reads it via querySelectorAll)
    mapRef.current.className = `gpxview:gpx/${activeTrack.file}:OSM w-full h-full`;

    // Start the library
    const cancelFetchIntercept = interceptGpxFetch();
    let cancelIconOverride: (() => void) | undefined;
    if (window.JB?.GPX2GM?.start) {
      window.JB.GPX2GM.start();
      cancelIconOverride = overrideGpx2gmIcons();
    }

    return () => {
      cancelFetchIntercept();
      cancelIconOverride?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [libraryReady]);

  const handleTrackChange = (day: number, variantIdx: number, file: string) => {
    setActiveTrack({ day, variantIdx, file });

    // Call ShowGPX on the map DOM element's makeMap instance
    const mapEl = mapRef.current as (HTMLDivElement & {
      makeMap?: { ShowGPX: (files: string[], type: string) => void };
    }) | null;
    if (mapEl?.makeMap) {
      mapEl.makeMap.ShowGPX([`gpx/${file}`], "OSM");
    }
  };

  return (
    <>
      <title>Strecken – Andalusien 2026</title>
      <meta
        name="description"
        content="Interaktive Karte der Etappen der Andalusien-Tour 2026."
      />

      {isMobile ? (
        <div className="flex items-center justify-center min-h-screen px-6 text-center">
          <div className="flex flex-col items-center gap-4 text-muted-foreground max-w-sm">
            <Monitor size={40} className="text-accent/60" />
            <p className="text-sm leading-relaxed">
              Für die Darstellung der Strecken auf einer Karte muss die Bildschirm-Breite mindestens 768 Pixel betragen. Nutze bitte ein größeres Gerät.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:h-[calc(100vh-73px)] pt-[73px]">
          {/* Sidebar */}
          <aside className="md:w-[320px] md:min-w-[320px] md:h-full overflow-y-auto bg-card border-r border-border p-4 space-y-4">
            <h1 className="font-heading text-display-md text-foreground mb-2">
              STRECKEN
            </h1>
            <p className="text-xs text-muted-foreground mb-4">
              Wähle eine Etappe und Variante
            </p>

            {stageRoutes.map((stage) => (
              <div key={stage.day} className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {stage.label}
                  </span>
                  <span className="text-sm text-foreground font-medium">
                    {stage.from} – {stage.to}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stage.variants.map((variant, vIdx) => {
                    const isActive =
                      activeTrack.day === stage.day &&
                      activeTrack.variantIdx === vIdx;
                    return (
                      <button
                        key={variant.file}
                        onClick={() =>
                          handleTrackChange(stage.day, vIdx, variant.file)
                        }
                        className={`
                          px-3 py-1.5 text-xs font-mono rounded border transition-all duration-200
                          ${
                            isActive
                              ? `bg-accent/20 border-accent text-accent shadow-accent`
                              : `bg-card border-border text-muted-foreground hover:border-accent/40 hover:text-foreground`
                          }
                        `}
                      >
                        {VARIANT_LABELS[variant.type]}{" "}
                        <span className={isActive ? "" : VARIANT_COLORS[variant.type]}>
                          {variant.distanceKm} km
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </aside>

          {/* Map area */}
          <div className="flex-1 flex flex-col min-h-[60vh] md:min-h-0">
            <div ref={mapRef} id="map" className="flex-1 w-full" />
            <div id="map_hp" className="h-[150px] md:h-[180px] w-full bg-card border-t border-border" />
          </div>
        </div>
      )}
    </>
  );
}
