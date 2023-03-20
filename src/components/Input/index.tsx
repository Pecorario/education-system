import {
  ChangeEventHandler,
  FC,
  ChangeEvent,
  InputHTMLAttributes,
  useState
} from 'react';

import * as S from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  handleChange?: ChangeEventHandler;
}

const Input: FC<InputProps> = ({
  text,
  type,
  value,
  handleChange,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    // handleChange(e);
  };

  return (
    <S.Container>
      <S.Label htmlFor={text} type={type} isActive={isActive}>
        {text}
      </S.Label>
      <S.InputContainer
        name={text}
        id={text}
        type={type}
        onChange={e => handleChangeInput(e)}
        {...props}
      />
    </S.Container>
  );
};

export default Input;
