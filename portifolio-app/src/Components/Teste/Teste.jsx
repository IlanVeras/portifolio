import styles from "./Teste.module.css"


export default function Teste({status,setStatus}){
    function handler(){
        setStatus(!status)
        console.log(status)
    }
    return(
        <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.modalTeste}>
                    <button onClick={handler}>Teste</button>
                    </div>
            </div>
        </div>
    )
}