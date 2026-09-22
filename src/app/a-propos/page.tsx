import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Thomas Roy",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-foreground/5">
          <Image
            src="https://picsum.photos/seed/portrait/1200/1500"
            alt="Portrait de Thomas Roy"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-md">
          <h1 className="text-2xl font-medium tracking-tight">À propos</h1>
          <div className="mt-6 space-y-4 text-foreground/70">
            <p>
              Thomas Roy est un photographe documentaire et artistique. Son
              travail explore les territoires, leurs habitants et leurs
              transformations, entre reportage de terrain et recherche
              formelle.
            </p>
            <p>
              Ses projets l&apos;ont mené en Angola et au Vietnam, ainsi que
              dans l&apos;exploration des paysages urbains et naturels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
