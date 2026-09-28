import type { Metadata } from "next";
import SectionScroll from "@/components/SectionScroll";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DeferredSection from "@/components/DeferredSection";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Contact — Thomas Roy",
  description:
    "Contactez Thomas Roy pour toute demande de collaboration, tirage ou publication.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <SectionScroll initialId="contact">
      <DeferredSection id="intro">
        <IntroSection />
      </DeferredSection>
      {projects.map((project) => (
        <DeferredSection key={project.slug} id={project.slug}>
          <GallerySection project={project} />
        </DeferredSection>
      ))}
      <DeferredSection id="a-propos">
        <AboutSection />
      </DeferredSection>
      <ContactSection />
    </SectionScroll>
  );
}
