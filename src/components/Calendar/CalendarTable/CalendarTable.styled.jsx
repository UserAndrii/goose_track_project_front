import styled from '@emotion/styled';

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  flex: 1;



  overflow: hidden;
  width: 100%;
  max-height: 100%;
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;

  background-color: var(-main-background-color);

  border-radius: 8px;
  border: 1px solid var(--calendar-border-color);
  overflow-y: scroll;
`;

const Cell = styled.div`
  position: relative;
  overflow: hidden;

  border: 1px solid var(--btn-border-color);
  cursor: pointer;

  &:hover {
    background-color: var(--auth-background-color);
  }

  @media screen and (min-width: 1440px) {
    min-height: 102px;
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
    background-color: var(--outlet-background-color);
    color: var(--text-priority-high-color);
  }

  &.row__currentDateActive {
    background-color: var(--accent-background-color);
    color: var(--text-priority-high-color);

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

  .rowCurrentDate:hover & {
    color: var(--text-priority-high-color);
  }

  &.row__ActiveNumber {
    color: var(--text-priority-high-color);
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
  background: var(--auth-background-color);
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
  background-color: var(--outlet-background-color);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--title-text-main-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 10px;
  }

  &:hover {
    background-color: var(--auth-background-color);
    color: var(--btn-text-color);
  }
`;

const TaskBody = styled.div`
  position: absolute;
  border: 2px solid var(--btn-border-color);
  box-shadow: 2px 2px 16px 0px rgba(136, 165, 191, 0.48);
  border-radius: 15%;
  left: 50%;
  top: 50%;
  width: 65%;
  height: 70%;
  background: linear-gradient(
    to bottom right,
    var(--task-body-linear-top),
    var(--task-body-linear-bottom)
  );
  transform: translate(-50%, -40%);

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    height: 60%;
    width: 70%;
    top: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    top: 62%;
    height: 60%;
  }
`;

const TaskHead = styled.div`
  position: absolute;
  width: 45%;
  height: 40%;
  background: linear-gradient(
    to bottom right,
    var(--btn-head-color),
    var(--linear-gradient)
  );
  left: 50%;
  border-radius: 25%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--calendar-date-color);
  font-size: 16px;
  line-height: 17px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    height: 30%;
    font-size: 12px;
    width: 65%;
    font-weight: 700;
  }
`;

const PriorityContain = styled.div`
  display: flex;
  width: 90%;
  height: 80%;
  position: absolute;
  justify-content: space-around;
  align-items: center;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    top: 17%;
  }
`;

const Priority = styled.div`
  width: ${props => (props.count === 3 ? 30 : props.count === 2 ? 45 : 60)}%;
  height: ${props => (props.count === 3 ? 40 : props.count === 2 ? 50 : 70)}%;
  background: ${props =>
    props.color === 1
      ? 'linear-gradient(  to bottom right, #72C2F8, #367EBD)'
      : props.color === 2
      ? 'linear-gradient(  to bottom right,rgba(243, 178, 73, 0.6), #F3B249 )'
      : 'linear-gradient(  to bottom right, #EA3D65, #8B0000)'};
  border-radius: 20%;
  color: #f7f6f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 17px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    width: 55%;
    font-size: 10px;
    font-weight: 500;
    height: ${props => (props.count === 3 ? 30 : props.count === 2 ? 45 : 70)}%;
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
  TaskBody,
  TaskHead,
  PriorityContain,
  Priority,
};
