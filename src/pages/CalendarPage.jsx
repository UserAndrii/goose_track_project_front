import AddFeedbackBtn from 'components/AddFeedbackBtn/AddFeedbackBtn';
import { useState, useEffect } from 'react';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';

const CalendarPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

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
      <TasksColumnsList/>
      <AddFeedbackBtn onClick={handleOpenModal}>Add Task</AddFeedbackBtn>
      {/* <h1>This is CalendarPage</h1> */}
      {isModalOpen && <AddTaskModal onClose={handleCloseModal} />}
    </div>
  );
};

export default CalendarPage;
