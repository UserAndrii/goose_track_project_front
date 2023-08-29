import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Container,
  Wrapper,
  Picture,
  Imeges,
  WrapperText,
  PageHeader,
  Call,
  Text,
  MenuBtn,
} from './Header.styled';

import CalendarGoose from 'images/calendar-goose.png';
import CalendarGooseRetina from 'images/calendar-goose@2x.png';

import UserInfo from '../UserInfo';
import ThemeToggler from '../ThemeToggler';
import AddFeedbackBtn from '../AddFeedbackBtn';
import AddFeedbackModal from '../AddFeedbackModal';

const Header = ({ openSidebar }) => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');
  const [tasksСompleted] = useState(false); // setTasksСompleted
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
      {!tasksСompleted && activePage === 'Calendar' ? (
        <Wrapper>
          <Picture>
            <source
              type="image/png"
              media="(min-width: 1440px)"
              srcSet={`${CalendarGoose} 1x, ${CalendarGooseRetina} 2x`}
            />
            <Imeges
              src={`${CalendarGoose}`}
              alt="Let go of the past and focus on the present"
              width={64}
              height={60}
            />
          </Picture>
          <WrapperText>
            <PageHeader>{activePage}</PageHeader>
            <Text>
              <Call>Let go</Call> of the past and focus on the present!
            </Text>
          </WrapperText>
        </Wrapper>
      ) : (
        <PageHeader tasksСompleted>{activePage}</PageHeader>
      )}

      <MenuBtn onClick={openSidebar} hide={'true'} />
      <AddFeedbackBtn onClick={handleOpenModal} />
      <ThemeToggler />
      <UserInfo />

      {isModalOpen && <AddFeedbackModal onClose={handleCloseModal} />}
    </Container>
  );
};

export default Header;
