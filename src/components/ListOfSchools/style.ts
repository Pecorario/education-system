import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;
  h2 {
    font-size: 1.75rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1901px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
