import React from "react";
import "../componentes.css/home.css";
import {useNavigate} from "react-router-dom"
import Routes from "./routes"

const HomePage = () => {
 
const navegar = useNavigate();
<Routes/>
return(


    <div className="fundo">
      <div className="titulo">
        <p>Seja bem Vindo a</p>
        <h1 >Labex</h1>
        <h4 className="gradient">Garanta seu lugar no futuro</h4>
      </div>
        <div className="div-btn ">
            <button className="btn" onClick={()=>navegar("/ListTripsPage")}>Viagens Disponiveis</button>
            <button className="btn" onClick={()=>navegar("/LoginPage")}>Login Administrador</button>
        </div>
    </div>
)
}

export default HomePage;
