import React from 'react';

import { Container, Dot } from './styles';

const SpinnerLoading: React.FC = () => (
  <Container>
    <Dot />
    <Dot />
    <Dot />
    <Dot />
    <Dot />
    <Dot />
  </Container>
);

export default SpinnerLoading;
