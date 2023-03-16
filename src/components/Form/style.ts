import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 100%;
  max-width: 350px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;

  border-radius: 5px;

  background: blue;
  color: white;

  :not(:disabled):hover {
    filter: brightness(0.8);
    cursor: pointer;
  }

  :disabled {
    opacity: 0.6;
  }
`;
