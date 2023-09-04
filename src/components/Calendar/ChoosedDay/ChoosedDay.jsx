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
  const location = useLocation();

  /* eslint-disable */
  const [_, __, monthOrDay, date] = location.pathname.split('/');
  /* eslint-enable */
  // const parsedDate = parse(date, 'yyyy-MM-dd', new Date());

  // if (!isSameDay(parsedDate, currentDay)) setCurrentDay(parsedDate);

  if (monthOrDay === 'month') {
    setIsMonthPage(true);
  }
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
