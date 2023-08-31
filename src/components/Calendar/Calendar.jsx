import css from './Caledar.module.css';
import { useEffect, useState } from 'react';
import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';

// import { Outlet, useParams } from 'react-router-dom';
// import { Suspense } from 'react';

// import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';

// import axios from 'axios';

import {
  format,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  addDays,
  // isSameMonth,
  // isSameDay,
  isToday,
  eachDayOfInterval,
  startOfToday,
  parse,
  add,
  // addWeeks,
  // subWeeks,
  // isBefore,
  // isEqual,
  // startOfMonth,
} from 'date-fns';

import { useMediaQuery } from 'react-responsive';

import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodPaginatorType } from './PeriodPaginatorType/PeriodPaginatorType';
import { useNavigate } from 'react-router-dom';

export const CalendarToolBar = ({
  isMonthPage,
  setIsMonthPage,
  currentDay,
  firstDayCurrentMonth,
  setCurrentMonth,
}) => {
  const today = currentDay;

  // Current Week
  const [currentWeek] = useState({
    start: startOfWeek(today, { weekStartsOn: 1 }),
    end: addDays(endOfWeek(today, { weekStartsOn: 0 }), 1),
  });
  const Week = eachDayOfInterval(currentWeek);

  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });

  // Months
  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`month/${currentDay}`);
  }, []);

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

  // Days
  // const nextDay = () => {
  //   // if (isDayInWeek) {
  //   const dayAfter = add(firstDayCurrentDay, { days: 1 });
  //   setCurrentDay(format(dayAfter, 'd-MMM-yyyy'));
  //   // } else {
  //   //   nextWeek();
  //   // }
  // };

  // const previousDay = () => {
  //   const prevDay = add(firstDayCurrentDay, { days: -1 });
  //   setCurrentDay(format(prevDay, 'd-MMM-yyyy'));
  // };

  const changeType = state => {
    setIsMonthPage(state);
  };

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const abbreviatedDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  // const { data: allTasks, refetch } = useGetMonthlyTasksQuery(currentDay);

  // refetch();
  // if (allTasks) {
  //   const tasks = [...allTasks.data];
  //   console.log('tasks', tasks);

  //   // if (tasks && tasks.length > 0) {
  //   // }
  // }

  return (
    <div className={css.calendar}>
      <div className={css.toolbar}>
        <PeriodPaginator
          currentMonth={firstDayCurrentMonth}
          isMonthPage={isMonthPage}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
        />

        <PeriodPaginatorType
          currentDay={currentDay}
          isMonthPage={isMonthPage}
          changeType={changeType}
        />
      </div>

      <div className={css.mainBlock__dayList}>
        {isMonthPage ? (
          <>
            {Week.map((day, index) => (
              <span
                key={day.toString()}
                className={`${css.day} ${index >= 5 && css.weekend}`}
              >
                {isTabletOrMobile
                  ? dayNames[index]
                  : abbreviatedDayNames[index]}
              </span>
            ))}
          </>
        ) : (
          <>
            {Week.map((day, index) => (
              <div className={css.daylist__wrapper} key={day.toString()}>
                <span className={`${css.day} ${index >= 5 && css.weekend}`}>
                  {isTabletOrMobile
                    ? dayNames[index]
                    : abbreviatedDayNames[index]}
                </span>
                <div
                  className={`${css.row__currentDate} ${
                    isToday(day) && css.row__currentDateActive
                  }`}
                  style={{ position: 'unset', marginTop: 6 }}
                >
                  <time
                    className={`${css.row__number} ${
                      isToday(day) && css.row__ActiveNumber
                    }`}
                    dateTime={format(day, 'yyyy-MM-dd')}
                  >
                    {format(day, 'd')}
                  </time>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
