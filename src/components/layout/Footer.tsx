import Link from 'next/link'
// import styles from "./Footer.module.css"
import styles from "./layout.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p className={styles.textFooter}>TATIANA tout droit reservé</p>
        <div className={styles.linkSocial}>
            <Link href="#">Github</Link>
            <Link href="#">Linkedin</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Youtube</Link>

        </div>
    </footer>
  )
}
