import Link from 'next/link'
import styles from "./layout.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href="/"><span className={styles.logo}>TATIANA</span></Link>
        
        {/* pour les lien */}
        <div className={styles.links}>
            <Link href="/#projets">Projets</Link>
            <Link href="/#competences">Compétences</Link>
            <Link href="/#contact"> Contact</Link>
        </div>
    </nav>
  )
}
