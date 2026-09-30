import type { Metadata } from "next";
import WorkshopForm from "@/components/WorkshopForm";

export const metadata: Metadata = {
  title: "Ateliers labo noir et blanc — Thomas Roy",
  description:
    "Ateliers d'initiation au développement et au tirage argentique noir et blanc en laboratoire, animés par Thomas Roy.",
  alternates: {
    canonical: "/ateliers",
  },
};

export default function AteliersPage() {
  return (
    <div className="h-screen overflow-y-auto bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 pt-32 pb-24 sm:px-16">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Ateliers d&apos;initiation au labo noir et blanc
        </h1>
        <div className="mt-6 space-y-4 text-foreground/70">
          <p>
            Une découverte du développement et du tirage argentique en
            laboratoire noir et blanc : de la pellicule exposée au tirage
            papier, en passant par les bains de révélateur et de fixateur.
          </p>
          <p>
            Places limitées. Laisse tes coordonnées ci-dessous pour te
            pré-inscrire, Thomas te recontactera pour organiser la séance.
          </p>
        </div>

        <div className="mt-12">
          <WorkshopForm />
        </div>
      </div>
    </div>
  );
}
