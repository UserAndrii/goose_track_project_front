import { Container, Title, PlusBtn } from './ColumnHeadBar.styled';
import AddTaskModal from 'components/AddTaskModal/AddTaskModal';
import { useState, useEffect } from 'react';
const ColumnHeadBar = ({ category, columnId }) => {
  const [isModalOpen, setModalOpen] = useState(false);

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
  return (
    <Container>
      <Title>{category}</Title>
      <PlusBtn onClick={handleOpenModal} />
      {isModalOpen && (
        <AddTaskModal onClose={handleCloseModal} category={columnId} />
      )}
    </Container>
  );
};
export default ColumnHeadBar;
