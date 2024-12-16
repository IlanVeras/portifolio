import styles from "./Sobre.module.css"

export default function Sobre(){
    return(
        <div>
            <div>
                <h1>Ilan Veras</h1>
            </div>
            <div>
                <p>Desenvolvedor Web Junior</p>
            </div>
            <div>
                <div>
                    <p>Tecnologias:</p>
                </div>
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