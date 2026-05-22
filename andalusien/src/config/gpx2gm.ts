// GPX2GM library configuration
// Variables are set as window globals before JB.GPX2GM.start() is called.
// The library reads them via typeof(VarName) != "undefined".
// Full variable reference: public/GM_Utils/GPX2GM_Defs.js → setparameters()

export function applyGpx2gmConfig() {
  const w = window as unknown as Record<string, unknown>;

  // Map
  w.Bestaetigung = false;         // skip OSM consent dialog (we accept T&C)
  w.Doclang = "de";               // UI language
  w.Defaultmaptype = "OSMDE";     // default tile layer
  w.Shtrstart = true;             // mark at the start of the track

  // Track rendering
  w.Tcols = ["#E8541A", "#60A0E0", "#50C878", "#E8C41A", "#C060E0", "#E06060", "#60E0C0"];
  w.Twidth = 5.0;                 // track line width in px
  w.Topac = 0.9;                  // track opacity
  w.Ocol = "#FFFFFF";           // mouseover highlight color
  w.Owidth = 4.0;

  // Elevation profile colors — fix black-text-on-dark-background
  w.Plotlabelcol = "#C8C8D8";     // axis labels
  w.Plotframecol = "#4A4A60";     // frame / axis lines
  w.Plotgridcol = "#2E2E40";      // grid lines
  w.Plotmarkercol = "#C8C8D8";    // crosshair marker

  // Links
  w.Linktarget = "_blank";
}

// Intercept fetch to inject <sym> tags into GPX responses on-the-fly.
// The library reads <sym> to select icons; our GPX files only have <type>.
export function interceptGpxFetch(): () => void {
  const origFetch = window.fetch.bind(window);

  window.fetch = async function (input: RequestInfo | URL, init?: RequestInit) {
    const url =
      typeof input === "string"
        ? input
        : input instanceof URL
          ? input.href
          : (input as Request).url;

    const response = await origFetch(input, init);

    if (!url.includes(".gpx")) return response;

    const text = await response.text();
    const patched = text
      .replace(/<type>FOOD<\/type>/g,      "<sym>restaurant</sym>\n        <type>FOOD</type>")
      .replace(/<type>RESIDENCE<\/type>/g, "<sym>lodging</sym>\n        <type>RESIDENCE</type>");

    return new Response(patched, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  };

  return () => { window.fetch = origFetch; };
}

export function overrideGpx2gmIcons(): () => void {
  const base = "icons/";
  const def = (file: string): JBIconDef => ({
    icon: {
      anchor: { x: 24, y: 24 },
      url: base + file,
      scaledSize: { width: 48, height: 48, widthUnit: "px", heightUnit: "px" },
      size:       { width: 48, height: 48, widthUnit: "px", heightUnit: "px" },
    },
  });

  let rafId = 0;
  let attempts = 0;
  const MAX_ATTEMPTS = 300; // ~5s at 60fps

  const apply = () => {
    // JB.icons is set inside start()'s async LoadScript callback — poll until ready
    if (!window.JB?.icons) {
      if (++attempts > MAX_ATTEMPTS) {
        console.warn("gpx2gm: JB.icons never appeared, giving up");
        return;
      }
      rafId = requestAnimationFrame(apply);
      return;
    }
    window.JB.icons.start      = def("start.png");
    window.JB.icons.restaurant = def("buffet.png");
    window.JB.icons.bar        = def("buffet.png");
    window.JB.icons.lodging    = def("villa.png");
    window.JB.icons.hotel      = def("villa.png");
    window.JB.icons.residence  = def("villa.png");
  };
  rafId = requestAnimationFrame(apply);

  return () => cancelAnimationFrame(rafId);
}
