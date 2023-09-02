import { Suspense, lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import {
  selectIsFetchingCurrentUser,
  selectIsLoggedIn,
} from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/operations';

import MainLayout from './MainLayout/MainLayout';

import { ChoosedMonth } from './Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from './Calendar/ChoosedDay/ChoosedDay';
import ImageAnimation from './Bandero-goose/ImageAnimation';

const MainPage = lazy(() => import('pages/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const TeamPage = lazy(() => import('pages/TeamPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ImageAnimation />
  ) : (
    <Suspense fallback={<ImageAnimation />}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute component={<MainPage />} navigateTo="/calendar" />
          }
        />

        <Route
          path="/team"
          element={
            <RestrictedRoute component={<TeamPage />} navigateTo="/calendar" />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              navigateTo="/calendar"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} navigateTo="/calendar" />
          }
        />

        <Route path="/" element={<MainLayout />}>
          <Route
            path="account"
            element={
              <PrivateRoute component={<AccountPage />} navigateTo="/" />
            }
          />

          <Route
            path="calendar/"
            element={
              <PrivateRoute component={<CalendarPage />} navigateTo="/" />
            }
          >
            <Route
              path="month/:currentDate"
              element={
                <PrivateRoute component={<ChoosedMonth />} navigateTo="/" />
              }
            />
            <Route
              path="day/:currentDate"
              element={
                <PrivateRoute component={<ChoosedDay />} navigateTo="/" />
              }
            />
          </Route>

          <Route
            path="statistics"
            element={
              <PrivateRoute component={<StatisticsPage />} navigateTo="/" />
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <RestrictedRoute component={<NotFoundPage />} navigateTo="/" />
          }
        />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};

function RestrictedRoute({ component, navigateTo = '/' }) {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? <Navigate to={navigateTo} /> : component;
}

function PrivateRoute({ component, navigateTo = '/' }) {
  const isLogged = useSelector(selectIsLoggedIn);
  const isFetching = useSelector(selectIsFetchingCurrentUser);

  return !isLogged && !isFetching ? <Navigate to={navigateTo} /> : component;
}
