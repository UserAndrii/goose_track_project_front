import React from 'react';
import Modal from '../Modal';
import AddTaskForm from 'components/AddTaskForm/AddTaskForm';

const AddTaskModal = ({ onClose, task }) => {
  return (
    <Modal onClose={onClose}>
      <AddTaskForm onClose={onClose} task={task} />
    </Modal>
  );
};

export default AddTaskModal;
