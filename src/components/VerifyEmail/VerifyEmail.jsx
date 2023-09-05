import { useParams } from 'react-router-dom';
import {
  TextVerify,
  Container,
  StyledButton,
  ImageWrapper,
  Image,
  Text,
  TextSpan,
} from './VerifyEmail.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVerifyEmailUser } from 'redux/auth/operations';

import { useTranslation, Trans } from 'react-i18next';

const VerifyEmail = () => {
  const [isErrorToken, setIsErrorToken] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [pixelRatio, setPixelRatio] = useState(window.devicePixelRatio || 1);
  const isRetina = pixelRatio > 1;

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { verifyToken } = useParams();

  useEffect(() => {
    dispatch(getVerifyEmailUser(verifyToken)).then(
      ({ meta: { rejectedWithValue } }) => {
        if (rejectedWithValue) {
          setIsErrorToken(true);
        }
        setIsErrorToken(true);
      }
    );

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setPixelRatio(window.devicePixelRatio || 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, verifyToken]);

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
      <ImageWrapper>
        <Image src={selectedImagePath} alt="Goose" />
      </ImageWrapper>
      <Text>
        <Trans i18nKey="authSection.g">G</Trans>
        <TextSpan>{t('authSection.oo')}</TextSpan>
        {t('authSection.setrack')}
      </Text>
      <TextVerify>
        {isErrorToken
          ? 'Your email was not verified 🥺, please try again'
          : 'Your email has been successfully verified 😀! Thank you!'}
      </TextVerify>
      <StyledButton to="/">Back to home</StyledButton>
    </Container>
  );
};

export default VerifyEmail;
