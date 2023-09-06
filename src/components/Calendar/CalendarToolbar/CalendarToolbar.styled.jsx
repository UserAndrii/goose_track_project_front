import styled from '@emotion/styled';

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CalendarRangeWrapper = styled.div`
  display: flex;

  max-width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CalendarRangeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 34px;
  padding: 8px 16px;
  margin-top: 18px;
  color: var(--accent-color);
  background-color: var(--auth-background-color);
  cursor: pointer;

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

  &:hover {
    background-color: rgba(11, 104, 234, 0.2);
  }
`;
const ButtonView = styled.button`
  box-sizing: content-box;
  display: flex;
  margin-right: 10px;
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: 0;

  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--calendartable-border-color);
  color: var(--accent);
  background-color: var(--background-button-day);
  &:hover {
    background-color: rgba(11, 104, 234, 0.2);
  }
`;

export {
  ToolbarWrapper,
  CalendarRangeWrapper,
  CalendarRangeButton,
  ButtonView,
};
