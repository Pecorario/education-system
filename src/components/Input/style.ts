import { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  type: HTMLInputTypeAttribute | undefined;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  width: 100%;
`;

export const Label = styled.label<InputProps>`
  ${props =>
    props.type === 'file' &&
    css`
      width: 100%;
      padding: 10px;

      background: #333;
      color: #fff;

      text-transform: uppercase;
      text-align: center;

      border-radius: 5px;

      /* display: block; */
      cursor: pointer;
    `}
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 35px;

  border-radius: 5px;
  border: 1px solid gray;
  padding: 5px 12px;

  color: black;

  :disabled {
    background: gray;
    opacity: 0.8;
    color: white;
  }

  &[type='file'] {
    display: none;
  }
`;
