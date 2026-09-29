import type { Metadata } from "next";
import SectionScroll from "@/components/SectionScroll";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DeferredSection from "@/components/DeferredSection";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "À propos — Thomas Roy",
  description:
    "Né en 1974 à La Rochelle. Photographe documentaire, auteur de Fragments d'Angola (Actes Sud, 2006) et d'un travail au long cours sur les paysages urbains du monde entier.",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <SectionScroll initialId="a-propos">
      <DeferredSection id="intro">
        <IntroSection />
      </DeferredSection>
      {projects.map((project) => (
        <DeferredSection key={project.slug} id={project.slug}>
          <GallerySection project={project} />
        </DeferredSection>
      ))}
      <AboutSection />
      <DeferredSection id="contact">
        <ContactSection />
      </DeferredSection>
    </SectionScroll>
  );
}
