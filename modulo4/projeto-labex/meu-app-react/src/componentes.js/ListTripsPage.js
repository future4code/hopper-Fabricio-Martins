import React from "react";
import { useNavigate } from "react-router-dom";

export default function  ListTripsPage() {

  const navegar =  useNavigate();

  return (
    <div>
      <div>
        <div>
          <button onClick={()=>navegar("/")} >Home</button>
        </div>
        <h1>Escolha sua Viagem</h1>
        <select id="cboCidades">
          <option value=""></option>
          <option value="scs">Valor</option>
          <option value="sa">Alfabetica</option>
   
        </select>
      </div>
    </div>
  );
}


