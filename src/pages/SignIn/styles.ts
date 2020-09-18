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
  max-width: 370px;
  background: var(--color-elevation1);
  padding: 40px 35px;

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
    input {
      width: 100%;
      border-radius: 5px;
      background: var(--color-elevation2);
      padding: 18px;
      border: 2px solid var(--color-elevation2);
      color: #FFF;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      width: 100%;
      border-radius: 4px;
      height: 56px;
      color: #FFF;
      padding: 0 16px;
      background: var(--color-primary);
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#7B1FA2')}
      }
    }

    a {
      width: 100%;
      color: var( --color-primary);
      display: flex;
      justify-content: center;
      margin-top: 30px;
      font-size: 14px;
      transition: color 0.2s;
      font-weight: 500;

      &:hover {
        color: ${shade(0.2, '#7B1FA2')}
      }
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
        color: ${shade(0.2, '#7B1FA2')}
      }
    }
  }

`;
