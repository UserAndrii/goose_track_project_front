import { useTranslation, Trans } from 'react-i18next';
import {
  Container,
  Text,
  List,
  ListItem,
  LinkNav,
  IconUser,
  IconCalendar,
  IconStatistics,
} from './UserNav.styled';

import { useLocation } from 'react-router-dom';

const UserNav = ({ closeSidebar }) => {
  const { t } = useTranslation();

  const location = useLocation();

  return (
    <Container>
      <Text>
        <Trans i18nKey="userNav.panel">User Panel</Trans>
      </Text>
      <nav>
        <List>
          <ListItem
            className={location.pathname === '/account' ? 'active' : ''}
          >
            <LinkNav
              onClick={closeSidebar}
              to="/account"
              className={`${
                location.pathname === '/account' ? 'active' : ''
              } text`}
            >
              <IconUser
                isactive={location.pathname === '/account' ? 'active' : ''}
                className="icon"
              />
              {t('userNav.acc')}
            </LinkNav>
          </ListItem>
          <ListItem
            className={location.pathname === '/calendar' ? 'active' : ''}
          >
            <LinkNav
              onClick={closeSidebar}
              to="/calendar"
              className={`${
                location.pathname === '/calendar' ? 'active' : ''
              } text`}
            >
              <IconCalendar
                isactive={location.pathname === '/calendar' ? 'active' : ''}
                className="icon"
              />
              {t('userNav.calendar')}
            </LinkNav>
          </ListItem>
          <ListItem
            className={location.pathname === '/statistics' ? 'active' : ''}
          >
            <LinkNav
              onClick={closeSidebar}
              to="/statistics"
              className={`${
                location.pathname === '/statistics' ? 'active' : ''
              } text`}
            >
              <IconStatistics
                isactive={location.pathname === '/statistics' ? 'active' : ''}
                className="icon"
              />
              {t('userNav.stat')}
            </LinkNav>
          </ListItem>
        </List>
      </nav>
    </Container>
  );
};

export default UserNav;
