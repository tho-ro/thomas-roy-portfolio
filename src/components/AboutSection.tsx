import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      data-section
      className="flex h-screen w-screen snap-start items-center bg-background px-6 py-24 text-foreground sm:px-16"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 sm:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
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
          <div className="mt-6 space-y-4 text-foreground/70">
            <p>
              Né en 1974 à La Rochelle, vit et travaille à Paris. C&apos;est
              pendant ses études de Sciences Humaines que Thomas commence à
              photographier, avant de poursuivre sa formation aux Beaux-Arts
              de Poitiers et de se dédier à la photographie et aux voyages.
            </p>
            <p>
              De 2000 à 2004, il effectue plusieurs séjours en Angola, alors
              en proie à une guerre civile interminable à laquelle la presse
              internationale ne prête plus aucune attention. Ses travaux sont
              publiés par Actes Sud en 2006 sous le titre «&nbsp;Fragments
              d&apos;Angola&nbsp;», avec des textes de son frère, et traduits
              en portugais par les éditions Teorema.
            </p>
            <p>
              Depuis, Thomas a entrepris un long travail sur les paysages
              urbains du monde entier, de Delhi à Hanoi, de Porto à
              Reykjavik, et anime des ateliers photo auprès du jeune public.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
