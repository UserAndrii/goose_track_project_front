// import css from './CalendarToolbar.module.css';

import PeriodPaginator from '../PeriodPaginator';
import PeriodPaginatorType from '../PeriodPaginatorType';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ToolbarWrapper,
  CalendarRangeWrapper,
  ActiveButton,
  MonthButton,
  DayButton,
} from './CalendarToolbar.styled';

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

  const changeType = () => {
    setIsMonthPage(prev => !prev);
  };

  // return (
  //   <>
  //     <div className={css.toolbar}>
  //       <PeriodPaginator
  //         isMonthPage={isMonthPage}
  //         prevPeriod={prevPeriod}
  //         nextPeriod={nextPeriod}
  //         currentDay={currentDay}
  //         currentMonth={currentMonth}
  //       />

  //       <PeriodPaginatorType
  //         isMonthPage={isMonthPage}
  //         changeType={changeType}
  //       />
  //     </div>

  //     <div className={css.calendarRange}>
  //       <button
  //         className={`${css.calendarRange__buttons} ${
  //           css.calendarRange__monthButton
  //         } ${isMonthPage ? css.calendarRange__ActiveButton : ''}`}
  //         onClick={() => {
  //           navigate(`month/${format(formattedDay, 'yyyy-MM-dd')}`);
  //           changeType(true);
  //         }}
  //       >
  //         Month
  //       </button>
  //       <button
  //         className={`${css.calendarRange__buttons} ${
  //           css.calendarRange__dayButton
  //         } ${!isMonthPage ? css.calendarRange__ActiveButton : ''}`}
  //         onClick={() => {
  //           navigate(`day/${format(formattedDay, 'yyyy-MM-dd')}`);
  //           changeType(false);
  //         }}
  //       >
  //         Day
  //       </button>
  //     </div>
  //   </>
  // );
  return (
    <>
      <ToolbarWrapper>
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
      </ToolbarWrapper>

      <CalendarRangeWrapper>
        <MonthButton
          className={isMonthPage ? 'calendarRange__ActiveButton' : ''}
          onClick={() => {
            navigate(`month/${format(formattedDay, 'yyyy-MM-dd')}`);
            changeType(true);
          }}
        >
          Month
        </MonthButton>
        <DayButton
          className={!isMonthPage ? 'calendarRange__ActiveButton' : ''}
          onClick={() => {
            navigate(`day/${format(formattedDay, 'yyyy-MM-dd')}`);
            changeType(false);
          }}
        >
          Day
        </DayButton>
      </CalendarRangeWrapper>
    </>
  );
};
