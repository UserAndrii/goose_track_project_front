import styled from '@emotion/styled';

const MainBlockDayListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 50px;

  background-color: var(--main-background-color);

  color: var(--label-text-color);


  margin-top: 24px;

  border: 1px solid var(--btn-border-color);
  border-radius: 8px;
`;

const Day = styled.span`

  color: var(--calendar-day-color);

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;

  &.weekend {
    color: var(--accent-color);
  }
`;

export { MainBlockDayListWrapper, Day };
