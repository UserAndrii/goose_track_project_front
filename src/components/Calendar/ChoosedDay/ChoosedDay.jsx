import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { DayCalendarHead } from '../DayCalendarHead/DayCalendarHead';
import { useLocation } from 'react-router';

export const ChoosedDay = ({
  week,
  currentDay,
  filteredTask,
  setCurrentDay,
  setIsMonthPage,
}) => {
  return (
    <>
      <DayCalendarHead
        week={week}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
      />
      <TasksColumnsList currentDay={currentDay} filteredTask={filteredTask} />
    </>
  );
};
