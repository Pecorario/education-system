import styled from 'styled-components';

export const Container = styled.div`
  padding: 90px 32px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;

  color: black;
`;

export const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DocContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DocInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
  }
`;
