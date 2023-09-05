import styled from '@emotion/styled';

const CalendarRange = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 34px;
  padding: 8px 16px;
  margin-top: 18px;
  color: var(--accent-color);
  background-color: var(--auth-background-color);

  &.onMonth {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
  }

  &.onDay {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
  }

  &.isActive {
    background-color: var(--outlet-background-color);
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 1px solid rgba(220, 227, 229, 0.5);

  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  &:hover {
    background-color: rgba(11, 104, 234, 0.2);
  }

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    font-size: 16px;
  }
`;

export { CalendarRange, Button };
