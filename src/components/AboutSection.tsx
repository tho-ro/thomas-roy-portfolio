import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      data-section
      className="flex h-screen w-screen snap-start items-center bg-black px-6 py-24 text-white sm:px-16"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 sm:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
          <Image
            src="https://picsum.photos/seed/portrait/1200/1500"
            alt="Portrait de Thomas Roy"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-md">
          <h2 className="text-2xl font-medium tracking-tight">À propos</h2>
          <div className="mt-6 space-y-4 text-white/70">
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
    </section>
  );
}
