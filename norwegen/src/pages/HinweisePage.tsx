import { useData } from '../DataContext';

export default function HinweisePage() {
  const { hints } = useData();
  return (
    <main>
      <section className="hints-hero" data-screen-label="Hinweise: Hero">
        <div className="hints-hero-inner">
          <span className="eyebrow">Sicher unterwegs</span>
          <h1 className="h1">Hinweise zur<br />Tour.</h1>
          <p>Ein paar Dinge, die unterwegs den Unterschied machen – von der Tunnel&shy;beleuchtung
             bis zum Pannen&shy;set. Bitte einmal vor der Abfahrt lesen und nicken.</p>
        </div>
        <div className="hints-hero-stripe" />
      </section>

      <section className="hints-grid" data-screen-label="Hinweise: Karten">
        {hints.map((h) => (
          <article key={h.n} className={`hint-card tone-${h.tone}`}>
            <div className="hint-num">{h.n}</div>
            <h3 className="hint-title">
              {h.title.split('\n').map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </h3>
            <p className="hint-short">{h.short}</p>
            <p className="hint-body">{h.body}</p>
          </article>
        ))}
      </section>

      <aside className="hints-foot">
        <p><b>Im Notfall:</b> In ganz Norwegen erreicht ihr die Notrufzentrale unter <b>112</b>, den
           medizinischen Notruf unter <b>113</b>. Speichert vor Tourbeginn die Mobil&shy;nummer des
           Tour-Teams im Handy. Eine Kopie wichtiger Dokumente (Ausweis, Versicherungskarte,
           Auslandskrankenversicherung) gehört in die Satteltasche oder ins Handy.</p>
      </aside>
    </main>
  );
}
