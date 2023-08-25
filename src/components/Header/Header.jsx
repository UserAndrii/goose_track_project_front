import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, PageHeader, MenuBtn } from './Header.styled';

import UserInfo from '../UserInfo';
import ThemeToggler from '../ThemeToggler';
import AddFeedbackBtn from '../AddFeedbackBtn';
// import AddFeedbackModal from '../AddFeedbackModal';

const Header = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');

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

  return (
    <Container>
      <PageHeader>{activePage}</PageHeader>
      <MenuBtn hide={'true'} />
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
      {/* <AddFeedbackModal /> */}
    </Container>
  );
};

export default Header;
