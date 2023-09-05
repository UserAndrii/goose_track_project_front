import styled from '@emotion/styled';

const MainBlockDayListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 74px;
  background-color: #fff;
  color: black;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
`;

const DayListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Day = styled.span`
  color: #343434;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;

  &.weekend {
    color: #3e85f3;
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
    background-color: #3e85f3;
    color: #fff;
  }

  &:hover {
    background-color: #799cd0;
    color: #fff;
  }
`;

const RowNumber = styled.time`
  color: #343434;
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
    color: #fff;
  }

  &.row__ActiveNumber {
    color: #fff;
  }
`;

export {
  MainBlockDayListWrapper,
  DayListWrapper,
  Day,
  RowCurrentDate,
  RowNumber,
};
