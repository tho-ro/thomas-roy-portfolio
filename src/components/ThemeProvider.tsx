"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "auto";
type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme-mode";
const AUTO_RECHECK_INTERVAL_MS = 60_000;

function getTimeBasedTheme(): ResolvedTheme {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 7 ? "dark" : "light";
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode === "auto" ? getTimeBasedTheme() : mode;
}

// Keep in sync with the inline script in layout.tsx that applies the theme
// before hydration to avoid a flash of the wrong theme.
export const THEME_INIT_SCRIPT = `(function(){try{var m=localStorage.getItem('${STORAGE_KEY}')||'auto';var t=m;if(m==='auto'){var h=new Date().getHours();t=(h>=19||h<7)?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

const ThemeContext = createContext<{
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("auto");
  // Only used to force a re-render every minute so "auto" mode keeps
  // re-evaluating the current time; the resolved theme itself is derived
  // during render rather than stored as its own state.
  const [, forceTick] = useState(0);

  useEffect(() => {
    // localStorage isn't available during SSR, so the stored preference can
    // only be read after mount. Syncing local state from this external
    // system on mount is the documented exception to "don't setState in an
    // effect" (see https://react.dev/learn/you-might-not-need-an-effect).
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setModeState(stored);
  }, []);

  useEffect(() => {
    if (mode !== "auto") return;
    const interval = setInterval(() => {
      forceTick((t) => t + 1);
    }, AUTO_RECHECK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [mode]);

  const resolvedTheme = resolveTheme(mode);

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
  }, [resolvedTheme]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
