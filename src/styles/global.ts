import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    --color-text-high: rgba(255, 255, 255, 0.87);
    --color-text-medium: rgba(255, 255, 255, 0.60);
    --color-disabled: rgba(255, 255, 255, 0.38);

    --color-background: #121212;
    --color-primary: #7B1FA2;
    --color-error: #c53030;

    --color-elevation1: #202024;
    --color-elevation2: #29292e;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    text-decoration: none;
  }

  body {
    background: #121214;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
