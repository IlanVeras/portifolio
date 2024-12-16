import styles from "./Tec.module.css"

export default function Tec({tec}){
    return(
        <div className={styles.container}>
            {tec}
        </div>
    )
}