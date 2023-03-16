import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: blue;

  h1 {
    color: white;
    font-size: 36px;
  }
`;

export const Button = styled.button`
  background: transparent;

  position: absolute;
  top: calc(35px - 18px);
  left: 10px;

  svg {
    font-size: 32px;
    fill: white;
  }

  svg:hover {
    filter: brightness(0.8);
  }
`;
