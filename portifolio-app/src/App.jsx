import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Sobre from "./Components/Sobre/Sobre"
import Projetos from "./Components/Projetos/Projetos"
import Contato from "./Components/Contato/Contato"
import Curriculo from "./Components/Curriculo/Curriculo"
import Footer from "./Components/Footer/Footer"
import "./App.css"
import Creditos from "./Components/Creditos/Creditos"
import Teste from "./Components/Teste/Teste"

function App() {
  return (
    <div className="App Animate">
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Projetos/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/mais" element={<Creditos/>}/>
            <Route path="/teste" element={<Teste/>}/>
          </Routes>
        </main>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
