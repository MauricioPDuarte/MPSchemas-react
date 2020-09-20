import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const { signIn, user } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

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
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await signIn({
                email: values.email,
                password: values.password,
              });

              history.push('/profile');
            } catch (err) {
              addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
              });
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
          <Link to="/signup"> Criar conta</Link>
        </span>
      </Content>
    </Container>
  );
};

export default SignIn;
