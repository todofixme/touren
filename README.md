# touren-websites

Monorepo für statische Tour-Websites, deployed auf Cloudflare Pages unter
`https://touren.tigerflanke.de/`.

| Pfad | App |
|---|---|
| `/andalusien/` | Rennradtour Andalusien 2026 |
| `/norwegen/`   | Rennradtour Norwegen 2026 |

## Layout

```
touren-websites/
├── andalusien/   # React 19.2 + TS strict + Tailwind + shadcn (vite, base "/andalusien/")
├── norwegen/     # React 18.3 + pure CSS + @tanstack/react-router (vite, base "/norwegen/")
├── build.sh      # baut beide Apps → dist/{andalusien,norwegen}/
├── _redirects    # SPA-Fallback für Cloudflare Pages
└── dist/         # Build-Output (gitignored)
```

Beide Apps haben getrennte Dependencies (`node_modules` + `package.json`); kein
Code-Sharing, kein Workspace-Setup.

## Build

```sh
sh build.sh
```

Erzeugt `dist/andalusien/`, `dist/norwegen/`, und kopiert `_redirects` nach `dist/`.

## Lokale Vorschau

```sh
npx serve dist
# dann http://localhost:3000/andalusien/  bzw.  /norwegen/
```

## Dev pro App

```sh
cd andalusien && npm run dev     # Vite-Dev-Server für Andalusien
cd norwegen   && npm run dev     # Vite-Dev-Server für Norwegen
```

## Deployment

Cloudflare Pages Projekt `touren`:

- Build-Command: `sh build.sh`
- Output-Directory: `dist`
- Branch: `main`
- Custom Domain: `touren.tigerflanke.de`
