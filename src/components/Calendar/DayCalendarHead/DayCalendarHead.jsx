// import css from './DayCalendarHead.module.css';
import { useMediaQuery } from 'react-responsive';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import {
  MainBlockDayListWrapper,
  DayListWrapper,
  Day,
  RowCurrentDate,
  RowNumber,
} from './DayCalendar.styled';

export const DayCalendarHead = ({ week, currentDay, setCurrentDay }) => {
  const navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const abbreviatedDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  // return (
  //   <div
  //     className={css.mainBlock__dayList}
  //     style={{
  //       height: isTabletOrMobile ? 68 : 74,
  //     }}
  //   >
  //     {week.map((day, index) => {
  //       const formattedDay = format(day, 'yyyy-MM-dd');
  //       return (
  //         <div className={css.daylist__wrapper} key={day.toString()}>
  //           <span className={`${css.day} ${index >= 5 && css.weekend}`}>
  //             {isTabletOrMobile ? dayNames[index] : abbreviatedDayNames[index]}
  //           </span>
  //           <button
  //             type="button"
  //             className={`${css.row__currentDate} ${
  //               isSameDay(day, currentDay) && css.row__currentDateActive
  //             }`}
  //             style={{ position: 'unset', marginTop: 6 }}
  //             onClick={() => {
  //               setCurrentDay(day);
  //               navigate(`day/${formattedDay}`);
  //             }}
  //           >
  //             <time
  //               className={`${css.row__number} ${
  //                 isSameDay(day, currentDay) && css.row__ActiveNumber
  //               }`}
  //               dateTime={format(day, 'yyyy-MM-dd')}
  //             >
  //               {format(day, 'd')}
  //             </time>
  //           </button>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  return (
    <MainBlockDayListWrapper>
      {week.map((day, index) => (
        <DayListWrapper key={day.toString()}>
          <Day className={index >= 5 ? 'weekend' : ''}>
            {isTabletOrMobile ? dayNames[index] : abbreviatedDayNames[index]}
          </Day>
          <RowCurrentDate
            type="button"
            className={`row__currentDate ${
              day === currentDay ? 'row__currentDateActive' : ''
            }`}
            style={{ position: 'unset', marginTop: 6 }}
            onClick={() => {
              setCurrentDay(day);
              navigate(`day/${format(day, 'yyyy-MM-dd')}`);
            }}
          >
            <RowNumber
              className={`row__number ${
                day === currentDay ? 'row__ActiveNumber' : ''
              }`}
              dateTime={format(day, 'yyyy-MM-dd')}
            >
              {format(day, 'd')}
            </RowNumber>
          </RowCurrentDate>
        </DayListWrapper>
      ))}
    </MainBlockDayListWrapper>
  );
};
