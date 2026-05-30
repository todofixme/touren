import { useEffect } from 'react';
import type { Tweaks } from './types';
import { Outlet } from '@tanstack/react-router';
import { TweaksContext } from './TweaksContext';
import {
  useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakToggle, TweakColor,
} from './TweaksPanel';
import Header from './Header';
import Footer from './Footer';

/* ----------------------------------------------------------------------- */
/* App (Root-Layout)                                                        */
/* ----------------------------------------------------------------------- */
const TWEAK_DEFAULTS: Tweaks = /*EDITMODE-BEGIN*/{
  "accent": "#00698a",
  "topo": true,
  "heroLayout": "stacked"
}/*EDITMODE-END*/;

const ACCENT_KEY: Record<string, string> = {
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
              onChange={(v) => setTweak('accent', Array.isArray(v) ? v[0] : v)} />
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
