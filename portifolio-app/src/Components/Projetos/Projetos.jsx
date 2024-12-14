import React from "react"
import projetosObj from "../../assets/ProjetosLinks.json"
import SitePreview from "../SitePreview/SitePreview"

export default function Projetos(){
    return(
        <div>
            <h1>Projetos</h1>
            {
                projetosObj.map((projeto) => (
                    <div key={projeto.id}>
                        <h2>{projeto.nome}</h2>
                        <SitePreview link={projeto.link}></SitePreview>
                        <p>{projeto.descricao}</p>
                        <p>Tecnologias: {projeto.tecnologias.join(', ')}</p>
                        <a href={projeto.link}>Ver Projeto</a>
                    </div>
                ))
            }
        </div>
    )
}