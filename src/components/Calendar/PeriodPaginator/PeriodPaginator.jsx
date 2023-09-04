import { useParams } from 'react-router-dom';
import {
  InnerBlock,
  CurrentDate,
  ToggleButtons,
  ToggleButton,
  CurrentDateWrapper,
} from './PeriodPaginator.styled';
import { format, parse } from 'date-fns';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../UserForm/CustomDatePicker.css';

const PeriodPaginator = ({
  isMonthPage,
  nextPeriod,
  prevPeriod,
  currentMonth,
  currentDay,
  handleCurrentDay,
}) => {
  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());

  const formattedMonth =
    currentDate === undefined ? currentMonth : parsedCurrentDate;

  const formattedDay =
    currentDate === undefined ? currentDay : parsedCurrentDate;

  // const [DataDate, setDataDate] = useState();

  return (
    <InnerBlock>
      <CurrentDateWrapper>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          calendarStartDay={1}
          selected={currentDay}
          onChange={date => handleCurrentDay(date)}
          customInput={
            <CurrentDate>
              {isMonthPage
                ? format(formattedMonth, 'MMMM yyyy')
                : format(formattedDay, 'd MMMM yyyy')}
            </CurrentDate>
          }
        />
      </CurrentDateWrapper>
      <ToggleButtons>
        <ToggleButton onClick={prevPeriod}>{'<'}</ToggleButton>
        <ToggleButton onClick={nextPeriod}>{'>'}</ToggleButton>
      </ToggleButtons>
    </InnerBlock>
  );
};

export default PeriodPaginator;
