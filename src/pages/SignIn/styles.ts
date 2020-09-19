import styled from 'styled-components';
import { shade } from 'polished';

import backgroundSignin from '../../assets/imgs/background-signin2.svg';

export const Container = styled.div`
  background: url(${backgroundSignin}) no-repeat;
  background-position: 10px 10px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 380px;
  background: var(--color-elevation1);
  padding: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 5px;
  }

  p {
    text-align: center;
    font-size: 12px;
    margin-bottom: 40px;
    color: var(--color-text-medium);
  }

  form {
    width: 100%;
  }

  > a {
    width: 100%;
    color: var(--color-primary);
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 14px;
    transition: color 0.2s;
    font-weight: 500;

    &:hover {
      color: ${shade(0.2, '#7B1FA2')};
    }
  }

  span {
    font-size: 12px;
    color: var(--color-text-medium);
    margin-top: 40px;

    a {
      color: var(--color-primary);
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#7B1FA2')};
      }
    }
  }
`;
