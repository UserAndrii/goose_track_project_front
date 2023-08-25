import styled from '@emotion/styled';
import { FiMenu } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 20px 95px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px 64px;
  }

  @media screen and (min-width: 1440px) {
    padding: 41px 32px 33px;
  }
`;

export const PageHeader = styled.p`
  display: ${props => (props.hide = 'true' ? 'none' : 'block')};
  color: #111111;
  margin-right: auto;
  text-shadow: 0px 9.4px 57.69px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 32px;
  font-weight: 700;
  line-height: 1;

  @media screen and (min-width: 1440px) {
    display: ${props => (props.hide = 'true' ? 'block' : 'none')};
  }
`;

export const MenuBtn = styled(FiMenu)`
  display: ${props => (props.hide = 'true' ? 'bock' : 'none')};
  width: 24px;
  height: 24px;
  margin-right: auto;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: ${props => (props.hide = 'true' ? 'none' : 'block')};
  }
`;
