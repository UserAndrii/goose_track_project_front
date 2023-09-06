import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { MainBlockDayListWrapper, Day } from './MonthCalendarHeader.styled';

export const MonthCalendarHead = ({ week }) => {
  const { t } = useTranslation();

  const dayNames = [
    t('calendar.1'),
    t('calendar.2'),
    t('calendar.3'),
    t('calendar.4'),
    t('calendar.5'),
    t('calendar.6'),
    t('calendar.7'),
  ];
  const abbreviatedDayNames = [
    t('calendar.m1'),
    t('calendar.m2'),
    t('calendar.m3'),
    t('calendar.m4'),
    t('calendar.m5'),
    t('calendar.m6'),
    t('calendar.m7'),
  ];
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
