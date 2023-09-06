import { useTranslation, Trans } from 'react-i18next';
import PeriodPaginator from '../PeriodPaginator';
import PeriodPaginatorType from '../PeriodPaginatorType';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ToolbarWrapper,
  CalendarRangeWrapper,
  CalendarRangeButton,
  ButtonView,
} from './CalendarToolbar.styled';

import { format, parse, add } from 'date-fns';
import { FaRegListAlt, FaThLarge } from 'react-icons/fa';

export const CalendarToolBar = ({
  isMonthPage,
  currentMonth,
  setCurrentMonth,
  currentDay,
  setCurrentDay,
  isView,
  setIsView,
}) => {
  const { t } = useTranslation();
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
  const handleCurrentDay = day => {
    if (isMonthPage) {
      setCurrentMonth(format(day, 'MMM-yyyy'));
      setCurrentDay(day);
      navigate(`month/${format(day, 'yyyy-MM-dd')}`);
    } else {
      setCurrentDay(day);
      navigate(`day/${format(day, 'yyyy-MM-dd')}`);
    }
  };
  return (
    <>
      <ToolbarWrapper>
        <PeriodPaginator
          isMonthPage={isMonthPage}
          prevPeriod={prevPeriod}
          nextPeriod={nextPeriod}
          currentDay={currentDay}
          currentMonth={currentMonth}
          handleCurrentDay={handleCurrentDay}
        />

        <PeriodPaginatorType
          isView={isView}
          setIsView={setIsView}
          isMonthPage={isMonthPage}
        />
      </ToolbarWrapper>

      <CalendarRangeWrapper>
        <CalendarRangeButton
          className={`onMonth ${
            isMonthPage ? 'isActive' : 'rgba(227, 243, 255, 1)'
          }`}
          onClick={() => {
            navigate(`month/${format(formattedDay, 'yyyy-MM-dd')}`);
          }}
        >
          <Trans i18nKey="calendar.month">Month</Trans>
        </CalendarRangeButton>
        <CalendarRangeButton
          className={`onDay ${
            !isMonthPage ? 'isActive' : 'rgba(227, 243, 255, 1)'
          }`}
          onClick={() => {
            navigate(`day/${format(formattedDay, 'yyyy-MM-dd')}`);
          }}
        >
          {t('calendar.day')}
        </CalendarRangeButton>
        {isMonthPage ? (
          <ButtonView
            style={{ marginTop: '18px', marginLeft: 'auto', marginRight: '0' }}
            onClick={() => {
              setIsView(prev => !prev);
            }}
          >
            {isView ? (
              <FaThLarge style={{ width: '25px', height: '25px' }} />
            ) : (
              <FaRegListAlt style={{ width: '25px', height: '25px' }} />
            )}
          </ButtonView>
        ) : (
          <></>
        )}
      </CalendarRangeWrapper>
    </>
  );
};
