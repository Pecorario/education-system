import { FC, SelectHTMLAttributes } from 'react';

import * as S from './style';

interface DataProps {
  id: number;
  name: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  text?: string;
  data: DataProps[];
  hasSmallSize?: boolean;
}

const Select: FC<SelectProps> = ({
  text,
  data,
  hasSmallSize = false,
  ...props
}) => {
  return (
    <S.Container>
      {text && <S.Label htmlFor={text}>{text}</S.Label>}

      <S.SelectContainer
        name={text}
        id={text}
        hasSmallSize={hasSmallSize}
        {...props}
      >
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
