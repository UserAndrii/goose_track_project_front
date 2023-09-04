import { useTranslation, Trans } from 'react-i18next';
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
import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';

const Header = ({ openSidebar }) => {
  const { t } = useTranslation();

  const location = useLocation();
  const [activePage, setActivePage] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const currentPath = location.pathname;

  /* eslint-disable */
  const [_, currentPage, __, currentDate] = currentPath.split('/');
  /* eslint-enable */

  const date = currentDate?.substring(0, 7);

  const { data: tasks } = useGetMonthlyTasksQuery(date, {
    skip: date === undefined,
  });
  const filteredTask = tasks?.data?.filter(task => task.category !== 'DONE');

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    switch (currentPage) {
      case 'account':
        return setActivePage(t('header.profile'));

      case 'calendar':
        return setActivePage(t('header.calendar'));

      case 'statistics':
        return setActivePage(t('header.stat'));

      default:
        setActivePage('');
        return;
    }
  }, [currentPage]);

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
      {filteredTask?.length !== 0 && activePage === 'Calendar' ? (
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
              <Call>
                <Trans i18nKey="header.letgo">Let go</Trans>
              </Call>
              {t('header.resttext')}
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
