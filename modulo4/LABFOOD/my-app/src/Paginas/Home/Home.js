import React from "react";
import Card from "../../Componentes/Card";
import Footer from "../../Componentes/Footer";
import './css/Home.css'


export default function Home() {
 
  return (
    <div>
      <div>
        <div>
          <div className="titulo">
            <h1>FutureEats</h1>
          </div>
          <div className="div-Pesquisa">
            <div className="div-Input">
              <input className="input-Pesquisar" placeholder="Pesquise seu Restaurante"></input>
            </div>
          </div>
        </div>      
       <Card/>
      </div>
      <Footer/>
    </div>



  );
}
