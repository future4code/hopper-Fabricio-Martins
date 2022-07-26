import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Paginas/Home/Home"
import Cadastro from "../Paginas/Cadastro/Cadastro";
import Carrinho from "../Paginas/Carrinho/Carrinho";
import Login from "../Paginas/Login/Login"
import MeuEndereco from "../Paginas/Cadastro/MeuEndereco";
import Perfil from "../Paginas/Perfil/Perfil";





export const Router = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/carrinho" element={<Carrinho/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/perfil" element={<Perfil/>} />
                    <Route path="/endereco" element={<MeuEndereco/>} />
                  
                </Routes>
            </BrowserRouter>
        </div>

    );


};
