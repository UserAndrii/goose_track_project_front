import { useMediaQuery } from 'react-responsive';
import { MainBlockDayListWrapper, Day } from './MonthCalendarHeader.styled';

export const MonthCalendarHead = ({ week }) => {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const abbreviatedDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <MainBlockDayListWrapper>
      {week.map((day, index) => (
        <Day key={day.toString()} className={index >= 5 ? 'weekend' : ''}>
          {isTabletOrMobile ? dayNames[index] : abbreviatedDayNames[index]}
        </Day>
      ))}
    </MainBlockDayListWrapper>
  );
};
