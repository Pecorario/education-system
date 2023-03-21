import { FC, SelectHTMLAttributes } from 'react';

import * as S from './style';

interface DataProps {
  id: number;
  name: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  text: string;
  data: DataProps[];
}

const Select: FC<SelectProps> = ({ text, data, ...props }) => {
  return (
    <S.Container>
      <S.Label htmlFor={text}>{text}</S.Label>

      <S.SelectContainer name={text} id={text} {...props}>
        {data.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </S.SelectContainer>
    </S.Container>
  );
};

export default Select;
