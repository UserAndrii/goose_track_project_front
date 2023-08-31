// import AddFeedbackBtn from 'components/AddFeedbackBtn/AddFeedbackBtn';
import { useState, useEffect } from 'react';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
// import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { CalendarToolBar } from '../components/Calendar/CalendarToolbar/CalendarToolbar';
import { ChoosedMonth } from '../components/Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from '../components/Calendar/ChoosedDay/ChoosedDay';

import {
  format,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  addDays,
  // isSameMonth,
  // isSameDay,
  isToday,
  eachDayOfInterval,
  startOfToday,
  parse,
  add,
  // addWeeks,
  // subWeeks,
  // isBefore,
  // isEqual,
  // startOfMonth,
} from 'date-fns';

const CalendarPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMonthPage, setIsMonthPage] = useState(true);
  // day
  const [currentDay, setCurrentDay] = useState(
    format(startOfToday(), 'yyyy-MM-dd')
  );
  // month
  const [currentMonth, setCurrentMonth] = useState(
    format(currentDay, 'MMM-yyyy')
  );
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  //   document.body.style.overflow = 'hidden';
  // };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div>
      <CalendarToolBar
        isMonthPage={isMonthPage}
        setIsMonthPage={setIsMonthPage}
        currentDay={currentDay}
        firstDayCurrentMonth={firstDayCurrentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      {isMonthPage ? (
        <ChoosedMonth currentDay={firstDayCurrentMonth} days={days} />
      ) : (
        <ChoosedDay Week={days} />
      )}
      {/* <TasksColumnsList /> */}
      {isModalOpen && <AddTaskModal onClose={handleCloseModal} />}
    </div>
  );
};

export default CalendarPage;
