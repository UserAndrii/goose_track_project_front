import styled from '@emotion/styled';

export const Form = styled.form`
padding: 20px 8px;
@media (max-width: 767px) { /* Телефоны */
width: 85%;
height: 70%;
}
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
margin-top:8px;
border:none;
border-radius: 8px;
background: #F6F6F6;
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
  /* Add your priority label styles here */
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
  width: 16px;
  height: 16px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #72C2F8; /* Желтый бордер изначально */

  &:before {
    content: '';
    display: ${props => (props.checked ? 'block' : 'none')};
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #72C2F8; /* Цвет кружка внутри радио-бокса */
    border-radius: 50%;
    top: 10%;
    left: 12%;
  }
`;

export const RadioInputYellow = styled.input`
  margin-left: 6px;
  appearance: none;
  width: 16px;
  height: 16px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #F3B249; /* Желтый бордер изначально */

  &:before {
    content: '';
    display: ${props => (props.checked ? 'block' : 'none')};
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #F3B249; /* Цвет кружка внутри радио-бокса */
    border-radius: 50%;
    top: 10%;
    left: 12%;
  }
`;

export const RadioInputRed = styled.input`
  margin-left: 6px;
  appearance: none;
  width: 16px;
  height: 16px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #EA3D65; /* Желтый бордер изначально */

  &:before {
    content: '';
    display: ${props => (props.checked ? 'block' : 'none')};
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #EA3D65; /* Цвет кружка внутри радио-бокса */
    border-radius: 50%;
    top: 10%;
    left: 12%;
  }
`;


export const ButtonWrapper = styled.div`
display: flex;
@media (max-width: 767px) { /* Телефоны */
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