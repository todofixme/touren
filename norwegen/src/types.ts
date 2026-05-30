// ── tour.json ─────────────────────────────────────────────────────────────────
export interface TourLinks {
  roadbook: string;
  myMaps: string;
  komoot: string;
  ausschreibung: string;
}

export interface Tour {
  name: string;
  subtitle: string;
  dateRange: string;
  startEnd: string;
  totalKm: number;
  totalHm: number;
  ferries: number;
  rideDays: number;
  restDays: number;
  participants: number;
  links: TourLinks;
}

// ── stages.json ───────────────────────────────────────────────────────────────
export interface Stage {
  n: string;
  date: string;
  from: string;
  to: string;
  highlight: string;
  short_track: string | null;
  long_track: string | null;
  ferry: boolean;
}

// ── lodging.json ──────────────────────────────────────────────────────────────
export type LodgingType = 'hotel' | 'cabin';

export interface Lodging {
  date: string;
  place: string;
  name: string;
  type: LodgingType;
  url: string;
  address: string;
  note?: string;
}

// ── transits.json ─────────────────────────────────────────────────────────────
export type TransitKind = 'ferry' | 'bus';
export type TrackVariant = 'short' | 'long';

export interface Transit {
  kind: TransitKind;
  tracks: TrackVariant[];
  date: string;
  times: string[];
  route: string;
  duration: string;
  schedule: string[];
}

// ── track_sources.json ────────────────────────────────────────────────────────
export type TrackSourceKind = 'download' | 'online';

export interface TrackSource {
  kind: TrackSourceKind;
  format: string | null;
  label: string;
  description: string;
  url: string;
  verb: string;
  variant?: string;
}

// ── hints.json ────────────────────────────────────────────────────────────────
export interface Hint {
  n: string;
  tone: string;
  title: string;
  short: string;
  body: string;
}

// ── DataContext payload ───────────────────────────────────────────────────────
export interface AppData {
  tour: Tour;
  stages: Stage[];
  lodging: Lodging[];
  transits: Transit[];
  trackSources: TrackSource[];
  hints: Hint[];
}

// ── Tweaks ────────────────────────────────────────────────────────────────────
export type HeroLayout = 'stacked' | 'wordmark' | 'route';

export interface Tweaks {
  accent: string;
  topo: boolean;
  heroLayout: HeroLayout;
}
