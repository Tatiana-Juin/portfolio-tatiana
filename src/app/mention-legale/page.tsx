import styles from "./mention-legale.module.css"
export default function MentionLegalePage(){
    return(
        <div className={styles.container}>

            <h1 className={styles.title}>Mention Legale</h1>

            <section className={styles.section}>
                <h2>Editeur du site</h2>
                <p>
                    Ce site est édité par Tatiana Juin 
                    <br />
                    contact web : Mon linkedin qui est dans le footer 
                </p>
            </section>

            {/* HEBERGEMENT */}
            <section className={styles.section}>
                <h2>Hébergement</h2>
                <p>
                    Ce site est hébergé par Vercel Inc.
                    <br />
                    340 S Lemon Ave #4133, Walnut, CA 91789, Etat-Unis 
                </p>
            </section>
        {/* PROPRIETE INTELLECTUELLE  */}
            <section className={styles.section}>
                <h2>Propriété intellctuelle</h2>
                <p>
                    L'ensemble des contenus présents sur ce site (textes, images, code) est la propriété de Tatiana Juin, sauf mention contraire. 
                    
                </p>
            </section>

            <section className={styles.section}>
                <h2>Données personnelles</h2>
                <p>
                    Ce sites ne collecte aucunes données personnelle.
                    <br /><br />
                    Ce site n'utilise aucun cookie tiers à des fins publicitaires ou de mesure d'audience (pas de Google Analytics par exemple)
                    
                    
                </p>
            </section>
        </div>
    )
}