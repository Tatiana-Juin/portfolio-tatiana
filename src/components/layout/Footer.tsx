import Link from 'next/link'

import styles from "./layout.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
        <p className={styles.textFooter}>TATIANA tout droit reservé</p>

      <Link href="/mention-legale" className={styles.mentionLegale}>Mention legale</Link>

        <div className={styles.linkSocial}>
            <Link href="#">Github</Link>
            <Link href="#">Linkedin</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Youtube</Link>

        </div>
    </footer>
  )
}
