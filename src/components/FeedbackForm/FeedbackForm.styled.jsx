import styled from '@emotion/styled';
import { VscEdit } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RatingLabel = styled.p`
  color: var(--title-text-main-color);
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
  gap: 8px;
`;

export const TextAreaLabel = styled.label`
  display: flex;
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--title-text-main-color);
`;

export const TextArea = styled.textarea`
  color: var(--feedback-form-text-input);
  padding: 12px 14px;

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;

  border-radius: 8px;
  border-width: 0;
  margin-top: 8px;
  background: inherit;
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;

  resize: none;
  height: auto;
  min-height: 130px;
  max-height: 330px;
`;

export const BtnWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 8px;
`;

export const Btn = styled.button`
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

  width: 144px;
  height: 42px;
  border: none;
  border-radius: 8px;

  background-color: ${props =>
    props.isActive
      ? 'var(--accent-background-color)'
      : 'var(--background-feedack-form-btn-action)'};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  &:hover {
    color: var(--btn-text-color);
    background: var(--active-btn-color);
  }

  @media screen and (max-width: 374px) {
    width: 120px;
  }

  @media screen and (min-width: 768px) {
    width: 198px;
    height: 48px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledEditIcon = styled(VscEdit)`
  fill: var(--modal-edit-icon-stroke);
  display: flex;
  width: 30px;
  height: 30px;
  padding: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--accent);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const StyledEditIconDel = styled(RiDeleteBin6Line)`
  fill: var(--task-high-color);
  display: flex;
  width: 30px;
  cursor: pointer;
  height: 30px;
  background: var(--background-feedback-form-btn-delete);
  padding: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;
