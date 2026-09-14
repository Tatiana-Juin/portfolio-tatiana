import styles from "./TechBadge.module.css"

interface TechBadgePropos{
    name:string
}

export default function TechBadge({name} : TechBadgePropos) {
  return (
    <div className={styles.badge}>
        {name}
    </div>
  )
}
