import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 20px;
  }

  *, body, label, input, button {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
  }

  input:focus {
    outline: none;
  }

  .rs-drawer-left.rs-drawer-xs, .rs-drawer-right.rs-drawer-xs {
    width: 300px;
  }

  .rs-drawer {
    -webkit-box-shadow: none;
    box-shadow: none;
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
