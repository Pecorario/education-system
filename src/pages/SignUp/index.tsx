import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import api from '@/services/api';
import axios from 'axios';

import Input from '@/components/Input';
import Form from '@/components/Form';

import * as S from './style';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      await api.post('/sign-up', {
        username,
        password,
        password_repeat: repeatedPassword
      });

      enqueueSnackbar('Usuário cadastrado com sucesso', {
        variant: 'success',
        autoHideDuration: 2000
      });

      navigate('/');
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

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeRepeatedPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatedPassword(e.target.value);
  };

  return (
    <S.Container>
      <S.FormContainer>
        <S.Title>Cadastre-se</S.Title>
        <Form
          onSubmit={handleSubmit}
          isLoading={isLoading}
          textButton="Cadastrar"
          paddingTop="30px"
        >
          <Input
            text="Nome de usuário"
            value={username}
            handleChange={handleChangeUsername}
            disabled={isLoading}
          />
          <Input
            text="Senha"
            value={password}
            handleChange={handleChangePassword}
            type="password"
            disabled={isLoading}
          />
          <Input
            text="Confirme a senha"
            value={repeatedPassword}
            handleChange={handleChangeRepeatedPassword}
            type="password"
            disabled={isLoading}
          />
        </Form>

        <S.LinkItem to="/">Já tem uma conta? Entre</S.LinkItem>
      </S.FormContainer>
    </S.Container>
  );
};

export default SignUp;
