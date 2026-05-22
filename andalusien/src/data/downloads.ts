export interface ZipArchive {
  label: string;
  url: string | null;
}

export const zipArchives: ZipArchive[] = [
  { label: "Alle Strecken im GPX-Format", url: "/andalusien/tracks/andalusien_gpx.zip" },
  { label: "Alle Strecken im TCX-Format", url: "/andalusien/tracks/andalusien_tcx.zip" },
  { label: "Alle Strecken im GPX-Format (Plus-Variante)", url: "/andalusien/tracks/andalusien_gpx_plus.zip" },
  { label: "Alle Strecken im TCX-Format (Plus-Variante)", url: "/andalusien/tracks/andalusien_tcx_plus.zip" },
];
