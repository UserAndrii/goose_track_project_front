import css from '../Caledar.module.css';
import { format, parseISO } from 'date-fns';
import { useParams } from 'react-router-dom';

export const PeriodPaginator = ({
  currentMonth,
  isMonthPage,
  nextPeriod,
  prevPeriod,
}) => {
  const { currentDate } = useParams();
  console.log('currentDate', currentDate);

  // const parsedDate = parseISO(currentDate);
  // console.log('parsedDate', parsedDate);

  return (
    <div className={css.toolbar__innerBlock}>
      <button className={css.toolbar__curerntDate}>
        {isMonthPage
          ? format(currentMonth, 'MMMM yyyy')
          : format(currentMonth, 'd MMMM yyyy')}
      </button>
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
