import {
  Container,
  Text,
  ListItem,
  LinkNav,
  IconUser,
  IconCalendar,
  IconStatistics,
} from './UserNav.styled';

import { useLocation } from 'react-router-dom';

const UserNav = () => {
  const location = useLocation();
  return (
    <Container>
      <Text>User Panel</Text>
      <ul>
        <ListItem className={location.pathname === '/account' ? 'active' : ''}>
          <LinkNav
            to="/account"
            className={`${
              location.pathname === '/account' ? 'active' : ''
            } text`}
          >
            <IconUser
              isActive={location.pathname === '/account' ? 'active' : ''}
              className="icon"
            />
            My account
          </LinkNav>
        </ListItem>
        <ListItem className={location.pathname === '/calendar' ? 'active' : ''}>
          <LinkNav
            to="/calendar"
            className={`${
              location.pathname === '/calendar' ? 'active' : ''
            } text`}
          >
            <IconCalendar
              isActive={location.pathname === '/calendar' ? 'active' : ''}
              className="icon"
            />
            Calendar
          </LinkNav>
        </ListItem>
        <ListItem
          className={location.pathname === '/statistics' ? 'active' : ''}
        >
          <LinkNav
            to="/statistics"
            className={`${
              location.pathname === '/statistics' ? 'active' : ''
            } text`}
          >
            <IconStatistics
              isActive={location.pathname === '/statistics' ? 'active' : ''}
              className="icon"
            />
            Statistics
          </LinkNav>
        </ListItem>
      </ul>
    </Container>
  );
};

export default UserNav;
