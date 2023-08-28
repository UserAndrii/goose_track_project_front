import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import { Container, Overlay, Main } from './MainLayout.styled';
import { useState } from 'react';
// import { getCurrentUser } from '../../redux/auth/operations';

import Header from '../Header';
import SideBar from '../SideBar';

const MainLayout = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);

  // if (!user) dispatch(getCurrentUser);

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
