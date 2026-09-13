"use client";
import { useState } from 'react';
import Link from 'next/link'
import styles from "./layout.module.css"

export default function Navbar() {
  const [menuOuvert,setMenuOuvert] = useState(false);
  return (
    <nav className={styles.navbar}>
        <Link href="/"><span className={styles.logo}>TATIANA</span></Link>
        
        {/* Bouton burger visible sur menu */}
        <button
          className={styles.burger}
          onClick={()=>setMenuOuvert(!menuOuvert)}
          aria-label='Ouvrir le menu'
        >
          ☰
        </button>

        {/* pour les lien */}
        <div className={`${styles.links} ${menuOuvert ? styles.linksOuvert : ""}`}>
            <Link href="/#projets" onClick={()=>setMenuOuvert(false)}>Projets</Link>
            <Link href="/#competences" onClick={()=>setMenuOuvert(false)}>Compétences</Link>
            <Link href="/#contact" onClick={()=>setMenuOuvert(false)}> Contact</Link>
        </div>
    </nav>
  )
}
