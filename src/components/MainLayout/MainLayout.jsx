import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import { Container } from './MainLayout.styled';
// import { getCurrentUser } from '../../redux/auth/operations';

import Header from '../Header';
import SideBar from '../SideBar';

const MainLayout = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);

  // if (!user) dispatch(getCurrentUser);

  return (
    <Container>
      <Header
      // user={user}
      />
      <SideBar />
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default MainLayout;
