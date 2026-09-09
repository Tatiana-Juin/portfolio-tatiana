import styles from "./Button.module.css"

interface ButtonProps{
    href:string,
    children: React.ReactNode,
    variant?:"light" | "dark"
};

export default function Button({href,children,variant="light"}:ButtonProps) {
  return (
    <a 
    href={href}
    target="__blanck"
    // pour eviter qu'il est window.opener un site ne fait jamais ca sauf un site malveillant 
    rel="noopener noreferrer"
    className={`${styles.button} ${styles[variant]}`}
    >
        {children}
    </a>
        
    
  )
}
