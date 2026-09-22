import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/" className="text-xs text-foreground/50 hover:text-foreground">
        ← Travaux
      </Link>

      <div className="mt-6 mb-12 max-w-2xl">
        <h1 className="text-2xl font-medium tracking-tight">{project.title}</h1>
        <p className="mt-2 text-sm text-foreground/50">
          {project.location} — {project.year}
        </p>
        <p className="mt-4 text-foreground/70">{project.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {project.photos.map((photo, index) => (
          <div key={photo.src} className="relative aspect-[4/5] overflow-hidden bg-foreground/5">
            <Image
              src={photo.src}
              alt={photo.alt || `${project.title} ${index + 1}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
