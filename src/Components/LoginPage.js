import logo from "../assets/Logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginPage() {
  function LogIn() {}
  return (
    <ContainerLogin>
      <ContainerImage>
        <img src={logo} />
      </ContainerImage>
      <form onSubmit={LogIn}>
        <InputGroup>
          <Title htmlFor="email"></Title>
          <input id="email" type="email" placeholder="email" />

          <Title htmlFor="password"></Title>
          <input id="password" type="password" placeholder="senha" required />

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
        color:#52B6FF;
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
  border-radius: 4px;
  border: 1px solid #52B6FF;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;
