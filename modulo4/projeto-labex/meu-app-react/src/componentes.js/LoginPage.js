import React from "react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios, { Axios } from "axios";



export default function LoginPage() {
  const [email, setEmail] = useState("fabricio")
  const [password, setPassword] = useState("")

const onchangeEmail  = (event) =>{
  setEmail( event.target.value)
  console.log(email)
}
const onchangePassword  = (event) =>{
  setPassword(event.target.value)
  console.log(password)
}

const entraLogin = ()=>{
  const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login";
  const body =
   {
    "email": "astrodev@gmail.com.br",
    "password": "123456"
  };
  


axios.post(URL , body).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err.response)
})


}



    const navegar = useNavigate();
    return (
    <div>
      <h1>Login Adm</h1>
      <div>
        <input type={"text"} placeholder ="Digite seu email:" value={email} onChange={onchangeEmail}/>
        <input type={"text"} placeholder="Digite sua senha" value={password} onChange={onchangePassword}/>
      </div>
      <div>
        <button onClick={()=>navegar("/")}>Voltar</button>
        <button onClick={()=>entraLogin("/trips/list")}>Entrar</button>
      </div>
    </div>
  );
};




