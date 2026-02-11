import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PortfolioOverview } from "@/components/sections/PortfolioOverview";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Main portfolio page — assembles all sections in order:
 * Hero → About → Experience → Skills → Certifications → Projects → Overview → Contact
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <PortfolioOverview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
