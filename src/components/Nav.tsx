"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGalleryVisibility } from "@/components/GalleryVisibility";
import { useNavAppearance } from "@/components/NavAppearance";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import MobileMenu from "@/components/MobileMenu";

const links = [
  { id: "angola", label: "Travaux" },
  { id: "a-propos", label: "À propos" },
  { id: "contact", label: "Contact" },
];

function HamburgerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      className="h-5 w-5"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export default function Nav() {
  const router = useRouter();
  const { isAnyOpen } = useGalleryVisibility();
  const { isOverPhoto } = useNavAppearance();
  const [mobileOpen, setMobileOpen] = useState(false);

  function scrollToId(id: string) {
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleMobileNavigate(id: string) {
    setMobileOpen(false);
    scrollToId(id);
  }

  return (
    <>
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 transition-[opacity,background-color] duration-300 ${
          isAnyOpen ? "opacity-0" : "opacity-100"
        } ${
          isOverPhoto
            ? "bg-gradient-to-b from-black/40 to-transparent"
            : "bg-gradient-to-b from-background/50 to-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-6 ${
            isAnyOpen ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToId("intro")}
            className={`text-sm font-medium tracking-widest uppercase transition-colors ${
              isOverPhoto ? "text-white" : "text-foreground"
            }`}
          >
            Thomas Roy
          </button>

          <div className="hidden items-center gap-6 sm:flex">
            <nav className="flex gap-6 text-sm tracking-wide">
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToId(link.id)}
                  className={`transition-colors ${
                    isOverPhoto
                      ? "text-white/70 hover:text-white"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div
              className={`h-4 w-px ${isOverPhoto ? "bg-white/20" : "bg-foreground/20"}`}
            />
            <ThemeSwitcher onPhoto={isOverPhoto} />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
            className={`flex items-center justify-center p-1 transition-colors sm:hidden ${
              isOverPhoto
                ? "text-white/80 hover:text-white"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
        onNavigate={handleMobileNavigate}
      />
    </>
  );
}
