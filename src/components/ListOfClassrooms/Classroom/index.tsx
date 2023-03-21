import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { GiTeacher } from 'react-icons/gi';
import { IoSchoolSharp, IoPeopleSharp } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { useSnackbar } from 'notistack';

import api from '@/services/api';
import axios from 'axios';

import ModalComponent from '@/components/ModalComponent';

import * as S from './style';
import EditClassroom from '@/components/NewClassroom';
import { SyncLoader } from 'react-spinners';

interface SchoolProps {
  id: number;
  name: string;
  city: string;
  state: string;
  symbol: string;
}

interface Classroom {
  id: number;
  name: string;
  schoolId: number;
  deskCapacity: number;
  isBlocked: boolean;
  school: SchoolProps;
  teachers: { name: string; id: number }[];
  // classSchedule: string;
  // protocol: string;
}
interface ClassroomProps {
  classroom: Classroom;
  // classrooms: Classroom[];
  // setClassrooms: Dispatch<SetStateAction<Classroom[]> | []>;
  handleLoadClassrooms: () => void;
}

const Classroom: FC<ClassroomProps> = ({ classroom, handleLoadClassrooms }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditClassroomOpen, setIsModalEditClassroomOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSelectClassroom = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClassroom = async () => {
    try {
      setIsLoading(true);
      await api.delete(`/classrooms/${classroom.id}`);

      handleLoadClassrooms();
      setIsModalDeleteOpen(false);

      enqueueSnackbar('Sala de aula removida com sucesso', {
        variant: 'success',
        autoHideDuration: 1000
      });
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          return enqueueSnackbar(
            error.response?.data.message || 'Houve um erro inesperado',
            {
              variant: 'error',
              autoHideDuration: 2000
            }
          );
        }
      }

      return enqueueSnackbar('Houve um erro inesperado', {
        variant: 'error',
        autoHideDuration: 2000
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <S.Container isBlocked={classroom.isBlocked} isOpen={isOpen}>
        <S.ActionsContainer>
          <HiOutlinePencilAlt
            onClick={() => setIsModalEditClassroomOpen(true)}
          />
          <RiDeleteBin6Line onClick={() => setIsModalDeleteOpen(true)} />
        </S.ActionsContainer>
        <S.Name>{classroom.name}</S.Name>

        <S.InfoContainer>
          <S.ItemContainer>
            <IoSchoolSharp />
            {classroom.school.name}
          </S.ItemContainer>

          <S.IconsContainer>
            <S.ItemContainer>
              <GiTeacher />
              {classroom.teachers.length}
            </S.ItemContainer>

            <S.ItemContainer>
              <IoPeopleSharp />
              {classroom.deskCapacity}
            </S.ItemContainer>
          </S.IconsContainer>
        </S.InfoContainer>

        {isOpen && (
          <S.TeacherContainer isOpen={isOpen}>
            <p>Professores regentes:</p>
            {classroom.teachers.map(teacher => (
              <S.ItemContainer>
                <GiTeacher />
                {teacher.name}
              </S.ItemContainer>
            ))}
          </S.TeacherContainer>
        )}

        <S.BlockedSpan>{classroom.isBlocked && 'BLOQUEADA'}</S.BlockedSpan>

        <S.ButtonExpand onClick={handleSelectClassroom}>
          {isOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
        </S.ButtonExpand>
      </S.Container>

      <ModalComponent
        isOpen={isModalDeleteOpen}
        setIsOpen={setIsModalDeleteOpen}
      >
        <S.Title>Você deseja deletar esta sala de aula?</S.Title>
        <S.ContainerButtons>
          {isLoading ? (
            <SyncLoader color="#00bbff" size="12px" />
          ) : (
            <>
              <S.Button onClick={() => setIsModalDeleteOpen(false)}>
                Cancelar
              </S.Button>
              <S.Button onClick={handleDeleteClassroom}>Confirmar</S.Button>
            </>
          )}
        </S.ContainerButtons>
      </ModalComponent>

      <ModalComponent
        isOpen={isModalEditClassroomOpen}
        setIsOpen={setIsModalEditClassroomOpen}
      >
        <EditClassroom
          classroom={classroom}
          setIsOpen={setIsModalEditClassroomOpen}
          handleLoadClassrooms={handleLoadClassrooms}
        />
      </ModalComponent>
    </>
  );
};

export default Classroom;
