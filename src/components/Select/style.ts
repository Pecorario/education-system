import { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  width: 100%;
`;

export const Label = styled.label``;

export const SelectContainer = styled.select`
  width: 100%;
  height: 35px;

  border-radius: 5px;
  border: 1px solid gray;
  padding: 5px 12px;

  color: black;

  background: white;

  :disabled {
    background: gray;
    opacity: 0.8;
    color: white;
  }
`;
