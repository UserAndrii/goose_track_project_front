import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { DayCalendarHead } from '../DayCalendarHead/DayCalendarHead';

export const ChoosedDay = ({
  week,
  currentDay,
  filteredTask,
  setCurrentDay,
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
