import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const ListSchemasContent = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 16px;
`;

export const Search = styled.div`
  width: 100%;
  background: var(--color-elevation1);
  margin-bottom: 20px;

  border-radius: 5px;
  display: flex;

  input {
    flex: 1;
    padding: 25px 20px;
    background: transparent;
    color: #fff;
  }

  button {
    width: 200px;
    background: var(--color-primary);
    color: #fff;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#7B1FA2')};
    }
  }
`;
