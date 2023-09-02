import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import {
  Container,
  ImageWrapper,
  Image,
  Text,
  TextSpan,
  List,
  Button,
  ButtonText,
  ItemIcon,
  AuthLink,
} from './AuthSection.styled';

import LangSwitcher from 'components/LangSwitcher/LangSwitcher';

const AuthSection = () => {
  const { t } = useTranslation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [pixelRatio, setPixelRatio] = useState(window.devicePixelRatio || 1);
  const isRetina = pixelRatio > 1;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setPixelRatio(window.devicePixelRatio || 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let imageIndex = 0;
  if (screenWidth <= 375) {
    imageIndex = 0;
  } else if (screenWidth >= 768) {
    imageIndex = 1;
  } else if (screenWidth >= 1440) {
    imageIndex = 2;
  }

  if (isRetina) {
    imageIndex = imageIndex + 3;
  }

  const imagePaths = [
    require('../../images/GOOSE_2_M.png'),
    require('../../images/GOOSE_2_T.png'),
    require('../../images/GOOSE_2_D.png'),
    require('../../images/GOOSE_2_M@2x.png'),
    require('../../images/GOOSE_2_T@2x.png'),
    require('../../images/GOOSE_2_D@2x.png'),
  ];

  const selectedImagePath = imagePaths[imageIndex];

  return (
    <Container>
      <LangSwitcher/>
      <ImageWrapper>
        <Image src={selectedImagePath} alt="Goose" />
      </ImageWrapper>
      <Text>
        <Trans i18nKey="authSection.g">G</Trans>
        <TextSpan>{t('authSection.oo')}</TextSpan>
        {t('authSection.setrack')}
      </Text>
      <List>
        <Button to="login">
          <ButtonText>{t('authSection.login')}</ButtonText>
          <ItemIcon />
        </Button>
        <AuthLink to="register">{t('authSection.signup')}</AuthLink>
      </List>
    </Container>
  );
};

export default AuthSection;
