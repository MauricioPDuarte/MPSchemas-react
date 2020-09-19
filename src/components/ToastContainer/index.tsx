import React from 'react';

import { FiAlertCircle, FiX } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiX size={20} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiX size={20} />
        </button>
      </Toast>

      <Toast type="info" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiX size={20} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
