import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionScroll from "@/components/SectionScroll";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DeferredSection from "@/components/DeferredSection";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — Thomas Roy`;

  return {
    title,
    description: project.description,
    alternates: {
      canonical: `/travaux/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      images: [project.cover.src],
    },
  };
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
    <SectionScroll initialId={slug}>
      <DeferredSection id="intro">
        <IntroSection />
      </DeferredSection>
      {projects.map((p) =>
        p.slug === slug ? (
          <GallerySection key={p.slug} project={p} />
        ) : (
          <DeferredSection key={p.slug} id={p.slug}>
            <GallerySection project={p} />
          </DeferredSection>
        ),
      )}
      <DeferredSection id="a-propos">
        <AboutSection />
      </DeferredSection>
      <DeferredSection id="contact">
        <ContactSection />
      </DeferredSection>
    </SectionScroll>
  );
}
