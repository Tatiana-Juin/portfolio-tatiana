import styles from "./AboutCard.module.css"
export default function AboutCard() {
  return (
    <div className={styles.aboutCard}>
        <h2 className={styles.substitle}>A propos</h2>
        <p className={styles.description}>Passionnée par la programmation depuis plus de 5 ans je partage sur les reseaux sociaux mon apprentissages et mes projets.  </p>
    </div>
  )
}
