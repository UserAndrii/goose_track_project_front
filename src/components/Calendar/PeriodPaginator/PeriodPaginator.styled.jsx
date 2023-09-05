import styled from '@emotion/styled';

const InnerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;
const CurrentDateWrapper = styled.div`
  width: 190px;
  height: 30px;

  border: none;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    height: 34px;
    margin-right: 8px;
  }
`;

const CurrentDate = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  width: 190px;
  height: 30px;
  color: var(--btn-text-color);
  background-color: var(--accent-background-color);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 34px;
    // margin-right: 8px;
    font-size: 16px;
  }
`;

const ToggleButtons = styled.div`
  display: block;
`;

const ToggleButton = styled.button`
  display: inline-block;
  width: 32px;
  height: 30px;
  padding: 8px 12px;
  background-color: var(--background-button-day);
  color: var(--feedback-form-text-input);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--calendartable-border-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 34px;
  }

  &:hover {
    background-color: rgba(136, 165, 191, 0.48);
  }

  &:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export {
  InnerBlock,
  CurrentDate,
  ToggleButtons,
  ToggleButton,
  CurrentDateWrapper,
};
