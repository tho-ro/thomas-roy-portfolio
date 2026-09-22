import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-16 max-w-2xl">
        <h1 className="text-2xl font-medium tracking-tight">
          Thomas Roy
        </h1>
        <p className="mt-3 text-foreground/70">
          Photographe documentaire et artistique. Reportages, architecture
          urbaine et paysages.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/travaux/${project.slug}`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden bg-foreground/5">
              <Image
                src={project.cover.src}
                alt={project.cover.alt || project.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <h2 className="text-sm font-medium tracking-wide">{project.title}</h2>
              <span className="text-xs text-foreground/50">{project.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
