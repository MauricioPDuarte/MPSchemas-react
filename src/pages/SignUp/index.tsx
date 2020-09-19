import React from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <h1>Cadastrar-se</h1>
      <form>
        <Input name="name" placeholder="Nome" icon={FiUser} />
        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input name="password" placeholder="Senha" icon={FiLock} />
        <Input name="confirmPassword" placeholder="Confirmar senha" icon={FiLock} />
        <Button>Cadastrar</Button>
      </form>

      <span>
        Já possui uma conta?
        <a href="/"> Fazer login</a>
      </span>
    </Content>
  </Container>
);

export default SignUp;
