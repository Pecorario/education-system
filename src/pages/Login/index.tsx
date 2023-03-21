import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import api from '@/services/api';
import axios from 'axios';

import Input from '@/components/Input';
import Form from '@/components/Form';

import * as S from './style';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const { data } = await api.post('/login', {
        username,
        password
      });

      localStorage.setItem('token', data.token);

      navigate('/dashboard');
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

  return (
    <S.Container>
      <S.FormContainer>
        <S.Title>Faça seu login</S.Title>
        <Form
          onSubmit={handleSubmit}
          isLoading={isLoading}
          textButton="Entrar"
          paddingTop="30px"
          isDisabled={username === '' || password === ''}
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
        </Form>

        <S.LinkItem to="/sign-up">
          Não tem uma conta ainda? Cadastre-se
        </S.LinkItem>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
