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
} from './RegisterForm.styled';
// import { showErrorToast, showSuccessToast } from '../../utils/messages';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const emailRegexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

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
  
        console.log('values', values)
        console.log('response', response)
        return response;
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  });

  return (
    <StyledForm
     onSubmit={formik.handleSubmit}
    >
      <InputGroupe>
        <FormName>Sign Up</FormName>
        <InputList>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              autoComplete='true'
              value={formik.values.name}
              placeholder="Enter your name"
              onChange={handleChange}
  onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
  <div className="error">{formik.errors.name}</div>
)}
          </InputWrapper>
          <InputWrapper isEmail = {'email'}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              name="email"
              autoComplete='true'
              value={formik.values.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            {formik.errors.email && formik.touched.email && (
  <div className="error">{formik.errors.email}</div>
)}
          </InputWrapper>
          <InputWrapper isPassword = {'password'}>
            <Label htmlFor="password">Password</Label>
            <InputWrapperWithIcon>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formik.values.password}
                placeholder="Enter password"
                onChange={handleChange}
              />
              <ShowHideButton
                type="button"
                onClick={() => setShowPassword(show => !show)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </ShowHideButton>
            </InputWrapperWithIcon>
            {formik.errors.password && formik.touched.password && (
  <div className="error">{formik.errors.password}</div>
)}
          </InputWrapper>
        </InputList>
        <Button type='submit'>
          <ButtonText>Sign Up</ButtonText>
          <ItemIcon />
        </Button>
      </InputGroupe>
      <LinksContainer><div>Forgot password?
          <Link to="/"> change password</Link></div>
          <div>Already registered?
          <Link to="/login"> Log In</Link></div>
      </LinksContainer>
    </StyledForm>
  );
};

export default RegisterForm;
