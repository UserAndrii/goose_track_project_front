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
  eachDayOfInterval,
  startOfToday,
  parse,
} from 'date-fns';

const CalendarPage = () => {
  const navigate = useNavigate();
  let filteredTask;

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

  const [currentWeek, setCurrentWeek] = useState({
    start: startOfWeek(currentDay, { weekStartsOn: 1 }),
    end: addDays(startOfWeek(currentDay, { weekStartsOn: 1 }), 6),
  });
  const week = eachDayOfInterval(currentWeek);

  const isInCurrentWeek = isWithinInterval(currentDay, currentWeek);

  if (!isInCurrentWeek) {
    const newStartOfWeek = startOfWeek(currentDay, {
      weekStartsOn: 1,
    });
    const newEndOfWeek = addDays(
      startOfWeek(currentDay, { weekStartsOn: 1 }),
      6
    );

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
    if (allTasks) {
      const Tasks = [...allTasks.data];

      refetch();
      setTasks(Tasks);
    }
  }, [allTasks, refetch]);

  /* eslint-disable */
  useEffect(() => {
    navigate(`month/${format(currentDay, 'yyyy-MM-dd')}`);
  }, []);
  /* eslint-enable */

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

  if (tasks) {
    const formattedDay = format(currentDay, 'yyyy-MM-dd');
    filteredTask = tasks.filter(task => task.date === formattedDay);
  }

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
          setTasks={setTasks}
          setIsMonthPage={setIsMonthPage}
        />
      ) : (
        <ChoosedDay
          week={week}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          filteredTask={filteredTask && filteredTask}
        />
      )}
      {isModalOpen && <AddTaskModal onClose={handleCloseModal} />}
    </div>
  );
};

export default CalendarPage;
