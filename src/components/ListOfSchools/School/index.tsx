import { FC } from 'react';

import * as S from './style';

interface SchoolProps {
  school: {
    id: number;
    name: string;
    city: string;
    state: string;
    image: string;
  };
}

const School: FC<SchoolProps> = ({ school }) => {
  return (
    <S.Container>
      <S.ContainerNameSchool>
        <h3>{school.name}</h3>
        <span>
          {school.city} - {school.state}
        </span>
      </S.ContainerNameSchool>

      <S.ImageContainer>
        <img src={school.image} alt={school.name} />
      </S.ImageContainer>
    </S.Container>
  );
};

export default School;
