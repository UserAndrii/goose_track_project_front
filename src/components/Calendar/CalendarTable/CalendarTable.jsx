import { useNavigate, useParams } from 'react-router-dom';
import css from './CalendarTable.module.css';
import { format, isToday, isSameMonth, getDay } from 'date-fns';
import { useMediaQuery } from 'react-responsive';

export const CalendarTable = ({
  monthDays,
  setIsMonthPage,
  currentDay,
  allTasks,
  setCurrentDay,
}) => {
  const navigate = useNavigate();

  // const { date } = useParams();
  // const [one, two, Day] = date.split('-');
  // console.log('currentDay', Day);

  const data = new Date();
  const a = data.getDate();

  const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1440px)' });

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

  const howManyPriorities = priority => {
    let lowTaskCounter = 0;
    let mediumTaskCounter = 0;
    let highTaskCounter = 0;

    switch (priority) {
      case 'LOW':
        lowTaskCounter += 1;
        break;
      case 'MEDIUM':
        mediumTaskCounter += 1;
        break;
      case 'HIGH':
        highTaskCounter += 1;
        break;
      default:
        lowTaskCounter = 0;
        mediumTaskCounter = 0;
        highTaskCounter = 0;
    }

    const taskCounter = {
      lowTaskCounter,
      mediumTaskCounter,
      highTaskCounter,
    };

    return taskCounter;
  };

  return (
    <div className={`${css.mainBlock__data}`}>
      {monthDays.map(day => {
        const dayOfWeek = day.getDay();
        const colStart = dayOfWeek + 1;
        const formattedDay = format(day, 'yyyy-MM-dd');
        const filteredTasksByDay = allTasks
          ? allTasks.data.filter(task => task.date === formattedDay)
          : [];

        const taskCounter = () => {
          let calculatedTasks;
          filteredTasksByDay.map(({ priority }) => {
            calculatedTasks = howManyPriorities(priority);
            return calculatedTasks;
          });
          return calculatedTasks;
        };

        return (
          <div
            key={day.toString()}
            className={`${css.row__cell} ${css.gridСol}`}
            style={{ '--col': colStart }}
            onClick={() => {
              if (isSameMonth(currentDay, day)) {
                setIsMonthPage(false);
                setCurrentDay(day);
                navigate(`day/${formattedDay}`);
              }
            }}
          >
            <div
              className={`${css.row__currentDate} ${
                a === day.getDate() && css.row__currentDateActive
              }`}
              style={{
                top: a === day.getDate() && 4,
              }}
            >
              <time
                className={`${css.row__number} ${
                  a === day.getDate() && css.row__ActiveNumber
                }`}
                dateTime={format(day, 'yyyy-MM-dd')}
                style={{
                  display: isSameMonth(currentDay, day) ? 'block' : 'none',
                }}
              >
                {format(day, 'd')}
              </time>
            </div>

            {allTasks && isSameMonth(currentDay, day) ? (
              <div className={css.tasks}>
                {isTabletScreen ? (
                  <ul>
                    {filteredTasksByDay.map(
                      ({ title, _id, priority }, index) => {
                        if (index === 2) {
                          return (
                            <li className={css.tasks__item} key={_id}>
                              <div
                                className={css.tasks_threeDots}
                                onClick={() => {
                                  setCurrentDay(day);
                                  setIsMonthPage(false);
                                  navigate(`day/${formattedDay}`);
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
                                backgroundColor:
                                  whichPriority(priority).bgColor,
                                color: whichPriority(priority).color,
                              }}
                            >
                              <p className={css.tasks__title}>
                                {isDesktopScreen && isTabletScreen
                                  ? title.length >= 13
                                    ? title.slice(0, 13) + '...'
                                    : title
                                  : title.length >= 8
                                  ? title.slice(0, 8) + '...'
                                  : title}
                              </p>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                ) : (
                  <ul>
                    {taskCounter()?.lowTaskCounter > 0 && (
                      <li className={css.tasks__item}>
                        <div
                          className={css.tasks__container}
                          style={{
                            backgroundColor: 'rgba(206, 238, 253, 1)',
                            color: '#3E85F3',
                          }}
                        >
                          <p className={css.tasks__title}>
                            Tasks: {taskCounter()?.lowTaskCounter}
                          </p>
                        </div>
                      </li>
                    )}
                    {taskCounter()?.mediumTaskCounter > 0 && (
                      <li className={css.tasks__item}>
                        <div
                          className={css.tasks__container}
                          style={{
                            backgroundColor: 'rgba(252, 240, 212, 1)',
                            color: '#F3B249',
                          }}
                        >
                          <p className={css.tasks__title}>
                            Tasks: {taskCounter()?.mediumTaskCounter}
                          </p>
                        </div>
                      </li>
                    )}
                    {taskCounter()?.highTaskCounter > 0 && (
                      <li className={css.tasks__item}>
                        <div
                          className={css.tasks__container}
                          style={{
                            backgroundColor: 'rgba(255, 210, 221, 1)',
                            color: '#EA3D65',
                          }}
                        >
                          <p className={css.tasks__title}>
                            Tasks: {taskCounter()?.highTaskCounter}
                          </p>
                        </div>
                      </li>
                    )}
                  </ul>
                )}
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
