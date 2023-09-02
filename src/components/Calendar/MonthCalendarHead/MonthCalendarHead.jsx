import css from '../Caledar.module.css';
import { useMediaQuery } from 'react-responsive';

export const MonthCalendarHead = ({ week }) => {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const abbreviatedDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div className={css.mainBlock__dayList}>
      {week.map((day, index) => (
        <span
          key={day.toString()}
          className={`${css.day} ${index >= 5 && css.weekend}`}
        >
          {isTabletOrMobile ? dayNames[index] : abbreviatedDayNames[index]}
        </span>
      ))}
    </div>
  );
};
