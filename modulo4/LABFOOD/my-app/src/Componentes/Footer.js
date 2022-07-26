import React from "react";
import { AiOutlineHome } from 'react-icons/ai'
import { BsCart3, BsPerson } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import './css/Componentes.css';

export default function Footer() {

  const navigate = useNavigate()

  return (
    <div className="body">
      <div className="Footer">
        <button className="btn-footer" onClick={() => navigate("/")}>
          <AiOutlineHome className="icon"/>
        </button>
        <button className="btn-footer" onClick={() => navigate("/carrinho")}>
          <BsCart3 className="icon" />
        </button>
        <button className="btn-footer" onClick={() => navigate("/perfil")}>
          <BsPerson className="icon " />
        </button>
      </div>
    </div>
  );
}
