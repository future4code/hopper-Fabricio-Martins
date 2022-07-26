import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";
import {useForm} from "../../hooks/useForm"


function Login() {
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const submitLogin = () => {
    const url = `${BASE_URL}/login`;
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        const hasAddress = res.data.user.hasAddress;
        if (hasAddress === false) {
          goToAddAdress(navigate);
        } else {
          goToFeed(navigate);
        }
      })
      .catch((err) => {
        alert("Usuário não cadastrado.");
        console.log(err.message);
      });
  };

  const submit = (event) => {
    event.preventDefault();
    cleanFields();
  };

  return (
    <div>
      <div>
        <img src=''/>
        <p>Entrar</p>
        <form onSubmit={submit}>
          <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            type="email"
            fullWidth
            id="outlined-required"
            label="E-mail"
            required
          />
          <input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            type="password"
            margin={"normal"}
            fullWidth
            id="outlined-required"
            label="Senha"
            required
          />
          <button onClick={submitLogin}>Entrar</button>
          <p onClick={() => navigate('/cadastro')}>Não possui cadastro? Clique aqui.</p>
        </form>
      </div>
    </div>
  );
}
export default Login;