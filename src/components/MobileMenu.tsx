"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { themeOptions } from "@/components/ThemeSwitcher";
import { INSTAGRAM_URL, type NavLink } from "@/lib/nav-links";

export default function MobileMenu({
  open,
  onClose,
  links,
  onNavigate,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  onNavigate: (id: string) => void;
}) {
  const { mode, setMode } = useTheme();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-10 bg-background text-foreground transition-opacity duration-300 sm:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer le menu"
        className="absolute top-6 right-6 text-sm text-foreground/70 hover:text-foreground"
      >
        Fermer ✕
      </button>

      <nav className="flex flex-col items-center gap-6">
        {links.map((link) =>
          link.href ? (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-2xl font-medium tracking-wide uppercase text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ) : (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate(link.id!)}
              className="text-2xl font-medium tracking-wide uppercase text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ),
        )}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-medium tracking-wide uppercase text-foreground/80 transition-colors hover:text-foreground"
        >
          Instagram
        </a>
      </nav>

      <div className="flex items-center gap-6 text-xs tracking-wide uppercase">
        {themeOptions.map((option) => {
          const active = mode === option.mode;
          return (
            <button
              key={option.mode}
              type="button"
              onClick={() => setMode(option.mode)}
              aria-pressed={active}
              className={`transition-colors ${
                active
                  ? "text-foreground"
                  : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
