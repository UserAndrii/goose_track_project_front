// import AddFeedbackBtn from 'components/AddFeedbackBtn/AddFeedbackBtn';
import { useState, useEffect } from 'react';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
// import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { CalendarToolBar } from '../components/Calendar/CalendarToolbar';
import { ChoosedMonth } from '../components/Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from '../components/Calendar/ChoosedDay/ChoosedDay';
import { useNavigate } from 'react-router-dom';

import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';

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

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  //   document.body.style.overflow = 'hidden';
  // };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigate = useNavigate();

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
    console.log('allTasks', allTasks);

    if (allTasks) {
      const Tasks = [...allTasks.data];
      console.log('Tasks', Tasks);

      // if (tasks && tasks.length > 0) {
      // }

      refetch();
      setTasks(Tasks);
    }
  }, [allTasks]);

  useEffect(() => {
    navigate(`month/${format(currentDay, 'yyyy-MM-dd')}`);
  }, [currentDay]);

  return (
    <div>
      <CalendarToolBar
        isMonthPage={isMonthPage}
        setIsMonthPage={setIsMonthPage}
        currentDay={currentDay}
        currentMonth={currentMonth}
        firstDayCurrentMonth={firstDayCurrentMonth}
        setCurrentMonth={setCurrentMonth}
        setCurrentDay={setCurrentDay}
      />
      {isMonthPage ? (
        <ChoosedMonth
          currentDay={firstDayCurrentMonth}
          days={days}
          allTasks={allTasks && allTasks}
        />
      ) : (
        <ChoosedDay Week={days} />
      )}
      {/* <TasksColumnsList /> */}
      {isModalOpen && <AddTaskModal onClose={handleCloseModal} />}
    </div>
  );
};

export default CalendarPage;
