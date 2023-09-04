import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from './TasksColumn.styled';
import ColumnHeadBar from '../ColumnHeadBar';
import AddTaskBtn from '../AddTaskBtn';
import ColumnsTasksList from '../ColumnsTasksList';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';

const TasksColumn = ({ category, tasks, columnId }) => {
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
    <Container tasksLength={tasks.length}>
      <ColumnHeadBar category={category} columnId={columnId} />
      <ColumnsTasksList tasks={tasks} columnId={columnId} />
      <AddTaskBtn onClick={handleOpenModal} />
      {isModalOpen && (
        <AddTaskModal onClose={handleCloseModal} category={columnId} />
      )}
    </Container>
  );
};

export default TasksColumn;
