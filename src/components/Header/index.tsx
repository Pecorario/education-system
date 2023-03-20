import { FC } from 'react';
import { HiMenu } from 'react-icons/hi';

import logoImg from '@/assets/logo.svg';

import * as S from './style';

interface HeaderProps {
  handleOpen: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpen }) => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={logoImg} alt="" />
        <h1>
          School<span>Dash</span>
        </h1>
      </S.LogoContainer>

      <S.Button onClick={handleOpen}>
        <HiMenu />
      </S.Button>
    </S.Container>
  );
};

export default Header;
