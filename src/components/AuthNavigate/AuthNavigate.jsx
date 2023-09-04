import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkTo, Wrapper, Text } from './AuthNavigate.styled';

const AuthNavigate = () => {
  const { pathname } = useLocation();
  const [activePageQuestions, setActivePageQuestions] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/login':
        return setActivePageQuestions("Don't have an account?");

      case '/register':
        return setActivePageQuestions('Already have an account?');

      default:
        setActivePageQuestions('');
        return;
    }
  }, [pathname]);

  return pathname === '/login' ? (
    <Wrapper>
      <Text>
        {activePageQuestions} <LinkTo to="/register">Sign Up</LinkTo>
      </Text>
      <LinkTo to="/password_recovery">Forgot password?</LinkTo>
    </Wrapper>
  ) : (
    <Wrapper>
      <Text>
        {activePageQuestions} <LinkTo to="/login">Log In</LinkTo>
      </Text>
    </Wrapper>
  );
};

export default AuthNavigate;
