"use client";

import { createContext, useCallback, useContext, useState } from "react";

const GalleryVisibilityContext = createContext<{
  isAnyOpen: boolean;
  setGalleryOpen: (id: string, open: boolean) => void;
} | null>(null);

export function GalleryVisibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const setGalleryOpen = useCallback((id: string, open: boolean) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (open) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  }, []);

  return (
    <GalleryVisibilityContext.Provider
      value={{ isAnyOpen: openIds.size > 0, setGalleryOpen }}
    >
      {children}
    </GalleryVisibilityContext.Provider>
  );
}

export function useGalleryVisibility() {
  const ctx = useContext(GalleryVisibilityContext);
  if (!ctx) {
    throw new Error(
      "useGalleryVisibility must be used within a GalleryVisibilityProvider",
    );
  }
  return ctx;
}
