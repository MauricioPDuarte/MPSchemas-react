import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  background: var(--color-elevation2);
  padding: 18px;
  border: 2px solid var(--color-elevation2);
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    color: #fff;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
