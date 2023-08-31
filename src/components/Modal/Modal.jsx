import { createPortal } from 'react-dom';
import { ModalCloseButton, ModalContent, ModalOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#root-module');

const Modal = ({ children, onClose }) => {
  const handleContentClick = event => {
    event.stopPropagation();
  };

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleContentClick}>
        <ModalCloseButton onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ModalCloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
