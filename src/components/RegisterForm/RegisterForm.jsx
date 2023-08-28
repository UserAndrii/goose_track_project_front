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
  LinkTo,
  ErrorIcon,
  ContainerErrorIcon,
  PictureWrapper,
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

  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        formik.setFieldValue('name', value);
        break;

      case 'email':
        formik.setFieldValue('email', value);
        break;

      case 'password':
        formik.setFieldValue('password', value);
        break;

      default:
        break;
    }
  };

  const handleBlur = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        try {
          validationSchema.fields.name.validateSync(value);
          //поставити рамку зелену
        } catch (error) {
          //поставити рамку червону
        }
        break;

      case 'email':
        formik.validateField('email');
        break;

      case 'password':
        formik.validateField('password');
        break;

      default:
        break;
    }
  };

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
          setIsSuccess(true);
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
              <Label htmlFor="userName">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                autoComplete="true"
                value={formik.values.name}
                placeholder="Enter your name"
                onChange={handleChange}
                hasError={formik.errors.name && formik.touched.name}
                isSuccess={isSuccess}
                onBlur={handleBlur}
              />
              {formik.errors.name && formik.touched.name && (
                <ContainerErrorIcon>
                  <Error isSuccess={isSuccess}>{formik.errors.name}</Error>
                  <ErrorIcon />
                </ContainerErrorIcon>
              )}
            </InputWrapper>
            <InputWrapper isEmail={'email'}>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                name="email"
                autoComplete="true"
                value={formik.values.email}
                placeholder="Enter email"
                onChange={handleChange}
                hasError={formik.errors.name && formik.touched.name}
                isSuccess={isSuccess}
              />
              {formik.errors.email && formik.touched.email && (
                <ContainerErrorIcon>
                  <Error isSuccess={isSuccess}>{formik.errors.email}</Error>
                  <ErrorIcon />
                </ContainerErrorIcon>
              )}
            </InputWrapper>
            <InputWrapper isPassword={'password'}>
              <Label htmlFor="password">Password</Label>
              <InputWrapperWithIcon>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  placeholder="Enter password"
                  onChange={handleChange}
                  hasError={formik.errors.name && formik.touched.name}
                  isSuccess={isSuccess}
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
              {formik.errors.password && formik.touched.password && (
                <ContainerErrorIcon>
                  <Error isSuccess={isSuccess}>{formik.errors.password}</Error>
                  <ErrorIcon />
                </ContainerErrorIcon>
              )}
            </InputWrapper>
          </InputList>
          <Button type="submit">
            <ButtonText>Sign Up</ButtonText>
            <ItemIcon />
          </Button>
        </InputGroupe>
        <LinksContainer>
          <AuthNavigate
            forgotPasswordText="Forgot password?"
            alreadyRegisteredText="Already registered?"
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
  );
};

export default RegisterForm;
