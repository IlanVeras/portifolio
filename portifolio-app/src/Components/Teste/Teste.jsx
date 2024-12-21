import styles from "./Teste.module.css"


export default function Teste({status,setStatus, link, repositorio}){
    function handler(){
        setStatus(!status)
        console.log(status)
    }
    if(link == ""){
        return(
        <div className={`${styles.container} ${styles.animateModal}`}>
            <div className={styles.navBar}>
                <div className={styles.modalTeste}>
                    <button onClick={handler} className={styles.btn}>X</button>
                    <div className={styles.containerLinks}>
                        <a href={repositorio} target="_blank" rel="noopener noreferrer">Repositório</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return(
        <div className={`${styles.container} ${styles.animateModal}`}>
            <div className={styles.navBar}>
                <div className={styles.modalTeste}>
                    <button onClick={handler} className={styles.btn}>X</button>
                    <div className={styles.containerLinks}>
                        <a href={link} target="_blank" rel="noopener noreferrer">Projeto</a>
                        <a href={repositorio} target="_blank" rel="noopener noreferrer">Repositório</a>
                    </div>
                </div>
            </div>
        </div>
    )
}