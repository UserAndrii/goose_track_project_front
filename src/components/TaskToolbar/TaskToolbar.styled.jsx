// TaskToolbar.styled.js
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 62px;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--outlet-background-color);
  @media screen and (min-width: 768px) {
    width: 68px;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: var(--title-text-main-color);
  transition: color 0.2s;
  &:hover {
    color: var(--accent-background-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const Text = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  color: var(--calendar-date-color);
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
export const Wrapper = styled.div`
display:flex;
justify-content: space-between;
width: 87px;
@media screen and (min-width: 768px) {
   width 99px; 
  }
`