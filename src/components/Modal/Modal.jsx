import { createPortal } from 'react-dom';
import {
  
  ModalContent,
  ModalOverlay,
  CloseBtn,
} from './Modal.styled';

const modalRoot = document.querySelector('#root-module');

const Modal = ({ children, onClose }) => {
  const handleContentClick = event => {
    event.stopPropagation();
  };

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleContentClick}>
        
          <CloseBtn onClick={onClose} />
      
        {children}
      </ModalContent>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
