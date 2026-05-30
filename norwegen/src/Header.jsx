import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useRouterState } from '@tanstack/react-router';
import { useData } from './DataContext';

const NAV = [
  { path: '/',             label: 'Übersicht'  },
  { path: '/tracks',       label: 'Strecken'   },
  { path: '/unterkuenfte', label: 'Unterkünfte'},
  { path: '/faehren',      label: 'Fähren'     },
  { path: '/hinweise',     label: 'Hinweise'   },
];

export default function Header() {
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

      {createPortal(
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
        </div>,
        document.body
      )}
    </header>
  );
}
