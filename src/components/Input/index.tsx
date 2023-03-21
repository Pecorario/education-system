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
  width?: string;
  isActiveInitial?: boolean;
}

const Input: FC<InputProps> = ({
  text,
  type,
  value,
  handleChange = () => {},
  width = '90%',
  isActiveInitial = false,
  ...props
}) => {
  const [isActive, setIsActive] = useState(isActiveInitial);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    handleChange(e);
  };

  return (
    <S.Container>
      <S.Label htmlFor={text} type={type} isActive={isActive} width={width}>
        {text}
      </S.Label>
      <S.InputContainer
        name={text}
        id={text}
        type={type}
        value={value}
        onChange={handleChangeInput}
        width={width}
        {...props}
      />
    </S.Container>
  );
};

export default Input;
