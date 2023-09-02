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
} from './LoginForm.styled';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

import loginElements from 'images/login-elements.png';
import loginElementsRetina from 'images/login-elements@2x.png';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import ImageAnimation from 'components/Bandero-goose/ImageAnimation';
const audio = new Audio(
  'https://res.cloudinary.com/dnhobiphs/video/upload/v1693689881/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_qr2qe8.aac'
);
const audio1 = new Audio(
  'https://res.cloudinary.com/dnhobiphs/video/upload/v1693691158/Goose_-_Sound_Effect_ProSounds_oiuuu1.m4a'
);

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const emailRegexp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const validationSchema = yup.object({
    email: yup
      .string()
      .matches(emailRegexp, 'Invalid email')
      .required('This field is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      try {
        const formData = {
          email: values.email,
          password: values.password,
        };

        setShowAnimation(true);
        audio1.play();
        setTimeout(() => {
          audio1.pause();
          setShowAnimation(false);
        }, 3000);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await dispatch(logIn(formData));

        if (response.payload.message === 'success') {
          formik.resetForm();
          audio.play();
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
            <FormName>Log In</FormName>
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
                  Email
                </Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="true"
                  value={formik.values.email}
                  placeholder="Enter email"
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
                  Password
                </Label>
                <InputWrapperWithIcon>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formik.values.password}
                    placeholder="Enter password"
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
              <ButtonText>Log in</ButtonText>
              <ItemIcon />
            </Button>
          </InputGroupe>
          <LinksContainer>
            <AuthNavigate
              forgotPasswordText="Recover password"
              alreadyRegisteredText="New user?"
              forgotPasswordLink="/recover"
              alreadyRegisteredLink="/register"
            />
          </LinksContainer>
        </StyledForm>
        <PictureWrapper>
          <picture>
            <source
              type="image/png"
              media="(min-width: 1440px)"
              srcSet={`${loginElements} 1x, ${loginElementsRetina} 2x`}
            />
            <img
              src={`${loginElements}`}
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

export default LoginForm;
