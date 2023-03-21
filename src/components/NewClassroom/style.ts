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
  font-size: 20px;
  margin-bottom: 10px;
`;

export const TeacherContainer = styled.div`
  height: 100%;
  max-height: 112px;

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
            font-size: 16px;
          }
        `
      : css`
          svg {
            fill: #434343;
            font-size: 16px;
          }
        `}
`;

export const TeacherName = styled.p`
  font-size: 0.8rem;
`;
