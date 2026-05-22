# PRD: Andalusien 2026 – Rennradtour Website

## Projektziel

Erstelle eine statische, moderne Informationswebsite für Teilnehmer einer einwöchigen Rennradtour durch Andalusien. Die Website wird als vollständig statisches Bundle gebaut und auf einem CDN deployt.

---

## Technologie-Stack

- **Framework**: React.js (mit Vite als Build-Tool)
- **Package Manager**: NPM
- **CSS**: Tailwind CSS
- **UI-Komponenten**: shadcn/ui
- **Routing**: React Router DOM (Hash-basiertes Routing für statische CDN-Kompatibilität)
- **Icons**: Lucide React

---

## Setup-Schritte

### 1. Projekt initialisieren

```bash
npm create vite@latest andalusien -- --template react
cd andalusien
npm install
```

### 2. Tailwind CSS installieren

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. shadcn/ui installieren

```bash
npm install -D @types/node
npx shadcn@latest init
```

Wähle bei `shadcn init`:
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**

Installiere benötigte shadcn-Komponenten:

```bash
npx shadcn@latest add button card badge separator
```

### 4. Weitere Abhängigkeiten

```bash
npm install react-router-dom lucide-react
```

---

## Konfigurationsdateien

### `tailwind.config.js`

Erstelle diese Datei im Projekt-Root:

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Tiefdunkles Anthrazit/Schwarz – die dominante Hintergrundfarbe
        primary: {
          DEFAULT: "#0A0A0F",
          50:  "#F0F0F5",
          100: "#D8D8E8",
          200: "#A0A0C0",
          300: "#606080",
          400: "#303050",
          500: "#18182A",
          600: "#0E0E1C",
          700: "#0A0A0F",
          800: "#060608",
          900: "#020204",
          foreground: "#FAFAFA",
        },
        // Secondary: Warmes Dunkelgrau für Karten und Flächen
        secondary: {
          DEFAULT: "#1C1C28",
          foreground: "#E2E2EF",
        },
        // Accent: Leuchtendes Terrakotta/Orangerot – Andalusische Sonne
        accent: {
          DEFAULT: "#E8541A",
          light: "#F07040",
          dark: "#C03A08",
          foreground: "#FFFFFF",
        },
        // Muted: Gedämpfte Töne für Hilfstexte
        muted: {
          DEFAULT: "#2A2A3A",
          foreground: "#8888A0",
        },
        // Border
        border: "#2E2E40",
        // Card
        card: {
          DEFAULT: "#13131F",
          foreground: "#E8E8F0",
        },
        // Destructive
        destructive: {
          DEFAULT: "#C0392B",
          foreground: "#FFFFFF",
        },
        // Ring (Focus)
        ring: "#E8541A",
        background: "#0A0A0F",
        foreground: "#F0F0F8",
        input: "#2A2A3A",
        popover: {
          DEFAULT: "#13131F",
          foreground: "#E8E8F0",
        },
      },
      fontFamily: {
        // Display-Font: Markant und charakterstark für Headlines
        display: ["'Bebas Neue'", "cursive"],
        // Body-Font: Elegant und gut lesbar
        body: ["'DM Sans'", "sans-serif"],
        // Mono: Für technische Details
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        // Großzügige Typografie-Skala
        "display-2xl": ["clamp(3.5rem, 10vw, 8rem)", { lineHeight: "0.9" }],
        "display-xl":  ["clamp(2.5rem, 7vw,  5.5rem)", { lineHeight: "0.95" }],
        "display-lg":  ["clamp(2rem,   5vw,  4rem)",   { lineHeight: "1.0" }],
        "display-md":  ["clamp(1.5rem, 3vw,  2.5rem)", { lineHeight: "1.1" }],
      },
      spacing: {
        // 8px Grid System
        "grid": "8px",
        "grid-2": "16px",
        "grid-3": "24px",
        "grid-4": "32px",
        "grid-5": "40px",
        "grid-6": "48px",
        "grid-8": "64px",
        "grid-10": "80px",
        "grid-12": "96px",
        "grid-16": "128px",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-diagonal": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%":   { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "accent": "0 0 24px rgba(232, 84, 26, 0.3)",
        "accent-lg": "0 0 48px rgba(232, 84, 26, 0.4)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

> Installiere das Animate-Plugin: `npm install -D tailwindcss-animate`

### `src/index.css`

Ersetze den gesamten Inhalt mit:

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 240 10% 4%;
    --foreground: 240 20% 96%;
    --card: 240 12% 7%;
    --card-foreground: 240 15% 92%;
    --popover: 240 12% 7%;
    --popover-foreground: 240 15% 92%;
    --primary: 240 10% 4%;
    --primary-foreground: 240 20% 96%;
    --secondary: 240 15% 12%;
    --secondary-foreground: 240 15% 90%;
    --muted: 240 10% 18%;
    --muted-foreground: 240 8% 60%;
    --accent: 18 83% 51%;
    --accent-foreground: 0 0% 100%;
    --destructive: 4 72% 47%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 12% 20%;
    --input: 240 10% 18%;
    --ring: 18 83% 51%;
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground font-body;
    font-feature-settings: "rlig" 1, "calt" 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3 {
    @apply font-display tracking-wide;
  }

  ::selection {
    background-color: rgba(232, 84, 26, 0.35);
    color: #FFFFFF;
  }
  
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #0A0A0F;
  }
  ::-webkit-scrollbar-thumb {
    background: #E8541A;
    border-radius: 3px;
  }
}

