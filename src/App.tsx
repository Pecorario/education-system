import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import LeftMenu from '@/components/LeftMenu';
import Header from '@/components/Header';

import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import Classrooms from '@/pages/Classrooms';
import Schools from '@/pages/Schools';

import logoImg from '@/assets/logo.svg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Container>
      {location.pathname !== '/' && location.pathname !== '/register' ? (
        <>
          <Header handleOpen={handleClick} />

          <LeftMenu open={isOpen} setOpen={setIsOpen} title="Menu" />
        </>
      ) : (
        <LogoContainer>
          <img src={logoImg} alt="" />
          <h1>
            School<span>Dash</span>
          </h1>
        </LogoContainer>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classrooms" element={<Classrooms />} />
        <Route path="/schools" element={<Schools />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    font-family: 'Righteous', cursive;
    font-size: 55px;
    color: #fc9700;
    font-weight: 400;
  }

  img {
    width: 80px;
    height: auto;
  }

  span {
    color: white;
    font: inherit;
    font-weight: 400;
  }
`;

export default App;
