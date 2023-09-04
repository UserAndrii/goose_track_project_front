import { useMediaQuery } from 'react-responsive';
import { format, isSameDay } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import {
  MainBlockDayListWrapper,
  DayListWrapper,
  Day,
  RowCurrentDate,
  RowNumber,
} from './DayCalendarHead.styled';

export const DayCalendarHead = ({ week, currentDay, setCurrentDay }) => {
  const navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const abbreviatedDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

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
              isSameDay(day, currentDay) ? 'row__currentDateActive' : ''
            }`}
            style={{ position: 'unset', marginTop: 6 }}
            onClick={() => {
              setCurrentDay(day);
              navigate(`day/${format(day, 'yyyy-MM-dd')}`);
            }}
          >
            <RowNumber
              className={`row__number ${
                isSameDay(day, currentDay) ? 'row__ActiveNumber' : ''
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
