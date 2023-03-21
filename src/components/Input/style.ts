import { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  type?: HTMLInputTypeAttribute | undefined;
  isActive?: boolean;
  width: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  gap: 5px;

  width: 100%;

  :focus-within label {
    transform: translate(-20px, -120%) scale(0.9);
    color: #00bbff;
  }
`;

export const Label = styled.label<InputProps>`
  color: #434343;
  width: ${({ width }) => width};

  ${props =>
    props.type === 'file'
      ? css`
          padding: 15px;

          background: #00bbff;
          color: #fff;
          border: 1px solid #00bbff;

          text-transform: uppercase;
          text-align: center;

          border-radius: 5px;

          cursor: pointer;
          transition: all 0.2s;

          :hover {
            background: transparent;
            color: #00bbff;
          }
        `
      : css`
          position: absolute;
          bottom: 10px;
          left: 5%;

          transform-origin: top left;
          transition: all 0.2s ease-out;
        `}

  ${props =>
    props.isActive &&
    css`
      transform: translate(-20px, -120%) scale(0.9);
    `}
`;

export const InputContainer = styled.input<InputProps>`
  width: ${({ width }) => width};
  height: 35px;

  margin-top: 20px;

  font-size: 18px;

  border: none;
  padding: 5px 12px;

  color: #434343;
  background: transparent;

  border-bottom: 1px solid #434343;

  &[type='file'] {
    display: none;
  }

  :focus {
    border-color: #00bbff;
  }

  :disabled {
    opacity: 0.2;
  }
`;
