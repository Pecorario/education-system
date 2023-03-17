import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 20px;
  }

  *, body, label, input, button {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
  }

  @media (max-width: 420px) {
    :root {
      font-size: 12px;
    }
  }

  @media (max-width: 728px) {
    :root {
      font-size: 14px;
    }
  }

  @media (max-width: 1024px) {
    :root {
      font-size: 16px;
    }
  }

  @media (max-width: 1300px) {
    :root {
      font-size: 18px;
    }
  }

`;

export default GlobalStyle;
