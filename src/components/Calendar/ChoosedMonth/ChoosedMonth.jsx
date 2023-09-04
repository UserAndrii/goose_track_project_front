import { useLocation } from 'react-router';
import { CalendarTable } from '../CalendarTable/CalendarTable';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';

export const ChoosedMonth = ({
  currentDay,
  days,
  allTasks,
  setIsMonthPage,
  week,
  setCurrentDay,
  setTasks,
}) => {
  const location = useLocation();

  /* eslint-disable */
  const [_, __, monthOrDay] = location.pathname.split('/');
  /* eslint-enable */

  if (monthOrDay === 'day') {
    setIsMonthPage(false);
  }
  return (
    <>
      <MonthCalendarHead week={week} />
      <CalendarTable
        monthDays={days}
        setIsMonthPage={setIsMonthPage}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        allTasks={allTasks && allTasks}
        setTasks={setTasks}
      />
    </>
  );
};
