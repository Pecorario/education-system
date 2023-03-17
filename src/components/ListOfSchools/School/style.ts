import styled from 'styled-components';

export const Container = styled.div`
  background: #8c5fe9;

  width: 100%;
  height: 140px;

  padding: 10px;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
  transition: all 0.2s;

  :hover {
    filter: brightness(0.8);
  }

  @media (min-width: 769px) {
    height: 160px;
  }

  @media (min-width: 1025px) {
    height: 170px;
  }

  @media (min-width: 1301px) {
    height: 200px;
  }

  @media (min-width: 1901px) {
    height: 200px;
  }
`;

export const ContainerNameSchool = styled.div`
  width: 100%;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 2px;
    color: white;
  }

  span {
    font-size: 0.75rem;
    color: white;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;

    object-fit: contain;
  }
`;
