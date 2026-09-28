"use client";

import { createContext, useCallback, useContext, useState } from "react";

const NavAppearanceContext = createContext<{
  isOverPhoto: boolean;
  setOverPhoto: (id: string, over: boolean) => void;
} | null>(null);

export function NavAppearanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [overIds, setOverIds] = useState<Set<string>>(new Set());

  const setOverPhoto = useCallback((id: string, over: boolean) => {
    setOverIds((prev) => {
      const next = new Set(prev);
      if (over) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  }, []);

  return (
    <NavAppearanceContext.Provider
      value={{ isOverPhoto: overIds.size > 0, setOverPhoto }}
    >
      {children}
    </NavAppearanceContext.Provider>
  );
}

export function useNavAppearance() {
  const ctx = useContext(NavAppearanceContext);
  if (!ctx) {
    throw new Error("useNavAppearance must be used within a NavAppearanceProvider");
  }
  return ctx;
}
