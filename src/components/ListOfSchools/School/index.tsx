import { FC, useState } from 'react';
import { IoPeopleSharp } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { SyncLoader } from 'react-spinners';
import { useSnackbar } from 'notistack';

import api from '@/services/api';
import axios from 'axios';

import ModalComponent from '@/components/ModalComponent';
import EditSchool from '@/components/EditSchool';

import * as S from './style';

interface ClassroomProps {
  id: number;
  name: string;
  deskCapacity: number;
  isBlocked: boolean;
  schoolId: number;
}

interface School {
  id: number;
  name: string;
  city: string;
  state: string;
  symbol: string;
  classrooms: ClassroomProps[];
}

interface SchoolProps {
  school: School;
  handleLoadSchools: () => void;
}

const School: FC<SchoolProps> = ({ school, handleLoadSchools }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditSchoolOpen, setIsModalEditSchoolOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSelectSchool = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteSchool = async () => {
    try {
      setIsLoading(true);
      await api.delete(`/schools/${school.id}`);

      setIsModalDeleteOpen(false);
      handleLoadSchools();

      enqueueSnackbar('Colégio removido com sucesso', {
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
      <S.Container isOpen={isOpen}>
        <S.ActionsContainer>
          <HiOutlinePencilAlt onClick={() => setIsModalEditSchoolOpen(true)} />
          <RiDeleteBin6Line onClick={() => setIsModalDeleteOpen(true)} />
        </S.ActionsContainer>

        <S.ContainerNameSchool>
          <h3>{school.name}</h3>
          <span>
            {school.city} - {school.state}
          </span>
        </S.ContainerNameSchool>

        <S.ImageContainer>
          <img src={school.symbol} alt={school.name} />
        </S.ImageContainer>

        {isOpen && school.classrooms.length > 0 && (
          <S.ContainerClassrooms>
            {school.classrooms.map(classroom => (
              <S.ItemContainer>
                <S.ClassroomItem>{classroom.name}</S.ClassroomItem>
                <S.ClassroomItem>
                  <IoPeopleSharp />
                  {classroom.deskCapacity}
                </S.ClassroomItem>
              </S.ItemContainer>
            ))}
          </S.ContainerClassrooms>
        )}

        <S.ButtonExpand onClick={handleSelectSchool}>
          {isOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
        </S.ButtonExpand>
      </S.Container>

      <ModalComponent
        isOpen={isModalDeleteOpen}
        setIsOpen={setIsModalDeleteOpen}
      >
        <S.Title>Você deseja deletar este colégio?</S.Title>
        <S.ContainerButtons>
          {isLoading ? (
            <SyncLoader color="#00bbff" size="12px" />
          ) : (
            <>
              <S.Button onClick={() => setIsModalDeleteOpen(false)}>
                Cancelar
              </S.Button>
              <S.Button onClick={handleDeleteSchool}>Confirmar</S.Button>
            </>
          )}
        </S.ContainerButtons>
      </ModalComponent>

      <ModalComponent
        isOpen={isModalEditSchoolOpen}
        setIsOpen={setIsModalEditSchoolOpen}
      >
        <EditSchool
          school={school}
          setIsOpen={setIsModalEditSchoolOpen}
          handleLoadSchools={handleLoadSchools}
        />
      </ModalComponent>
    </>
  );
};

export default School;
