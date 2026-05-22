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
- **Heading (Headlines)**: Bebas Neue – massiv, direktional, sportlich (Klasse: `font-heading`)
- **Body**: DM Sans – sauber, modern, gut lesbar auf kleinen Screens (Klasse: `font-body`)
- **Mono**: JetBrains Mono – für technische Details (Klasse: `font-mono`)

### Skala (Fluid Typography mit clamp())
- H1 Hero: `clamp(3.5rem, 10vw, 8rem)` – Bebas Neue, tracking-wide
- H2 Section: `clamp(2.5rem, 7vw, 5.5rem)` – Bebas Neue
- H3 Card: `clamp(1.5rem, 3vw, 2.5rem)` – Bebas Neue
- Body: `1rem / 1.6` – DM Sans Regular
- Caption: `0.875rem` – DM Sans Light

## Grid-System

**Basis-Einheit: 8px**

Alle Abstände, Paddings und Margins sind Vielfache von 8px.

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
