import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
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
  flex-direction: column;
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
  @media (max-width: 767px)
  display: flex;
  flex-direction: column;
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
