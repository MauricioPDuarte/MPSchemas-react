import React from 'react';

import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1>MPSchemas</h1>
      <p>Faça download de diversos esquemas elétricos, cadastre novos e colabore com a comunidade. </p>
      <form>
        <input placeholder="Email"></input>
        <input placeholder="Senha"></input>


        <button>Entrar</button>
        <a href="#">Esqueci minha senha</a>
      </form>
      <span>Ainda não possui uma conta? <a href="#">Criar conta</a></span>
    </Content>
  </Container>
);

export default SignIn;
