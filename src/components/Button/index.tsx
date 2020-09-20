import React, { ButtonHTMLAttributes } from 'react';

import SpinnerLoading from '../SpinnerLoading';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest} disabled={loading}>
    {loading ? <SpinnerLoading /> : children}
  </Container>
);

export default Button;
