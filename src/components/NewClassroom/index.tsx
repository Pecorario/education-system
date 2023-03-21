import { FC, ChangeEvent, useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import axios from 'axios';
import api from '@/services/api';

import Form from '@/components/Form';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Toggle from '@/components/Toggle';

import * as S from './style';
import SelectTeachers from './SelectTeachers';

interface ClassroomProps {
  id: number;
  name: string;
  schoolId: number;
  deskCapacity: number;
  isBlocked: boolean;
  teachers?: {
    id: number;
    name: string;
  }[];
}

interface TeacherProps {
  id: number;
  name: string;
  classrooms: ClassroomProps[];
}

interface SchoolProps {
  id: number;
  name: string;
  city: string;
  state: string;
  symbol: string;
  classrooms: ClassroomProps[];
}

interface NewClassroomProps {
  setIsOpen: (value: boolean) => void;
  handleLoadClassrooms: () => void;
  classroom?: ClassroomProps;
}

const NewClassroom: FC<NewClassroomProps> = ({
  classroom,
  setIsOpen,
  handleLoadClassrooms
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [schools, setSchools] = useState([]);

  const getTeachers = classroom?.teachers!.map(item => item.id) || [];

  const [selectedTeachers, setSelectedTeachers] = useState<number[]>(
    classroom ? getTeachers : []
  );

  const [name, setName] = useState(classroom ? classroom.name : '');
  const [deskCapacity, setDeskCapacity] = useState(
    classroom ? classroom.deskCapacity : ''
  );
  const [isBlocked, setIsBlocked] = useState(
    classroom ? classroom.isBlocked : false
  );
  const [schoolId, setSchoolId] = useState(classroom ? classroom.schoolId : 0);
  // const [classSchedule, setClassSchedule] = useState('');
  // const [classScheduleName, setClassScheduleName] = useState('');
  // const [protocolName, setProtocolName] = useState('');
  // const [protocol, setProtocol] = useState<File>();

  // const filesElement = useRef(null);

  const { enqueueSnackbar } = useSnackbar();

  // const handleChangeClassSchedule = (e: ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLInputElement;
  //   const file = target.files as FileList;

  //   const reader = new FileReader();

  //   reader.addEventListener(
  //     'load',
  //     () => {
  //       if (typeof reader.result === 'string') {
  //         setClassSchedule(reader.result);
  //       }
  //     },
  //     false
  //   );

  //   if (file) {
  //     setClassScheduleName(file[0].name);
  //     reader.readAsDataURL(file[0]);
  //   }
  // };

  // const handleChangeProtocol = (e: ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLInputElement;
  //   const files = target.files as FileList;

  //   setProtocol(files[0]);
  //   setProtocolName(files[0].name);
  // };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const data = new FormData();
    // data.append('file', protocol!);

    // console.log(data);

    // await axios.post('http://localhost:5000/upload', data);

    try {
      setIsLoading(true);

      if (selectedTeachers.length === 0) {
        enqueueSnackbar('Você deve selecionar pelo menos 1 professor regente', {
          variant: 'error'
        });
      } else {
        if (classroom) {
          await api.put(`/classrooms/${classroom.id}`, {
            name,
            deskCapacity,
            schoolId,
            isBlocked,
            teachersIds: selectedTeachers
          });

          enqueueSnackbar('Sala atualizada com sucesso!', {
            variant: 'success'
          });

          setIsOpen(false);
          handleLoadClassrooms();
        } else {
          await api.post('/classrooms', {
            name,
            deskCapacity,
            schoolId,
            isBlocked,
            teachersIds: selectedTeachers
          });

          enqueueSnackbar('Sala cadastrada com sucesso!', {
            variant: 'success'
          });

          setIsOpen(false);
          handleLoadClassrooms();
        }
      }
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

  const handleLoadTeachers = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/teachers');

      setTeachers(data);
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

  const handleLoadSchools = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/schools');

      if (!classroom) {
        setSchoolId(data[0].id);
      }

      setSchools(data);
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

  const handleChangeDeskCapacity = (e: ChangeEvent<HTMLInputElement>) => {
    setDeskCapacity(e.target.value);
  };

  useEffect(() => {
    handleLoadTeachers();
    handleLoadSchools();
  }, []);

  return (
    <S.Container>
      <S.Title>{classroom ? 'Editar' : 'Cadastrar nova'} sala</S.Title>
      <Form
        textButton={classroom ? 'Atualizar' : 'Cadastrar'}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        paddingTop="0"
      >
        <Input
          text="Nome"
          value={name}
          handleChange={handleChangeName}
          isActiveInitial={classroom ? true : false}
        />

        <Input
          text="Capacidade de mesas"
          type="number"
          value={deskCapacity}
          handleChange={handleChangeDeskCapacity}
          isActiveInitial={classroom ? true : false}
        />

        <Select
          data={schools}
          text="Escola"
          value={schoolId}
          onChange={e => setSchoolId(Number(e.target.value))}
        />

        <S.TeachersContainer>
          <S.Label>Professores regentes (1 a 5)</S.Label>

          <S.TeacherContainer>
            {teachers.map((teacher: TeacherProps) => (
              <SelectTeachers
                teacher={teacher}
                selectedTeachers={selectedTeachers}
                setSelectedTeachers={setSelectedTeachers}
              />
            ))}
          </S.TeacherContainer>
        </S.TeachersContainer>

        {/* <S.ImageInputContainer>
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
          <Input
            text="Protocolo"
            type="file"
            accept=".doc, .docx"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeProtocol(e)
            }
          />

          {protocol && (
            <S.DocInputContainer>
              <IoDocument />
              <span>{protocolName}</span>
            </S.DocInputContainer>
          )}
          </S.DocContainer> */}

        <Toggle isBlocked={isBlocked} setIsBlocked={setIsBlocked} />
      </Form>
    </S.Container>
  );
};

export default NewClassroom;
