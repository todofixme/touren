# ERT Norwegen 2026

Tour-Info-Website für die WfF EuropaRadtour Norwegen 2026 (Stavanger → Trondheim).
Deployed as part of the `touren-websites` monorepo at `https://touren.tigerflanke.de/norwegen/`.

## Stack

- **React 18.3** + JSX (no TypeScript)
- **Vite 5**
- **@tanstack/react-router** (history mode)
- Pure CSS with design tokens (`src/colors_and_type.css`)

## Commands

```bash
npm install       # install dependencies (first time)
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve production build locally
```

Building as part of the monorepo: run `sh build.sh` from the repo root.

## Architecture

### Data

All content lives in JSON files in `public/` — editable without a rebuild:

| File | Content |
|------|---------|
| `tour.json` | Tour metadata, stats, links |
| `stages.json` | Daily stages |
| `lodging.json` | Accommodation entries |
| `transits.json` | Ferry/bus schedules |
| `track_sources.json` | GPX/TCX downloads and online map links |
| `hints.json` | Safety and preparation hints |

`main.jsx` fetches all six files in parallel at startup and exposes them via `DataContext`. Components read data with `useData()`.

### Routing

`@tanstack/react-router` in history mode. Routes are defined in `src/router.jsx`:

| Path | Page |
|------|------|
| `/` | `HomePage` |
| `/tracks` | `TracksPage` |
| `/unterkuenfte` | `LodgingPage` |
| `/faehren` | `FerryPage` |
| `/hinweise` | `HinweisePage` |

### Key source files

```
src/main.jsx           entry point: fetches JSON, mounts router
src/router.jsx         route tree
src/App.jsx            root layout: header, footer, TweaksPanel
src/DataContext.jsx    context + useData() hook
src/TweaksPanel.jsx    dev-only UI for accent color, hero layout, topo background
src/TweaksContext.jsx  context for tweak state
src/pages/             one file per route
src/styles.css         all styles (imports colors_and_type.css)
src/colors_and_type.css  design tokens (colors, typography, spacing)
public/                static assets — deployed as-is, no bundling
```

### Theming

Active accent color is set as `data-accent` on `<body>` and drives CSS variable overrides.
Topo background toggled via `body.topo-on` class.
Tweak state is persisted in `localStorage`.
