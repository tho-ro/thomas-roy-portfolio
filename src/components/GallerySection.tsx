"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { useGalleryVisibility } from "@/components/GalleryVisibility";
import { useNavAppearance } from "@/components/NavAppearance";

export default function GallerySection({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { setGalleryOpen } = useGalleryVisibility();
  const { setOverPhoto } = useNavAppearance();

  useEffect(() => {
    if (open) {
      scrollerRef.current?.focus();
    }
    setGalleryOpen(project.slug, open);
    return () => setGalleryOpen(project.slug, false);
  }, [open, project.slug, setGalleryOpen]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // The nav should switch to a dark scrim + white text whenever the cover
    // photo behind it is visible, regardless of the light/dark site theme,
    // since a photo's brightness has nothing to do with the chosen theme.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverPhoto(project.slug, entry.isIntersecting && !open);
      },
      { threshold: 0.5 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      setOverPhoto(project.slug, false);
    };
  }, [open, project.slug, setOverPhoto]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // React attaches onWheel as a passive listener, so preventDefault()
    // there can't stop the page's vertical scroll. A native listener with
    // passive: false is required to redirect wheel input to horizontal scroll.
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      e.stopPropagation();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      el!.scrollLeft += delta;
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  function scrollToIndex(target: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(target, project.photos.length - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  }

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      e.stopPropagation();
      scrollToIndex(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      e.stopPropagation();
      scrollToIndex(index - 1);
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setOpen(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      id={project.slug}
      data-section
      className="relative h-screen w-screen snap-start overflow-hidden bg-background"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={project.cover.src}
          alt={project.title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-start justify-end gap-4 p-8 text-white sm:p-16">
          <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
            {project.location} — {project.year}
          </span>
          <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
            {project.title}
          </h2>
          <p className="max-w-md text-white/80">{project.description}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-2 border border-white/60 px-5 py-2 text-sm tracking-wide uppercase transition-colors hover:bg-white hover:text-black"
          >
            Voir les images
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-0 ${open ? "" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <div
          ref={scrollerRef}
          tabIndex={open ? 0 : -1}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden outline-none"
        >
          {project.photos.map((photo, i) => (
            <div
              key={photo.src}
              className="relative h-full w-screen flex-none snap-center"
            >
              <Image
                src={photo.src}
                alt={`${project.title} ${i + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-sm text-foreground/70 hover:text-foreground"
        >
          Fermer ✕
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-foreground/60">
          {index + 1} / {project.photos.length}
        </div>
      </div>
    </section>
  );
}
