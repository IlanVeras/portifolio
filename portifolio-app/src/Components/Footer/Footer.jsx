import styles from "./Footer.module.css"
import { Link, NavLink } from "react-router-dom"
export default function Footer(){
    return(
        <div className={styles.container}>
            <footer>
                Alguns Direitos Reservados
            </footer>
            <div className={styles.verMais}>
                    <a href="/mais">Ver Mais</a>
             </div>
        </div>
    )
}