import React from "react";
import {  useNavigate } from "react-router-dom";
import { goToHome, goToLogin } from "../../Rotas/Cordenador";



export default function MeuEndereco () {
  
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => goToHome(navigate)} > Voltar</button>
      </div>
      <div>

        <img src=""/>

      </div>


      <div><p class="">Meu endereço </p></div>
      <form>

        <div class="">
          <input
          type={"text"}
          placeholder="Rua / Av"></input>
          <input
          type={"number"}
          placeholder="Numero"></input>
          <input 
          type={"text"}
          placeholder="Apto / Bloco"></input>
          <input
          type={"text"}
          placeholder="Bairro"></input>
          <input
          type={"text"}
          placeholder="Cidade"></input>
          <input 
          type={"text"}
          placeholder="Estado"></input>
        </div>
      </form>
      <button onClick={() => goToLogin(navigate)} type="submit" className="">Salvar</button>
    </div>

  );
}
