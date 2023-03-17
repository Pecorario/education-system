import { FC, useEffect, useState } from 'react';
import { GiTeacher } from 'react-icons/gi';
import { IoSchoolSharp, IoPeopleSharp } from 'react-icons/io5';

import * as S from './style';

interface ClassroomProps {
  classroom: {
    id: number;
    name: string;
    schoolId: number;
    schoolName: string;
    deskCapacity: number;
    isBlocked: boolean;
    idTeachers: number[];
    classSchedule: string;
    protocol: string;
  };
}

const Classroom: FC<ClassroomProps> = ({ classroom }) => {
  return (
    <S.Container isBlocked={classroom.isBlocked}>
      <S.Name>{classroom.name}</S.Name>

      <S.InfoContainer>
        <S.ItemContainer>
          <IoSchoolSharp />
          {classroom.schoolName}
        </S.ItemContainer>

        <S.ItemContainer>
          <GiTeacher />
          {classroom.idTeachers.length}
        </S.ItemContainer>

        <S.ItemContainer>
          <IoPeopleSharp />
          {classroom.deskCapacity}
        </S.ItemContainer>
      </S.InfoContainer>

      <S.BlockedSpan>{classroom.isBlocked && 'BLOQUEADA'}</S.BlockedSpan>
    </S.Container>
  );
};

export default Classroom;
