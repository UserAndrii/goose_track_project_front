import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { StyledForm, InputGroupe, LinksContainer, FormName, InputWrapper, ButtonSubmit} from './RegisterForm.styled';
// import { showErrorToast, showSuccessToast } from '../../utils/messages';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  // const emailRegexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const validationSchema = yup.object({
    name: yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('This field is required'),
    email: yup.string()
    // .matches(emailRegexp, 'Invalid email')
    .required('This field is required'),
    password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('This field is required'),
  });

  const handleChange = (event) => {
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
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('password', values.password);

        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }

        // const response = await fetch('url/my_api/register', {
        //   method: 'POST',
        //   body: formData,
        // });

        // if (response.ok) {
        //   const data = await response.json();
        //   console.log('Server response:', data);
        // } else {
        //   const errorData = await response.json();
        //   console.error('Error response from server:', errorData);
        // }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  });

  return (
    <StyledForm
    //  onSubmit={formik.handleSubmit}
     >
      <InputGroupe>
        <FormName>Sign Up</FormName>
        <ul>
          <InputWrapper>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              placeholder='Enter your name'
              onChange={handleChange}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </InputWrapper>
          <InputWrapper className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              placeholder='Enter email'
              onChange={handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </InputWrapper>
          <InputWrapper className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              placeholder='Enter password'
              onChange={handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </InputWrapper>
        </ul>
      </InputGroupe>
      <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
      <LinksContainer>
        <span>
          <Link to="/">Forgot password?</Link>
        </span> <br/>
        <span>Already registered? 
          <Link to="/login">Log In</Link>
        </span>
      </LinksContainer>
    </StyledForm>
  );
};

export default RegisterForm;