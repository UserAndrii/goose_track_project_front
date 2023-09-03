import styled from '@emotion/styled';

export const Button = styled.button`
  text-align: center;
  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  cursor: pointer;

  color: var(--btn-text-color);
  background-color: var(--accent-background-color);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 8px 20px;
  margin-right: auto;
  border: none;
  border-radius: 10px;

  :hover {
    background:var(--active-btn-color);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 375px) {
    margin-right: 18px;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    font-size: 14px;
    line-height: 1.28;
    margin-right: 24px;
  }
`;