@layer components {
  /* Glow-Linie für Hero-Section */
  .accent-line {
    @apply h-px w-16 bg-accent inline-block;
    box-shadow: 0 0 8px rgba(232, 84, 26, 0.8);
  }

  /* Karteneffekt */
  .card-hover {
    @apply transition-all duration-300 ease-out;
  }
  .card-hover:hover {
    @apply -translate-y-1 shadow-card-hover;
    border-color: rgba(232, 84, 26, 0.4);
  }

  /* Noise-Overlay */
  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  /* Link-Hover-Effekt */
  .link-accent {
    @apply relative text-muted-foreground transition-colors duration-200 hover:text-accent;
  }
  .link-accent::after {
    content: '';
    @apply absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300;
  }
  .link-accent:hover::after {
    @apply w-full;
  }
}
```

### `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",  // Wichtig für CDN-Deployment: relative Pfade
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
})
```

---

## FRONTEND.md

Erstelle eine `FRONTEND.md` im Projekt-Root:

```markdown
# FRONTEND.md – Design System: Andalusien 2026

## Design-Philosophie

**Konzept**: Luxury Cycling Editorial
Die Website soll das Gefühl vermitteln, eine hochwertige Sportreise-Publikation zu öffnen –
dunkel, elegant, mit der Energie der andalusischen Landschaft.

## Farbpalette

| Rolle      | Hex       | Verwendung                              |
|------------|-----------|------------------------------------------|
| Background | `#0A0A0F` | Seitenhintergrund                        |
| Card       | `#13131F` | Karten, Sektionen                        |
| Secondary  | `#1C1C28` | Sekundäre Flächen, Hover-States          |
| Border     | `#2E2E40` | Trennlinien, Kartenränder                |
| Accent     | `#E8541A` | CTAs, aktive Elemente, Highlights        |
| Muted FG   | `#8888A0` | Hilfstexte, Metadaten                    |
| Foreground | `#F0F0F8` | Primärer Text                            |

## Typografie

### Schriften
- **Display (Headlines)**: Bebas Neue – massiv, direktional, sportlich
- **Body**: DM Sans – sauber, modern, gut lesbar auf kleinen Screens
- **Mono**: JetBrains Mono – für technische Details (GPX-Dateinamen etc.)

### Skala (Fluid Typography mit clamp())
- H1 Hero: `clamp(3.5rem, 10vw, 8rem)` – Bebas Neue, tracking-wide
- H2 Section: `clamp(2.5rem, 7vw, 5.5rem)` – Bebas Neue
- H3 Card: `clamp(1.5rem, 3vw, 2.5rem)` – Bebas Neue
- Body: `1rem / 1.6` – DM Sans Regular
- Caption: `0.875rem` – DM Sans Light

## Grid-System

**Basis-Einheit: 8px**

Alle Abstände, Paddings und Margins sind Vielfache von 8px:
- `8px` – Minimaler Abstand, Chip-Padding
- `16px` – Innerer Komponentenabstand
- `24px` – Standardabstand zwischen Elementen
- `32px` – Sektionsabstand (klein)
- `48px` – Sektionsabstand (mittel)
- `64px` – Sektionsabstand (groß)
- `80px` – Hero-Padding
- `128px` – Große Sektionstrennungen

