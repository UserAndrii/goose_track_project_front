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

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const emailRegexp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, 'Name must be at least 3 characters')
      .required('This field is required'),
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
    <Container>
      <StyledForm onSubmit={formik.handleSubmit}>
        <InputGroupe>
          <FormName>Sign Up</FormName>
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
                Name
              </Label>
              <Input
                type="text"
                name="name"
                id="userName"
                autoComplete="true"
                value={formik.values.name}
                placeholder="Enter your name"
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
                Email
              </Label>
              <Input
                type="text"
                name="email"
                id="email"
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
                  name="password"
                  id="password"
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
                    <Error className="invalid">{formik.errors.password}</Error>
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
            <ButtonText>Sign Up</ButtonText>
            <ItemIcon />
          </Button>
        </InputGroupe>
        <LinksContainer>
          <AuthNavigate forgotPasswordLink="/" alreadyRegisteredLink="/login" />
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
  );
};

export default RegisterForm;
