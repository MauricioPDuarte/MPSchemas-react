import React from 'react';

import Card from '../../components/Card';

import { Container, ListSchemasContent, Search } from './styles';

const ListSchemas: React.FC = () => {
  return (
    <Container>
      <Search>
        <input placeholder="Digite o modelo da placa mãe" />
        <button type="button">Pesquisar</button>
      </Search>

      <ListSchemasContent>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ListSchemasContent>
    </Container>
  );
};

export default ListSchemas;
