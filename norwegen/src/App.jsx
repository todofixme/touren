import React, { useState, useEffect } from 'react';
import { Outlet, Link, useRouterState } from '@tanstack/react-router';
import { useData } from './DataContext';
import { TweaksContext } from './TweaksContext';
import {
  useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakToggle, TweakColor,
} from './TweaksPanel';

/* ----------------------------------------------------------------------- */
/* Navigation                                                               */
/* ----------------------------------------------------------------------- */
const NAV = [
  { path: '/',             label: 'Übersicht'  },
  { path: '/tracks',       label: 'Strecken'   },
  { path: '/unterkuenfte', label: 'Unterkünfte'},
  { path: '/faehren',      label: 'Fähren'     },
  { path: '/hinweise',     label: 'Hinweise'   },
];

/* ----------------------------------------------------------------------- */
/* Header                                                                   */
/* ----------------------------------------------------------------------- */
function Header() {
  const { tour } = useData();
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`site-header${open ? ' menu-open' : ''}`}>
      <Link className="site-logo" to="/">
        <img src={`${import.meta.env.BASE_URL}assets/logo-color.png`} alt="WfF EuropaRadtour" />
        <span className="crumb">
          <b>ERT NORWEGEN 2026</b><br />Tour-Infos
        </span>
      </Link>

      <nav className="primary-nav">
        {NAV.map((n) => (
          <Link key={n.path} to={n.path}
                className="nav-link"
                activeProps={{ className: 'nav-link active' }}
                activeOptions={n.path === '/' ? { exact: true } : {}}>
            {n.label}
          </Link>
        ))}
      </nav>

      <a className="header-roadbook" href={tour.links.roadbook}
         target="_blank" rel="noopener noreferrer">
        Roadbook PDF →
      </a>

      <button
        className="burger" type="button"
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={open} aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>

      <div id="mobile-menu"
           className={`mobile-menu${open ? ' open' : ''}`}
           role="dialog" aria-modal="true" aria-hidden={!open}
           onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
        <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
          <span className="mobile-menu-label">Tour-Infos</span>
          {NAV.map((n) => (
            <Link key={n.path} to={n.path}
                  className="mobile-link"
                  activeProps={{ className: 'mobile-link active' }}
                  activeOptions={n.path === '/' ? { exact: true } : {}}>
              {n.label}
            </Link>
          ))}
          <a className="mobile-cta" href={tour.links.roadbook}
             target="_blank" rel="noopener noreferrer">
            Roadbook PDF →
          </a>
          <div className="mobile-meta">
            <span>{tour.dateRange}</span>
            <span>{tour.startEnd}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------------- */
/* Footer                                                                   */
/* ----------------------------------------------------------------------- */
function Footer() {
  const { tour } = useData();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={`${import.meta.env.BASE_URL}assets/logo-white.png`} alt="WfF EuropaRadtour" />
          <p>ERT Norwegen 2026 – Tour-Infos mit Roadbook, Tracks, Unterkünften und Fähren.
             Eine Produktion des WfF Berlin-Brandenburg e.V.</p>
        </div>
        <div>
          <strong>Tour</strong>
          <a href={tour.links.roadbook} target="_blank" rel="noopener noreferrer">Roadbook</a>
          <Link to="/tracks">Strecken</Link>
          <Link to="/unterkuenfte">Unterkünfte</Link>
          <Link to="/faehren">Fähren &amp; Busse</Link>
          <Link to="/hinweise">Hinweise</Link>
        </div>
        <div>
          <strong>Externe Infos</strong>
          <a href={tour.links.komoot}      target="_blank" rel="noopener noreferrer">Komoot-Collection</a>
          <a href={tour.links.myMaps}      target="_blank" rel="noopener noreferrer">Google MyMaps</a>
          <a href={tour.links.ausschreibung} target="_blank" rel="noopener noreferrer">Ausschreibung</a>
        </div>
        <div>
          <strong>WfF</strong>
          <a href="https://wff-berlin.de/"              target="_blank" rel="noopener noreferrer">WfF-Website</a>
          <a href="https://www.europaradtour.de/"        target="_blank" rel="noopener noreferrer">ERT-Website</a>
          <a href="https://www.instagram.com/wff_berlin/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.strava.com/clubs/wff-ert"  target="_blank" rel="noopener noreferrer">Strava-Club</a>
        </div>
      </div>
      <div className="footer-fine">
        © 2026 WfF EuropaRadtour · Eine Produktion des WfF Berlin-Brandenburg e.V.
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------------- */
/* App (Root-Layout)                                                        */
/* ----------------------------------------------------------------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#00698a",
  "topo": true,
  "heroLayout": "stacked"
}/*EDITMODE-END*/;

const ACCENT_KEY = {
  '#ffd222': 'yellow',
  '#64c2c8': 'aqua',
  '#00698a': 'ocean',
  '#e83363': 'rasp',
};

export default function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.body.dataset.accent = ACCENT_KEY[tweaks.accent] || 'ocean';
    document.body.classList.toggle('topo-on', !!tweaks.topo);
  }, [tweaks.accent, tweaks.topo]);

  return (
    <TweaksContext.Provider value={tweaks}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
        <TweaksPanel title="Tweaks">
          <TweakSection label="Akzentfarbe">
            <TweakColor
              label="Brand-Akzent"
              value={tweaks.accent}
              options={['#00698a', '#64c2c8', '#ffd222', '#e83363']}
              onChange={(v) => setTweak('accent', v)} />
          </TweakSection>
          <TweakSection label="Hero-Layout">
            <TweakSelect
              label="Titel"
              value={tweaks.heroLayout}
              options={[
                { value: 'stacked',  label: 'Stacked – Trolle / Tunnel / Traumstraßen' },
                { value: 'wordmark', label: 'Wordmark – Norwegen 2026' },
                { value: 'route',    label: 'Route – Stavanger → Trondheim' },
              ]}
              onChange={(v) => setTweak('heroLayout', v)} />
          </TweakSection>
          <TweakSection label="Hintergrund">
            <TweakToggle
              label="Topo-Pattern"
              value={tweaks.topo}
              onChange={(v) => setTweak('topo', v)} />
          </TweakSection>
        </TweaksPanel>
      </div>
    </TweaksContext.Provider>
  );
}
