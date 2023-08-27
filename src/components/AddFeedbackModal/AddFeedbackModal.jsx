import React from 'react';
import Modal from '../Modal';
import FeedbackForm from '../FeedbackForm';

const AddFeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm />
    </Modal>
  );
};

export default AddFeedbackModal;
