import React, { useState, useEffect } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Container, IconButton, Text, Wrapper } from './TaskToolbar.styled';
import { AiOutlineLogin } from 'react-icons/ai';
import { HiOutlinePencil } from 'react-icons/hi';
import { CgTrashEmpty } from 'react-icons/cg';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
import { tasksApi } from 'redux/tasks/tasksApi';
import {
  showErrorToast,
  showSuccessToast,
} from '../ErrorFunction/showErrorToast';
import './ContextMenu.css';

const TaskToolbar = ({ task }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteTask, { isLoading }] = tasksApi.useDeleteTasksMutation();

  const categories = ['To do', 'In progress', 'Done'].filter(
    item => task.Category !== item
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

  const handleDelete = async () => {
    try {
      const result = await deleteTask(task.id);
      console.log(isLoading);
      if (result.status === 404) {
        throw new Error();
      }
      showSuccessToast('Task deleted');
      console.log();
      //   console.log(result);
    } catch (error) {
      showErrorToast('Something went wrong...');
      console.error('Error deleting task:', error);
    }
  };
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
        onClose={handleCloseContextMenu}
        classes={{ paper: 'custom-menu' }}
      >
        <MenuItem
          onClick={handleCloseContextMenu}
          style={{ height: 14, marginBottom: 14, padding: 0 }}
        >
          <Wrapper>
            <Text>{categories[0]}</Text>
            <AiOutlineLogin />
          </Wrapper>
        </MenuItem>
        <MenuItem
          onClick={handleCloseContextMenu}
          style={{ height: 14, padding: 0 }}
        >
          <Wrapper>
            <Text>{categories[1]}</Text>
            <AiOutlineLogin />
          </Wrapper>
        </MenuItem>
      </Menu>
      {isModalOpen && <AddTaskModal onClose={handleCloseModal} />}
    </Container>
  );
};

export default TaskToolbar;
