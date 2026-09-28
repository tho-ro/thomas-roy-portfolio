"use client";

import { useTheme, type ThemeMode } from "@/components/ThemeProvider";

const options: { mode: ThemeMode; label: string }[] = [
  { mode: "light", label: "Clair" },
  { mode: "dark", label: "Sombre" },
  { mode: "auto", label: "Auto" },
];

export default function ThemeSwitcher() {
  const { mode, setMode } = useTheme();

  return (
    <div className="flex items-center gap-1 text-xs tracking-wide uppercase">
      {options.map((option) => (
        <button
          key={option.mode}
          type="button"
          onClick={() => setMode(option.mode)}
          aria-pressed={mode === option.mode}
          className={`px-2 py-1 transition-colors ${
            mode === option.mode
              ? "text-white"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
