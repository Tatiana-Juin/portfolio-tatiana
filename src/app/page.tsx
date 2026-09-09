
import styles from "./page.module.css"
import Hero from "@/components/home/Hero";
import AboutCard from "@/components/home/AboutCard";
import SocialLinksPanel from "@/components/home/SocialLinksPanel";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={styles.aboutRow}>
         <AboutCard />
        <SocialLinksPanel />
      </div>
      
    </div>
  );
}
