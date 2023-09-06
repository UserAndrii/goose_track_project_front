import styled from '@emotion/styled';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;
`;

export const FormName = styled.h1`
  color: var(--accent-color);
  text-shadow: 0px 9.4px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InputGroupe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;

  border-radius: 8px;
  background: var(--main-background-color);
  background-color: inherit;
`;

export const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: inherit;
`;

export const InputWrapper = styled.li`
  display: flex;
  flex-direction: column;

  input {
    color: var(--title-text-main-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  Input::placeholder {
    color: var(--secondary-text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background-color: var(--main-background-color);
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InputWrapperWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  background: inherit;

  input {
    color: var(--title-text-main-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  Input::placeholder {
    color: var(--secondary-text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background-color: inherit;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  gap: 10px;

  border: none;
  border-radius: 16px;
  background: var(--accent-background-color);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 375px) {
    width: 287px;
    padding: 14px 103px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 16px 152px;
  }
`;

export const ButtonText = styled.span`
  white-space: nowrap;
  color: var(--btn-text-color);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`;

export const ItemIcon = styled(FiLogIn)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--btn-text-color);
`;

export const ShowHideButton = styled.button`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--title-text-main-color);
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  color: var(--title-text-main-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  &.valid-input {
    color: #3cbc81;
  }

  &.invalid-input {
    color: #ff0000;
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--title-text-main-color);
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 46px;
  padding: 14px;

  border-radius: 8px;
  padding: 14px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background: inherit;
  outline: none;

  &.valid-input {
    border: 1px solid #3cbc81;
  }

  &.invalid-input {
    border: 1px solid #ff0000;
  }

  &::placeholder {
    color: var(--modal-input-lable-color);
    font-size: 12px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid var(--title-text-main-color);
  }

  @media screen and (min-width: 375px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 54px;
    padding: 18px;
  }
`;

export const Error = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-left: 18px;

  &.valid {
    color: #3cbc81;
  }

  &.invalid {
    color: #ff0000;
  }
`;

export const LinkTo = styled(Link)`
  color: var(--accent-color);
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SuccessIcon = styled(IoCheckmarkDoneCircleOutline)`
  position: absolute;
  right: 12px;
  bottom: 22px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 27px;
  }
`;

export const ErrorIcon = styled(MdErrorOutline)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    bottom: 41px;
  }
`;

export const ContainerErrorIcon = styled.div`
  position: relative;
`;
