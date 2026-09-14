import { techCategories } from "@/data/techStack"
import TechCategoryBlock from "./TechCategoryBlock"
import styles from "./TechStackSection.module.css"
export default function TechStackSection() {
  return (
    <div className={styles.section} id="competences">
        <h2 className={styles.title}>Mes compétences</h2>
        {techCategories.map((category)=>(
            <TechCategoryBlock key={category.id} category={category} />
        ))}
    </div>
  )
}
