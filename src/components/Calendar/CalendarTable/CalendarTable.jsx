import { useNavigate } from 'react-router-dom';
import css from '../Caledar.module.css';
import { format, isToday, isSameMonth } from 'date-fns';
import { useMediaQuery } from 'react-responsive';

export const CalendarTable = ({
  monthDays,
  setIsMonthPage,
  currentDay,
  allTasks,
  setCurrentDay,
  setTasks,
}) => {
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
  // const isDeskop = useMediaQuery({ query: '(min-width: 1440px)' });

  const whichPriority = priority => {
    let bgColor;
    let color;
    switch (priority) {
      case 'LOW':
        bgColor = 'rgba(206, 238, 253, 1)';
        color = '#3E85F3';
        break;
      case 'MEDIUM':
        bgColor = 'rgba(252, 240, 212, 1)';
        color = '#F3B249';
        break;
      case 'HIGH':
        bgColor = 'rgba(255, 210, 221, 1)';
        color = '#EA3D65';
        break;
      default:
        bgColor = 'transparent';
        color = 'black';
    }

    const style = {
      bgColor,
      color,
    };

    return style;
  };

  return (
    <div className={`${css.mainBlock__data}`}>
      {monthDays.map(day => {
        const dayOfWeek = day.getDay();
        const colStart = dayOfWeek + 1;
        const formattedDay = format(day, 'yyyy-MM-dd');

        return (
          <div
            key={day.toString()}
            className={`${css.row__cell} ${css.gridСol}`}
            style={{ '--col': colStart }}
            onClick={() => {
              setIsMonthPage(false);
              setCurrentDay(day);
              navigate(`day/${formattedDay}`);
            }}
          >
            <div
              className={`${css.row__currentDate} ${
                isToday(day) &&
                isSameMonth(currentDay, day) &&
                css.row__currentDateActive
              }`}
              style={{
                top: isToday(day) && isSameMonth(currentDay, day) && 4,
              }}
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
            </div>

            {allTasks ? (
              <div className={css.tasks}>
                <ul>
                  {allTasks.data
                    .filter(task => task.date === formattedDay)
                    .map(({ title, _id, priority }, index) => {
                      if (index === 2) {
                        return (
                          <li className={css.tasks__item} key={_id}>
                            <div
                              className={css.tasks_threeDots}
                              onClick={() => {
                                setCurrentDay(day);
                                setIsMonthPage(false);
                                navigate(`day/${formattedDay}`, {});
                              }}
                            >
                              <p className={css.tasks__title}>...</p>
                            </div>
                          </li>
                        );
                      }
                      if (index > 2) {
                        return null;
                      }
                      return (
                        <li className={css.tasks__item} key={_id}>
                          <div
                            className={css.tasks__container}
                            style={{
                              backgroundColor: whichPriority(priority).bgColor,
                              color: whichPriority(priority).color,
                            }}
                          >
                            <p className={css.tasks__title}>
                              {isTabletOrMobile
                                ? title.length >= 7
                                  ? title.slice(0, 7) + '...'
                                  : title
                                : title.length >= 3
                                ? title.slice(0, 3) + '...'
                                : title}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};
