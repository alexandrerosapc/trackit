import logo from "../assets/Logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import UserContext from "../Contexts/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { setToken } = useContext(AuthContext)
  const { setUser } = useContext(UserContext)
  function SignIn(e) {
    e.preventDefault()
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const body = { email, password }
    axios.post(URL, body).then((res) => {
      setUser({ name: res.data.name, image: res.data.image })
      setToken(res.data.token)
      navigate("/habitos")
    })
    .catch(err => alert(err.response.data.message))
  }
  return (
    <ContainerLogin>
      <ContainerImage>
        <img src={logo} alt="logo" />
      </ContainerImage>
      <form onSubmit={SignIn}>
        <InputGroup>
          <Title htmlFor="email"></Title>
          <input
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <Title htmlFor="password"></Title>
          <input
            id="password"
            type="password"
            placeholder="senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <Enter>Entrar</Enter>
        </InputGroup>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin-top:-120px;
        font-size: 14px;
        font-weight: 400;
;
    }
`;

const ContainerImage = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 180px;
  }
`;

const InputGroup = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 303px;
    height: 45px;
  }
`;

const Title = styled.label`
  margin: 3px;
  color: white;
`;

const Enter = styled.button`
  margin: 15px 0;
  width: 303px;
  height: 45px;
  margin-bottom: 140px;
  background-color: #52B6FF;
  color: white;
  border-radius: 4px;
  border: 1px solid #52B6FF;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;
