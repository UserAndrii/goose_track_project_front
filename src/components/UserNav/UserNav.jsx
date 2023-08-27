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
          <IconUser
            isActive={location.pathname === '/account' ? 'active' : ''}
            className="icon"
          />
          <LinkNav
            to="/account"
            className={`${
              location.pathname === '/account' ? 'active' : ''
            } text`}
          >
            My account
          </LinkNav>
        </ListItem>
        <ListItem className={location.pathname === '/calendar' ? 'active' : ''}>
          <IconCalendar
            isActive={location.pathname === '/calendar' ? 'active' : ''}
            className="icon"
          />
          <LinkNav
            to="/calendar"
            className={`${
              location.pathname === '/calendar' ? 'active' : ''
            } text`}
          >
            Calendar
          </LinkNav>
        </ListItem>
        <ListItem
          className={location.pathname === '/statistics' ? 'active' : ''}
        >
          <IconStatistics
            isActive={location.pathname === '/statistics' ? 'active' : ''}
            className="icon"
          />
          <LinkNav
            to="/statistics"
            className={`${
              location.pathname === '/statistics' ? 'active' : ''
            } text`}
          >
            Statistics
          </LinkNav>
        </ListItem>
      </ul>
    </Container>
  );
};

export default UserNav;
