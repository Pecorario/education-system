import Form from '@/components/Form';
import Input from '@/components/Input';

import * as S from './style';

const Schools = () => {
  return (
    <S.Container>
      <S.Title>Criar novo colégio</S.Title>
      <Form textButton="Cadastrar">
        <Input text="Nome" />
        <Input text="Estado" />
        <Input text="Cidade" />
        <Input text="Símbolo" type="file" />
      </Form>
    </S.Container>
  );
};

export default Schools;
