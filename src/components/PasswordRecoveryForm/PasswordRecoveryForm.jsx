import { useTranslation, Trans } from 'react-i18next';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  StyledForm,
  InputGroupe,
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
  SuccessIcon,
} from './PasswordRecoveryForm.styled';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from 'redux/auth/operations';
import { showErrorToast } from 'utils/showToast';

const PasswordRecoveryForm = ({ onClose }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object({
    oldpassword: yup
      .string()
      .min(6, t('recovery.err3'))
      .required(t('recovery.err2')),

    newpassword: yup
      .string()
      .min(6, t('recovery.err3'))
      .required(t('recovery.err2')),

    newpassword2: yup
      .string()
      .min(6, t('recovery.err3'))
      .required(t('recovery.err2')),
  });

  const formik = useFormik({
    initialValues: {
      oldpassword: '',
      newpassword: '',
      newpassword2: '',
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      if (values.newpassword !== values.newpassword2) {
        showErrorToast(t('recovery.err4'));
        return;
      }

      try {
        const formData = {
          oldPassword: values.oldpassword,
          newPassword: values.newpassword,
        };

        onClose();
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await dispatch(changePassword(formData));
        return response;
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <InputGroupe>
        <FormName>
          <Trans i18nKey="recovery.update">Update password</Trans>
        </FormName>
        <InputList>
          <InputWrapper isPassword={'oldpassword'}>
            <Label
              htmlFor="oldpassword"
              className={
                formik.touched.oldpassword
                  ? formik.errors.oldpassword
                    ? 'invalid-input'
                    : 'valid-input'
                  : ''
              }
            >
              {t('recovery.old')}
            </Label>
            <InputWrapperWithIcon>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="oldpassword"
                name="oldpassword"
                value={formik.values.oldpassword}
                placeholder={t('recovery.passhold')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.oldpassword
                    ? formik.errors.oldpassword
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {!formik.errors.oldpassword && (
                <ShowHideButton
                  type="button"
                  onClick={() => setShowPassword(show => !show)}
                >
                  {showPassword ? (
                    <FiEyeOff style={{ color: 'inherit' }} />
                  ) : (
                    <FiEye style={{ color: 'inherit' }} />
                  )}
                </ShowHideButton>
              )}
            </InputWrapperWithIcon>
            {formik.touched.oldpassword ? (
              formik.errors.oldpassword ? (
                <ContainerErrorIcon>
                  <Error className="invalid">{formik.errors.oldpassword}</Error>
                  <ErrorIcon />
                </ContainerErrorIcon>
              ) : (
                <ContainerErrorIcon>
                  <Error className="valid">{formik.errors.oldpassword}</Error>
                  <SuccessIcon />
                </ContainerErrorIcon>
              )
            ) : null}
          </InputWrapper>

          <InputWrapper isPassword={'newpassword'}>
            <Label
              htmlFor="newpassword"
              className={
                formik.touched.newpassword
                  ? formik.errors.newpassword
                    ? 'invalid-input'
                    : 'valid-input'
                  : ''
              }
            >
              {t('recovery.new')}
            </Label>
            <InputWrapperWithIcon>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="newpassword"
                name="newpassword"
                value={formik.values.newpassword}
                placeholder={t('recovery.passhold')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.newpassword
                    ? formik.errors.newpassword
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {!formik.errors.newpassword && (
                <ShowHideButton
                  type="button"
                  onClick={() => setShowPassword(show => !show)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </ShowHideButton>
              )}
            </InputWrapperWithIcon>
            {formik.touched.newpassword ? (
              formik.errors.newpassword ? (
                <ContainerErrorIcon>
                  <Error className="invalid">{formik.errors.newpassword}</Error>
                  <ErrorIcon />
                </ContainerErrorIcon>
              ) : (
                <ContainerErrorIcon>
                  <Error className="valid">{formik.errors.newpassword}</Error>
                  <SuccessIcon />
                </ContainerErrorIcon>
              )
            ) : null}
          </InputWrapper>

          <InputWrapper isPassword={'newpassword2'}>
            <Label
              htmlFor="newpassword2"
              className={
                formik.touched.newpassword2
                  ? formik.errors.newpassword2
                    ? 'invalid-input'
                    : 'valid-input'
                  : ''
              }
            >
              {t('recovery.repeat')}
            </Label>
            <InputWrapperWithIcon>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="newpassword2"
                name="newpassword2"
                value={formik.values.newpassword2}
                placeholder={t('recovery.passhold')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.newpassword2
                    ? formik.errors.newpassword2
                      ? 'invalid-input'
                      : 'valid-input'
                    : ''
                }
              />
              {!formik.errors.newpassword2 && (
                <ShowHideButton
                  type="button"
                  onClick={() => setShowPassword(show => !show)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </ShowHideButton>
              )}
            </InputWrapperWithIcon>
            {formik.touched.newpassword2 ? (
              formik.errors.newpassword2 ? (
                <ContainerErrorIcon>
                  <Error className="invalid">
                    {formik.errors.newpassword2}
                  </Error>
                  <ErrorIcon />
                </ContainerErrorIcon>
              ) : (
                <ContainerErrorIcon>
                  <Error className="valid">{formik.errors.newpassword2}</Error>
                  <SuccessIcon />
                </ContainerErrorIcon>
              )
            ) : null}
          </InputWrapper>
        </InputList>
        <Button type="submit">
          <ButtonText>{t('recovery.submit')}</ButtonText>
          <ItemIcon />
        </Button>
      </InputGroupe>
    </StyledForm>
  );
};

export default PasswordRecoveryForm;
