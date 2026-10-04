"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="a-propos"
      data-section
      className={`flex h-dvh w-screen snap-start overflow-y-auto bg-background px-6 py-12 text-foreground sm:items-center sm:px-16 sm:py-24 ${
        expanded ? "items-start" : "items-center"
      }`}
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-12">
        <div className="relative aspect-[16/9] overflow-hidden bg-foreground/5 sm:aspect-[4/3]">
          <Image
            src="/photos/misc/about.jpg"
            alt="Vietnam, 2012"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-md">
          <h2 className="text-2xl font-medium tracking-tight">À propos</h2>
          <div className="mt-4 space-y-3 text-foreground/70 sm:mt-6 sm:space-y-4">
            <p className={expanded ? "" : "line-clamp-3 sm:line-clamp-none"}>
              Né en 1974 à La Rochelle, vit et travaille à Paris. C&apos;est
              pendant ses études de Sciences Humaines que Thomas commence à
              photographier, avant de poursuivre sa formation aux Beaux-Arts
              de Poitiers et de se dédier à la photographie et aux voyages.
            </p>
            <p className={expanded ? "" : "hidden sm:block"}>
              De 2000 à 2004, il effectue plusieurs séjours en Angola, alors
              en proie à une guerre civile interminable à laquelle la presse
              internationale ne prête plus aucune attention. Ses travaux sont
              publiés par Actes Sud en 2006 sous le titre «&nbsp;Fragments
              d&apos;Angola&nbsp;», avec des textes de son frère, et traduits
              en portugais par les éditions Teorema.
            </p>
            <p className={expanded ? "" : "hidden sm:block"}>
              Depuis, Thomas a entrepris un long travail sur les paysages
              urbains du monde entier, de Delhi à Hanoi, de Porto à
              Reykjavik, et anime des ateliers photo auprès du jeune public.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 text-sm text-foreground/60 underline underline-offset-4 transition-colors hover:text-foreground sm:hidden"
          >
            {expanded ? "Lire moins" : "Lire plus"}
          </button>
        </div>
      </div>
    </section>
  );
}
