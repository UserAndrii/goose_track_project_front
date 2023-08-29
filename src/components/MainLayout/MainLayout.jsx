import { Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/operations';

import { Container, Overlay, Main } from './MainLayout.styled';

import Header from '../Header';
import SideBar from '../SideBar';

const MainLayout = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser());

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, user]);

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(true);
  };
  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <Container>
      {sidebarVisible && <Overlay onClick={closeSidebar} />}
      <SideBar closeSidebar={closeSidebar} sidebarVisible={sidebarVisible} />

      <Main>
        <Header
          openSidebar={openSidebar}
          // user={user}
        />
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default MainLayout;
