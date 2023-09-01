import { useNavigate } from 'react-router';
import css from '../Caledar.module.css';
import { format } from 'date-fns';

export const PeriodPaginatorType = ({
  isMonthPage,
  changeType,
  currentDay,
}) => {
  const navigate = useNavigate();

  return (
    <div className={css.toolbar__calendarRange}>
      <button
        className={`${css.toolbar__buttons} ${css.toolbar__monthButton}`}
        style={{
          backgroundColor: isMonthPage
            ? 'rgba(62, 133, 243, 0.2)'
            : 'rgba(227, 243, 255, 1)',
        }}
        onClick={() => {
          navigate(`month/${format(currentDay, 'yyyy-MM-dd')}`);
          changeType(true);
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
          navigate(`day/${format(currentDay, 'yyyy-MM-dd')}`);
          changeType(false);
        }}
      >
        Day
      </button>
    </div>
  );
};
