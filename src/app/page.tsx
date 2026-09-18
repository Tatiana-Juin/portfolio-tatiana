import styles from "./page.module.css"
import Hero from "@/components/home/Hero";
import AboutCard from "@/components/home/AboutCard";
import SocialLinksPanel from "@/components/home/SocialLinksPanel";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TechStackSection from "@/components/tech-stack/TechStackSection";

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <Hero />
      </div>

      <div className={styles.aboutRow}>
        <AboutCard />
        <SocialLinksPanel />
      </div>
      <ProjectsSection />
      <TechStackSection />
    </div>
  );
}
