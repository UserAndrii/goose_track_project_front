import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { DayCalendarHead } from '../DayCalendarHead/DayCalendarHead';

export const ChoosedDay = ({ week, currentDay }) => {
  return (
    <>
      <DayCalendarHead week={week} currentDay={currentDay} />
      <TasksColumnsList />
    </>
  );
};
