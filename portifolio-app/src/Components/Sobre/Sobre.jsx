import styles from "./Sobre.module.css"
const tecnologias = [
    {
        id: 0,
        nome: "HTML",
        endereco: "./icons/html.png"
    },
    {
        id: 1,
        nome: "CSS",
        endereco: "./icons/css-3.png"
    },
    {
        id: 2,
        nome: "JavaScript",
        endereco: "./icons/js.png"
    },
    {
        id: 3,
        nome: "React",
        endereco: "./icons/react.png"
    },
    {
        id: 4,
        nome: "Node.Js",
        endereco: "./icons/node.png"
    },
    {
        id: 5,
        nome: "Mongo DB",
        endereco: "./icons/mongodddbbb.png"
    },
    {
        id: 6,
        nome: "Bootstrap",
        endereco: "./icons/bootstrap.png"
    },
    {
        id: 7,
        nome: "MUI",
        endereco: "./icons/mui.png"
    }
]

export default function Sobre(){
    return(
        <div className={`${styles.container} Animate`}>
            <div className={styles.nome}>
                <h1>Ilan Veras</h1>
            </div>
            <div className={styles.profissao}>
                <span className={styles.codeProfissao}>{"<"}</span>
                <span className={styles.textProfissao}>Programador Web Junior</span>
                <span className={styles.codeProfissao}>{"/>"}</span>
            </div>
            <div className={styles.links}>
                <a href="https://github.com/IlanVeras" target="_blank">Git Hub</a>
                <a href="https://br.linkedin.com/in/ilan-veras-247405216" target="_blank">LinkedIn</a>
            </div>
            <div>
                <div className={styles.tecnologias}>
                    <ul>
                        {
                            tecnologias.map(tecnologia => (
                                <li key={tecnologia.id}>
                                    <img src={tecnologia.endereco}></img>
                                    <p>{tecnologia.nome}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}