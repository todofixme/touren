import { Link } from "react-router-dom";
import {
  Map,
  BookOpen,
  Navigation,
  Download,
  Hotel,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type CardAction =
  | { type: "external"; url: string }
  | { type: "internal"; to: string }
  | { type: "disabled"; badge: string };

interface CTACard {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: CardAction;
}

const cards: CTACard[] = [
  {
    icon: <BookOpen size={24} />,
    title: "Das Roadbook zur Tour",
    description: "PDF mit allen Details und Etappeninformationen",
    action: { type: "external", url: "/andalusien/roadbook/ERT_Andalusien_2026.pdf" },
  },
  {
    icon: <Download size={24} />,
    title: "GPX & TCX Tracks",
    description: "Tracks für GPS-Geräte und Radcomputer",
    action: { type: "internal", to: "/downloads" },
  },
  {
    icon: <Map size={24} />,
    title: "Alle Strecken im Überblick",
    description: "Google Maps Karte aller Tagesetappen",
    action: {
      type: "external",
      url: "https://www.google.com/maps/d/u/0/edit?mid=13hv8WN_yDeayqwpruvSy5lZBQI5v_Hc&usp=sharing",
    },
  },
  {
    icon: <FileText size={24} />,
    title: "Einzelansicht der Strecken",
    description: "Alle Tage, alle Strecken",
    action: { type: "internal", to: "/strecken" },
  },
  {
    icon: <Navigation size={24} />,
    title: "Komoot · Kurze Strecken",
    description: "Komoot-Collection mit den täglichen kurzen Etappen",
    action: {
      type: "external",
      url: "https://www.komoot.com/de-de/collection/3963063",
    },
  },
  {
    icon: <Navigation size={24} />,
    title: "Komoot · Lange Strecken",
    description: "Komoot-Collection mit den langen Tagesetappen für mehr Spaß",
    action: {
      type: "external",
      url: "https://www.komoot.com/de-de/collection/4010655",
    },
  },
  {
    icon: <Navigation size={24} />,
    title: "Komoot · Gravel-Strecken",
    description: "Komoot-Collection mit alternativen Gravel-Routen",
    action: {
      type: "external",
      url: "https://www.komoot.com/de-de/collection/4121168",
    },
  },
  {
    icon: <Hotel size={24} />,
    title: "Hotels",
    description: "Unterkünfte aller Etappen auf einen Blick",
    action: { type: "internal", to: "/hotels" },
  },
];

interface CardContentProps {
  card: CTACard;
}

function CardContent({ card }: CardContentProps) {
  return (
    <div>
      <div className="p-2 rounded-md bg-secondary text-accent inline-flex mb-4">
        {card.icon}
      </div>
      <h3 className="font-heading text-display-md text-foreground mb-2 leading-tight">
        {card.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {card.description}
      </p>
      {card.action.type === "disabled" && (
        <Badge variant="secondary" className="text-xs font-mono">
          {card.action.badge}
        </Badge>
      )}
    </div>
  );
}

function CardWrapper({
  action,
  card,
}: {
  action: CardAction;
  card: CTACard;
}) {
  const className =
    "group block bg-card border border-border rounded-lg p-6 card-hover cursor-pointer h-full";

  if (action.type === "external") {
    return (
      <a
        href={action.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${card.title} (öffnet in neuem Tab)`}
        className={className}
      >
        <CardContent card={card} />
      </a>
    );
  }
  if (action.type === "internal") {
    return (
      <Link to={action.to} className={className}>
        <CardContent card={card} />
      </Link>
    );
  }
  return (
    <div className={`${className} opacity-60 cursor-not-allowed`}>
      <CardContent card={card} />
    </div>
  );
}

export default function CTAGrid() {
  return (
    <section id="cta" className="max-w-7xl mx-auto px-6 py-grid-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, i) => (
          <CardWrapper key={i} action={card.action} card={card} />
        ))}
      </div>
    </section>
  );
}
