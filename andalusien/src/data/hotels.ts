export interface Hotel {
  night: number;
  label: string;
  name: string;
  address: string;
  mapsUrl: string;
  hotelUrl: string;
}

export const hotels: Hotel[] = [
  {
    night: 0,
    label: "Anreise",
    name: "ibis budget Málaga Centro",
    address: "C. Calvo, 4, Distrito Centro, 29007 Málaga",
    mapsUrl: "https://maps.app.goo.gl/dqPUsde2eK5T1xgp9",
    hotelUrl: "https://all.accor.com/hotel/6350/index.de.shtml",
  },
  {
    night: 1,
    label: "Tag 1",
    name: "Hotel Casablanca",
    address: "Pl. San Cristóbal, 4, 18690 Almuñécar",
    mapsUrl: "https://maps.app.goo.gl/R4x3oYTNdmbRPqT98",
    hotelUrl: "https://www.hotelcasablancaalmunecar.com/",
  },
  {
    night: 2,
    label: "Tag 2",
    name: "Hotel Taray Botanico",
    address: "A-348, 18, 18400 Órgiva",
    mapsUrl: "https://maps.app.goo.gl/cbZLMrkjUMJiR7vV6",
    hotelUrl: "https://www.tarayhotel.com/",
  },
  {
    night: 3,
    label: "Tag 3",
    name: "Hotel Palacio de Oñate",
    address: "C. Mira de Amezcua, 3, 18500 Guadix",
    mapsUrl: "https://maps.app.goo.gl/xgMzs31peHvoYRZ3A",
    hotelUrl: "http://palaciodeonate.com/",
  },
  {
    night: 4,
    label: "Tag 4 + 5",
    name: "Monjas del Carmen Hotel",
    address: "Pl. de Cuchilleros, 13, Centro, 18009 Granada",
    mapsUrl: "https://maps.app.goo.gl/PvXiVbtA8bhkKAKp8",
    hotelUrl: "https://www.hotelmonjasdelcarmen.com/",
  },
  {
    night: 5,
    label: "Tag 6",
    name: "Hotel Torremar - Mares",
    address: "C. Saladero Viejo, 15, 29740 Torre del Mar",
    mapsUrl: "https://maps.app.goo.gl/sLN6kNGsWAmBWY4e8",
    hotelUrl: "https://www.hoteltorremar.com/de/",
  },
  {
    night: 6,
    label: "Tag 7",
    name: "ibis budget Málaga Centro",
    address: "C. Calvo, 4, Distrito Centro, 29007 Málaga",
    mapsUrl: "https://maps.app.goo.gl/dqPUsde2eK5T1xgp9",
    hotelUrl: "https://all.accor.com/hotel/6350/index.de.shtml",
  },
];
