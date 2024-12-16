import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header(){
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.navLink}>Home</NavLink>
                <NavLink to="/sobre" className={styles.navLink}>Sobre</NavLink>
                <NavLink to="/contato" className={styles.navLink}>Contato</NavLink>
            </nav>
        </div>
    )
}