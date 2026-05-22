import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { to: "/downloads", label: "Downloads" },
  { to: "/strecken", label: "Strecken" },
  { to: "/hotels", label: "Hotels" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navBg = scrolled || menuOpen
    ? "bg-background/90 backdrop-blur-md border-b border-border"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-heading text-display-md text-accent hover:text-accent-light transition-colors duration-200"
        >
          ANDALUSIEN
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                location.pathname === to ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <Badge variant="outline" className="font-mono text-xs border-accent/40 text-accent">
            2026
          </Badge>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-muted-foreground hover:text-accent transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                location.pathname === to ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <Badge variant="outline" className="font-mono text-xs border-accent/40 text-accent w-fit">
            2026
          </Badge>
        </div>
      )}
    </nav>
  );
}
