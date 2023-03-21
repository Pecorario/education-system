import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (min-width: 481px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1301px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const TitleContainer = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 2rem;

  margin-bottom: 20px;

  svg {
    font-size: 30px;
    cursor: pointer;
    fill: #00bbff;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.75rem;
    font-weight: 500;
  }

  svg:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;
