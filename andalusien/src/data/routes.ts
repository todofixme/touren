export interface RouteVariant {
  type: "kurz" | "lang" | "gravel";
  file: string;
  distanceKm: number;
}

export interface StageRoute {
  day: number;
  label: string;
  from: string;
  to: string;
  variants: RouteVariant[];
}

export const stageRoutes: StageRoute[] = [
  {
    day: 1,
    label: "Tag 1",
    from: "Málaga",
    to: "Almuñécar",
    variants: [
      { type: "kurz", file: "A_1_080km.gpx", distanceKm: 80 },
      { type: "lang", file: "A_1_147km.gpx", distanceKm: 147 },
      { type: "gravel", file: "A_1_G_116km.gpx", distanceKm: 116 },
    ],
  },
  {
    day: 2,
    label: "Tag 2",
    from: "Almuñécar",
    to: "Órgiva",
    variants: [
      { type: "kurz", file: "A_2_112km.gpx", distanceKm: 112 },
      { type: "lang", file: "A_2_165km.gpx", distanceKm: 165 },
      { type: "gravel", file: "A_2_G_110km.gpx", distanceKm: 110 },
    ],
  },
  {
    day: 3,
    label: "Tag 3",
    from: "Órgiva",
    to: "Guadix",
    variants: [
      { type: "kurz", file: "A_3_114km.gpx", distanceKm: 114 },
      { type: "lang", file: "A_3_165km.gpx", distanceKm: 165 },
      { type: "gravel", file: "A_3_G_158km.gpx", distanceKm: 158 },
    ],
  },
  {
    day: 4,
    label: "Tag 4",
    from: "Guadix",
    to: "Granada",
    variants: [
      { type: "kurz", file: "A_4_066km.gpx", distanceKm: 66 },
      { type: "lang", file: "A_4_141km.gpx", distanceKm: 141 },
      { type: "gravel", file: "A_4_G_094km.gpx", distanceKm: 94 },
    ],
  },
  {
    day: 5,
    label: "Tag 5",
    from: "Granada",
    to: "Ruhetag",
    variants: [
      { type: "lang", file: "A_5_098km.gpx", distanceKm: 98 },
      { type: "gravel", file: "A_5_G_058km.gpx", distanceKm: 58 },
    ],
  },
  {
    day: 6,
    label: "Tag 6",
    from: "Granada",
    to: "Torre del Mar",
    variants: [
      { type: "kurz", file: "A_6_115km.gpx", distanceKm: 115 },
      { type: "lang", file: "A_6_177km.gpx", distanceKm: 177 },
      { type: "gravel", file: "A_6_G_142km.gpx", distanceKm: 142 },
    ],
  },
  {
    day: 7,
    label: "Tag 7",
    from: "Torre del Mar",
    to: "Málaga",
    variants: [
      { type: "kurz", file: "A_7_097km.gpx", distanceKm: 97 },
      { type: "lang", file: "A_7_174km.gpx", distanceKm: 174 },
      { type: "gravel", file: "A_7_G_087km.gpx", distanceKm: 87 },
    ],
  },
];
