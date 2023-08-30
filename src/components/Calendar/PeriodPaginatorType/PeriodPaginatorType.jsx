import css from '../Caledar.module.css';

export const PeriodPaginatorType = ({ isMonthPage, changeType }) => {
  return (
    <div className={css.toolbar__calendarRange}>
      <button
        className={`${css.toolbar__buttons} ${css.toolbar__monthButton}`}
        style={{
          backgroundColor: isMonthPage
            ? 'rgba(62, 133, 243, 0.2)'
            : 'rgba(227, 243, 255, 1)',
        }}
        onClick={() => {
          changeType(true);
        }}
      >
        Month
      </button>
      <button
        className={`${css.toolbar__buttons} ${css.toolbar__dayButton}`}
        style={{
          backgroundColor: !isMonthPage
            ? 'rgba(62, 133, 243, 0.2)'
            : 'rgba(227, 243, 255, 1)',
        }}
        onClick={() => {
          changeType(false);
        }}
      >
        Day
      </button>
    </div>
  );
};
