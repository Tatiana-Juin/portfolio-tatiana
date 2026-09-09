import Button from "../ui/Button"
import styles from "./SocialLinksPanel.module.css"
interface linkSocial {
  id:number,
    name: string,
    url:string
}

const github : linkSocial = {
  id: 1,
  name:"Github",
  url :"https://github.com/Tatiana-Juin"
}

const linkedin : linkSocial = {
  id: 2,
  name:"linkedin",
  url :"https://www.linkedin.com/in/tatiana-juin/"
}


// pour créer un tableau pour faire un map 
const socialLinks : linkSocial[] = [github,linkedin];
export default function SocialLinksPanel() {
  return (
    <div className={styles.panel}>
        {socialLinks.map((link) =>(
          <Button key={link.id} href={link.url} >
              {link.name}
          </Button>
        ))}

    </div>

  )
}
