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

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [isSuccess, setIsSuccess] = useState(false);
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

  // const handleChange = event => {
  //   event.preventDefault();
  //   const { name, value } = event.currentTarget;

  //   switch (name) {
  //     case 'email':
  //       formik.setFieldValue('email', value);
  //       break;

  //     case 'password':
  //       formik.setFieldValue('password', value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // const handleBlur = event => {
  //   event.preventDefault();
  //   const { name, value } = event.currentTarget;

  //   switch (name) {
  //     case 'name':
  //       try {
  //         validationSchema.fields.name.validateSync(value);
  //         //поставити рамку зелену
  //       } catch (error) {
  //         //поставити рамку червону
  //       }
  //       break;

  //     case 'email':
  //       formik.validateField('email');
  //       break;

  //     case 'password':
  //       formik.validateField('password');
  //       break;

  //     default:
  //       break;
  //   }
  // };

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
        const response = await dispatch(logIn(formData));
        if (response.payload.message === 'success') {
          // setIsSuccess(true);
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
  );
};

export default LoginForm;
