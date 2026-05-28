import React, { useState, useMemo } from 'react';
import { useData } from '../DataContext';

export default function LodgingPage() {
  const { lodging } = useData();
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(
    () => filter === 'all' ? lodging : lodging.filter((l) => l.type === filter),
    [filter, lodging],
  );
  const counts = useMemo(() => ({
    hotel: lodging.filter((l) => l.type === 'hotel').length,
    cabin: lodging.filter((l) => l.type === 'cabin').length,
  }), [lodging]);

  return (
    <main>
      <section className="lodging-hero">
        <div className="lodging-hero-inner">
          <span className="eyebrow">15 Nächte</span>
          <h1 className="h1">Hotels &amp;<br />Hütten.</h1>
          <p>Vom Doppelzimmer am Fjord bis zur 6er-Hütte im Nirgendwo. Hotels sind
             ozean&shy;blau, Camping&shy;hütten sonnen&shy;gelb markiert.</p>
          <div className="lodging-key">
            <span className="key-chip hotel"><i />{counts.hotel} × Hotel</span>
            <span className="key-chip cabin"><i />{counts.cabin} × Hütte</span>
          </div>
        </div>
      </section>

      <div className="filters" data-screen-label="Unterkünfte: Filter">
        <span className="lbl">Anzeigen</span>
        <button className={filter === 'all'   ? 'on' : ''}         onClick={() => setFilter('all')}>   Alle ({lodging.length})</button>
        <button className={filter === 'hotel' ? 'on hotel' : ''}   onClick={() => setFilter('hotel')}> Hotel ({counts.hotel})</button>
        <button className={filter === 'cabin' ? 'on cabin' : ''}   onClick={() => setFilter('cabin')}> Hütte ({counts.cabin})</button>
      </div>

      <section className="lodging-grid" data-screen-label="Unterkünfte: Karten">
        {filtered.map((l, i) => (
          <article key={`${l.date}-${l.name}`} className={`lodge-card ${l.type}`}>
            <div className="lodge-strip" />
            <div className="lodge-body">
              <div className="lodge-head">
                <span className="lodge-date">{l.date}</span>
                <span className="lodge-tag">{l.type === 'hotel' ? 'Hotel' : 'Hütte'}</span>
              </div>
              <span className="lodge-place">{l.place}</span>
              <h3 className="lodge-name">{l.name}</h3>
              {l.address && <p className="lodge-address">{l.address}</p>}
              {l.note    && <p className="lodge-note">{l.note}</p>}
            </div>
            <div className="lodge-foot">
              <span className="lodge-num">Tag {String(i).padStart(2, '0')}</span>
              {l.url && l.url !== '#'
                ? <a className="lodge-link" href={l.url} target="_blank" rel="noopener noreferrer">Google Maps →</a>
                : <span className="lodge-link" style={{ color: 'var(--c-slate)', cursor: 'default' }}>Website folgt</span>
              }
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
