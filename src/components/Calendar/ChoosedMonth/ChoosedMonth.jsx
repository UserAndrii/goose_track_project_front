import css from '../Caledar.module.css';
import { format, isSameMonth, isToday } from 'date-fns';

export const ChoosedMonth = ({ currentDay, days }) => {
  return (
    <div className={`${css.mainBlock__data}`}>
      {days.map(day => {
        const dayOfWeek = day.getDay();
        // index 0
        const colStart = dayOfWeek;

        return (
          <div
            key={day.toString()}
            onClick={() => {}}
            className={`${css.row__cell} ${css.gridСol}`}
            style={{ '--col': colStart }}
          >
            <div
              className={`${css.row__currentDate} ${
                isToday(day) &&
                isSameMonth(currentDay, day) &&
                css.row__currentDateActive
              }`}
            >
              <time
                className={`${css.row__number} ${
                  isToday(day) &&
                  isSameMonth(currentDay, day) &&
                  css.row__ActiveNumber
                }`}
                dateTime={format(day, 'yyyy-MM-dd')}
                style={{
                  // display: isSameMonth(currentDay, day) ? 'block' : 'none',
                  display: 'block',
                }}
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
