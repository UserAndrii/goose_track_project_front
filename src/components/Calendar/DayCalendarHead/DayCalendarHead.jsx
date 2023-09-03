import css from '../Caledar.module.css';
import { useMediaQuery } from 'react-responsive';
import { format, isSameDay } from 'date-fns';

export const DayCalendarHead = ({ week, currentDay }) => {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const abbreviatedDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div
      className={css.mainBlock__dayList}
      style={{
        height: isTabletOrMobile ? 68 : 74,
      }}
    >
      {week.map((day, index) => {
        return (
          <div className={css.daylist__wrapper} key={day.toString()}>
            <span className={`${css.day} ${index >= 5 && css.weekend}`}>
              {isTabletOrMobile ? dayNames[index] : abbreviatedDayNames[index]}
            </span>
            <div
              className={`${css.row__currentDate} ${
                isSameDay(day, currentDay) && css.row__currentDateActive
              }`}
              style={{ position: 'unset', marginTop: 6 }}
            >
              <time
                className={`${css.row__number} ${
                  isSameDay(day, currentDay) && css.row__ActiveNumber
                }`}
                dateTime={format(day, 'yyyy-MM-dd')}
              >
                {format(day, 'd')}
              </time>
            </div>
          </div>
        );
      })}
    </div>
  );
};
