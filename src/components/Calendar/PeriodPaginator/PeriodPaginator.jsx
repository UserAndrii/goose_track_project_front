import { useParams } from 'react-router-dom';
import css from './PeriodPaginator.module.css';
import { format, parse } from 'date-fns';
import { useState } from 'react';

const PeriodPaginator = ({
  isMonthPage,
  nextPeriod,
  prevPeriod,
  currentMonth,
  currentDay,
}) => {
  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());

  const formattedMonth =
    currentDate === undefined ? currentMonth : parsedCurrentDate;

  const formattedDay =
    currentDate === undefined ? currentDay : parsedCurrentDate;
  const [DataDate, setDataDate] = useState();

  return (
    <div className={css.toolbar__innerBlock}>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={
          <button className={css.toolbar__curerntDate}>
            {isMonthPage
              ? format(formattedMonth, 'MMMM yyyy')
              : format(formattedDay, 'd MMMM yyyy')}
          </button>
        }
      />

      <div className={css.toggleButtons}>
        <button className={css.toggleButtons__previous} onClick={prevPeriod}>
          {'<'}
        </button>
        <button className={css.toggleButtons__next} onClick={nextPeriod}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default PeriodPaginator;
