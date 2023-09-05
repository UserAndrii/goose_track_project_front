import { useNavigate } from 'react-router';

import { CalendarRange, Button } from './PeriodPaginatorType.styled';

import { format, parse } from 'date-fns';
import { useParams } from 'react-router-dom';
import { ButtonView } from '../CalendarToolbar/CalendarToolbar.styled';
import { FaRegListAlt, FaThLarge } from 'react-icons/fa';
const PeriodPaginatorType = ({ isMonthPage, isView, setIsView }) => {
  const navigate = useNavigate();

  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());

  return (
    <CalendarRange>
      <Button
        className={`onMonth ${isMonthPage ? 'isActive' : ''}`}
        onClick={() => {
          navigate(`month/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
        }}
        isMonthPage
      >
        Month
      </Button>
      <Button
        className={`onDay ${!isMonthPage ? 'isActive' : ''}`}
        onClick={() => {
          navigate(`day/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
        }}
        isMonthPage
      >
        Day
      </Button>
      <ButtonView
        onClick={() => {
          setIsView(prev => !prev);
        }}
      >
        {isView ? <FaThLarge /> : <FaRegListAlt />}
      </ButtonView>
    </CalendarRange>
  );
};

export default PeriodPaginatorType;
