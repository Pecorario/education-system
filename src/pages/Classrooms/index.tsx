import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

import api from '@/services/api';
import axios from 'axios';

import ListOfClassrooms from '@/components/ListOfClassrooms';
import Loading from '@/components/Loading';

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
}

const Classrooms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [classrooms, setClassrooms] = useState<ClassroomProps[]>([]);

  const { enqueueSnackbar } = useSnackbar();

  const handleLoadClassrooms = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/classrooms');

      setClassrooms(data);
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

  useEffect(() => {
    handleLoadClassrooms();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <S.Container>
        <ListOfClassrooms
          classrooms={classrooms}
          handleLoadClassrooms={handleLoadClassrooms}
        />
      </S.Container>
    </>
  );
};

export default Classrooms;
