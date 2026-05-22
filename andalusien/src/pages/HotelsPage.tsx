import { MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { hotels } from "@/data/hotels";

function HotelCard({ hotel }: { hotel: (typeof hotels)[number] }) {
  const isSpecial = hotel.label === "Anreise" || hotel.label === "Rückreise";

  return (
    <div className="bg-card border border-border rounded-lg p-6 card-hover">
      <div className="flex items-start justify-between mb-4">
        <Badge
          variant={isSpecial ? "secondary" : "outline"}
          className={`font-mono text-xs ${!isSpecial ? "border-accent/40 text-accent" : ""}`}
        >
          {hotel.label}
        </Badge>
      </div>
      <h3 className="font-heading text-display-md text-foreground leading-tight mb-3">
        {hotel.name}
      </h3>
      <div className="space-y-2">
        <a
          href={hotel.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${hotel.address} auf Google Maps öffnen (öffnet in neuem Tab)`}
          className="flex items-start gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200 group"
        >
          <MapPin size={14} className="mt-0.5 flex-shrink-0 group-hover:text-accent" />
          <span>{hotel.address}</span>
        </a>
        <a
          href={hotel.hotelUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${hotel.name} Website öffnen (öffnet in neuem Tab)`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200 group"
        >
          <ExternalLink size={14} className="flex-shrink-0 group-hover:text-accent" />
          <span>Hotel-Website</span>
        </a>
      </div>
    </div>
  );
}

export default function HotelsPage() {
  return (
    <>
      <title>Hotels – Andalusien 2026</title>
      <meta name="description" content="Unterkünfte der Andalusien-Tour 2026 im Überblick." />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-grid-16">
        <header className="mb-12">
          <h1 className="font-heading text-display-xl text-foreground mb-2">UNTERKÜNFTE</h1>
          <p className="text-muted-foreground text-lg">Hotels der Andalusien-Tour 2026</p>
        </header>

        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Alle Unterkünfte der Tour im Überblick.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotels.map((hotel) => (
            <HotelCard key={`${hotel.night}-${hotel.name}`} hotel={hotel} />
          ))}
        </div>
      </div>
    </>
  );
}
