"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme, type ThemeMode } from "@/components/ThemeProvider";

const options: { mode: ThemeMode; label: string }[] = [
  { mode: "light", label: "Clair" },
  { mode: "dark", label: "Sombre" },
  { mode: "auto", label: "Auto" },
];

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M20 14.3A8.5 8.5 0 1 1 9.7 4a7 7 0 0 0 10.3 10.3Z" />
    </svg>
  );
}

export default function ThemeSwitcher({ onPhoto }: { onPhoto: boolean }) {
  const { mode, resolvedTheme, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const triggerColor = onPhoto
    ? "text-white/70 hover:text-white"
    : "text-foreground/70 hover:text-foreground";

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Choisir le thème"
        aria-expanded={open}
        className={`flex items-center justify-center p-1 transition-colors ${triggerColor}`}
      >
        {resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>

      {open && (
        <div
          className={`absolute top-full right-0 mt-3 flex flex-col items-stretch text-xs tracking-wide uppercase ${
            onPhoto ? "bg-black/80" : "bg-background/95"
          }`}
        >
          {options.map((option) => {
            const active = mode === option.mode;
            const activeClass = onPhoto ? "text-white" : "text-foreground";
            const inactiveClass = onPhoto
              ? "text-white/50 hover:text-white/80"
              : "text-foreground/50 hover:text-foreground/80";

            return (
              <button
                key={option.mode}
                type="button"
                onClick={() => {
                  setMode(option.mode);
                  setOpen(false);
                }}
                aria-pressed={active}
                className={`px-4 py-2 text-left whitespace-nowrap transition-colors ${
                  active ? activeClass : inactiveClass
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
