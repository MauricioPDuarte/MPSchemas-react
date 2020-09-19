import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const { signIn, user } = useAuth();

  console.log(user);

  return (
    <Container>
      <Content>
        <h1>MPSchemas</h1>
        <p>Faça download de diversos esquemas elétricos, cadastre novos e colabore com a comunidade.</p>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('E-mail inválido!').required('Campo obrigatório!'),
            password: Yup.string().required('Campo obrigatório!'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            try {
              signIn({
                email: values.email,
                password: values.password,
              });
            } catch (err) {
              // Disparar um toast
            }

            setSubmitting(false);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
              <Input name="password" type="password" placeholder="Senha" icon={FiLock} />

              <Button type="submit">Entrar</Button>
            </form>
          )}
        </Formik>

        <a href="/">Esqueci minha senha</a>

        <span>
          Ainda não possui uma conta?
          <a href="/"> Criar conta</a>
        </span>
      </Content>
    </Container>
  );
};

export default SignIn;
