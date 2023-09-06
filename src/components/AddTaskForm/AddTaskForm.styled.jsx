import styled from '@emotion/styled';
import { BiPlus } from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';

export const Form = styled.form`
 
    display: flex;
    flex-direction: column;

    width: 100%;
    padding-top: 20px;
    padding-bottom: 12px;
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--calendar-date-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
`;

export const Input = styled.input`
  color: var(--title-text-main-color);
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 42px;
  background: var(--input-background-color);
  padding: 14px 18px;
  border: 1px solid #e0e0e0;
  outline: none;

  &::placeholder {
    color: var(--calendar-date-color);
    font-size: 12px;
    line-height: 1.16;
    font-weight: 400;
  }

  @media screen and (min-width: 768px) {
    height: 46px;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TimePickerLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--title-text-main-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
`;

export const PriorityLabel = styled.label`
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const Span = styled.span`
  margin-left: 6px;

  color: var(--calendar-date-color);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128.571%;
`;

export const RadioInputBlue = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid rgba(114, 194, 248, 0.5);
  transition: background-color 0.3s;

  &:not(:checked) {
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    background-color: var(--task-low-color);
  }

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: var(--task-low-color);
    border-radius: 50%;
    top: 50%;
    border: 2px solid transparent;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props => (props.checked ? '1' : '0')};
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    transition: opacity 0.3s, visibility 0.3s;
  }
`;

export const RadioInputYellow = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid rgba(243, 178, 73, 0.5);

  &:not(:checked) {
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    background-color: var(--task-med-color);
  }

  &:before {
    content: '';
    position: absolute;
    border: 2px solid transparent;
    width: 10px;
    height: 10px;
    background-color: var(--task-med-color);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props => (props.checked ? '1' : '0')};
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    transition: opacity 0.3s, visibility 0.3s;
  }
`;

export const RadioInputRed = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid rgba(234, 61, 101, 0.5);

  &:not(:checked) {
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    background-color: var(--task-high-color);
  }

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    border: 2px solid transparent;
    height: 10px;
    background-color: var(--task-high-color);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props => (props.checked ? '1' : '0')};
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    transition: opacity 0.3s, visibility 0.3s;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 14px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props =>
    props.isActive
      ? 'var(--btn-text-color)'
      : 'var(--feedback-form-text-input)'};
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;
  height: 42px;

  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: ${props =>
    props.isActive
      ? 'var(--accent-background-color)'
      : 'var(--background-feedack-form-btn-action)'};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    height: 48px;
  }

  cursor: pointer;
  &:hover {
    color: var(--btn-text-color);
    background: var(--active-btn-color);
  }
`;

export const PlusIcon = styled(BiPlus)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: inherit;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;  

export const EditIcon = styled(FiEdit2)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: inherit;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;  

export const ExampleCustomInput = styled.input`
  color: var(--title-text-main-color);
  border-radius: 8px;
  background: var(--task-field-color);
  padding: 14px 18px;
  border: none;
  width: 140px;
  height: 42px;
  margin-top: 8px;
  border: 1px solid #e0e0e0;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 194px;
    height: 46px;
  }
`;