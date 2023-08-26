import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, MenuBtn, PageHeader } from './Header.styled';

import AddFeedbackBtn from '../AddFeedbackBtn';
import AddFeedbackModal from '../AddFeedbackModal';
import ThemeToggler from '../ThemeToggler';
import UserInfo from '../UserInfo';

const Header = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const currentPath = location.pathname;

    switch (currentPath) {
      case '/account':
        return setActivePage('User Profile');

      case '/calendar':
        return setActivePage('Calendar');

      case '/statistics':
        return setActivePage('Statistics');

      default:
        setActivePage('');
        return;
    }
  }, [location]);

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
      <PageHeader>{activePage}</PageHeader>
      <MenuBtn hide={'true'} />
      <AddFeedbackBtn onClick={handleOpenModal} />
      <ThemeToggler />
      <UserInfo />
      {isModalOpen && <AddFeedbackModal onClose={handleCloseModal} />}
    </Container>
  );
};

export default Header;
