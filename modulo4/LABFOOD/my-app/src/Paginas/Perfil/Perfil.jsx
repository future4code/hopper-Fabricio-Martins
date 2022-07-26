import React from "react";
import Footer from "../../Componentes/Footer";
import { BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

export default function Perfil() {

  const navigate = useNavigate()

  return (
    <div>
      <div>
        <button class="" onClick={()=> navigate("/home")}>
          <BsChevronLeft/>
          {/* <img src="" /> */}
        </button>
        <hr/>
        <h3 class=""> Profile</h3>
      </div>
      <div>

        <div class="">
          <div class="">Endereço Cadastrado</div>
          <div class="">
            {/* <img src="" alt="" class="" /> */}
          </div>
          <div class="">Rua Barão dos Cosmonautas,  22  -  Bairro</div>
        </div>

      </div>
      <Footer />
    </div>



  );
}
