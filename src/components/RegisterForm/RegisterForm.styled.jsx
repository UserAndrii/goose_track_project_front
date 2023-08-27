import styled from '@emotion/styled';
import { FiLogIn } from 'react-icons/fi';

export const StyledForm = styled.form`
  display: flex;
padding: 155px 20px 156px 20px;
flex-direction: column;
justify-content: center;
align-items: center;
background: #DCEBF7;
`;
export const FormName = styled.h1`
  color: #3E85F3;
text-shadow: 0px 9.4px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 133.333% ;
`;

export const InputGroupe = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 32px;
  padding: 40px 24px;
  border-radius: 8px;
background: #FFF;

`;

export const InputList = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
background: #FFF;

`;

export const InputWrapper = styled.li`
  display: flex;
  flex-direction: column;

  Input::placeholder {
    color: #858688;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background-color: #FFFFFF;
  }

  @media (min-width: 768px) {
    
  }
`;

export const InputWrapperWithIcon = styled.div`
  display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
position: relative;
Input::placeholder {
    color: #858688;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background-color: #FFFFFF;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: auto;
  width: 287px;
padding: 14px 103px;
gap: 10px;
border-radius: 16px;
background: #3E85F3;
box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
cursor: pointer;
` ;

export const ButtonText = styled.span`
    white-space: nowrap;
    color: #FFFFFF;
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
    color: #FFFFFF;
`;

export const ShowHideButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 18px;
  gap: 18px;
  @media (max-width: 768px) {
  }
`;


export const Label = styled.label`
margin-bottom: 8px;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
color: #111111;
&.error {
    color: #ff0000;
  }
`;

export const Input = styled.input`
width: 287px;
height: 46px;
border-radius: 8px;
border: 1px solid rgba(220, 227, 229, 0.60);
background: ${props => (props.isPassword || props.isEmail) ? '#FFFFFF' : 'none'};
`;


