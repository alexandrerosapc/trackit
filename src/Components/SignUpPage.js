import styled from "styled-components";
import logo from "../assets/Logo.png"
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export default function SignUpPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function SignUp(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body = { name, email, image, password, }

        axios.post(URL, body).then(res => {
            setEmail(res.data.email)
            setImage(res.data.image)
            setName(res.data.name)
            setPassword(res.data.password)
            navigate("/")
        })
        .catch((err) => alert(err.response.data.message))
    }
    return (
        <ContainerSignUp>
            <ContainerImage>
                <img src={logo} alt="logo" />
            </ContainerImage>
            <form onSubmit={SignUp}>
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

                    <Title htmlFor="name"></Title>
                    <input
                        id="name"
                        type="text"
                        placeholder="nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required />

                    <Title htmlFor="image"></Title>
                    <input
                        id="image"
                        type="url"
                        placeholder="foto"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        required />

                    <Register>Cadastrar</Register>
                </InputGroup>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </ContainerSignUp>
    );
}

const ContainerSignUp = styled.div`
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

const Register = styled.button`
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
