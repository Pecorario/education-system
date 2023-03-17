import { FC, InputHTMLAttributes } from 'react';

import * as S from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const Input: FC<InputProps> = ({ text, type, ...props }) => {
  return (
    <S.Container>
      <S.Label htmlFor={text} type={type}>
        {text}
      </S.Label>
      <S.InputContainer name={text} id={text} type={type} {...props} />
    </S.Container>
  );
};

export default Input;
