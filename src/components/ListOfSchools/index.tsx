import { FC, useState } from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';

import School from './School';

import ModalComponent from '@/components/ModalComponent';
import NewSchool from '@/components/NewSchool';
import NotFound from '@/components/NotFound';

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
          {schools.length > 0 ? (
            schools?.map(item => (
              <School
                key={item.id}
                school={item}
                handleLoadSchools={handleLoadSchools}
              />
            ))
          ) : (
            <NotFound />
          )}
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
