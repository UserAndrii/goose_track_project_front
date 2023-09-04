import React from 'react';
import Modal from '../Modal';
import PasswordRecoveryForm from '../PasswordRecoveryForm';

const AddPasswordRecoveryModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <PasswordRecoveryForm onClose={onClose} />
    </Modal>
  );
};

export default AddPasswordRecoveryModal;
