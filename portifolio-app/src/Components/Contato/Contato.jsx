import styles from "./Contato.module.css"


export default function Contato(){
    return(
        <div>
            <h1>Contato</h1>
            <ul>
                <li>Email: ilanbarrosveras123@gmail.com</li>
            </ul>
            <div className={styles.infoImage}>
                <img src="./icons/github.png"></img>
            </div>
            <div className={styles.infoImage}>
                <img src="./icons/linkedin.png"></img>
            </div>
            <div className={styles.infoImage}>
                <img src="./icons/email.png"></img>
            </div>
        </div>
    )
}