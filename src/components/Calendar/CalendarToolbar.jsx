import css from './Caledar.module.css';

import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodPaginatorType } from './PeriodPaginatorType/PeriodPaginatorType';
import { useNavigate, useParams } from 'react-router-dom';

import { format, parse, add } from 'date-fns';

export const CalendarToolBar = ({
  isMonthPage,
  setIsMonthPage,
  currentMonth,
  setCurrentMonth,
  currentDay,
  setCurrentDay,
}) => {
  const navigate = useNavigate();
  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());
  const formattedDay =
    currentDate === undefined ? currentDay : parsedCurrentDate;

  // Current Week
  // const [currentWeek, setCurrentWeek] = useState({
  //   start: startOfWeek(today, { weekStartsOn: 1 }),
  //   end: addDays(endOfWeek(today, { weekStartsOn: 0 }), 1),
  // });
  // const Week = eachDayOfInterval(currentWeek);

  // Weeks
  // const nextWeek = () => {
  //   const nextWeekStart = addWeeks(currentWeek.start, 1);
  //   const nextWeekEnd = addDays(
  //     endOfWeek(nextWeekStart, { weekStartsOn: 0 }),
  //     1
  //   );
  //   setCurrentWeek({ start: addWeeks(currentWeek.start, 1), end: nextWeekEnd });
  // };

  // const prevWeek = () => {
  //   const prevWeekStart = subWeeks(currentWeek.start, 1);
  //   const prevWeekEnd = addDays(
  //     endOfWeek(prevWeekStart, { weekStartsOn: 0 }),
  //     1
  //   );
  //   setCurrentWeek({ start: prevWeekStart, end: prevWeekEnd });
  // };

  const prevPeriod = () => {
    const parsedDate = parse(currentDate, 'yyyy-MM-dd', new Date());
    if (isMonthPage) {
      const firstDayPrevMonth = add(parsedDate, { months: -1 });
      setCurrentMonth(format(firstDayPrevMonth, 'MMM-yyyy'));
      const newDate = format(firstDayPrevMonth, 'yyyy-MM-dd');
      navigate(`month/${newDate}`);
    } else {
      const prevDay = add(parsedDate, { days: -1 });
      setCurrentDay(prevDay);
      const newDate = format(prevDay, 'yyyy-MM-dd');
      navigate(`day/${newDate}`);
    }
  };

  const nextPeriod = () => {
    const parsedDate = parse(currentDate, 'yyyy-MM-dd', new Date());
    if (isMonthPage) {
      const firstDayPrevMonth = add(parsedDate, { months: 1 });
      setCurrentMonth(format(firstDayPrevMonth, 'MMM-yyyy'));
      const newDate = format(firstDayPrevMonth, 'yyyy-MM-dd');
      navigate(`month/${newDate}`);
    } else {
      const nextDay = add(parsedDate, { days: 1 });
      setCurrentDay(nextDay);
      const newDate = format(nextDay, 'yyyy-MM-dd');
      navigate(`day/${newDate}`);
    }
  };

  const changeType = state => {
    setIsMonthPage(state);
  };

  return (
    <>
      <div className={css.toolbar}>
        <PeriodPaginator
          isMonthPage={isMonthPage}
          prevPeriod={prevPeriod}
          nextPeriod={nextPeriod}
          currentDay={currentDay}
          currentMonth={currentMonth}
        />

        <PeriodPaginatorType
          isMonthPage={isMonthPage}
          changeType={changeType}
        />
      </div>

      <div className={css.calendarRange}>
        <button
          className={`${css.calendarRange__buttons} ${css.calendarRange__monthButton}`}
          style={{
            backgroundColor: isMonthPage
              ? 'rgba(62, 133, 243, 0.2)'
              : 'rgba(227, 243, 255, 1)',
          }}
          onClick={() => {
            navigate(`month/${format(formattedDay, 'yyyy-MM-dd')}`);
            changeType(true);
          }}
        >
          Month
        </button>
        <button
          className={`${css.calendarRange__buttons} ${css.calendarRange__dayButton}`}
          style={{
            backgroundColor: !isMonthPage
              ? 'rgba(62, 133, 243, 0.2)'
              : 'rgba(227, 243, 255, 1)',
          }}
          onClick={() => {
            navigate(`day/${format(formattedDay, 'yyyy-MM-dd')}`);
            changeType(false);
          }}
        >
          Day
        </button>
      </div>
    </>
  );
};
