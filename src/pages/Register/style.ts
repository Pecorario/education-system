import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00bbff;
`;

export const FormContainer = styled.div`
  width: 500px;
  height: 620px;
  padding: 40px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;

  background: #f2f2f2;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 400;
  text-align: center;

  color: #434343;
`;

export const LinkItem = styled(Link)`
  font-size: 16px;
  text-align: center;

  color: #00bbff;

  transition: all 0.2s;

  :hover {
    color: #00bbff;
  }
`;
