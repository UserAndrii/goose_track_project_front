import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
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
} from './RegisterForm.styled';
// import { showErrorToast, showSuccessToast } from '../../utils/messages';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

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
        formik.validateField('name');
        break;

      case 'email':
        formik.setFieldValue('email', value);
        formik.validateField('email');
        break;

      case 'password':
        formik.setFieldValue('password', value);
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
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('password', values.password);

        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }

        const response = await dispatch(register(formData)); // Передаємо FormData
        if (response.success) {
          setIsSuccess(true); // Устанавливаем состояние успешного запроса
        }
        return response;
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <InputGroupe>
        <FormName>Sign Up</FormName>
        <InputList>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              autoComplete="true"
              value={formik.values.name}
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              hasError={formik.errors.name && formik.touched.name}
              isSuccess={isSuccess}
            />
            {formik.errors.name && formik.touched.name && (
              <Error isSuccess={isSuccess}>{formik.errors.name}</Error>
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
              <Error isSuccess={isSuccess}>{formik.errors.email}</Error>
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
              <ShowHideButton
                type="button"
                onClick={() => setShowPassword(show => !show)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </ShowHideButton>
            </InputWrapperWithIcon>
            {formik.errors.password && formik.touched.password && (
              <Error isSuccess={isSuccess}>{formik.errors.password}</Error>
            )}
          </InputWrapper>
        </InputList>
        <Button type="submit">
          <ButtonText>Sign Up</ButtonText>
          <ItemIcon />
        </Button>
      </InputGroupe>
      <LinksContainer>
        <div>
          Forgot password?
          <LinkTo to="/"> Change password</LinkTo>
        </div>
        <div>
          Already registered?
          <LinkTo to="/login"> Log In</LinkTo>
        </div>
      </LinksContainer>
    </StyledForm>
  );
};

export default RegisterForm;
