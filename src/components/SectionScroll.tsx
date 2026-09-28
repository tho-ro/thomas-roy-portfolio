"use client";

import { useEffect, useRef } from "react";

const NAV_KEYS = ["ArrowDown", "ArrowUp", "PageDown", "PageUp"];

export default function SectionScroll({
  children,
  initialId,
}: {
  children: React.ReactNode;
  initialId?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targetId = window.location.hash
      ? window.location.hash.slice(1)
      : initialId;
    if (targetId) {
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "auto", block: "start" });
    }

    function onKeyDown(e: KeyboardEvent) {
      if (!NAV_KEYS.includes(e.key)) return;

      const sections = Array.from(
        container!.querySelectorAll<HTMLElement>("[data-section]"),
      );
      if (!sections.length) return;

      const scrollTop = container!.scrollTop;
      let currentIndex = 0;
      let smallestDiff = Infinity;
      sections.forEach((el, i) => {
        const diff = Math.abs(el.offsetTop - scrollTop);
        if (diff < smallestDiff) {
          smallestDiff = diff;
          currentIndex = i;
        }
      });

      e.preventDefault();
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        sections[Math.min(currentIndex + 1, sections.length - 1)].scrollIntoView({
          behavior: "smooth",
        });
      } else {
        sections[Math.max(currentIndex - 1, 0)].scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [initialId]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
    >
      {children}
    </div>
  );
}
