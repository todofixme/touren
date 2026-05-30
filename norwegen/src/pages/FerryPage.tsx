import { useState, useMemo } from 'react';
import { useData } from '../DataContext';
import { Ship, BusFront } from 'lucide-react';
import type { Transit, TransitKind, TrackVariant } from '../types';

function TransitRow({ t }: { t: Transit }) {
  const schedules = t.schedule;
  const tracks = t.tracks;
  return (
    <div className={`transit-row ${t.kind}`}>
      <div className="t-kind" title={t.kind === 'ferry' ? 'Fähre' : 'Bus'}>
        {t.kind === 'ferry' ? <Ship /> : <BusFront />}
      </div>
      <div className="t-date">{t.date}</div>
      <div className="t-tracks">
        {tracks.map((tr) => (
          <span key={tr} className={`track-chip track-${tr}`}>
            {tr === 'short' ? 'Kurz' : 'Lang'}
          </span>
        ))}
      </div>
      <div className="t-times">
        {t.times.map((ts) => (
          <span key={ts} className="t-time-chip">{ts}</span>
        ))}
      </div>
      <div className="t-route">{t.route}</div>
      <div className="t-dur"><span style={{ whiteSpace: 'nowrap' }}>Fahrzeit: {t.duration || '–'}</span> </div>
      <div className="t-links">
        {schedules.map((url, i) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">
            {schedules.length > 1 ? `Fahrplan ${i + 1}` : 'Fahrplan'} →
          </a>
        ))}
      </div>
    </div>
  );
}

export default function FerryPage() {
  const { transits } = useData();
  const [filter, setFilter] = useState<'all' | TransitKind | TrackVariant>('all');

  const filtered = useMemo(() => {
    if (filter === 'all')  return transits;
    if (filter === 'bus')  return transits.filter((t) => t.kind === 'bus');
    return transits.filter((t) => t.tracks.includes(filter as TrackVariant));
  }, [filter, transits]);

  const counts = useMemo(() => ({
    ferry: transits.filter((t) => t.kind === 'ferry').length,
    bus:   transits.filter((t) => t.kind === 'bus').length,
    short: transits.filter((t) => t.tracks.includes('short')).length,
    long:  transits.filter((t) => t.tracks.includes('long')).length,
  }), [transits]);

  return (
    <main>
      <section className="ferry-hero">
        <div className="ferry-hero-inner">
          <span className="eyebrow">{counts.ferry} Fähren · {counts.bus} Bus</span>
          <h1 className="h1">Fähren &amp;<br />Busverbindungen.</h1>
          <p>Die Strecke quert immer wieder die Fjorde.<br />
             Abfahrtszeiten unbedingt vor Antritt prüfen.</p>
        </div>
      </section>

      <div className="filters" data-screen-label="Fähren: Filter">
        <span className="lbl">Anzeigen</span>
        <button className={filter === 'all'   ? 'on' : ''}    onClick={() => setFilter('all')}>  Alle ({transits.length})</button>
        <button className={filter === 'short' ? 'on' : ''}    onClick={() => setFilter('short')}>Kurze Strecke ({counts.short})</button>
        <button className={filter === 'long'  ? 'on' : ''}    onClick={() => setFilter('long')}> Lange Strecke ({counts.long})</button>
        <button className={filter === 'bus'   ? 'on bus' : ''} onClick={() => setFilter('bus')}> Bus ({counts.bus})</button>
      </div>

      <section className="ferry-section" data-screen-label="Fähren: Liste">
        <div className="transit-list">
          {filtered.map((t) => <TransitRow key={`${t.date}-${t.route}`} t={t} />)}
          {filtered.length === 0 && (
            <p style={{ padding: '2rem', color: 'var(--c-slate)' }}>
              Keine Einträge für diesen Filter.
            </p>
          )}
        </div>
      </section>

      <aside className="ferry-note">
        <h4>Hinweise zum Fährbetrieb</h4>
        <p>Die Abfahrts­zeiten stammen aus den offiziellen Fahrplänen der Betreiber. Änderungen sind
           möglich – bitte prüft kurz vor Reiseantritt die verlinkten Fahrpläne.</p>
        <p>Bei den meisten Fjord-Querungen gilt: <b>einfach an der Anlegestelle anstellen</b>, Tickets
           werden an Bord verkauft. Für Rad &amp; Fahrer:in zusammen liegen die Kosten meist bei
           NOK 60–140.</p>
        <p><b>Atlanterhavstunnelen</b>: Rennräder sind im Tunnel nicht erlaubt – wir nutzen die
           FRAM-Buslinie.</p>
      </aside>
    </main>
  );
}
