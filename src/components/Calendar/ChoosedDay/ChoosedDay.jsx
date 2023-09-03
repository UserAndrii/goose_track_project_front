import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { DayCalendarHead } from '../DayCalendarHead/DayCalendarHead';

export const ChoosedDay = ({ week, currentDay, filteredTask }) => {
  // console.log('filteredTask', filteredTask);
  return (
    <>
      <DayCalendarHead week={week} currentDay={currentDay} />
      <TasksColumnsList currentDay={currentDay} filteredTask={filteredTask}/>
    </>
  );
};
