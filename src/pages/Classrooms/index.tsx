import Form from '../../components/Form';
import Input from '../../components/Input';
import Toggle from '../../components/Toggle';
import * as S from './style';

export default function Classrooms() {
  const PROFESSORS = [
    {
      id: 1,
      value: 'Prof. Eduardo'
    },
    {
      id: 1,
      value: 'Prof. Fernando'
    },
    {
      id: 1,
      value: 'Prof. Camila'
    },
    {
      id: 1,
      value: 'Prof. Paula'
    }
  ];

  return (
    <S.Container>
      <S.Title>Criar nova sala</S.Title>
      <Form textButton="Cadastrar">
        <Input text="Nome" />
        <Input text="Capacidade de mesas" type="number" />
        <Toggle />
        <select>
          {PROFESSORS.map(professor => (
            <option key={professor.id}>{professor.value}</option>
          ))}
        </select>
        <Input text="Grade de Aulas" type="file" />
        <Input text="Protocolo" type="file" />
      </Form>
    </S.Container>
  );
}
