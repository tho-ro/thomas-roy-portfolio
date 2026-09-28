import SectionScroll from "@/components/SectionScroll";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DeferredSection from "@/components/DeferredSection";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <SectionScroll initialId="intro">
      <IntroSection />
      {projects.map((project) => (
        <DeferredSection key={project.slug} id={project.slug}>
          <GallerySection project={project} />
        </DeferredSection>
      ))}
      <DeferredSection id="a-propos">
        <AboutSection />
      </DeferredSection>
      <DeferredSection id="contact">
        <ContactSection />
      </DeferredSection>
    </SectionScroll>
  );
}
