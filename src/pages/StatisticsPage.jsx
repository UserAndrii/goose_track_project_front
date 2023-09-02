import { PeriodPaginator } from 'components/Calendar/PeriodPaginator/PeriodPaginator';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import {
  Circle,
  Container,
  LabelT,
  WrapLabel,
  WrapLabels,
  WrapPeriod,
} from 'components/StatisticsChart/StatisticsChart.styled';
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
      <WrapPeriod>
        <PeriodPaginator
          currentDay={currentDay}
          isMonthPage={false}
          nextPeriod={next}
          prevPeriod={previous}
        />

        <WrapLabels>
          <WrapLabel>
            <Circle
              style={{
                backgroundColor: '#FFD2DD',
                marginRight: '8px',
              }}
            />
            <LabelT>By Day</LabelT>
          </WrapLabel>
          <WrapLabel>
            <Circle
              style={{
                backgroundColor: '#3E85F3',
                marginRight: '8px',
              }}
            />
            <LabelT>By Month</LabelT>
          </WrapLabel>
        </WrapLabels>
      </WrapPeriod>
      <StatisticsChart
        currentDay={format(currentDay, 'yyyy-MM-dd')}
        currentMonth={format(currentMonth, 'yyyy-MM')}
      />
    </Container>
  );
};

export default StatisticsPage;
