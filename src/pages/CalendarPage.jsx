import { useState, useEffect } from 'react';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
import { CalendarToolBar } from '../components/Calendar/CalendarToolbar/CalendarToolbar';
import { ChoosedMonth } from '../components/Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from '../components/Calendar/ChoosedDay/ChoosedDay';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';
import { Calendar } from '../components/Calendar/Calendar.styled';
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
import { loadLocal, saveLocal } from 'components/ThemeToggler/localStorage';
const view = loadLocal('isView') ?? true;
const CalendarPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* eslint-disable */
  const [_, __, monthOrDay, date] = location.pathname.split('/');
  /* eslint-enable */

  let filteredTask;
  const [isView, setIsView] = useState(view);
  const [isModalOpen, setModalOpen] = useState(false);

  const [isMonthPage, setIsMonthPage] = useState(true);

  const [tasks, setTasks] = useState(null);

  const [currentDay, setCurrentDay] = useState(startOfToday());

  const [currentMonth, setCurrentMonth] = useState(
    format(startOfToday(), 'MMM-yyyy')
  );
  useEffect(() => {
    saveLocal('isView', isView);
  }, [isView]);
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
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

  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());
  const formattedMonth =
    currentDate === undefined ? firstDayCurrentMonth : parsedCurrentDate;

  const { data: allTasks } = useGetMonthlyTasksQuery(
    format(formattedMonth, 'yyyy-MM'),
    { skip: formattedMonth === undefined }
  );

  /* eslint-disable */
  useEffect(() => {
    navigate(`month/${format(currentDay, 'yyyy-MM-dd')}`);
  }, []);
  /* eslint-enable */

  useEffect(() => {
    if (monthOrDay) {
      if (monthOrDay === 'month') {
        setIsMonthPage(true);
      } else {
        setIsMonthPage(false);
      }
    }
  }, [monthOrDay]);
  useEffect(() => {
    // refetch();
    if (allTasks) {
      const Tasks = [...allTasks.data];
      setTasks(Tasks);
    }
  }, [allTasks]);

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
    <Calendar>
      <CalendarToolBar
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        currentMonth={firstDayCurrentMonth}
        setCurrentMonth={setCurrentMonth}
        isMonthPage={isMonthPage}
        week={week}
        setIsView={setIsView}
        isView={isView}
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
          isView={isView}
        />
      ) : (
        <ChoosedDay
          week={week}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          setIsMonthPage={setIsMonthPage}
          filteredTask={filteredTask && filteredTask}
        />
      )}
      {isModalOpen && <AddTaskModal onClose={handleCloseModal} />}
    </Calendar>
  );
};

export default CalendarPage;
