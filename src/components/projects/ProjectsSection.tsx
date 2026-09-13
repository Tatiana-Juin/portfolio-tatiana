import styles from "./ProjectsSection.module.css"
import ProjectCard from "./ProjectCard"
export default function ProjectsSection() {
  return (
    <div className={styles.section} id="projets">
        <h2 className={styles.title}>Mes projets </h2>
        <p className={styles.subtitle}>Une selection de mes projets réalisés</p>
        <ProjectCard />
    </div>
  )
}
