import { Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/operations';

import { Container, Overlay, Main, WrapperMain } from './MainLayout.styled';

import Header from '../Header';
import SideBar from '../SideBar';

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

      <Main>
        <SideBar closeSidebar={closeSidebar} sidebarVisible={sidebarVisible} />
        <WrapperMain>
          <Header
            openSidebar={openSidebar}
            // user={user}
          />
          <Suspense fallback={'Loading...'}>
            <Outlet />
          </Suspense>
        </WrapperMain>
      </Main>
    </Container>
  );
};

export default MainLayout;
