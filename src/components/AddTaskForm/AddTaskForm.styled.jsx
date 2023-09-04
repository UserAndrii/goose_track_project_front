import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px 8px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justyfi-content: centre;
    width: 85%;
    height: 70%;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  width: 100%;
  background: var(--outlet-background-color);
  padding: 14px 18px;
`;
export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  gap: 14px;
  margin-bottom: 28px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const TimePickerLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const PriorityLabel = styled.label`
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

export const RadioWrapper = styled.div`
  display: flex;
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
  @media (max-width: 767px) {
    margin-top: 12px;
  }
  margin-top: 32px;
  gap: 14px;
`;

export const Button = styled.button`
  color: #343434;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;

  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: var(--background-feedack-form-btn-action);

  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: var(--accent-background-color);
  }
`;

export const ExampleCustomInput = styled.input`
  border-radius: 8px;
  background: var(--task-field-color);
  padding: 14px 18px;
  border: none;
  width: 100%;
  height: 46px;
`;
