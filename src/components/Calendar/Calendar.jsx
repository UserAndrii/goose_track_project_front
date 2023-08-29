import css from './Calendar.module.css';
import { useState } from 'react';

import {
  format,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  addDays,
  isSameMonth,
  isSameDay,
  isToday,
  eachDayOfInterval,
  startOfToday,
  parse,
  add,
  addWeeks,
  // isBefore,
  // isEqual,
  // startOfMonth,
} from 'date-fns';

import { useMediaQuery } from 'react-responsive';

export const Calendar = () => {
  const today = startOfToday();

  // Current Month
  // const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  // const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  // Current Week
  const [currentWeek, setCurrentWeek] = useState({
    start: startOfWeek(today, { weekStartsOn: 1 }),
    end: addDays(endOfWeek(today, { weekStartsOn: 0 }), 1),
  });
  const Week = eachDayOfInterval(currentWeek);
  // console.log('Week', Week);

  // Current Day
  const [currentDay, setCurrentDay] = useState(format(today, 'd-MMM-yyyy'));
  const firstDayCurrentDay = parse(currentDay, 'd-MMM-yyyy', new Date());
  // console.log('firstDayCurrentDay', firstDayCurrentDay);

  const [isMonthPage, setIsMonthPage] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });

  // Is
  const isDayInWeek = Week.some(day => {
    // let formattedDay = format(day, 'd').toString();
    // let firstDay = format(firstDayCurrentDay, 'd').toString();
    return isSameDay(day, firstDayCurrentDay);
  });

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  // const newDays = eachDayOfInterval({
  //   start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
  //   end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 0 }),
  // });

  // const newDays = eachDayOfInterval({
  //   start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
  //   end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 0 }),
  // }).filter(
  //   date =>
  //     isBefore(date, firstDayCurrentMonth) ||
  //     isEqual(date, firstDayCurrentMonth)
  // );

  // Доробити
  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  // const nextMonth = () => {
  //   let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
  //   setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  // };

  // const previousMonth = () => {
  //   let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
  //   setCurrentMonth(format(firstDayNextMonth, 'd-MMM-yyyy'));
  // };

  const nextWeek = () => {
    const nextWeekStart = addWeeks(currentWeek.start, 1);
    const nextWeekEnd = addDays(
      endOfWeek(nextWeekStart, { weekStartsOn: 0 }),
      1
    );
    setCurrentWeek({ start: addWeeks(currentWeek.start, 1), end: nextWeekEnd });
  };

  const prevWeek = () => {
    const prevWeekStart = addWeeks(currentWeek.start, -1);
    const prevWeekEnd = addDays(
      endOfWeek(prevWeekStart, { weekStartsOn: 0 }),
      -1
    );
    setCurrentWeek({ start: prevWeekStart, end: prevWeekEnd });
  };

  const nextDay = () => {
    if (isDayInWeek) {
      const dayAfter = add(firstDayCurrentDay, { days: 1 });
      setCurrentDay(format(dayAfter, 'd-MMM-yyyy'));
    } else {
      nextWeek();
    }
  };

  const previousDay = () => {
    if (isDayInWeek) {
      const prevDay = add(firstDayCurrentDay, { days: -1 });
      setCurrentDay(format(prevDay, 'd-MMM-yyyy'));
    } else {
      prevWeek();
    }
  };

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const abbreviatedDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className={css.container}>
      <div className={css.calendar}>
        <div className={css.toolbar}>
          <div className={css.toolbar__innerBlock}>
            <button className={css.toolbar__curerntDate}>
              {isMonthPage
                ? format(firstDayCurrentMonth, 'MMMM yyyy')
                : format(firstDayCurrentDay, 'd MMMM yyyy')}
            </button>
            <div className={css.toggleButtons}>
              <button
                className={css.toggleButtons__previous}
                onClick={isMonthPage ? previousMonth : previousDay}
              >
                {'<'}
              </button>
              <button
                className={css.toggleButtons__next}
                onClick={isMonthPage ? nextMonth : nextDay}
              >
                {'>'}
              </button>
            </div>
          </div>
          <div className={css.toolbar__calendarRange}>
            <button
              className={`${css.toolbar__buttons} ${css.toolbar__monthButton}`}
              style={{
                backgroundColor: isMonthPage
                  ? 'rgba(62, 133, 243, 0.2)'
                  : 'rgba(227, 243, 255, 1)',
              }}
              onClick={() => {
                setIsMonthPage(!isMonthPage);
              }}
            >
              Month
            </button>
            <button
              className={`${css.toolbar__buttons} ${css.toolbar__dayButton}`}
              style={{
                backgroundColor: !isMonthPage
                  ? 'rgba(62, 133, 243, 0.2)'
                  : 'rgba(227, 243, 255, 1)',
              }}
              onClick={() => {
                setIsMonthPage(!isMonthPage);
              }}
            >
              Day
            </button>
          </div>
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
              setIsMonthPage(!isMonthPage);
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
              setIsMonthPage(!isMonthPage);
            }}
          >
            Day
          </button>
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

        {isMonthPage ? (
          <div className={`${css.mainBlock__data}`}>
            {days.map(day => {
              const dayOfWeek = day.getDay();
              const colStart = dayOfWeek;

              return (
                <div
                  key={day.toString()}
                  onClick={() => {}}
                  className={`${css.row__cell} ${css.gridСol}`}
                  style={{ '--col': colStart }}
                >
                  <div
                    className={`${css.row__currentDate} ${
                      isToday(day) &&
                      isSameMonth(firstDayCurrentMonth, day) &&
                      css.row__currentDateActive
                    }`}
                  >
                    <time
                      className={`${css.row__number} ${
                        isToday(day) &&
                        isSameMonth(firstDayCurrentMonth, day) &&
                        css.row__ActiveNumber
                      }`}
                      dateTime={format(day, 'yyyy-MM-dd')}
                      style={{
                        display: isSameMonth(firstDayCurrentMonth, day)
                          ? 'block'
                          : 'none',
                      }}
                    >
                      {format(day, 'd')}
                    </time>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              marginTop: 40,
            }}
          >
            Day Page
          </div>
        )}
      </div>
    </div>
  );
};
