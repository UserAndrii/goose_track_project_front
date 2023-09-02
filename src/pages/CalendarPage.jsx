// import AddFeedbackBtn from 'components/AddFeedbackBtn/AddFeedbackBtn';
import { useState, useEffect } from 'react';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
// import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { CalendarToolBar } from '../components/Calendar/CalendarToolbar';
import { ChoosedMonth } from '../components/Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from '../components/Calendar/ChoosedDay/ChoosedDay';
import { useNavigate } from 'react-router-dom';

import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';
import css from '../components/Calendar/Caledar.module.css';

import {
  format,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  addDays,
  isWithinInterval,
  // isSameMonth,
  // isSameDay,
  // isToday,
  eachDayOfInterval,
  startOfToday,
  parse,
  // add,
  // addWeeks,
  // subWeeks,
  // isBefore,
  // isEqual,
  // startOfMonth,
} from 'date-fns';

const CalendarPage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isMonthPage, setIsMonthPage] = useState(true);
  const [tasks, setTasks] = useState(null);
  // day
  const [currentDay, setCurrentDay] = useState(startOfToday());
  // month
  const [currentMonth, setCurrentMonth] = useState(
    format(startOfToday(), 'MMM-yyyy')
  );
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const today = startOfToday();

  // Weeks
  const [currentWeek, setCurrentWeek] = useState({
    start: startOfWeek(today, { weekStartsOn: 1 }),
    end: addDays(endOfWeek(today, { weekStartsOn: 0 }), 1),
  });
  const week = eachDayOfInterval(currentWeek);
  const isInCurrentWeek = isWithinInterval(currentDay, currentWeek);

  if (!isInCurrentWeek) {
    const newStartOfWeek = startOfWeek(currentDay, {
      weekStartsOn: 1,
    });
    const newEndOfWeek = addDays(endOfWeek(currentDay, { weekStartsOn: 0 }), 1);

    const newCurrentWeek = {
      start: newStartOfWeek,
      end: newEndOfWeek,
    };

    setCurrentWeek(newCurrentWeek);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const { data: allTasks, refetch } = useGetMonthlyTasksQuery(
    format(currentDay, 'yyyy-MM')
  );

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

  useEffect(() => {
    if (allTasks) {
      const Tasks = [...allTasks.data];

      refetch();
      setTasks(Tasks);
    }
  }, [allTasks]);

  useEffect(() => {
    navigate(`month/${format(currentDay, 'yyyy-MM-dd')}`);
  }, []);

  return (
    <div className={css.calendar}>
      <CalendarToolBar
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        currentMonth={firstDayCurrentMonth}
        setCurrentMonth={setCurrentMonth}
        isMonthPage={isMonthPage}
        setIsMonthPage={setIsMonthPage}
        week={week}
      />
      {isMonthPage ? (
        <ChoosedMonth
          currentDay={firstDayCurrentMonth}
          days={days}
          setCurrentDay={setCurrentDay}
          week={week}
          allTasks={allTasks && allTasks}
          setIsMonthPage={setIsMonthPage}
        />
      ) : (
        <ChoosedDay week={week} currentDay={currentDay} />
      )}
      {isModalOpen && <AddTaskModal onClose={handleCloseModal} />}
    </div>
  );
};

export default CalendarPage;
