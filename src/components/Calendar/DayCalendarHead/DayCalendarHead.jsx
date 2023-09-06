import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { format, isSameDay } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import {
  MainBlockDayListWrapper,
  DayListWrapper,
  Day,
  RowCurrentDate,
  RowNumber,
} from './DayCalendarHead.styled';

export const DayCalendarHead = ({ week, currentDay, setCurrentDay }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
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

  return (
    <MainBlockDayListWrapper>
      {week.map((day, index) => (
        <DayListWrapper key={day.toString()}>
          <Day className={index >= 5 ? 'weekend' : ''}>
            {isTabletOrMobile ? dayNames[index] : abbreviatedDayNames[index]}
          </Day>
          <RowCurrentDate
            type="button"
            className={`row__currentDate ${
              isSameDay(day, currentDay) ? 'row__currentDateActive' : ''
            }`}
            style={{ position: 'unset', marginTop: 6 }}
            onClick={() => {
              setCurrentDay(day);
              navigate(`day/${format(day, 'yyyy-MM-dd')}`);
            }}
          >
            <RowNumber
              className={`row__number ${
                isSameDay(day, currentDay) ? 'row__ActiveNumber' : ''
              }`}
              dateTime={format(day, 'yyyy-MM-dd')}
            >
              {format(day, 'd')}
            </RowNumber>
          </RowCurrentDate>
        </DayListWrapper>
      ))}
    </MainBlockDayListWrapper>
  );
};
