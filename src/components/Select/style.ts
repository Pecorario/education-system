import { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

interface SelectProps {
  hasSmallSize?: boolean;
  width?: string;
}

export const Container = styled.div<SelectProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  width: ${props => props.width || '100%'};
`;

export const Label = styled.label`
  width: 90%;
`;

export const SelectContainer = styled.select<SelectProps>`
  width: 90%;
  height: 35px;

  border-radius: 5px;
  border: 1px solid gray;
  padding: 5px 12px;

  color: black;

  background: #f2f2f2;

  ${props =>
    props.hasSmallSize &&
    css`
      width: 100%;
      height: 30px;
      padding: 5px;

      font-size: 0.7rem;
      font-weight: 500;

      option {
        font-size: 0.7rem;
        font-weight: 500;
      }
    `};

  :disabled {
    background: gray;
    opacity: 0.8;
    color: white;
  }
`;
