import styled from 'styled-components';

interface ClassroomProps {
  isBlocked: boolean;
}

export const Container = styled.div<ClassroomProps>`
  background: #8c5fe9;

  width: 100%;
  height: 130px;

  padding: 10px;

  border-radius: 4px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
  transition: all 0.2s;

  :hover {
    filter: brightness(0.8);
  }

  ${({ isBlocked }) => isBlocked && 'opacity: 0.7'}
`;

export const Name = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 2px;
  color: white;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemContainer = styled.div`
  color: white;
  font-size: 1rem;

  display: flex;
  gap: 0.5rem;
`;

export const BlockedSpan = styled.span`
  position: absolute;

  right: 10px;
  bottom: 10px;

  color: white;

  font-size: 0.7rem;
`;
