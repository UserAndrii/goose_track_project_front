import styled from '@emotion/styled';

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CalendarRangeWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 335px;

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
  color: #3e85f3;
  background-color: #e3f3ff;

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
    background-color: #cae8ff;
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(220, 227, 229, 0.5);

  &:hover {
    background-color: rgba(11, 104, 234, 0.2);
  }
`;
const ButtonView = styled.button`
  display: flex;
  margin-left: 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: none;
  color: #3e85f3;
  background-color: #cae8ff;
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
