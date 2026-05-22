import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { DataContext } from './DataContext';
import { router } from './router';
import './styles.css';

async function loadData() {
  const base = import.meta.env.BASE_URL;
  const load = (path) =>
    fetch(base + path).then((r) => {
      if (!r.ok) throw new Error(`${base}${path}: HTTP ${r.status}`);
      return r.json();
    });

  const [tour, stages, lodging, transits, trackSources, hints] = await Promise.all([
    load('tour.json'),
    load('stages.json'),
    load('lodging.json'),
    load('transits.json'),
    load('track_sources.json'),
    load('hints.json'),
  ]);

  return { tour, stages, lodging, transits, trackSources, hints };
}

loadData()
  .then((data) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <DataContext.Provider value={data}>
        <RouterProvider router={router} />
      </DataContext.Provider>
    );
  })
  .catch((err) => {
    console.error('[ERT] Fehler beim Laden der Daten:', err);
    document.getElementById('root').innerHTML = `
      <div style="padding:2rem;font-family:sans-serif;max-width:540px;margin:4rem auto">
        <h2 style="color:#e83363;font-size:1.2rem">Fehler beim Laden der Tour-Daten</h2>
        <p style="color:#555">${err.message}</p>
        <p style="color:#888;font-size:0.85rem">
          Stelle sicher, dass alle JSON-Dateien im <code>public/</code>-Verzeichnis liegen
          und der Dev-Server läuft (<code>npm run dev</code>).
        </p>
      </div>`;
  });
