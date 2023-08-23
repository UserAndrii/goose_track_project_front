import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import SideBar from '../SideBar';

const MainLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
