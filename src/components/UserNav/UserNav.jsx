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
        <ListItem>
          <IconUser />
          <LinkNav
            to="/account"
            className={location.pathname === '/account' ? 'active' : ''}
          >
            My account
          </LinkNav>
        </ListItem>
        <ListItem>
          <IconCalendar />
          <LinkNav
            to="/calendar"
            className={location.pathname === '/calendar' ? 'active' : ''}
          >
            Calendar
          </LinkNav>
        </ListItem>
        <ListItem>
          <IconStatistics />
          <LinkNav
            to="/statistics"
            className={location.pathname === '/statistics' ? 'active' : ''}
          >
            Statistics
          </LinkNav>
        </ListItem>
      </ul>
    </Container>
  );
};

export default UserNav;
