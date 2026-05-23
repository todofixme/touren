import React from 'react';
import { Link } from '@tanstack/react-router';
import { useData } from '../DataContext';

export default function TracksPage() {
  const { tour, stages, trackSources } = useData();

  return (
    <main>
      <section className="tracks-hero">
        <div className="tracks-hero-inner">
          <span className="eyebrow">Etappe für Etappe</span>
          <h1 className="h1">Tracks &amp; More</h1>
          <p>Damit ihr immer richtig ans Ziel kommt, findet ihr hier die Strecken als GPX und TCX
             zum Download sowie auf Komoot und Google MyMaps.</p>
        </div>
      </section>

      <section className="tracks-sources" data-screen-label="Tracks: Quellen">
        {trackSources.map((src) => {
          const isDownload = src.kind === 'download';
          const isPlus = src.variant === 'Plus';
          return (
            <a key={src.label}
               className={`ts-card has-topo ${isDownload ? 'is-download' : 'is-online'} ${isPlus ? 'is-plus' : ''}`}
               href={src.url} target="_blank" rel="noopener noreferrer">
              <div className="ts-num">
                {isDownload
                  ? <>Download · <span className="ts-fmt">{src.format}</span></>
                  : <>Externe Seite</>}
              </div>
              <h3>{src.label}</h3>
              <p>{src.description}</p>
              <div className="ts-foot">
                <span className="ts-verb">{src.verb} →</span>
                <span className="ts-ext">{isDownload ? '↓' : '↗'}</span>
              </div>
            </a>
          );
        })}
      </section>

      <section className="howto">
        <span className="eyebrow" style={{ padding: '0', margin: '0' }}>Anleitung</span>
        <h2 className="h1" style={{ padding: '0', margin: '10px 0 18px' }}>
          So lädst du die<br />Strecken aufs Rad.
        </h2>

        <div className="howto-layout">
          <div className="howto-intro-text">
            <p>Hier findest du die Tracks unserer Tour zum Download. Inklusive Wegpunkte für 
                Buffets, Fähren, Unterkünfte, Cafés und weitere Highlights der Strecke.</p>
            <p>Du kannst zwischen GPX- und TCX-Dateien wählen. TCX eignet sich besonders
               für Garmin-Geräte. So werden dir zum Beispiel die Wegpunkte in der
               Streckenpunkteliste angezeigt (siehe Screenshot).</p>
          </div>
          <figure className="howto-screenshot">
            <img src="assets/screenshot_garmin.png" alt="Garmin-Anzeige mit Wegpunkten" />
            <figcaption>Streckenpunkte-Anzeige auf einem Garmin Edge.</figcaption>
          </figure>
          <div className="howto-block howto-upload">
            <h3>Upload auf dein Navigationsgerät</h3>
            <p>Was machst du nun mit diesen Dateien? Verbinde einfach dein Navigationsgerät per
               USB-Kabel mit deinem Computer und warte, bis es als externes USB-Laufwerk erkannt
               wird. Kopiere anschließend die Dateien in das passende Verzeichnis:</p>
            <table className="upload-table">
              <thead>
                <tr><th>Gerät</th><th>Verzeichnis</th></tr>
              </thead>
              <tbody>
                <tr><td>Garmin Outdoor</td><td><code>Garmin/GPX</code></td></tr>
                <tr><td>Garmin Edge<sup>1</sup></td><td><code>Garmin/NewFiles</code></td></tr>
                <tr><td>Wahoo Elemnt</td><td><code>Usb Storage/routes</code></td></tr>
                <tr><td>Sigma</td><td><code>Tracks</code></td></tr>
                <tr><td>Hammerhead</td><td>über das Hammerhead-Portal</td></tr>
              </tbody>
            </table>
            <p className="howto-footnote"><sup>1</sup> Falls du die Dateien von einem Mac auf einen
               Garmin Edge 1050 kopieren willst: Der 1050 ist ein MTP-Gerät und als solches unter
               macOS nicht ohne Weiteres sichtbar. Du benötigst ein separates Programm, zum Beispiel
               Commander One.</p>
            <p className="howto-footnote">Falls irgendetwas fehlt oder bei dir anders funktioniert,
               gib bitte Bescheid.</p>
          </div>
        </div>

        <div className="howto-block">
          <h3>Komoot-Collection</h3>
          <p>Falls du zur Navigation unterwegs Komoot verwendest, kannst du dir unsere Collection
             mittels „Merken" markieren und findest dort immer die aktuelle Route:</p>
          <p><a className="howto-link" href={tour.links.komoot}
                target="_blank" rel="noopener noreferrer">Norwegen 2026 – Komoot-Collection →</a></p>
          <p>Falls du bei Komoot Offline-Karten nutzt, vergiss nicht, bereits zu Hause im WLAN für
             die Strecken „Zur Offline-Navigation speichern" zu aktivieren.</p>
          <p>Das Roadbook enthält außerdem QR-Codes, die ebenfalls zu den Strecken auf Komoot führen.</p>
        </div>

        <aside className="howto-warning">
          <h4>Hinweis</h4>
          <p>Bitte prüfe vor der Tour, ob die heruntergeladenen Tracks korrekt auf deinem Gerät
             dargestellt werden. Die Strecken wurden sorgfältig geplant, jedoch können sich
             kurzfristig Beeinträchtigungen oder Streckensperrungen vor Ort ergeben; bitte beachte
             diese und fahr entsprechend umsichtig.</p>
          <p><Link className="howto-link" to="/hinweise">Weitere Hinweise zur Tour →</Link></p>
        </aside>
      </section>

      <section className="tracks-table-wrap" data-screen-label="Tracks: Tabelle">
        <h2 className="h1">Einzeletappen.</h2>
        <table className="tracks-table">
          <thead>
            <tr>
              <th>Etappe</th><th>Datum</th><th>Von → Nach</th>
              <th>Highlight</th><th>Kurz</th><th>Lang</th><th>Fähre</th>
            </tr>
          </thead>
          <tbody>
            {stages.map((s) => (
              <tr key={`${s.n}-${s.date}`} className={s.n === 'R' ? 'rest' : ''}>
                <td><span className="n-cell">{s.n}</span></td>
                <td className="date-cell">{s.date}</td>
                <td>{s.from}{s.from !== s.to && <> → <b>{s.to}</b></>}</td>
                <td>{s.highlight}</td>
                <td className="km-cell">{s.n === 'R' ? '–' : s.short_track}</td>
                <td className="hm-cell">{s.long_track || '–'}</td>
                <td>{s.ferry && <span className="ferry-chip">Fähre</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
