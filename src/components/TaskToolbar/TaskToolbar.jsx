import React, { useState, useEffect } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Container, IconButton, Text, Wrapper } from './TaskToolbar.styled';
import { AiOutlineLogin } from 'react-icons/ai';
import { HiOutlinePencil } from 'react-icons/hi';
import { CgTrashEmpty } from 'react-icons/cg';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
import { tasksApi } from 'redux/tasks/tasksApi';
import Spinner from '../Spiner/Spiner';
import { showErrorToast, showSuccessToast } from '../../utils/showToast';
import './ContextMenu.css';

const TaskToolbar = ({ task }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteTask] =    tasksApi.useDeleteTasksMutation();
  
  const [editTask, { isLoading, isError }] = tasksApi.useEditTasksMutation();

  const categories = ['To do', 'In Progress', 'Done'].filter(
    item => task.category.replace(/\s+/g, '').toLowerCase() !== item.replace(/\s+/g, '').toLowerCase()
  );
  const categoriesDB = ['TODO', 'INPROGRESS', 'DONE'].filter(
    item => task.category.replace(/\s+/g, '').toLowerCase() !== item.replace(/\s+/g, '').toLowerCase()
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

  const handleDelete =  () => {
    try {
      const result =  deleteTask(task._id);
           showSuccessToast('Task deleted');
          } catch (error) {
      showErrorToast('Something went wrong...');
      
    }
  };
  async function  handleChangePriority(newCategory)  {
    const { _id, ...newTask } = task;
    const editedTask = { ...newTask, category: newCategory };
    
try {
  const result = await editTask({ id: task._id, ...editedTask })
     if (!isLoading)
          handleCloseContextMenu();
     
    } catch (error) {
      showErrorToast('Something went wrong...');
    }
  };
  
  return (
    <Container>
      {isLoading && <Spinner />}
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
          onClick={()=>handleChangePriority(categoriesDB[0])}
          style={{ height: 14, marginBottom: 14, padding: 0 }}
        >
          <Wrapper>
            <Text>{categories[0]}</Text>
            <AiOutlineLogin />
          </Wrapper>
        </MenuItem>
        <MenuItem
          onClick={()=>handleChangePriority(categoriesDB[1])}
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
