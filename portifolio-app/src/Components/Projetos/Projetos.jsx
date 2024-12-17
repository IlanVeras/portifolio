import React from "react"
import projetosObj from "../../assets/ProjetosLinks.json"
import SitePreview from "../SitePreview/SitePreview"
import Tec from "../Tec/Tec"
import styles from "./Projetos.module.css"
import Modal from "../Modal/Modal"
import Teste from "../Teste/Teste"

export default function Projetos(){
    const [status,setStatus] = React.useState(false)

    function handler(){
        setStatus(!status)
        console.log(status)
    }
    return(
        <div className={`${styles.container} Animate`}>
            {/* {status && <Teste status={status} setStatus={setStatus}/>}
            <button onClick={handler}>Teste</button> */}
            
            {
                projetosObj.map((projeto) => (
                    <div key={projeto.id} className={styles.containerSec}>
                        <h2>{projeto.nome}</h2>
                        <SitePreview imagem={projeto.imagem}></SitePreview>
                        <div className={styles.detalhes}>
                            <div>
                                <p>{projeto.descricao}</p>
                            </div>
                            <div className={styles.tecLink}>
                                <div className={styles.tecnologias} key={projeto.id}>
                                    {
                                        projeto.tecnologias.map((tecnologia) => (
                                            <Tec tec={tecnologia}/>
                                        ))
                                    }
                                </div>
                                <div className={styles.infoLinks}>
                                    <div className={styles.containerModal}>
                                        <Modal projetoL={projeto.link} projetoRep={projeto.repositorio}/>
                                    </div>
                                    {/* <button onClick={handler}>Teste</button> */}
                                    <div className={styles.containerLinksMob}>
                                        <a href={projeto.link} className={styles.link} target="_blank">Ver Projeto</a>
                                        <a href={projeto.repositorio} className={styles.link} target="_blank">Ver repositório</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}