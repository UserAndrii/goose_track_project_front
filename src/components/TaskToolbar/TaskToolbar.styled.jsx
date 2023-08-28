// TaskToolbar.styled.js
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 68px;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #111111;
  transition: color 0.2s;
   &:hover {
    color: #3E85F3;
  }
`;
