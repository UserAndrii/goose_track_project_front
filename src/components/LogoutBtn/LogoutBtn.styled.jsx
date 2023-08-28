import styled from '@emotion/styled';

import { LuLogOut } from 'react-icons/lu';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  cursor: pointer;

  color: #ffffff;
  background-color: #3e85f3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  width: 131px;
  padding: 14px 28px;
  margin-top: auto;
  border: none;
  border-radius: 16px;

  :hover {
    background: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 768px) {
    width: 141px;
    padding: 16px 23px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const Icon = styled(LuLogOut)`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  color: #ffffff;
  margin-left: 6px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 11px;
  }
`;
