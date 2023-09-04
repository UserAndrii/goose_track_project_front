import styled from '@emotion/styled';
import { FiMenu } from 'react-icons/fi';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 20px 64px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px 64px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 32px 32px;
  }
`;

export const Wrapper = styled.div`
  display: ${props => (props.hide = 'true' ? 'none' : 'flex')};
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    display: ${props => (props.hide = 'true' ? 'flex' : 'none')};
  }
`;

export const Picture = styled.picture`
  width: 64px;
  height: 60px;
  margin-right: 8px;
`;

export const Imeges = styled.img`
  width: 64px;
  height: 60px;
`;

export const WrapperText = styled.div`
  display: grid;
  gap: 8px;
`;

export const PageHeader = styled.p`
  display: ${props => (props.hide = 'true' ? 'none' : 'block')};
  color: var(--title-text-main-color);
  margin-right: ${props => (props.tasksСompleted ? 'auto' : 0)};
  text-shadow: 0px 9.4px 57.69px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 32px;
  font-weight: 700;
  line-height: 1;

  @media screen and (min-width: 1440px) {
    display: ${props => (props.hide = 'true' ? 'block' : 'none')};
  }
`;

export const Call = styled.span`
  color: var(--accent-color);
`;

export const Text = styled.p`
  color: var(--title-text-main-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
`;

export const MenuBtn = styled(FiMenu)`
  display: ${props => (props.hide = 'true' ? 'bock' : 'none')};
  width: 24px;
  height: 24px;
  margin-right: auto;
  cursor: pointer;
  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: ${props => (props.hide = 'true' ? 'none' : 'block')};
  }
`;
