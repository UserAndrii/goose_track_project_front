import styled from '@emotion/styled';

const MainBlockDayListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: var(--main-background-color);
  padding: 14px 18px;

  color: var(--label-text-color);

  margin-top: 24px;
  border: 1px solid var(--btn-border-color);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;

const DayListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Day = styled.span`

  color: var(--calendar-date-color);

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;

  &.weekend {
    color: var(--accent-color);
  }
`;

const RowCurrentDate = styled.button`
  position: absolute;
  top: 8px;
  right: 4px;

  width: 22px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding: 4px 6px;

  border: none;
  border-radius: 8px;

  background-color: transparent;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;
    padding: 4px 8px;
  }

  &.row__currentDateActive {
    background-color: var(--accent-background-color);
    color: var(--btn-text-color);
  }

  &:hover {
    background-color: var(--auth-background-color);
    color: var(--btn-text-color);
  }
`;

const RowNumber = styled.time`

  color: var(--calendar-date-color);

  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  .row__currentDate:hover & {
    color: var(--btn-text-color);
  }

  &.row__ActiveNumber {
    color: var(--btn-text-color);
  }
`;

export {
  MainBlockDayListWrapper,
  DayListWrapper,
  Day,
  RowCurrentDate,
  RowNumber,
};
