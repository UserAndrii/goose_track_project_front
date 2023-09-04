import { useTranslation, Trans } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkTo, Wrapper, Text } from './AuthNavigate.styled';

const AuthNavigate = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();
  const [activePageQuestions, setActivePageQuestions] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/login':
        return setActivePageQuestions(
          <Trans i18nKey="inout.donthave">Don't have an account?</Trans>
        );

      case '/register':
        return setActivePageQuestions(`${t('inout.have')}`);

      default:
        setActivePageQuestions('');
        return;
    }
  }, [pathname, t]);

  return pathname === '/login' ? (
    <Wrapper>
      <Text>
        {activePageQuestions}{' '}
        <LinkTo to="/register">{t('inout.signup')}</LinkTo>
      </Text>
      <LinkTo to="/password_recovery">{t('inout.forgot')}</LinkTo>
    </Wrapper>
  ) : (
    <Wrapper>
      <Text>
        {activePageQuestions} <LinkTo to="/login">{t('inout.login')}</LinkTo>
      </Text>
    </Wrapper>
  );
};

export default AuthNavigate;
