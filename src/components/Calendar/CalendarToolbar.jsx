import css from './Caledar.module.css';
import { useState } from 'react';

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
import { useParams, useSearchParams } from 'react-router-dom';

export const CalendarToolBar = ({
  isMonthPage,
  setIsMonthPage,
  currentDay,
  firstDayCurrentMonth,
  setCurrentMonth,
  setCurrentDay,
}) => {
  const today = startOfToday();

  // Current Week
  const [currentWeek] = useState({
    start: startOfWeek(today, { weekStartsOn: 1 }),
    end: addDays(endOfWeek(today, { weekStartsOn: 0 }), 1),
  });
  const Week = eachDayOfInterval(currentWeek);

  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });

  const prevPeriod = () => {
    if (isMonthPage) {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
      setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    } else {
      const dayAfter = add(currentDay, { days: 1 });
      setCurrentDay(dayAfter);
    }
  };

  const [currentDate, setCurrentDate] = useSearchParams();
  console.log('currentDate', currentDate);

  const nextPeriod = () => {
    if (isMonthPage) {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
      setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
      // window.location.href = `/month/${newDate}`;
      // navigate()
    } else {
      const prevDay = add(currentDay, { days: -1 });
      setCurrentDay(prevDay);
    }
  };

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

  const changeType = state => {
    setIsMonthPage(state);
  };

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const abbreviatedDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className={css.calendar}>
      <div className={css.toolbar}>
        <PeriodPaginator
          currentMonth={firstDayCurrentMonth}
          isMonthPage={isMonthPage}
          prevPeriod={prevPeriod}
          nextPeriod={nextPeriod}
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
