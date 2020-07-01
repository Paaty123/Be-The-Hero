import React from 'react';

import logoImg from "../../assets/logo.jpg";

import imgPessoas from "../../assets/pessoas.jpg";

import { Container } from './styles';

function Signin() {
  return (
    <Container>
        <div className="primeiraParte">
            <img src={logoImg} className="imgLogo"/>
                <h1>Faça seu logon</h1>
                <input className="input1" type="text" placeholder="Sua ID" />
                <button className="btnEntrar">Entrar</button>
                <h3>Não tenho cadastro</h3>
        </div>

        <div className="segundaParte">
            <img src={imgPessoas} className="imgPessoas"/>
        </div>
    </Container>
  );
}

export default Signin;
