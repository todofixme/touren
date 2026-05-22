import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link to="/" className="font-heading text-display-md text-accent block mb-1">
              ERT ANDALUSIEN 2026
            </Link>
            <p className="text-muted-foreground text-sm">WfF EuropaRadtour Andalusien 2026</p>
          </div>
          <a
            href="https://www.europaradtour.de/ausschreibung/andalusien-2026/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ausschreibung öffnen (öffnet in neuem Tab)"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            Zur Ausschreibung
            <ExternalLink size={14} />
          </a>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Andalusien · Eine <a
            href="https://europaradtour.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors duration-200"
          >EuropaRadtour<ExternalLink size={12} /></a> organisiert von <a
            href="https://wff-berlin.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors duration-200"
          >WfF Berlin-Brandenburg e.V.<ExternalLink size={12} /></a> Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
