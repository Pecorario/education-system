import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '@/components/Input';
import Form from '@/components/Form';

import * as S from './style';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      // post
      const user = {
        email,
        password
      };

      localStorage.setItem('user', JSON.stringify(user));

      navigate('/dashboard');
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <Form onSubmit={handleSubmit} isLoading={isLoading} textButton="Entrar">
        <Input
          text="E-mail"
          placeholder="Digite o texto aqui"
          disabled={isLoading}
        />
        <Input
          text="Senha"
          placeholder="Digite o texto aqui"
          disabled={isLoading}
        />
      </Form>

      <S.LinkItem to="/register">
        Não tem uma conta ainda? Cadastre-se
      </S.LinkItem>
    </S.Container>
  );
};

export default Login;
