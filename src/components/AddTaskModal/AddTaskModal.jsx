import React from 'react';
import Modal from '../Modal';
import AddTaskForm from 'components/AddTaskForm/AddTaskForm';

const AddTaskModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <AddTaskForm onClose={onClose}/>
    </Modal>
  );
};

export default AddTaskModal;
