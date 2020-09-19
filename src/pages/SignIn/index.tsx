import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1>MPSchemas</h1>
      <p>Faça download de diversos esquemas elétricos, cadastre novos e colabore com a comunidade.</p>
      <form>
        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input name="password" placeholder="Senha" icon={FiLock} />

        <Button>Entrar</Button>
        <a href="/">Esqueci minha senha</a>
      </form>
      <span>
        Ainda não possui uma conta?
        <a href="/"> Criar conta</a>
      </span>
    </Content>
  </Container>
);

export default SignIn;
