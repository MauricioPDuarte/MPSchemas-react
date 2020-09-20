import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const ForgotPassword: React.FC = () => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Content>
        <h1>Recuperar Senha</h1>
        <p>Digite seu e-mail para recuperar sua senha.</p>

        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('E-mail inválido!').required('Campo obrigatório!'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              setLoading(true);

              await api.post('/password/forgot', values);

              addToast({
                type: 'success',
                title: 'E-mail de recuperação enviado.',
                description: 'Enviamos um e-mail para confirmar a recupeção de senha, cheque sua caixa de entrada.',
              });
            } catch (err) {
              addToast({
                type: 'error',
                title: 'Erro na recuperação de senha',
                description: 'Ocorreu um erro ao tentar recuperar a senha, tente novamente.',
              });
            } finally {
              setLoading(false);
            }

            setSubmitting(false);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />

              <Button type="submit" loading={loading}>
                Recuperar Senha
              </Button>
            </form>
          )}
        </Formik>

        <Link to="/">Fazer login</Link>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
