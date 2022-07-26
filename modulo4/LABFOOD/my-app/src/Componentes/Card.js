import React from "react";
import './css/Componentes.css'

export default function Card() {
  return (
 
      <div className="card-Externo">
        <div className="div-Card">
          <button className="btn-Card" >

            <img className="foto-Card" src='' alt="Habibs" title="Habibs" />
            <div className="div-Titulo">
              <p className="">HABIBS</p>
            </div>
            <div className="div-Detalhe">
              <div className="card-tempo">
                <p> 60 min </p>
              </div>
              <div  className="card-frete">
                <p> frete R$6.00 </p>
              </div>
            </div>
            <span className=""></span>
            <span className=""></span>
          </button>
        </div>

      </div>

  );
}
