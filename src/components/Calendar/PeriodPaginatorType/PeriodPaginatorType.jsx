import { useNavigate } from 'react-router';
import { useTranslation, Trans } from 'react-i18next';

import { CalendarRange, Button } from './PeriodPaginatorType.styled';

import { format, parse } from 'date-fns';
import { useParams } from 'react-router-dom';

const PeriodPaginatorType = ({ isMonthPage }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <Trans i18nKey="calendar.month">Month</Trans>
      </Button>
      <Button
        className={`onDay ${!isMonthPage ? 'isActive' : ''}`}
        onClick={() => {
          navigate(`day/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
        }}
        isMonthPage
      >
        {t('calendar.day')}
      </Button>
    </CalendarRange>
  );
};

export default PeriodPaginatorType;
