import { useNavigate } from 'react-router';
import { useTranslation, Trans } from 'react-i18next';

import { CalendarRange, Button } from './PeriodPaginatorType.styled';

import { format, parse } from 'date-fns';
import { useParams } from 'react-router-dom';
import { ButtonView } from '../CalendarToolbar/CalendarToolbar.styled';
import { FaRegListAlt, FaThLarge } from 'react-icons/fa';
const PeriodPaginatorType = ({ isMonthPage, isView, setIsView }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());

  return (
    <CalendarRange>
      {isMonthPage ? (
        <ButtonView
          onClick={() => {
            setIsView(prev => !prev);
          }}
        >
          {isView ? (
            <FaThLarge style={{ width: '25px', height: '25px' }} />
          ) : (
            <FaRegListAlt style={{ width: '25px', height: '25px' }} />
          )}
        </ButtonView>
      ) : (
        <></>
      )}
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
