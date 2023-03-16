import { FC } from 'react';
import { HiMenu } from 'react-icons/hi';

import * as S from './style';

interface HeaderProps {
  handleOpen: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpen }) => {
  return (
    <S.Container>
      <S.Button onClick={handleOpen}>
        <HiMenu />
      </S.Button>

      <h1>Education System</h1>
    </S.Container>
  );
};

export default Header;
