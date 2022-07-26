import React from "react";
import {  useNavigate } from "react-router-dom";
import { goToEndereco, goToLogin } from "../../Rotas/Cordenador";


export default function Cadastro() {
  
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <button onClick={() => goToLogin(navigate)} > voltar</button>
      </div>
      <div>

        <img src=""></img>

      </div>


      <div><p class=""> Cadastrar </p></div>
      <form>

        <div class="">

          <input
          type={text}
          placeholder="Name"
          />
          <input
          type={email}
          placeholder="E-mail"
          />
          <input
          type={text}
          placeholder="Cpf"
          />
          <input
          type={password}
          placeholder="Senha"
          />

        </div>

      </form>
      <button onClick={() => goToEndereco(navigate)}  type="submit" className="">Criar Conta</button>
    </div>

  );
}
