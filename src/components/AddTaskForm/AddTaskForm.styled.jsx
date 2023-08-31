import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px 8px;
  @media (max-width: 767px) {
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
  background: #f6f6f6;
  padding: 14px 18px;
`;
export const TimeWrapper = styled.div`
  display: flex;
  margin-top: 18px;
  margin-bottom: 28px;
  gap: 14px;
`;

export const TimePickerLabel = styled.label`
  width: 163px;
  height: 46px;
`;

export const PriorityLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const RadioWrapper = styled.div`
  display: flex;
`;
export const Span = styled.span`
  margin-left: 6px;

  color: #343434;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128.571%;
`;

export const RadioInputBlue = styled.input`
  margin-left: 6px;
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
    border: none;
    background-color: #72c2f8;
  }

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #72c2f8;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props => (props.checked ? '1' : '0')};
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    transition: opacity 0.3s, visibility 0.3s;
  }
`;

export const RadioInputYellow = styled.input`
  margin-left: 6px;
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
    border: none;
    background-color: #f3b249;
  }

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #f3b249;
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
  margin-left: 6px;
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
    border: none;
    background-color: #ea3d65;
  }

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ea3d65;
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
  width: 182px;
  border: none;
  border-radius: 8px;
  background-color: #e5edfa;

  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #3e85f3;
  }
`;

export const ExampleCustomInput = styled.input`
  border-radius: 8px;
  background: #f6f6f6;
  padding: 14px 18px;
  border: none;
  width: 163px;
  height: 46px;
`;
