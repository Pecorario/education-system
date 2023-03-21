import { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  width: 100%;
`;

export const Label = styled.label`
  width: 90%;
`;

export const SelectContainer = styled.select`
  width: 90%;
  height: 35px;

  border-radius: 5px;
  border: 1px solid gray;
  padding: 5px 12px;

  color: black;

  background: #f2f2f2;

  :disabled {
    background: gray;
    opacity: 0.8;
    color: white;
  }
`;
