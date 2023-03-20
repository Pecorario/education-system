import styled from 'styled-components';

export const Header = styled.div`
  height: 70px;

  position: relative;
`;

export const Button = styled.button`
  background: transparent;

  position: absolute;
  top: calc(35px - 1rem);
  left: 20px;

  transition: all 0.2s;

  svg {
    font-size: 2rem;
    fill: black;
  }

  svg:hover {
    fill: #fc9700;
  }

  @media (max-width: 480px) {
    top: calc(25px - 1rem);
    left: 4%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.li`
  padding: 20px 30px;

  font-size: 20px;

  color: black;

  transition: all 0.2s;

  :hover {
    background: rgb(252, 151, 0, 0.2);
    cursor: pointer;
  }
`;
