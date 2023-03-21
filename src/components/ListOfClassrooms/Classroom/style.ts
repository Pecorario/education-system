import styled, { css } from 'styled-components';

interface ClassroomProps {
  isBlocked?: boolean;
  isOpen?: boolean;
}

export const Container = styled.div<ClassroomProps>`
  background: rgb(252, 151, 0, 0.9);

  width: 100%;
  height: 140px;

  padding: 15px;
  padding-bottom: 40px;

  border-radius: 4px;

  position: relative;
  display: flex;
  flex-direction: column;

  transition: all 0.2s;

  ${({ isBlocked }) => isBlocked && 'opacity: 0.7'};

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: fit-content;
    `}
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  position: absolute;
  top: 15px;
  right: 15px;

  svg {
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  svg:hover {
    opacity: 0.6;
  }
`;

export const Name = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1rem;

  color: white;
  padding-right: 65px;
  font-weight: 500;

  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TeacherContainer = styled.div<ClassroomProps>`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  transition: all 0.5s;

  color: white;

  overflow: hidden;

  ${({ isOpen }) => (!isOpen ? 'flex: 0' : 'flex: 1')};

  p {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

export const ItemContainer = styled.div`
  color: white;
  font-size: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BlockedSpan = styled.span`
  position: absolute;

  right: 10px;
  bottom: 10px;

  color: white;

  font-size: 0.7rem;
`;

export const ButtonExpand = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px;

  border-radius: 0 0 5px 5px;

  position: absolute;
  bottom: 0;
  left: 0;

  cursor: pointer;

  svg {
    color: white;
    fill: white;
    font-size: 23px;
  }

  :hover {
    background: rgb(255, 255, 255, 0.2);
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const ContainerButtons = styled.div`
  margin-top: 1rem;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 90%;
  height: 35px;

  border-radius: 5px;

  color: #00bbff;
  border: 1px solid #00bbff;
  background: transparent;

  transition: all 0.2s;

  :not(:disabled):hover {
    background: #00bbff;
    color: white;
    cursor: pointer;
  }

  :disabled {
    opacity: 0.6;
  }
`;
