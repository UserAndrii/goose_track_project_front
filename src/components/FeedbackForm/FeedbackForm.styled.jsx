import styled from '@emotion/styled';
import {VscEdit} from 'react-icons/vsc'
import {RiDeleteBin6Line} from 'react-icons/ri'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  @media (min-width: 768px){
    width: 438px;
    height: 269px;
  }
`;

export const RatingArea = styled.div`
  overflow: hidden;
  margin: 8px 0 24px 0;
  display: flex;
`;

export const Input = styled.input`
  display: none;

`;

export const RatingWrapper = styled.div`
display: flex;
flex-direction: column;

`;

export const TextAreaLabel = styled.label`
  display: flex;
  margin-top: 24px;
  flex-direction: row;
    align-items: center;
    margin-top: 24px;
    justify-content: space-between;
`;

export const TextArea = styled.textarea`
  color: #343434;
  padding: 14px 18px;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;

  resize: none;
  height: 120px;
  border-radius: 8px;
  border-width: 0;
  margin-top: 8px;
  margin-bottom: 18px;
  background: #f6f6f6;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  @media (max-width: 767px){
    display: flex;
    flex-direction: column;
  }
}
`;

export const Btn = styled.button`
  color: #343434;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;

  padding: 15px 85px;
  width: 198px;
  border: none;
  border-radius: 8px;
  background-color: #e5edfa;

  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #3e85f3;
  }
`;

export const IconContainer = styled.div`
display: flex;
gap: 8px;
`;

export const StyledEditIcon = styled(VscEdit)`
  fill: rgba(62, 133, 243, 1);
  display: flex;
  width: 30px;
  height: 30px;
  padding: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #E3F3FF;
  cursor: pointer;
`;

export const StyledEditIconDel = styled(RiDeleteBin6Line)`
  fill: rgba(234, 61, 101, 1);
  display: flex;
  width: 30px;
  cursor: pointer;
  height: 30px;
  background: rgba(234, 61, 101, 0.20);
  padding: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;