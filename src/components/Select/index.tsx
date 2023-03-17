import { FC } from 'react';

import * as S from './style';

interface DataProps {
  id: number;
  value: string;
}

interface SelectProps {
  text: string;
  data: DataProps[];
}

const Select: FC<SelectProps> = ({ text, data }) => {
  return (
    <S.Container>
      <S.Label htmlFor={text}>{text}</S.Label>

      <S.SelectContainer name={text} id={text}>
        {data.map(item => (
          <option key={item.id} value={item.id}>
            {item.value}
          </option>
        ))}
      </S.SelectContainer>
    </S.Container>
  );
};

export default Select;
