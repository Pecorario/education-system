import styled from 'styled-components';

interface SchoolProps {
  isOpen?: boolean;
}

export const Container = styled.div<SchoolProps>`
  background: rgb(252, 151, 0, 0.8);

  width: 100%;
  height: fit-content;

  padding: 15px;
  padding-bottom: 40px;

  border-radius: 4px;

  position: relative;

  display: flex;
  flex-direction: column;

  transition: all 0.2s;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;

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

export const ContainerNameSchool = styled.div`
  width: 100%;
  word-break: break-word;
  height: 60px;

  h3 {
    font-size: 1.1rem;
    line-height: 1.1rem;

    color: white;
    padding-right: 65px;
    font-weight: 600;
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
  height: 100px;

  margin-top: 10px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;

    object-fit: contain;
  }
`;

export const ButtonExpand = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px;

  border-radius: 0 0 5px 5px;

  cursor: pointer;

  position: absolute;
  bottom: 0;
  left: 0;

  svg {
    color: white;
    fill: white;
    font-size: 23px;
  }

  :hover {
    background: rgb(255, 255, 255, 0.2);
  }
`;

export const ContainerClassrooms = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const ItemContainer = styled.div`
  background: rgb(255, 255, 255, 0.4);

  width: 100%;
  height: 60px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 5px;
`;

export const ClassroomItem = styled.p`
  color: white;
  font-size: 0.8rem;

  display: flex;
  gap: 0.2rem;
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
