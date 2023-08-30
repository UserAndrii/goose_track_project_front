import { useNavigate } from 'react-router';
import css from '../Caledar.module.css';

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
          navigate(`month/${currentDay}`);
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
          navigate(`day/${currentDay}`);
          changeType(false);
        }}
      >
        Day
      </button>
    </div>
  );
};
