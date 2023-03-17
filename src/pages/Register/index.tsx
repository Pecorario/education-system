import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '@/components/Input';
import Form from '@/components/Form';

import * as S from './style';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      // post
      const user = {
        email,
        password,
        name
      };

      navigate('/');
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
          text="Nome"
          placeholder="Digite seu nome completo"
          disabled={isLoading}
        />
        <Input
          text="E-mail"
          placeholder="Digite seu e-mail"
          type="email"
          disabled={isLoading}
        />
        <Input
          text="Senha"
          placeholder="Digite a sua senha"
          type="password"
          disabled={isLoading}
        />
        <Input
          text="Senha"
          placeholder="Digite a sua senha novamente"
          type="password"
          disabled={isLoading}
        />
      </Form>

      <S.LinkItem to="/">Já tem uma conta? Entre</S.LinkItem>
    </S.Container>
  );
};

export default Register;
