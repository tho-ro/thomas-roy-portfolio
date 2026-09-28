"use client";

import { useRouter } from "next/navigation";
import { useGalleryVisibility } from "@/components/GalleryVisibility";
import { useNavAppearance } from "@/components/NavAppearance";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const links = [
  { id: "angola", label: "Travaux" },
  { id: "a-propos", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const router = useRouter();
  const { isAnyOpen } = useGalleryVisibility();
  const { isOverPhoto } = useNavAppearance();

  function scrollToId(id: string) {
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
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
        <div className="flex items-center gap-6">
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
      </div>
    </header>
  );
}
