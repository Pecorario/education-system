import { FC, ChangeEvent, useState } from 'react';
import { useSnackbar } from 'notistack';

import api from '@/services/api';
import axios from 'axios';

import Form from '@/components/Form';
import Input from '@/components/Input';

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

interface EditSchoolProps {
  setIsOpen: (value: boolean) => void;
  handleLoadSchools: () => void;
  school: School;
}

const EditSchool: FC<EditSchoolProps> = ({
  school,
  setIsOpen,
  handleLoadSchools
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(school.name);
  const [state, setState] = useState(school.state);
  const [city, setCity] = useState(school.city);
  const [symbol, setSymbol] = useState(school.symbol);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      await api.put(`/schools/${school.id}`, {
        name,
        city,
        state,
        symbol
      });

      enqueueSnackbar('Escola atualizada com sucesso!', { variant: 'success' });

      setIsOpen(false);
      handleLoadSchools();
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

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleChangeSymbol = (e: ChangeEvent<HTMLInputElement>) => {
    setSymbol(e.target.value);
  };

  return (
    <S.Container>
      <S.Title>Editar colégio</S.Title>
      <Form
        textButton="Atualizar"
        paddingTop="0"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        isDisabled={name === '' || city === '' || state === '' || symbol === ''}
      >
        <Input
          text="Nome"
          value={name}
          handleChange={handleChangeName}
          disabled={isLoading}
          isActiveInitial
        />
        <Input
          text="Estado"
          value={state}
          handleChange={handleChangeState}
          disabled={isLoading}
          isActiveInitial
        />
        <Input
          text="Cidade"
          value={city}
          handleChange={handleChangeCity}
          disabled={isLoading}
          isActiveInitial
        />
        <Input
          text="Símbolo (URL)"
          type="url"
          value={symbol}
          handleChange={handleChangeSymbol}
          disabled={isLoading}
          isActiveInitial
        />
      </Form>
    </S.Container>
  );
};

export default EditSchool;
