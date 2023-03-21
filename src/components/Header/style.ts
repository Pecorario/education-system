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

  background: #00bbff;

  h1 {
    color: white;
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    height: 50px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Button = styled.button`
  background: transparent;

  position: absolute;
  top: calc(35px - 1rem);
  left: 20px;

  svg {
    font-size: 2rem;
    fill: white;
  }

  svg:hover {
    fill: #fc9700;
  }

  @media (max-width: 480px) {
    top: calc(25px - 1rem);
    left: 4%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Righteous', cursive;
    font-size: 40px;
    color: #ffb042;
    font-weight: 400;
  }

  img {
    width: 50px;
    height: auto;
  }

  span {
    color: white;
    font: inherit;
    font-weight: 400;
  }
`;

export const LogoutContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  position: absolute;
  top: 0;
  right: 30px;

  cursor: pointer;

  span {
    font-size: 1rem;
    line-height: 1rem;
    color: white;
    font-weight: 500;
    transition: all 0.2s;
  }

  svg {
    font-size: 1.3rem;
    color: white;
    transition: all 0.2s;
  }

  :hover span,
  :hover svg {
    color: #fc9700;
  }
`;
