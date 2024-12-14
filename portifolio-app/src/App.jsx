import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Sobre from "./Components/Sobre/Sobre"
import Habilidades from "./Components/Habilidades/Habilidades"
import Projetos from "./Components/Projetos/Projetos"
import Contato from "./Components/Contato/Contato"
import Curriculo from "./Components/Curriculo/Curriculo"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/habilidades" element={<Habilidades/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/cv" element={<Curriculo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
