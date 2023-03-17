import { FC } from 'react';

import School from './School';

import * as S from './style';

interface SchoolProps {
  id: number;
  name: string;
  city: string;
  state: string;
  image: string;
}

interface SchoolsProps {
  schools: SchoolProps[];
}

const ListOfSchools: FC<SchoolsProps> = ({ schools }) => {
  return (
    <S.Container>
      <h2>Colégios cadastrados</h2>

      <S.ListContainer>
        {schools?.map(item => (
          <School key={item.id} school={item} />
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default ListOfSchools;
