import { useTranslation, Trans } from 'react-i18next';
import PeriodPaginator from 'components/Calendar/PeriodPaginator/PeriodPaginator';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import {
  Circle,
  Container,
  LabelT,
  WrapLabel,
  WrapLabels,
  WrapPeriod,
  ContainerWrapper,
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
import { useOutletContext } from 'react-router-dom';

const StatisticsPage = () => {
  const { t } = useTranslation();

  const [isLightTheme] = useOutletContext();
  
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
  const handleCurrentDay = day => {
    setCurrentDay(day);
    setCurrentMonth(day);
  };
  return (
    <ContainerWrapper>
      <Container>
        <WrapPeriod>
          <PeriodPaginator
            currentDay={currentDay}
            handleCurrentDay={handleCurrentDay}
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
              <LabelT>
                <Trans i18nKey="statChart.day">By Day</Trans>
              </LabelT>
            </WrapLabel>
            <WrapLabel>
              <Circle
                style={{
                  backgroundColor: '#3E85F3',
                  marginRight: '8px',
                }}
              />
              <LabelT>{t('statChart.month')}</LabelT>
            </WrapLabel>
          </WrapLabels>
        </WrapPeriod>

        <StatisticsChart
          currentDay={format(currentDay, 'yyyy-MM-dd')}
          currentMonth={format(currentMonth, 'yyyy-MM')}
          isLightTheme={isLightTheme}
        />
      </Container>
    </ContainerWrapper>
  );
};

export default StatisticsPage;
