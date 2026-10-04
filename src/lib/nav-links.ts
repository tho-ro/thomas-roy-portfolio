export const INSTAGRAM_URL = "https://www.instagram.com/tho_ro/";

export type NavLink = { label: string; id?: string; href?: string };

export const links: NavLink[] = [
  { id: "angola", label: "Travaux" },
  { id: "a-propos", label: "À propos" },
  { href: "/ateliers", label: "Ateliers" },
  { id: "contact", label: "Contact" },
];
