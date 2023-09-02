import { Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/operations';

import {
  Container,
  Overlay,
  Main,
  Wrapper,
  PageWrapper,
} from './MainLayout.styled';

import Header from '../Header';
import SideBar from '../SideBar';
// import Spinner from '../Spiner';
import ImageAnimation from 'components/Bandero-goose/ImageAnimation';

const MainLayout = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, user]);

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSidebar = () => {
    setSidebarVisible(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <Container>
      {sidebarVisible && <Overlay onClick={closeSidebar} />}

      <Wrapper>
        <SideBar closeSidebar={closeSidebar} sidebarVisible={sidebarVisible} />
        <PageWrapper>
          <Header openSidebar={openSidebar} />
          <Main>
            <Suspense fallback={<ImageAnimation />}>
              <Outlet />
            </Suspense>
          </Main>
        </PageWrapper>
      </Wrapper>
    </Container>
  );
};

export default MainLayout;
