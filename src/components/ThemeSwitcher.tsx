"use client";

import { useTheme, type ThemeMode } from "@/components/ThemeProvider";

const options: { mode: ThemeMode; label: string }[] = [
  { mode: "light", label: "Clair" },
  { mode: "dark", label: "Sombre" },
  { mode: "auto", label: "Auto" },
];

export default function ThemeSwitcher({ onPhoto }: { onPhoto: boolean }) {
  const { mode, setMode } = useTheme();

  return (
    <div className="flex items-center gap-1 text-xs tracking-wide uppercase">
      {options.map((option) => {
        const active = mode === option.mode;
        const activeClass = onPhoto ? "text-white" : "text-foreground";
        const inactiveClass = onPhoto
          ? "text-white/40 hover:text-white/70"
          : "text-foreground/40 hover:text-foreground/70";

        return (
          <button
            key={option.mode}
            type="button"
            onClick={() => setMode(option.mode)}
            aria-pressed={active}
            className={`px-2 py-1 transition-colors ${active ? activeClass : inactiveClass}`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
