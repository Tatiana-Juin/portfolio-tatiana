import { TechCategory } from "@/data/techStack"
import TechBadge from "./TechBadge"
import styles from "./TechCategoryBlock.module.css"

interface TechCategoryPropos{
  category:TechCategory
}
export default function TechCategoryBlock({category} : TechCategoryPropos) {
  return (
    <div className={`${styles.block} ${styles[category.color]}`} >
      <h3 className={styles.title}> {category.title} </h3>
        <div className={styles.badgeList}>
            {category.items.map((item) =>(
              <TechBadge key={item.id} name={item.name} />
            ))}
        </div>
    </div>
  )
}
