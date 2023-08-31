import { PeriodPaginator } from 'components/Calendar/PeriodPaginator/PeriodPaginator';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import { Container } from 'components/StatisticsChart/StatisticsChart.styled';
import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  startOfToday,
  subDays,
  subMonths,
} from 'date-fns';

import { useState } from 'react';

const StatisticsPage = () => {
  const [currentDay, setCurrentDay] = useState(startOfToday());
  const [currentMonth, setCurrentMonth] = useState(currentDay);
  //format(startOfToday(), 'yyyy-MM')
  const next = () => {
    const nextDay = addDays(currentDay, 1);
    if (nextDay.getDate() === 1) {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
    setCurrentDay(nextDay);
  };

  const previous = () => {
    const previousDay = subDays(currentDay, 1);
    if (
      previousDay.getDate() === endOfMonth(subMonths(currentMonth, 1)).getDate()
    ) {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    setCurrentDay(previousDay);
  };
  return (
    <Container>
      <PeriodPaginator
        currentMonth={currentDay}
        isMonthPage={false}
        nextMonth={next}
        previousMonth={previous}
      />
      <StatisticsChart
        currentDay={format(currentDay, 'yyyy-MM-dd')}
        currentMonth={format(currentMonth, 'yyyy-MM')}
      />
    </Container>
  );
};

export default StatisticsPage;
