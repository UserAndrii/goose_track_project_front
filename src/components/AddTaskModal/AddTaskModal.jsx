import React from 'react';
import Modal from '../Modal';
import AddTaskForm from 'components/AddTaskForm/AddTaskForm';

const AddTaskModal = ({ onClose, task, category }) => {
  return (
    <Modal onClose={onClose}>
      <AddTaskForm onClose={onClose} task={task} category={category} />
    </Modal>
  );
};

export default AddTaskModal;
