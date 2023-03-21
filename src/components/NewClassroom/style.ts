import styled, { css } from 'styled-components';

interface TeacherProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 450px;
  height: 620px;
  padding: 20px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;

  background: #f2f2f2;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 400;
  text-align: center;

  color: #434343;
`;

export const TeachersContainer = styled.div`
  width: 90%;

  height: fit-content;
  max-height: 140px;
`;

export const Label = styled.p`
  color: #434343;
  width: 100%;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const TeacherContainer = styled.div`
  height: 100%;
  max-height: 120px;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
`;

export const TeacherItem = styled.div<TeacherProps>`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  :hover {
    opacity: 0.5;
  }

  ${({ isSelected }) =>
    isSelected
      ? css`
          svg {
            fill: #00bbff;
          }
        `
      : css`
          svg {
            fill: #434343;
          }
        `}
`;

export const TeacherName = styled.p``;

export const ImageInputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DocContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DocInputContainer = styled.div`
  width: 90%;

  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;

    margin-right: 0.5rem;
  }

  span {
    font-size: 16px;
    word-break: break-all;
  }
`;
