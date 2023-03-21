import { Dispatch, FC, SetStateAction, useState } from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';

import School from './School';

import ModalComponent from '@/components/ModalComponent';
import NewSchool from '@/components/NewSchool';

import * as S from './style';

interface ClassroomProps {
  id: number;
  name: string;
  deskCapacity: number;
  isBlocked: boolean;
  schoolId: number;
}
interface SchoolProps {
  id: number;
  name: string;
  city: string;
  state: string;
  symbol: string;
  classrooms: ClassroomProps[];
}

interface SchoolsProps {
  schools: SchoolProps[];
  // setSchools: Dispatch<SetStateAction<SchoolProps[]> | []>;
  handleLoadSchools: () => void;
}

const ListOfSchools: FC<SchoolsProps> = ({ schools, handleLoadSchools }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Container>
        <S.TitleContainer>
          <h2>Colégios cadastrados</h2>
          <BsFillPlusSquareFill onClick={() => setIsOpen(true)} />
        </S.TitleContainer>

        <S.ListContainer>
          {schools?.map(item => (
            <School
              key={item.id}
              school={item}
              handleLoadSchools={handleLoadSchools}
            />
          ))}
        </S.ListContainer>
      </S.Container>

      <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen}>
        <NewSchool
          setIsOpen={setIsOpen}
          handleLoadSchools={handleLoadSchools}
        />
      </ModalComponent>
    </>
  );
};

export default ListOfSchools;
