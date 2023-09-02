import { useNavigate } from 'react-router';
import css from '../Caledar.module.css';
import { format, parse } from 'date-fns';
import { useParams } from 'react-router-dom';

export const PeriodPaginatorType = ({ isMonthPage, changeType }) => {
  const navigate = useNavigate();

  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());

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
          navigate(`month/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
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
          navigate(`day/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
          changeType(false);
        }}
      >
        Day
      </button>
    </div>
  );
};
