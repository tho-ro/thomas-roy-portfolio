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
    "Thomas Roy est un photographe documentaire et artistique. Son travail explore les territoires, leurs habitants et leurs transformations.",
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
