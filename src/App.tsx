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

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      {location.pathname !== '/' && location.pathname !== '/register' && (
        <>
          <Header handleOpen={handleOpen} />

          <LeftMenu open={isOpen} setOpen={setIsOpen} title="Menu" />
        </>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
`;

export default App;
