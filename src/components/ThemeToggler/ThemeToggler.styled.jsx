import styled from '@emotion/styled';
import { FiMoon } from 'react-icons/fi';
import { BiSun } from 'react-icons/bi';

export const MoonBtn = styled(FiMoon)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  color: #3e85f3;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-right: 14px;
  }
`;

export const SunBtn = styled(BiSun)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  color: #3e85f3;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-right: 14px;
  }
`;
