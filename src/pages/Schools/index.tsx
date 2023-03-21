import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

import api from '@/services/api';
import axios from 'axios';

import ListOfSchools from '@/components/ListOfSchools';
import Loading from '@/components/Loading';

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

const Schools = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [schools, setSchools] = useState<SchoolProps[]>([]);

  const { enqueueSnackbar } = useSnackbar();

  const handleLoadSchools = async () => {
    try {
      setIsLoading(true);

      const { data } = await api.get('/schools');

      setSchools(data);
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
    handleLoadSchools();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <S.Container>
        <ListOfSchools
          schools={schools}
          handleLoadSchools={handleLoadSchools}
        />
      </S.Container>
    </>
  );
};

export default Schools;
