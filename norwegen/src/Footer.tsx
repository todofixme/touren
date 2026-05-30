import { Link } from '@tanstack/react-router';
import { useData } from './DataContext';

export default function Footer() {
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
