import { useTranslation, Trans } from 'react-i18next';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
  ShowHideButton,
  InputWrapperWithIcon,
  InputList,
  Error,
  ErrorIcon,
  ContainerErrorIcon,
  PictureWrapper,
  SuccessIcon,
} from './RegisterForm.styled';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

import registerElements from 'images/signup-elements.png';
import registerElementsRetina from 'images/signup-elements@2x.png';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import ImageAnimation from 'components/Bandero-goose/ImageAnimation';
import {
  ContainerR,
  Img,
  Img1,
} from 'components/Bandero-goose/ImageAnimation.styled';
import image from '../Bandero-goose/images/shu.jpg';
import image1 from '../Bandero-goose/images/iron-man.webp';
const audio1 = new Audio(
  'https://res.cloudinary.com/dnhobiphs/video/upload/v1693691158/Goose_-_Sound_Effect_ProSounds_oiuuu1.m4a'
);
// const audio2 = new Audio(
//   'https://res.cloudinary.com/dnhobiphs/video/upload/v1693950962/iron_man_le3phg.mp3'
// );
const RegisterForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const emailRegexp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const validationSchema = yup.object({
    name: yup.string().min(3, t('recovery.err3')).required(t('recovery.err2')),
    email: yup
      .string()
      .matches(emailRegexp, t('recovery.err1'))
      .required(t('recovery.err2')),
    password: yup
      .string()
      .min(6, t('recovery.err3'))
      .required(t('recovery.err2')),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      try {
        const formData = {
          userName: values.name,
          email: values.email,
          password: values.password,
        };

        setShowAnimation(true);
        audio1.volume = 1;
        // audio2.volume = 0.4;
        audio1.play();
        // audio2.play();
        setTimeout(() => {
          setShowAnimation(false);
        }, 3000);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await dispatch(register(formData));
        if (response.payload.message === 'success') {
          formik.resetForm();
          navigate('/calendar');
        }
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
              <Trans i18nKey="inout.signup">Sign Up</Trans>
            </FormName>
            <InputList>
              <InputWrapper>
                <Label
                  htmlFor="userName"
                  className={
                    formik.touched.name
                      ? formik.errors.name
                        ? 'invalid-input'
                        : 'valid-input'
                      : ''
                  }
                >
                  {t('inout.name')}
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="true"
                  value={formik.values.name}
                  placeholder={t('inout.namehold')}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.name
                      ? formik.errors.name
                        ? 'invalid-input'
                        : 'valid-input'
                      : ''
                  }
                />
                {formik.touched.name ? (
                  formik.errors.name ? (
                    <ContainerErrorIcon>
                      <Error className="invalid">{formik.errors.name}</Error>
                      <ErrorIcon />
                    </ContainerErrorIcon>
                  ) : (
                    <ContainerErrorIcon>
                      <Error className="valid">{formik.errors.name}</Error>
                      <SuccessIcon />
                    </ContainerErrorIcon>
                  )
                ) : null}
              </InputWrapper>
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
                  {t('inout.email')}
                </Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="true"
                  value={formik.values.email}
                  placeholder={t('inout.emailhold')}
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
              <InputWrapper isPassword={'password'}>
                <Label
                  htmlFor="password"
                  className={
                    formik.touched.password
                      ? formik.errors.password
                        ? 'invalid-input'
                        : 'valid-input'
                      : ''
                  }
                >
                  {t('inout.pass')}
                </Label>
                <InputWrapperWithIcon>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formik.values.password}
                    placeholder={t('inout.passhold')}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.password
                        ? formik.errors.password
                          ? 'invalid-input'
                          : 'valid-input'
                        : ''
                    }
                  />
                  {!formik.errors.password && (
                    <ShowHideButton
                      type="button"
                      onClick={() => setShowPassword(show => !show)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </ShowHideButton>
                  )}
                </InputWrapperWithIcon>
                {formik.touched.password ? (
                  formik.errors.password ? (
                    <ContainerErrorIcon>
                      <Error className="invalid">
                        {formik.errors.password}
                      </Error>
                      <ErrorIcon />
                    </ContainerErrorIcon>
                  ) : (
                    <ContainerErrorIcon>
                      <Error className="valid">{formik.errors.password}</Error>
                      <SuccessIcon />
                    </ContainerErrorIcon>
                  )
                ) : null}
              </InputWrapper>
            </InputList>
            <Button type="submit">
              <ButtonText> {t('inout.signup')}</ButtonText>
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
              srcSet={`${registerElements} 1x, ${registerElementsRetina} 2x`}
            />
            <img
              src={`${registerElements}`}
              alt="Let go of the past and focus on the present"
              width={400}
              height={416}
            />
          </picture>
        </PictureWrapper>
      </Container>

      {showAnimation && (
        <ContainerR>
          <Img src={image} alt="Зображення" />
          <Img1 src={image1} alt="Зображення1" />
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
        </ContainerR>
      )}
    </>
  );
};

export default RegisterForm;
