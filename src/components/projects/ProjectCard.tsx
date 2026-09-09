import {projectFinale} from "../../data/projects"
import styles from "./ProjectCard.module.css"
export default function ProjectCard() {
  return (
    <div className={styles.cardsProjects}>
        {projectFinale.map((projet)=>(
            <div key={projet.id} className={styles.card}>
                <div className={`${styles.category} ${projet.category ==="fullstack" ? styles.purple : styles.yellow}`}>
                    <p>{projet.category}</p>
                </div>
                <h3> {projet.name} </h3>
                <p>{projet.description}</p>
                <div className={styles.tag}>
                    <ul>
                        {projet.tag.map((t)=>(
                            <li key={t}> {t} </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        ))}
    </div>
  )
}
