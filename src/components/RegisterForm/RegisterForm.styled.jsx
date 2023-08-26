import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: inline-flex;
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

export const InputGroupe = styled.li`
  
`;
export const InputWrapper = styled.li`
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.25rem;
  }

  input {
    padding: 0.5rem;
  }

  input::placeholder {
    color: #DCE3E5;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    label {
      margin-bottom: 0;
      margin-right: 1rem;
    }

    input {
      padding: 0.5rem;
      width: 100%;
    }
  }
`;
export const ButtonSubmit = styled.button`
  display: flex;
width: 287px;
padding: 14px 103px;
flex-direction: column;
align-items: center;
gap: 10px;
border-radius: 16px;
background: #3E85F3;
box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
` 

export const LinksContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
