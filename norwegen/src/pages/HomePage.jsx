import React from 'react';
import { Link } from '@tanstack/react-router';
import { useData } from '../DataContext';
import { useTweaksCtx } from '../TweaksContext';

function nbspUnits(s) {
  if (!s) return s;
  return s.replace(/(\d)\s+(km|Hm)\b/g, '$1 $2');
}

export default function HomePage() {
  const { tour, stages } = useData();
  const { heroLayout } = useTweaksCtx();

  return (
    <main>
      <section className={`hero hero-${heroLayout}`} data-screen-label="Home: Hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow" style={{ color: 'rgb(255,210,34)' }}>
            {tour.dateRange} · {tour.startEnd}
          </span>
          {heroLayout === 'wordmark' && (
            <h1 className="hero-title">Norwegen<br />2026.</h1>
          )}
          {heroLayout === 'route' && (
            <h1 className="hero-title">
              <span className="place">Stavanger</span>
              <span className="arrow">– 1.400 km, 20.000 hm –</span>
              <span className="place">Trondheim.</span>
            </h1>
          )}
          {heroLayout === 'stacked' && (
            <h1 className="hero-title">Trolle.<br />Tunnel.<br />Traum&shy;straßen.</h1>
          )}
          <p className="hero-sub" style={{ color: 'rgb(255,255,255)' }}>
            In 13 Etappen von Stavanger nach Trondheim. Fjorde, Gletscher,
            Hoch&shy;ebenen – und Wasser&shy;fälle, die wirken, als kämen sie direkt aus den Wolken.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-accent" href={tour.links.roadbook}
               target="_blank" rel="noopener noreferrer">Roadbook PDF →</a>
            {/* <Link className="btn btn-ghost" to="/tracks">Strecken ansehen</Link> */}
          </div>
        </div>
        <div className="hero-stripe" style={{ height: '15px' }} />
      </section>

      <section className="quicklinks" data-screen-label="Home: Quicklinks">
        <div className="ql-head">
          <div>
            <span className="eyebrow">Tour-Infos</span>
            <h2 className="h1" style={{ margin: '10px 0 8px' }}>
              Alles, was du<br />brauchst.
            </h2>
            <p className="body-lg">Hier findest du alle Informationen, die unterwegs wichtig sind.</p>
          </div>
        </div>
        <div className="ql-grid">
          <a className="ql-card accent" href={tour.links.roadbook}
             target="_blank" rel="noopener noreferrer">
            <span className="badge">PDF</span>
            <div className="ql-num">01</div>
            <div className="ql-title">Road&shy;book</div>
            <p className="ql-desc">Alle Etappen mit Profilen, Höhenmetern, Verpflegung und weiteren Infos. Druckfertig.</p>
            <div className="ql-foot">Roadbook laden →</div>
          </a>
          <Link className="ql-card" to="/tracks">
            <div className="ql-num">02</div>
            <div className="ql-title">Strecken</div>
            <p className="ql-desc">Tracks als GPX und TCX zum Download, Anleitung für Garmin und Wahoo, Links zu Komoot &amp; MyMaps.</p>
            <div className="ql-foot">Zur Strecken-Seite →</div>
          </Link>
          <Link className="ql-card ocean" to="/unterkuenfte">
            <span className="badge">15 Nächte</span>
            <div className="ql-num">03</div>
            <div className="ql-title">Unter&shy;künfte</div>
            <p className="ql-desc">Hotels (ozeanblau) und Camping&shy;hütten (sonnen&shy;gelb) – mit Adresse und Notizen.</p>
            <div className="ql-foot">Alle Unterkünfte auf einem Blick →</div>
          </Link>
          <Link className="ql-card aqua" to="/faehren">
            <div className="ql-num">04</div>
            <div className="ql-title">Fähren</div>
            <p className="ql-desc">Alle Fjord-Querungen mit Abfahrts&shy;zeit und Link zum aktuellen Fahrplan.</p>
            <div className="ql-foot">Fahrpläne öffnen →</div>
          </Link>
        </div>
      </section>

      <section className="stages-strip" data-screen-label="Home: Etappen">
        <div className="stages-strip-head">
          <div>
            <span className="eyebrow">13 Etappen · 1 Ruhetag</span>
            <h2 className="h1" style={{ margin: '10px 0 4px' }}>Die Route.</h2>
          </div>
          <Link className="btn btn-dark" to="/tracks">Strecken zum Download →</Link>
        </div>
        <div role="list">
          {stages.map((s) => (
            <div key={`${s.n}-${s.date}`}
                 className={`stage-row${s.n === 'R' ? ' rest' : ''}${s.ferry ? ' has-ferry' : ''}`}
                 role="listitem">
              <span className="sn">{s.n}</span>
              <span className="sd">{s.date}</span>
              <span className="sr">
                {s.from}
                {s.from !== s.to && <> <small>→</small> {s.to}</>}
              </span>
              <span className="sh">{s.highlight}</span>
              <span className="skm">{s.n === 'R' ? '–' : nbspUnits(s.short_track)}</span>
              <span className="shm">{nbspUnits(s.long_track) || ''}</span>
              <span className="ferry-dot" />
            </div>
          ))}
        </div>
        <div className="stages-legend">
          <span><i /> Etappe mit Fähre</span>
          <span><i className="rest-i" /> Ruhetag in Loen</span>
        </div>
      </section>
    </main>
  );
}
