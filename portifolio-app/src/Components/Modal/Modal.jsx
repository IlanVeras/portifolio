import React from "react";
import styles from "./Modal.module.css"

export default function Modal({projetoL,projetoRep}){
    const [isOpen,setIsOpen] = React.useState(false)
    const abrirModal = () => setIsOpen(true)
    const fecharModal = () => setIsOpen(false)
    return(
        <div>
            <button onClick={abrirModal}className={styles.openButton}>
                Acessar
            </button>

            {
                isOpen && (
                    <div className={styles.overlay}>
                        <div className={styles.modal}>
                            <button onClick={fecharModal}  className={styles.closeButton}>X</button>
                            <div className={styles.pOver}>
                                <p>Acessar</p>
                            </div>
                            <div className={styles.links}>
                                <a href={projetoL} target="_blank"> Projeto</a>
                                <a href={projetoRep} target="_blank"> Repositório</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}