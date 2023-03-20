import { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  type: HTMLInputTypeAttribute | undefined;
  isActive: boolean;
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
  width: 90%;

  ${props =>
    props.type === 'file'
      ? css`
          width: 100%;
          padding: 10px;

          background: #333;
          color: #fff;

          text-transform: uppercase;
          text-align: center;

          border-radius: 5px;

          /* display: block; */
          cursor: pointer;
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
      /* transform: translate(-20%, -120%) scale(0.9); */
    `}
`;

export const InputContainer = styled.input`
  width: 90%;
  height: 35px;

  margin-top: 20px;

  border: none;
  padding: 5px 12px;

  color: black;
  background: transparent;

  border-bottom: 1px solid #434343;

  :disabled {
    background: gray;
    opacity: 0.8;
    color: white;
  }

  &[type='file'] {
    display: none;
  }

  :focus {
    border-color: #00bbff;
  }
`;
