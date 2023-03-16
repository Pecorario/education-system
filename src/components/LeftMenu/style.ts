import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.li`
  padding: 20px;

  :hover {
    opacity: 0.8;
    background: gray;
    cursor: pointer;
  }
`;
