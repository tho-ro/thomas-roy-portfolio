import SectionScroll from "@/components/SectionScroll";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <SectionScroll>
      <IntroSection />
      {projects.map((project) => (
        <GallerySection key={project.slug} project={project} />
      ))}
      <AboutSection />
      <ContactSection />
    </SectionScroll>
  );
}
