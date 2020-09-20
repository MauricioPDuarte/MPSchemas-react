import React, { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const ResetPassword: React.FC = () => {
  const { addToast } = useToast();
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Content>
        <h1>Resetar Senha</h1>

        <Formik
          initialValues={{
            password: '',
            passwordConfirm: '',
          }}
          validationSchema={Yup.object({
            password: Yup.string().required('Campo obrigatório!'),
            passwordConfirm: Yup.string()
              .oneOf([Yup.ref('password')], 'As senhas não coincidem!')
              .required('Campo obrigatório!'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              setLoading(true);

              const { password } = values;
              const token = location.search.replace('?token=', '');

              if (!token) {
                throw new Error();
              }

              await api.post('/password/reset', {
                password,
                token,
              });

              addToast({
                type: 'success',
                title: 'Senha resetada!',
                description: 'Sua senha foi resetada, você já pode fazer seu login no MPSchemas.',
              });

              history.push('/');
            } catch (err) {
              addToast({
                type: 'error',
                title: 'Erro ao resetar senha',
                description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
              });
            } finally {
              setLoading(false);
            }

            setSubmitting(false);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Input name="password" type="password" placeholder="Nova senha" icon={FiLock} />
              <Input name="passwordConfirm" type="password" placeholder="Confirmar senha" icon={FiLock} />

              <Button type="submit" loading={loading}>
                Alterar senha
              </Button>
            </form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default ResetPassword;
