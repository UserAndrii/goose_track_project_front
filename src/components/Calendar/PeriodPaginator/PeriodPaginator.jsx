import css from '../Caledar.module.css';

import { format } from 'date-fns';

export const PeriodPaginator = ({
  currentMonth,
  isMonthPage,
  nextMonth,
  previousMonth,
}) => {
  return (
    <div className={css.toolbar__innerBlock}>
      <button className={css.toolbar__curerntDate}>
        {isMonthPage
          ? format(currentMonth, 'MMMM yyyy')
          : format(currentMonth, 'd MMMM yyyy')}
      </button>
      <div className={css.toggleButtons}>
        <button className={css.toggleButtons__previous} onClick={previousMonth}>
          {'<'}
        </button>
        <button className={css.toggleButtons__next} onClick={nextMonth}>
          {'>'}
        </button>
      </div>
    </div>
  );
};
