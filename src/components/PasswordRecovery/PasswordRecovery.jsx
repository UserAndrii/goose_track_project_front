import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation, Trans } from 'react-i18next';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendRenewPass } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import ImageAnimation from 'components/Bandero-goose/ImageAnimation';

import goosActive from 'images/gus_active.svg';
import goosActiveRetina from 'images/gus_active@2x.svg';

import {
  Container,
  StyledForm,
  InputGroupe,
  LinksContainer,
  FormName,
  InputWrapper,
  Button,
  ButtonText,
  ItemIcon,
  Label,
  Input,
  InputList,
  Error,
  ErrorIcon,
  ContainerErrorIcon,
  SuccessIcon,
  PictureWrapper,
} from './PasswordRecovery.styled';

const PasswordRecovery = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showAnimation, setShowAnimation] = useState(false);

  const emailRegexp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const validationSchema = yup.object({
    email: yup
      .string()
      .matches(emailRegexp, t('recovery.err1'))
      .required(t('recovery.err2')),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      try {
        const formData = {
          email: values.email,
        };

        setShowAnimation(true);

        setTimeout(() => {
          setShowAnimation(false);
        }, 3000);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await dispatch(sendRenewPass(formData));

        formik.resetForm();
        navigate('/login');

        return response;
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  });

  return (
    <>
      <Container style={{ display: showAnimation ? 'none' : 'flex' }}>
        <StyledForm onSubmit={formik.handleSubmit}>
          <InputGroupe>
            <FormName>
              <Trans i18nKey="recovery.pass">Password recovery</Trans>
            </FormName>
            <InputList>
              <InputWrapper isEmail={'email'}>
                <Label
                  htmlFor="email"
                  className={
                    formik.touched.email
                      ? formik.errors.email
                        ? 'invalid-input'
                        : 'valid-input'
                      : ''
                  }
                >
                  {t('recovery.email')}
                </Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="true"
                  value={formik.values.email}
                  placeholder={t('recovery.emailhold')}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.email
                      ? formik.errors.email
                        ? 'invalid-input'
                        : 'valid-input'
                      : ''
                  }
                />
                {formik.touched.email ? (
                  formik.errors.email ? (
                    <ContainerErrorIcon>
                      <Error className="invalid">{formik.errors.email}</Error>
                      <ErrorIcon />
                    </ContainerErrorIcon>
                  ) : (
                    <ContainerErrorIcon>
                      <Error className="valid">{formik.errors.email}</Error>
                      <SuccessIcon />
                    </ContainerErrorIcon>
                  )
                ) : null}
              </InputWrapper>
            </InputList>
            <Button type="submit">
              <ButtonText>{t('recovery.send')}</ButtonText>
              <ItemIcon />
            </Button>
          </InputGroupe>
          <LinksContainer>
            <AuthNavigate
              forgotPasswordLink="/"
              alreadyRegisteredLink="/login"
            />
          </LinksContainer>
        </StyledForm>
        <PictureWrapper>
          <picture>
            <source
              type="image/png"
              media="(min-width: 1440px)"
              srcSet={`${goosActive} 1x, ${goosActiveRetina} 2x`}
            />
            <img
              src={`${goosActive}`}
              alt="Let go of the past and focus on the present"
              width={368}
              height={521}
            />
          </picture>
        </PictureWrapper>
      </Container>
      {showAnimation && (
        <Container>
          <ImageAnimation
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Container>
      )}
    </>
  );
};

export default PasswordRecovery;
