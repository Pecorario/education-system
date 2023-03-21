import styled from 'styled-components';

interface FormProps {
  paddingTop?: string;
}

export const FormContainer = styled.form<FormProps>`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  padding-top: ${props => (props.paddingTop ? props.paddingTop : '50px')};

  position: relative;
`;

export const Button = styled.button`
  width: 90%;
  height: 60px;

  border-radius: 5px;

  color: #00bbff;
  border: 2px solid #00bbff;
  background: transparent;

  position: absolute;
  bottom: 20px;

  transition: all 0.2s;

  :not(:disabled):hover {
    background: #00bbff;
    color: white;
    cursor: pointer;
  }

  :disabled {
    opacity: 0.2;
    background: #00bbff;
    color: white;
  }
`;
