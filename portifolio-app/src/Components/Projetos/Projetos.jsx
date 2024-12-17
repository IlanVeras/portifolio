import React from "react"
import projetosObj from "../../assets/ProjetosLinks.json"
import SitePreview from "../SitePreview/SitePreview"
import Tec from "../Tec/Tec"
import styles from "./Projetos.module.css"

export default function Projetos(){
    return(
        <div className={`${styles.container} Animate`}>
            {/* <h1>Projetos</h1> */}
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
                                <div className={styles.tecnologias}>
                                    {
                                        projeto.tecnologias.map((tecnologia) => (
                                            <Tec tec={tecnologia}/>
                                        ))
                                    }
                                </div>
                                <div className={styles.infoLinks}>
                                    <a href={projeto.link} className={styles.link} target="_blank">Ver Projeto</a>
                                    <a href={projeto.repositorio} className={styles.link} target="_blank">Ver repositório</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}