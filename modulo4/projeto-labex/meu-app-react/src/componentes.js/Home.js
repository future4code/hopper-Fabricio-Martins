import React from "react";
import "../componentes.css/home.css";

function Home() {
  return (
    <div className="fundo">
      <div className="titulo">
        <p>Seja bem Vindo a</p>
        <h1 >Labex</h1>
        <h4 className="gradient">Garanta seu lugar no futuro</h4>
      </div>
        <div className="div-btn ">
            <button className="btn">Viagens Disponiveis</button>
            <button className="btn">Login Administrador</button>
        </div>
    </div>
  );
}

export default Home;
