import { useNavigate } from 'react-router';

import { CalendarRange, Button } from './PeriodPaginatorType.styled';

import { format, parse } from 'date-fns';
import { useParams } from 'react-router-dom';

const PeriodPaginatorType = ({ isMonthPage, changeType }) => {
  const navigate = useNavigate();

  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());

  return (
    <CalendarRange>
      <Button
        className={`onMonth ${isMonthPage ? 'isActive' : ''}`}
        onClick={() => {
          navigate(`month/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
          changeType();
        }}
        isMonthPage
      >
        Month
      </Button>
      <Button
        className={`onDay ${!isMonthPage ? 'isActive' : ''}`}
        onClick={() => {
          navigate(`day/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
          changeType();
        }}
        isMonthPage
      >
        Day
      </Button>
    </CalendarRange>
  );
};

export default PeriodPaginatorType;
