import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate
} from 'react-router-dom';

import styled from 'styled-components';

import LeftMenu from '@/components/LeftMenu';
import Header from '@/components/Header';
import Redirect from './components/Redirect';

import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Dashboard from '@/pages/Dashboard';
import Classrooms from '@/pages/Classrooms';
import Schools from '@/pages/Schools';

import logoImg from '@/assets/logo.svg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem('token');

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (token) {
      if (location.pathname === '/' || location.pathname === '/sign-up') {
        navigate('/dashboard');
      }
    }
  }, []);

  if (!token && location.pathname !== '/' && location.pathname !== '/sign-up') {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      {token &&
      location.pathname !== '/' &&
      location.pathname !== '/sign-up' ? (
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
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classrooms" element={<Classrooms />} />
        <Route path="/schools" element={<Schools />} />

        <Route path="*" element={<Redirect />} />
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
    color: #ffb042;
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
