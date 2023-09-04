import { useParams } from 'react-router-dom';
import {
  InnerBlock,
  CurrentDate,
  ToggleButtons,
  ToggleButton,
} from './PeriodPaginator.styled';
import { format, parse } from 'date-fns';

const PeriodPaginator = ({
  isMonthPage,
  nextPeriod,
  prevPeriod,
  currentMonth,
  currentDay,
}) => {
  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());

  const formattedMonth =
    currentDate === undefined ? currentMonth : parsedCurrentDate;

  const formattedDay =
    currentDate === undefined ? currentDay : parsedCurrentDate;

  return (
    <InnerBlock>
      <CurrentDate>
        {isMonthPage
          ? format(formattedMonth, 'MMMM yyyy')
          : format(formattedDay, 'd MMMM yyyy')}
      </CurrentDate>
      <ToggleButtons>
        <ToggleButton onClick={prevPeriod}>{'<'}</ToggleButton>
        <ToggleButton onClick={nextPeriod}>{'>'}</ToggleButton>
      </ToggleButtons>
    </InnerBlock>
  );
};

export default PeriodPaginator;
