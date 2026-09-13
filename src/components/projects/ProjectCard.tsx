import {projectFinale} from "../../data/projects"
import styles from "./ProjectCard.module.css"
import Button from "../ui/Button"
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
                {/* pour les liens  */}
                <div className={styles.linkS}>
                    <Button href={projet.urlGithub} variant="dark">
                        Github
                    </Button>

                    {/* Si il a une demo */}
                    {projet.urlOnline ?(
                        <a href={projet.urlOnline} target="_blanck" rel="noopener noreferrer" className={styles.live} >
                            Live
                        </a>
                    ):(
                        <span className={styles.banckendOnly}> Pas de version en ligne</span>
                    )}

                </div>
                
            </div>
        ))}
    </div>
  )
}
