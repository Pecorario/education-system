import { FC, ChangeEvent, useState } from 'react';
import { useSnackbar } from 'notistack';

import api from '@/services/api';
import axios from 'axios';

import Form from '@/components/Form';
import Input from '@/components/Input';

import * as S from './style';

interface NewSchoolProps {
  setIsOpen: (value: boolean) => void;
  handleLoadSchools: () => void;
}

const NewSchool: FC<NewSchoolProps> = ({ setIsOpen, handleLoadSchools }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [symbol, setSymbol] = useState('');

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      await api.post('/schools', {
        name,
        city,
        state,
        symbol
      });

      enqueueSnackbar('Colégio cadastrado com sucesso!', {
        variant: 'success'
      });

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
      <S.Title>Criar novo colégio</S.Title>
      <Form
        textButton="Cadastrar"
        paddingTop="0"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        isDisabled={name === '' || city === '' || state === '' || symbol === ''}
      >
        <Input text="Nome" value={name} handleChange={handleChangeName} />
        <Input text="Estado" value={state} handleChange={handleChangeState} />
        <Input text="Cidade" value={city} handleChange={handleChangeCity} />
        {/* <Input text="Símbolo" type="file" value={name} handleChange={handleChangeName}/> */}
        <Input
          text="Símbolo"
          type="url"
          value={symbol}
          handleChange={handleChangeSymbol}
        />
      </Form>
    </S.Container>
  );
};

export default NewSchool;
