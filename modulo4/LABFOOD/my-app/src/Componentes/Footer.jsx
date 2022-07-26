import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {BsCart3, BsPerson} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
// import { goToCarrinho, goToHome, goToPerfil} from "../Rotas/Cordenador";
import "./css/Componentes.css";

export default function Footer() {

  const navigate = useNavigate()

  return (
    <div>
    
        <AiOutlineHome className="btn-footer" onClick={() => navigate("/")}/>
    
      <button className="btn-footer" onClick={() => navigate("/carrinho")}>
        <BsCart3/>
      </button>
      <button className="btn-footer" onClick={() => navigate("/perfil")}>
       <BsPerson/>
      </button>
    </div>
  );
}
