export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: "Downloads", to: "/downloads" },
  { label: "Strecken", to: "/strecken" },
  { label: "Hotels", to: "/hotels" },
];
