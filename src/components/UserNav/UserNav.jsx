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

  /* eslint-disable */
  const [_, currentPage] = location.pathname.split('/');
  /* eslint-enable */

  return (
    <Container>
      <Text>
        <Trans i18nKey="userNav.panel">User Panel</Trans>
      </Text>
      <nav>
        <List>
          <ListItem className={currentPage === 'account' ? 'active' : ''}>
            <LinkNav
              onClick={closeSidebar}
              to="/account"
              className={`${currentPage === 'account' ? 'active' : ''} text`}
            >
              <IconUser
                isactive={currentPage === 'account' ? 'active' : ''}
                className="icon"
              />
              {t('userNav.acc')}
            </LinkNav>
          </ListItem>
          <ListItem className={currentPage === 'calendar' ? 'active' : ''}>
            <LinkNav
              onClick={closeSidebar}
              to="/calendar"
              className={`${currentPage === 'calendar' ? 'active' : ''} text`}
            >
              <IconCalendar
                isactive={currentPage === 'calendar' ? 'active' : ''}
                className="icon"
              />
              {t('userNav.calendar')}
            </LinkNav>
          </ListItem>
          <ListItem className={currentPage === 'statistics' ? 'active' : ''}>
            <LinkNav
              onClick={closeSidebar}
              to="/statistics"
              className={`${currentPage === 'statistics' ? 'active' : ''} text`}
            >
              <IconStatistics
                isactive={currentPage === 'statistics' ? 'active' : ''}
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
