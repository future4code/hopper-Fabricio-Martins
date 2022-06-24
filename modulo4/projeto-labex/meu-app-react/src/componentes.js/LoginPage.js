import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { axios } from "axios";


const axios = require('axios').default;

export default function LoginPage() {
  const navegar = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onchangeEmail = (event) => {
    setEmail(event.target.value)

  }
  const onchangePassword = (event) => {
    setPassword(event.target.value)

  }

  const entraLogin = () => {

    console.log(email, password)
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/FabricioSilva-turma-hopper/login";
    const body =
    {
      email,
      password
    };



    axios.post(URL, body).then((res) => {
      if (res.success){
        localStorage.setItem("token",res.token)
        navegar("/trips/list")
      }
      console.log(res)
    }).catch((err) => {
      console.log(err.response)
    })


  }



  
  return (
    <div>
      <h1>Login Adm</h1>
      <div>
        <input type={"email"} placeholder="Digite seu email:" value={email} onChange={onchangeEmail} />
        <input type={"password"} placeholder="Digite sua senha" value={password} onChange={onchangePassword} />
      </div>
      <div>
        <button onClick={() => navegar("/")}>Voltar</button>
        <button onClick={entraLogin}>Entrar</button>
      </div>
    </div>
  );
};




