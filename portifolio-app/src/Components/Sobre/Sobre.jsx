import styles from "./Sobre.module.css"

export default function Sobre(){
    return(
        <div className={styles.container}>
            <div className={styles.nome}>
                <h1>Ilan Veras</h1>
            </div>
            <div className={styles.profissao}>
                <span className={styles.codeProfissao}>{"<"}</span>
                <span className={styles.textProfissao}>Programador Web Junior</span>
                <span className={styles.codeProfissao}>{"/>"}</span>
            </div>
            <div className={styles.links}>
                <a href="https://github.com/IlanVeras">Git Hub</a>
                <a href="https://br.linkedin.com/in/ilan-veras-247405216">LinkedIn</a>
            </div>
            <div>
                <div className={styles.tecnologias}>
                    <ul>
                        <li>
                            <img src="./icons/html.png"></img>
                            <p>HTML</p>
                        </li>
                        <li>
                            <img src="./icons/css-3.png"></img>
                            <p>CSS</p>
                        </li>
                        <li>
                            <img src="./icons/js.png"></img>
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <img src="./icons/react.png"></img>
                            <p>React</p>
                        </li>
                        <li>
                            <img src="./icons/node.png"></img>
                            <p>Node.Js</p>
                        </li>
                        <li>
                            <img src="./icons/mongodddbbb.png"></img>
                            <p>Mongo DB</p>
                        </li>
                        <li>
                            <img src="./icons/bootstrap.png"></img>
                            <p>Bootstrap</p>
                        </li><li>
                            <img src="./icons/mui.png"></img>
                            <p>MUI</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}