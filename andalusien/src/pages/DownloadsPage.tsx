import { Download, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { zipArchives } from "@/data/downloads";

export default function DownloadsPage() {
  return (
    <>
      <title>Downloads – Andalusien 2026</title>
      <meta name="description" content="GPX- und TCX-Tracks der Andalusien-Tour 2026 zum Download." />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-grid-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-heading text-display-xl text-foreground mb-2">GPX- und TCX-Tracks</h1>
          <p className="text-muted-foreground text-lg">Alle Strecken zum Download für dein GPS-Gerät</p>
        </header>

        {/* Intro + Screenshot + ZIP Archives */}
        <div className="sm:grid sm:grid-cols-2 sm:gap-8 mb-12">
          {/* Left col row 1: Intro text */}
          <div className="mb-8 sm:mb-6 space-y-4 text-muted-foreground leading-relaxed sm:col-start-1 sm:row-start-1">
            <p>
              Im Folgenden findest du die Tracks unserer Tour zum Download. Die Tracks enthalten Hotels und das Buffet als Wegpunkte; die <strong>Plus-Variante</strong> enthält zusätzlich noch alle Anstiege und lohnenswerte Aussichtspunkte. Weiterhin kannst du zwischen <strong>GPX</strong>- und <strong>TCX</strong>-Dateien wählen. <strong>TCX</strong> solltest du besonders zur Verwendung mit Garmin-Geräten nutzen. So werden dir zum Beispiel die Wegpunkte in der Streckenpunkteliste angezeigt (siehe Screenshot).
            </p>
          </div>

          {/* Right col rows 1–2: Screenshot */}
          <div className="mb-8 sm:mb-0 sm:col-start-2 sm:row-start-1 sm:row-span-2">
            <img
              src="images/screenshot_garmin.png"
              alt="Streckenpunkteliste Garmin"
            />
            <p className="text-muted-foreground mt-1">(Streckenpunkteliste Garmin Edge)</p>
          </div>

          {/* Left col row 2: ZIP Archives */}
          <section className="sm:col-start-1 sm:row-start-2">
            <h2 className="font-heading text-display-lg text-foreground mb-6">Downloads</h2>
            <div className="flex flex-col gap-4">
              {zipArchives.map((archive, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Button variant="outline" asChild>
                    <a href={archive.url!} download>
                      <Download size={14} className="mr-2" />
                      {archive.label}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Upload auf Navigationsgeräte */}
        <div className="max-w-3xl mb-12 space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="font-heading text-display-md text-foreground">Upload auf Eure Navigationsgeräte</h3>
          <p>
            Was machst du nun mit diesen Dateien? Verbinde einfach dein Navigationsgerät per USB-Kabel mit deinem Computer und warte, bis es als externes USB-Laufwerk erkannt wird. Kopiere anschließend die Dateien nach:
          </p>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-8 font-semibold text-foreground">Gerät</th>
                <th className="text-left py-2 font-semibold text-foreground">Verzeichnis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-8">Garmin Outdoor</td>
                <td className="py-2 font-mono text-xs">Garmin/GPX</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-8">Garmin Edge<sup>1</sup></td>
                <td className="py-2 font-mono text-xs">Garmin/NewFiles</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-8">Wahoo Element</td>
                <td className="py-2 font-mono text-xs">Usb Storage/routes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-8">Sigma</td>
                <td className="py-2 font-mono text-xs">Tracks</td>
              </tr>
              <tr>
                <td className="py-2 pr-8">Hammerhead</td>
                <td className="py-2 text-xs italic">über das Hammerhead-Portal</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs italic">1) Falls du die Dateien von einem Mac auf einen Garmin Edge 1050 kopieren willst: Der 1050 ist ein <a href="https://de.wikipedia.org/wiki/Media_Transfer_Protocol" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">MTP-Gerät</a> und als solches unter macOS nicht ohne Weiteres sichtbar. Du benötigst ein separates Programm, zum Beispiel  <a href="https://apps.apple.com/us/app/commander-one-file-manager/id1035236694" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Commander One</a>.</p>
          <p>
            Falls irgendetwas fehlt oder bei dir anders funktioniert, gib bitte Bescheid.
          </p>
        </div>

        {/* Komoot collections */}
        <div className="max-w-3xl mb-12 space-y-4 text-muted-foreground leading-relaxed">
          <h2 className="font-heading text-display-lg text-foreground mb-6">Komoot-Collections</h2>
          <p>
            Falls du zur Navigation unterwegs Komoot verwendest, kannst du dir einfach die folgenden Komoot-Collections mittels „Merken“ markieren und findest dort immer die aktuelle Route:
          </p>
          <ul className="list-none space-y-1 pl-4 border-l border-border">
            <li><a href="https://www.komoot.com/de-de/collection/3963063/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground underline underline-offset-2 decoration-border hover:decoration-foreground transition-colors">Kurze Strecken<ExternalLink size={12} /></a></li>
            <li><a href="https://www.komoot.com/de-de/collection/4010655/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground underline underline-offset-2 decoration-border hover:decoration-foreground transition-colors">Lange Strecken<ExternalLink size={12} /></a></li>
            <li><a href="https://www.komoot.com/de-de/collection/4121168/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground underline underline-offset-2 decoration-border hover:decoration-foreground transition-colors">Gravel-Strecken<ExternalLink size={12} /></a></li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Das Roadbook enthält außerdem QR-Codes, die ebenfalls zu den Strecken auf Komoot führen.
          </p>
        </div>

        {/* Hinweis box */}
        <div className="border-l-4 border-l-accent bg-card rounded-r-lg p-6 flex gap-4">
          <Info size={20} className="text-accent flex-shrink-0 mt-0.5" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong className="text-foreground">Hinweis:</strong>{' '}
            Bitte prüfe vor der Tour, ob die heruntergeladenen Tracks korrekt auf deinem Gerät dargestellt werden. Die Strecken wurden sorgfältig geplant, jedoch können sich kurzfristig Beeinträchtigungen oder Streckensperrungen vor Ort ergeben; bitte beachte diese und fahr entsprechend umsichtig.
            <br />
            Jeder Teilnehmer fährt auf eigene Gefahr und ist selbst für seine Sicherheit verantwortlich. Bitte halte dich an die geltenden Straßenverkehrsregeln und begegne allen anderen Verkehrsteilnehmern – insbesondere Fußgängern – mit Rücksicht und Respekt.
          </p>
        </div>
      </div>
    </>
  );
}
