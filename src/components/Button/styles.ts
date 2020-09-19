import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  border-radius: 4px;
  height: 56px;
  color: #fff;
  padding: 0 16px;
  background: var(--color-primary);
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#7B1FA2')};
  }
`;