## Komponenten-Design

### Buttons (CTA)
- **Primary CTA**: Accent-Hintergrund (`#E8541A`), weißer Text, 12px Radius
  - Hover: Hintergrund aufhellen (`#F07040`), leichter Glow-Effekt
  - Active: Leicht eindrücken (scale 0.97)
- **Secondary CTA**: Transparenter Hintergrund, Accent-Border, Accent-Text
  - Hover: Leichter Accent-Hintergrund (10% Opacity)
- **Ghost Link**: Kein Rahmen, Muted Text
  - Hover: Accent Text, Underline-Animation von links nach rechts

### Karten
- Hintergrund: `#13131F`
- Border: `#2E2E40` (1px)
- Radius: 12px
- Shadow: `0 4px 24px rgba(0,0,0,0.4)`
- Hover: -4px Y-Translate, Border-Color zu Accent (40% Opacity)

### Icons
- Quelle: Lucide React
- Größe: 16px (inline), 20px (Standalone), 24px (Featured)
- Farbe: Standardmäßig Muted Foreground; Accent bei aktiven/wichtigen Elementen

## Interaktions-Prinzipien

### Hover-Effekte
Alle interaktiven Elemente haben explizite Hover-States:
- Übergang: `transition-all duration-200 ease-out` (Standard), `duration-300` (Karten)
- Keine abrupten Farbwechsel – immer via Transition

### Animationen beim Laden
- Staggered Fade-Up: Seiteninhalte erscheinen nacheinander
- Delay-Klassen: `animation-delay-[100ms]`, `[200ms]`, `[300ms]`
- Performance: Ausschließlich `opacity` und `transform` animieren (kein Layout-Thrashing)

### Scroll-Verhalten
- Smooth Scrolling: `scroll-behavior: smooth` auf `html`
- Sticky Navigation mit Blur-Backdrop

## Responsive Breakpoints (Tailwind Standard)

| Breakpoint | Breite | Verwendung              |
|------------|--------|--------------------------|
| `sm`       | 640px  | Kleine Tablets            |
| `md`       | 768px  | Tablets (Querformat)      |
| `lg`       | 1024px | Laptops                   |
| `xl`       | 1280px | Desktop                   |

**Mobile First**: Alle Styles zunächst für Mobile, dann Overrides für größere Screens.

## Asset-Konventionen

- Bilder: `/public/images/` – WebP-Format bevorzugt
- PDFs: `/public/downloads/`
- ZIP-Archive: `/public/downloads/`
- Alle Asset-Pfade relativ (`./assets/...`) für CDN-Kompatibilität
```

---

## Projektstruktur

```
andalusien/
├── public/
│   ├── downloads/          # GPX/TCX ZIP-Dateien (werden später ergänzt)
│   │   └── .gitkeep
│   └── images/             # Hero-Bild, Hotel-Bilder
│       └── .gitkeep
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.jsx     # Sticky Top-Navigation
│   │   │   └── Footer.jsx         # Footer mit Copyright
│   │   ├── ui/                    # shadcn/ui Komponenten (auto-generiert)
│   │   └── sections/
│   │       ├── HeroSection.jsx    # Landing-Page Hero
│   │       └── CTAGrid.jsx        # Grid mit den Action-Links
│   ├── pages/
│   │   ├── LandingPage.jsx        # /
│   │   ├── DownloadsPage.jsx      # /downloads
│   │   └── HotelsPage.jsx         # /hotels
│   ├── data/
│   │   ├── navigation.js          # Nav-Links
│   │   ├── hotels.js              # Hoteldaten
│   │   └── downloads.js           # Download-Inhalte und -Links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── FRONTEND.md
├── PRD.md
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Seiten-Spezifikationen

### 1. Landing Page (`/`)

#### Navigation
- Sticky, mit `backdrop-blur` und leichtem Dark-Overlay beim Scrollen
- Logo/Titel links: `ANDALUSIEN 2026` in Bebas Neue, Accent-Farbe
- Rechts: Links zu "Downloads" und "Hotels" (interne Seiten)

