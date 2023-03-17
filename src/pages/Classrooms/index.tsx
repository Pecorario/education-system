import { ChangeEvent, useRef, useState } from 'react';
import { IoDocument } from 'react-icons/io5';

import Form from '@/components/Form';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Toggle from '@/components/Toggle';

import * as S from './style';

const Classrooms = () => {
  const PROFESSORS = [
    {
      id: 1,
      value: 'Prof. Eduardo'
    },
    {
      id: 2,
      value: 'Prof. Fernando'
    },
    {
      id: 3,
      value: 'Prof. Camila'
    },
    {
      id: 4,
      value: 'Prof. Paula'
    }
  ];

  const [classSchedule, setClassSchedule] = useState('');
  const [classScheduleName, setClassScheduleName] = useState('');
  const [protocolName, setProtocolName] = useState('');
  const [protocol, setProtocol] = useState<File>();

  const filesElement = useRef(null);

  const handleChangeClassSchedule = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files as FileList;

    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        if (typeof reader.result === 'string') {
          setClassSchedule(reader.result);
        }
      },
      false
    );

    if (file) {
      setClassScheduleName(file[0].name);
      reader.readAsDataURL(file[0]);
    }
  };

  const handleChangeProtocol = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;

    setProtocol(files[0]);
    setProtocolName(files[0].name);
  };

  return (
    <S.Container>
      <S.Title>Criar nova sala</S.Title>
      <Form textButton="Cadastrar">
        <Input text="Nome" />
        <Input text="Capacidade de mesas" type="number" />

        <Select data={PROFESSORS} text="Professores" />

        <S.ImageInputContainer>
          <Input
            text="Grade de Aulas"
            type="file"
            accept="image/*"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeClassSchedule(e)
            }
          />
          <img src={classSchedule} alt="" />
        </S.ImageInputContainer>

        <S.DocContainer>
          <S.DocInputContainer>
            {protocol && <IoDocument />}
            <Input
              text="Protocolo"
              type="file"
              accept=".doc, .docx"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChangeProtocol(e)
              }
            />
          </S.DocInputContainer>
          {protocol && <span>{protocolName}</span>}
        </S.DocContainer>

        <Toggle />
      </Form>
    </S.Container>
  );
};

export default Classrooms;
