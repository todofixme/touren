# ERT Andalusien 2025

Tour-Info-Website für die WfF EuropaRadtour Andalusien 2025.
Deployed as part of the `touren-websites` monorepo at `https://touren.tigerflanke.de/andalusien/`.

## Stack

- **React 19.2** + TypeScript (strict mode)
- **Vite 7**
- **react-router-dom 7** (hash mode)
- **Tailwind CSS 3**
- **shadcn/ui** (Radix UI primitives + class-variance-authority)

## Commands

```bash
npm install       # install dependencies (first time)
npm run dev       # dev server → http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # serve production build locally
npm run lint      # ESLint
```

Building as part of the monorepo: run `sh build.sh` from the repo root.

## Architecture

### Data

Content is defined as TypeScript modules in `src/data/` — changes require a rebuild:

| File | Content |
|------|---------|
| `routes.ts` | Stage/route definitions |
| `hotels.ts` | Accommodation entries |
| `downloads.ts` | GPX/TCX download links |
| `navigation.ts` | Nav items |

Static assets (GPX files, images, roadbook PDF) live in `public/` and are served as-is.

### Routing

`react-router-dom` in hash mode (`HashRouter`). Routes defined in `src/App.tsx`:

| Path | Page |
|------|------|
| `/` | `LandingPage` |
| `/strecken` | `RoutesPage` (fullscreen — no footer) |
| `/hotels` | `HotelsPage` |
| `/downloads` | `DownloadsPage` |

### Key source files

```
src/main.tsx           entry point
src/App.tsx            router, root layout (Navigation, Footer, ScrollToTop)
src/pages/             one file per route
src/components/
  layout/              Navigation, Footer
  sections/            page-level section components
  ui/                  shadcn/ui primitives
src/data/              typed content modules
src/hooks/             custom hooks
src/types/             shared TypeScript types
src/lib/               utilities (cn(), etc.)
src/index.css          Tailwind base + CSS custom properties
public/                static assets — deployed as-is, no bundling
```
