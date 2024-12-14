import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <div>
            <h1>Header</h1>
            <nav>
                <NavLink to="/" className="customLink">Home</NavLink>
                <NavLink to="/sobre" className="customLink">Sobre</NavLink>
                <NavLink to="/habilidades" className="customLink">Habilidades</NavLink>
                <NavLink to="/projetos" className="customLink">Projetos</NavLink>
                <NavLink to="/contato" className="customLink">Contato</NavLink>
                <NavLink to="/cv" className="customLink">CV</NavLink>
            </nav>
        </div>
    )
}