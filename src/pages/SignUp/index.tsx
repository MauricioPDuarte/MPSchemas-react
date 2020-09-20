import React from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignUp: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();

  return (
    <Container>
      <Content>
        <h1>Cadastrar-se</h1>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, 'Deve conter no mínimo 2 caracteres!')
              .max(26, 'Deve conter no máximo 26 caracteres!')
              .required('Campo obrigatório!'),
            email: Yup.string().email('E-mail inválido!').required('Campo obrigatório!'),
            password: Yup.string().required('Campo obrigatório!'),
            passwordConfirm: Yup.string()
              .oneOf([Yup.ref('password')], 'As senhas não coincidem!')
              .required('Campo obrigatório!'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await api.post('/users', values);

              addToast({
                type: 'success',
                title: 'Cadastro realizado!',
                description: 'Você já pode fazer seu login no MPSchemas!',
              });

              history.push('/');
            } catch (err) {
              addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer o cadastro, tente novamente.',
              });
            }

            setSubmitting(false);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Input name="name" placeholder="Nome" icon={FiUser} />
              <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
              <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
              <Input name="passwordConfirm" type="password" placeholder="Confirmar senha" icon={FiLock} />
              <Button type="submit">Cadastrar</Button>
            </form>
          )}
        </Formik>

        <span>
          Já possui uma conta?
          <Link to="/"> Fazer login</Link>
        </span>
      </Content>
    </Container>
  );
};

export default SignUp;
