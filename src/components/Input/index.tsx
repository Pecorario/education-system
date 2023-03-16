import { FC, InputHTMLAttributes } from 'react';

import * as S from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}
const Input: FC<InputProps> = ({ text, ...props }) => {
  return (
    <S.Container>
      <S.Label>{text}</S.Label>
      <S.InputContainer {...props} />
    </S.Container>
  );
};

export default Input;
