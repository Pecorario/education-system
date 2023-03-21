import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';

import logoImg from '@/assets/logo.svg';

import * as S from './style';

interface HeaderProps {
  handleOpen: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate('/');
  };

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

      <S.LogoutContainer onClick={handleLogout}>
        <span>Desconectar</span>
        <FiLogOut />
      </S.LogoutContainer>
    </S.Container>
  );
};

export default Header;
