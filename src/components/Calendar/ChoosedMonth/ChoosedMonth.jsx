import { useEffect } from 'react';
import css from '../Caledar.module.css';
import { format, isSameMonth, isToday } from 'date-fns';

export const ChoosedMonth = ({ currentDay, days, allTasks }) => {
  // useEffect(() => {
  //   console.log('allTasks', allTasks);
  //   if (!allTasks) {
  //     return;
  //   }
  // }, [allTasks]);

  return (
    <div className={`${css.mainBlock__data}`}>
      {days.map(day => {
        const dayOfWeek = day.getDay();

        const colStart = dayOfWeek + 1;

        const formattedDay = format(day, 'yyyy-MM-dd');

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
                  display: isSameMonth(currentDay, day) ? 'block' : 'none',
                }}
              >
                {format(day, 'd')}
              </time>
              <ul style={{ overflow: 'y' }}>
                {allTasks ? (
                  allTasks.data
                    .filter(task => task.date === formattedDay)
                    .map(({ title, _id }) => {
                      return (
                        <li key={_id}>
                          <div
                            style={{
                              backgroundColor: 'red',
                              width: 10,
                              height: 10,
                            }}
                          >
                            <p>{title}</p>
                          </div>
                        </li>
                      );
                    })
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
