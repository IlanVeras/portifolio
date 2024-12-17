import styles from "./Contato.module.css"


export default function Contato(){
    return(
        <div className={`${styles.container} Animate`}>
            <h1>Contato</h1>
            <div className={styles.allInfos}>
                <div className={styles.infoImage}>
                    <a href="https://github.com/IlanVeras" target="_blank">
                        <img src="./icons/github.png"></img>
                        <div>GitHub</div>
                    </a>
                </div>
                <div className={styles.infoImage}>
                    <a href="https://br.linkedin.com/in/ilan-veras-247405216" target="_blank">
                        <img src="./icons/linkedin.png"></img>
                        <div>Linkedin</div>
                    </a>
                </div>
                <div className={styles.infoImage}>
                    <a href="mailto:ilanveras761@gmail.com">
                        <img src="./icons/email.png"></img>
                        <div>ilanveras761@gmail.com</div>
                    </a>
                </div>
            </div>
        </div>
    )
}