#### Hero Section
- Vollbild (100vh), dunkler Hintergrund mit subtiler Gradient-Overlay
- Hintergrundbild (Platzhaltergrafik bis echtes Bild vorliegt): geometrisches Muster in Accentfarbe, sehr subtil
- Großer Headline-Block:
  ```
  ANDALUSIEN
  2026
  ```
  Bebas Neue, display-2xl, Weiß auf Dunkel
- Subline: `Einwöchige Rennradtour · April 2026`
- Accent-Trennlinie (leuchtend orange)
- Kurzer Teaser-Text (2–3 Sätze über die Tour)

#### CTA-Grid
Unterhalb des Hero, in einem 2-Spalten-Grid auf Mobile, 3–4 Spalten auf Desktop.
Jede Karte enthält: Icon, Titel, kurze Beschreibung, CTA-Button/Link.

**Karten-Übersicht:**

| # | Icon          | Titel                        | Beschreibung                                  | Link / Typ                  | Ziel                                                                                         |
|---|---------------|------------------------------|------------------------------------------------|-----------------------------|-----------------------------------------------------------------------------------------------|
| 1 | `Map`         | Alle Strecken im Überblick   | Interaktive Karte aller Tagesetappen          | Externer Link               | https://www.google.com/maps/d/u/0/edit?mid=13hv8WN_yDeayqwpruvSy5lZBQI5v_Hc&usp=sharing     |
| 2 | `BookOpen`    | Das Roadbook zur Tour        | PDF mit allen Details und Etappeninformationen | Interner Link (PDF fehlt noch) | `./downloads/roadbook.pdf` (Platzhalter, Link deaktiviert mit Badge "Kommt bald")          |
| 3 | `Navigation`  | Komoot · Kurze Strecken      | Täglich kürzere Etappen-Alternativen          | Externer Link               | https://www.komoot.com/de-de/collection/3963063/-andalusien-2026-kurze-strecken              |
| 4 | `Navigation`  | Komoot · Lange Strecken      | Die vollen Tagesetappen für Ausdauersportler   | Externer Link               | https://www.komoot.com/de-de/collection/4010655/-andalusien-2026-lange-strecken              |
| 5 | `Navigation`  | Komoot · Gravel-Strecken     | Alternative Gravel-Routen durch Andalusien    | Externer Link               | https://www.komoot.com/de-de/collection/3977466/-andalusien-2026-gravel-strecken             |
| 6 | `Download`    | GPX & TCX Tracks             | Tracks für GPS-Geräte und Radcomputer          | Interne Seite               | `/downloads`                                                                                  |
| 7 | `Hotel`       | Hotels                       | Unterkünfte aller Etappen auf einen Blick      | Interne Seite               | `/hotels`                                                                                     |
| 8 | `FileText`    | Ausschreibung                | Offizielle Ausschreibung der Tour              | Externer Link               | https://www.europaradtour.de/ausschreibung/andalusien-2026/                                   |

**Karten-Design:**
- Hintergrund: `card` (` #13131F`)
- Border: 1px `border` mit Hover zu Accent
- Icon: Accent-Farbe, 24px, in kleinem Quadrat-Hintergrund (Secondary)
- Externe Links: öffnen in neuem Tab (`target="_blank" rel="noopener noreferrer"`)
- Interne Links: React Router `<Link>`

---

### 2. Downloads Page (`/downloads`)

Inhaltlich angelehnt an: https://touren.tigerflanke.de/savoyen/downloads/

#### Aufbau

**Header-Section** (analog zur Savoyen-Seite, modernes Design):
- Headline: `DOWNLOADS`
- Subline: `GPX- und TCX-Tracks für dein GPS-Gerät`

**Einleitungstext** (aus der Savoyen-Seite übernommen, angepasst für Andalusien):

> Auf dieser Seite findest du alle GPS-Tracks der Andalusien-Tour 2026 zum Download. Die Strecken stehen als GPX- und TCX-Dateien sowohl als Einzel-Downloads als auch als ZIP-Archiv zur Verfügung.
>
> **GPX** (GPS Exchange Format) ist das universelle Format für GPS-Tracks und wird von nahezu allen GPS-Geräten und Apps unterstützt.
>
> **TCX** (Training Center XML) ist das Garmin-eigene Format und bietet zusätzliche Daten wie Herzfrequenz und Kadenz. Empfohlen für Garmin-Geräte.
>
> Die Strecken wurden mit Komoot geplant und getestet. Für eine optimale Navigation empfehlen wir, die Tracks vor der Tour auf dein Gerät zu laden und nicht ausschließlich auf Online-Dienste zu vertrauen.

