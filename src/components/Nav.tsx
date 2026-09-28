"use client";

import { useRouter } from "next/navigation";

const links = [
  { id: "angola", label: "Travaux" },
  { id: "a-propos", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const router = useRouter();

  function scrollToId(id: string) {
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/70 via-black/20 to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <button
          type="button"
          onClick={() => scrollToId("intro")}
          className="text-sm font-medium tracking-widest text-white uppercase"
        >
          Thomas Roy
        </button>
        <nav className="flex gap-6 text-sm tracking-wide">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToId(link.id)}
              className="text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
