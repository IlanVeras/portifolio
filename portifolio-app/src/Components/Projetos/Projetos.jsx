import React from "react"
import projetosObj from "../../assets/ProjetosLinks.json"
import SitePreview from "../SitePreview/SitePreview"
import Tec from "../Tec/Tec"
import styles from "./Projetos.module.css"
import Teste from "../Teste/Teste"

export default function Projetos(){
    const [status,setStatus] = React.useState(false)
    const [projetoSelecionado,setProjetoSelecionado] = React.useState(null)

    function handler(projetoHandler){
        setProjetoSelecionado(projetoHandler)
        setStatus(!status)
        console.log(status)
    }
    return(
        <div className={`${styles.container} Animate`}>
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
                                            <Tec tec={tecnologia} key={tecnologia}/>
                                        ))
                                    }
                                </div>
                                <div className={styles.infoLinks}>
                                    <button onClick={() => handler(projeto)} className={styles.btn}>Ver Projeto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {status &&(
                <Teste
                    status={status}
                    setStatus={setStatus}
                    link={projetoSelecionado.link}
                    repositorio={projetoSelecionado.repositorio}
                />
            )}
        </div>
    )
}