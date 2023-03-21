import { Dispatch, FC, SetStateAction, useState } from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';

import Classroom from './Classroom';

import ModalComponent from '@/components/ModalComponent';
import NewClassroom from '@/components/NewClassroom';

import * as S from './style';

interface SchoolProps {
  id: number;
  name: string;
  city: string;
  state: string;
  symbol: string;
}
interface ClassroomProps {
  id: number;
  name: string;
  deskCapacity: number;
  schoolId: number;
  school: SchoolProps;
  isBlocked: boolean;
  teachers: { name: string; id: number }[];
  // classSchedule: string;
  // protocol: string;
}

interface ClassroomsProps {
  classrooms: ClassroomProps[];
  // setClassrooms: Dispatch<SetStateAction<ClassroomProps[]> | []>;
  handleLoadClassrooms: () => void;
}

const ListOfClassrooms: FC<ClassroomsProps> = ({
  classrooms,
  // setClassrooms,
  handleLoadClassrooms
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Container>
        <S.TitleContainer>
          <h2>Salas cadastradas</h2>
          <BsFillPlusSquareFill onClick={() => setIsOpen(true)} />
        </S.TitleContainer>

        <S.ListContainer>
          {classrooms?.map(item => (
            <Classroom
              key={item.id}
              classroom={item}
              handleLoadClassrooms={handleLoadClassrooms}
            />
          ))}
        </S.ListContainer>
      </S.Container>

      <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen}>
        <NewClassroom
          setIsOpen={setIsOpen}
          handleLoadClassrooms={handleLoadClassrooms}
        />
      </ModalComponent>
    </>
  );
};

export default ListOfClassrooms;
