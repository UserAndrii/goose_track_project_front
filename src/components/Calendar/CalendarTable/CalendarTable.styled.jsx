import styled from '@emotion/styled';

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  flex:1;

  overflow: hidden;
  width: 100%;
  height: 100%;
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
`;

const Cell = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(220, 227, 229, 0.5);
  cursor: pointer;

  &:hover {
    background-color: aliceblue;
  }
`;

const CurrentDate = styled.div`
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
  }

  &:hover {
    background-color: #799cd0;
    color: #fff;
  }

  &.row__currentDateActive {
    background-color: #3e85f3;
    color: #fff;

    width: 20px;
    height: 22px;
    padding: 4px 6px;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
      padding: 4px 8px;
    }
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

  .rowCurrentDate:hover & {
    color: #fff;
  }

  &.row__ActiveNumber {
    color: #fff;
  }
`;

const Tasks = styled.div`
  margin-top: 33px;
  padding-bottom: 3px;

  @media screen and (min-width: 768px) {
    margin-top: 58px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  &:not(:first-of-type) {
    margin-top: 5px;
  }
`;

const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  width: 100%;
  border-radius: 8px;
  background: #ceeefd;
  cursor: pointer;
`;

const TaskTitle = styled.p`
  text-overflow: ellipsis;
  font-size: 7px;
  font-style: normal;
  font-weight: 700;
  line-height: 10px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const ThreeDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 20px;
  height: 10px;
  border-radius: 8px;
  background-color: hsl(212, 13%, 82%);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: black;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 10px;
  }

  &:hover {
    background-color: hsl(240, 2%, 61%);
    color: #fff;
  }
`;

export {
  DataGrid,
  Cell,
  CurrentDate,
  RowNumber,
  Tasks,
  TaskItem,
  TaskContainer,
  TaskTitle,
  ThreeDots,
};