**Download-Tabelle / Karten-Grid:**

Erstelle eine Liste/Grid von Download-Karten. Jede Karte hat folgende Informationen:
- Etappen-Nummer
- Streckenname
- Distanz (km) und Höhenmeter (m)
- Download-Buttons für GPX und TCX

**Platzhalter-Daten für Etappen** (Links werden später ergänzt – Buttons zeigen Disabled-State mit "Kommt bald"-Hinweis):

| Etappe | Von – Nach             | km  | Hm  |
|--------|------------------------|-----|-----|
| 1      | Málaga – Almuñécar     | ~80 | ~1200 |
| 2      | Almuñécar – Órgiva     | ~65 | ~1500 |
| 3      | Órgiva – Guadix        | ~95 | ~2000 |
| 4      | Guadix – Granada       | ~55 | ~800  |
| 5      | Granada – Torre del Mar| ~90 | ~1400 |
| 6      | Torre del Mar – Málaga | ~50 | ~400  |

**ZIP-Archive-Sektion:**
- Alle GPX-Dateien als ZIP
- Alle TCX-Dateien als ZIP
- Buttons: Disabled mit "Kommt bald"-Badge

**Hinweis-Box** (styled als Info-Card mit Accent-Border links):
> Hinweis: Bitte prüfe vor der Tour, ob die heruntergeladenen Tracks korrekt auf deinem Gerät dargestellt werden. Die Strecken wurden sorgfältig geplant, jedoch können sich Wegesperrungen oder geänderte Bedingungen vor Ort ergeben.

---

### 3. Hotels Page (`/hotels`)

#### Aufbau

**Header-Section:**
- Headline: `UNTERKÜNFTE`
- Subline: `Hotels der Andalusien-Tour 2026`

**Intro-Text:**
> Alle Unterkünfte der Tour im Überblick. Die Hotels wurden zentral und radfahrerfreundlich ausgewählt. Bitte buche frühzeitig, da die Kapazitäten begrenzt sind.

**Hotel-Liste:**

Zeige die Hotels als Karten in einer Liste (eine Spalte auf Mobile, zwei Spalten auf Desktop).
Jede Hotelkarte enthält:
- **Etappen-Nummer** und **Nacht** (z.B. "Nacht 1")
- **Hotelname** (als Link zur Hotel-Website, öffnet in neuem Tab)
- **Adresse** (als Link zu Google Maps, öffnet in neuem Tab)
- Lucide Icon `MapPin` für Adresse, `ExternalLink` für Website

**Hoteldaten:**

```js
// src/data/hotels.js
export const hotels = [
  {
    night: 0,
    label: "Anreise",
    name: "ibis budget Málaga Centro",
    address: "C. Calvo, 4, Distrito Centro, 29007 Málaga",
    mapsUrl: "https://maps.app.goo.gl/dqPUsde2eK5T1xgp9",
    hotelUrl: "https://all.accor.com/hotel/6350/index.de.shtml",
  },
  {
    night: 1,
    label: "Nacht 1",
    name: "Hotel Casablanca",
    address: "Pl. San Cristóbal, 4, 18690 Almuñécar",
    mapsUrl: "https://maps.app.goo.gl/R4x3oYTNdmbRPqT98",
    hotelUrl: "https://www.hotelcasablancaalmunecar.com/",
  },
  {
    night: 2,
    label: "Nacht 2",
    name: "Hotel Taray Botanico",
    address: "A-348, 18, 18400 Órgiva",
    mapsUrl: "https://maps.app.goo.gl/cbZLMrkjUMJiR7vV6",
    hotelUrl: "https://www.tarayhotel.com/",
  },
  {
    night: 3,
    label: "Nacht 3",
    name: "Hotel Palacio de Oñate",
    address: "C. Mira de Amezcua, 3, 18500 Guadix",
    mapsUrl: "https://maps.app.goo.gl/xgMzs31peHvoYRZ3A",
    hotelUrl: "http://palaciodeonate.com/",
  },
  {
    night: 4,
    label: "Nacht 4",
    name: "Monjas del Carmen Hotel",
    address: "Pl. de Cuchilleros, 13, Centro, 18009 Granada",
    mapsUrl: "https://maps.app.goo.gl/PvXiVbtA8bhkKAKp8",
    hotelUrl: "https://www.hotelmonjasdelcarmen.com/",
  },
  {
    night: 5,
    label: "Nacht 5",
    name: "Hotel Torremar - Mares",
    address: "C. Saladero Viejo, 15, 29740 Torre del Mar",
    mapsUrl: "https://maps.app.goo.gl/sLN6kNGsWAmBWY4e8",
    hotelUrl: "https://www.hoteltorremar.com/de/",
  },
  {
    night: 6,
    label: "Rückreise",
    name: "ibis budget Málaga Centro",
    address: "C. Calvo, 4, Distrito Centro, 29007 Málaga",
    mapsUrl: "https://maps.app.goo.gl/dqPUsde2eK5T1xgp9",
    hotelUrl: "https://all.accor.com/hotel/6350/index.de.shtml",
  },
];
```

