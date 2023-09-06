import { useParams } from 'react-router-dom';
import {
  InnerBlock,
  CurrentDate,
  ToggleButtons,
  ToggleButton,
  CurrentDateWrapper,
} from './PeriodPaginator.styled';
import { format, parse } from 'date-fns';

import i18next from 'i18next';
import DatePicker, { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';

import 'react-datepicker/dist/react-datepicker.css';
import '../../UserForm/CustomDatePicker.css';

registerLocale('uk', uk);

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

  return (
    <InnerBlock>
      <CurrentDateWrapper>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          locale={i18next.language === 'ua' ? 'uk' : 'en'}
          calendarStartDay={1}
          selected={currentDay}
          onChange={date => handleCurrentDay(date)}
          customInput={
            <CurrentDate>
              {isMonthPage
                ? `${i18next.t(
                    `calendar.${format(formattedMonth, 'MMMM')}`
                  )} ${format(formattedMonth, 'yyyy')}`
                : `${format(formattedDay, 'd')} ${i18next.t(
                    `calendar.${format(formattedDay, 'MMMM')}`
                  )} ${format(formattedDay, 'yyyy')}`}
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
