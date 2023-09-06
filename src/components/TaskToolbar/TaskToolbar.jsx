import { Menu, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { CgTrashEmpty } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
import { AiOutlineLogin } from 'react-icons/ai';
import { HiOutlinePencil } from 'react-icons/hi';

import './ContextMenu.css';
import { tasksApi } from 'redux/tasks/tasksApi';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
import { showErrorToast, showSuccessToast } from '../../utils/showToast';
import {
  Container,
  IconButton,
  Text,
  Wrapper,
  Icon,
} from './TaskToolbar.styled';

const TaskToolbar = ({ task }) => {
  const { t } = useTranslation();

  const [isModalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteTask] = tasksApi.useDeleteTasksMutation();

  const [editTask, { isLoading, isError }] = tasksApi.useEditTasksMutation();

  const categories = ['todo', 'inprogress', 'done'].filter(
    item =>
      task.category.replace(/\s+/g, '').toLowerCase() !==
      item.replace(/\s+/g, '').toLowerCase()
  );
  const categoriesDB = ['TODO', 'INPROGRESS', 'DONE'].filter(
    item =>
      task.category.replace(/\s+/g, '').toLowerCase() !==
      item.replace(/\s+/g, '').toLowerCase()
  );
  const handleClickContextMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseContextMenu = () => {
    setAnchorEl(null);
  };
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

  const handleDelete = () => {
    try {
      deleteTask(task._id);
      showSuccessToast(t('addTask.succ3'));
    } catch (error) {
      showErrorToast(t('addTask.err4'));
    }
  };
  async function handleChangePriority(newCategory) {
    const { _id, ...newTask } = task;
    const editedTask = { ...newTask, category: newCategory };

    try {
      await editTask({ id: task._id, ...editedTask });
      if (!isLoading) handleCloseContextMenu();
      if (isError) {
        throw new Error();
      }
    } catch (error) {
      showErrorToast(t('addTask.err4'));
    }
  }

  return (
    <Container>
      <IconButton onClick={handleClickContextMenu}>
        <AiOutlineLogin />
      </IconButton>
      <IconButton onClick={handleOpenModal}>
        <HiOutlinePencil />
      </IconButton>
      <IconButton>
        <CgTrashEmpty onClick={handleDelete} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClick={handleCloseContextMenu}
        classes={{ paper: 'custom-menu' }}
      >
        <MenuItem
          onClick={() => handleChangePriority(categoriesDB[0])}
          style={{ height: 30, marginBottom: 10, padding: 0 }}
        >
          <Wrapper>
            <Text>{t(`statChart.${categories[0]}`)}</Text>
            <Icon />
          </Wrapper>
        </MenuItem>

        <MenuItem
          onClick={() => handleChangePriority(categoriesDB[1])}
          style={{ height: 30, padding: 0 }}
        >
          <Wrapper>
            <Text> {t(`statChart.${categories[1]}`)}</Text>
            <Icon />
          </Wrapper>
        </MenuItem>
      </Menu>
      {isModalOpen && <AddTaskModal onClose={handleCloseModal} task={task} />}
    </Container>
  );
};

export default TaskToolbar;
