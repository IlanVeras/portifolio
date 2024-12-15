import React from "react"
import projetosObj from "../../assets/ProjetosLinks.json"
import SitePreview from "../SitePreview/SitePreview"
import styles from "./Projetos.module.css"

export default function Projetos(){
    return(
        <div className={styles.container}>
            {/* <h1>Projetos</h1> */}
            {
                projetosObj.map((projeto) => (
                    <div key={projeto.id} className={styles.containerSec}>
                        <h2>{projeto.nome}</h2>
                        <SitePreview imagem={projeto.imagem}></SitePreview>
                        <p>{projeto.descricao}</p>
                        <p>Tecnologias e conceitos utilizados: {projeto.tecnologias.join(', ')}</p>
                        <a href={projeto.link}>Ver Projeto</a>
                        <a href={projeto.repositorio}>Ver repositório</a>
                    </div>
                ))
            }
        </div>
    )
}