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
      <S.FormContainer>
        <S.Title>Cadastre-se</S.Title>
        <Form
          onSubmit={handleSubmit}
          isLoading={isLoading}
          textButton="Cadastrar"
          paddingTop="30px"
        >
          <Input text="Nome" disabled={isLoading} />
          <Input text="E-mail" type="email" disabled={isLoading} />
          <Input text="Senha" type="password" disabled={isLoading} />
          <Input text="Confirme a senha" type="password" disabled={isLoading} />
        </Form>

        <S.LinkItem to="/">Já tem uma conta? Entre</S.LinkItem>
      </S.FormContainer>
    </S.Container>
  );
};

export default Register;
