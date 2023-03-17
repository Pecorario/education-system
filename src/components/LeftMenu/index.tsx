import { FC, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer } from 'rsuite';

import './styles.css';

import * as S from './style';

interface LeftMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

const LeftMenu: FC<LeftMenuProps> = ({ open, setOpen, title }) => {
  const navigate = useNavigate();

  const goToPage = (page: string) => {
    navigate(page);
    setOpen(false);
  };

  return (
    <Drawer
      size="xs"
      placement="left"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Drawer.Header>
        <Drawer.Title>{title}</Drawer.Title>
      </Drawer.Header>

      <nav>
        <S.List>
          <S.Line onClick={() => goToPage('/dashboard')}>Dashboard</S.Line>
          <S.Line onClick={() => goToPage('/schools')}>Colégios</S.Line>
          <S.Line onClick={() => goToPage('/classrooms')}>Salas</S.Line>
        </S.List>
      </nav>
    </Drawer>
  );
};

export default LeftMenu;
