import { FC, useState } from 'react';
import { useSnackbar } from 'notistack';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

import * as S from '../style';

interface ClassroomProps {
  id: number;
  name: string;
  schoolId: number;
  deskCapacity?: number;
  isBlocked?: boolean;
}

interface TeacherProps {
  id: number;
  name: string;
  classrooms: ClassroomProps[];
}

interface SelectTeachersProps {
  teacher: TeacherProps;
  selectedTeachers: number[];
  setSelectedTeachers: (value: number[]) => void;
}

const SelectTeachers: FC<SelectTeachersProps> = ({
  teacher,
  selectedTeachers,
  setSelectedTeachers
}) => {
  // const [isSelected, setIsSelected] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSelectTeacher = () => {
    if (
      selectedTeachers.length === 5 &&
      !selectedTeachers.includes(teacher.id)
    ) {
      enqueueSnackbar('Você já selecionou o número máximo de professores!', {
        variant: 'error'
      });
    } else if (selectedTeachers.includes(teacher.id)) {
      const newSelectedTeachers = selectedTeachers.filter(
        item => item !== teacher.id
      );
      setSelectedTeachers(newSelectedTeachers);
    } else {
      const newSelectedTeachers = [...selectedTeachers, teacher.id];
      setSelectedTeachers(newSelectedTeachers);
    }
  };

  return (
    <S.TeacherItem
      onClick={handleSelectTeacher}
      isSelected={selectedTeachers.includes(teacher.id)}
    >
      {selectedTeachers.includes(teacher.id) ? (
        <ImCheckboxChecked />
      ) : (
        <ImCheckboxUnchecked />
      )}
      <S.TeacherName>{teacher.name}</S.TeacherName>
    </S.TeacherItem>
  );
};

export default SelectTeachers;