---

## App.jsx Routing

```jsx
// src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import DownloadsPage from './pages/DownloadsPage'
import HotelsPage from './pages/HotelsPage'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/hotels" element={<HotelsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
```

> **Hinweis**: Wir nutzen `HashRouter` statt `BrowserRouter`, da die Website statisch auf einem CDN gehostet wird und kein Server-Side Routing unterstützt.

---

## Navigation Component

```jsx
// src/components/layout/Navigation.jsx
// Sticky Navigation mit Blur-Backdrop
// Verhält sich beim Scrollen: transparent -> leicht dunkler Hintergrund mit backdrop-blur
// Logo: "ANDALUSIEN 2026" in Bebas Neue, Accent-Farbe
// Rechts: "Downloads" und "Hotels" als Links, plus Badge "2026"
```

**Scrollverhalten:**
- Beim Scrollen >50px: `bg-background/90 backdrop-blur-md border-b border-border` hinzufügen
- Übergang: `transition-all duration-300`

---

## Footer Component

```jsx
// src/components/layout/Footer.jsx
// Dunkel, minimal
// Inhalt:
// - Logo/Titel links
// - Kurzer Text: "Andalusien 2026 · Europaradtour"
// - Link zur Ausschreibung
// - Copyright-Zeile
```

---

## Qualitätsanforderungen

### Performance
- Alle Bilder in WebP-Format mit korrekten `width`/`height`-Attributen
- Lazy Loading für Bilder unterhalb des Fold (`loading="lazy"`)
- Keine externen Schriften blockieren das Rendering (Google Fonts mit `display=swap`)

### Accessibility
- Alle interaktiven Elemente haben `aria-label` wenn der Text nicht selbsterklärend ist
- Externe Links haben `aria-label` mit Hinweis "(öffnet in neuem Tab)"
- Ausreichende Farbkontraste (mind. WCAG AA)
- Fokus-Styles sichtbar (Accent-Ring)

### Mobile-First
- Alle Layouts zunächst für Mobile entworfen
- Touch-Targets mindestens 44x44px
- Keine horizontale Scrollbar auf kleinen Screens

### SEO
- Sinnvolle `<title>`-Tags pro Seite
- Meta-Description
- Semantisches HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)

---

## Build & Deployment

```bash
# Development
npm run dev

# Production Build
npm run build

# Preview des Builds
npm run preview
```

Das `dist/`-Verzeichnis enthält die vollständige statische Website und kann direkt auf ein CDN hochgeladen werden. Alle Asset-Pfade sind relativ, da `vite.config.js` mit `base: "./"` konfiguriert ist.

---

## Offene Punkte / TODOs

- [ ] Hero-Bild (Andalusien-Landschaft / Rennrad) noch nicht vorhanden → Platzhaltergrafik oder CSS-Gradient verwenden
- [ ] Roadbook PDF noch nicht vorhanden → Button deaktiviert mit "Kommt bald"-Badge
- [ ] GPX/TCX ZIP-Archive noch nicht vorhanden → Buttons deaktiviert mit "Kommt bald"-Badge
- [ ] Genaue Etappen-Distanzen und Höhenmeter noch nicht bekannt → Platzhalter verwenden
- [ ] Hotel-Bilder noch nicht vorhanden → Akzentfarbige Platzhalter mit Hotel-Initialen