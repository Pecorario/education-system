import { FC } from 'react';

import School from './Classroom';

import * as S from './style';

interface ClassroomProps {
  id: number;
  name: string;
  schoolId: number;
  schoolName: string;
  deskCapacity: number;
  isBlocked: boolean;
  idTeachers: number[];
  classSchedule: string;
  protocol: string;
}

interface ClassroomsProps {
  classrooms: ClassroomProps[];
}

const ListOfClassrooms: FC<ClassroomsProps> = ({ classrooms }) => {
  return (
    <S.Container>
      <h2>Salas cadastradas</h2>

      <S.ListContainer>
        {classrooms?.map(item => (
          <School key={item.id} classroom={item} />
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default ListOfClassrooms;
