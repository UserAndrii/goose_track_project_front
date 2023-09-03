import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  background-color: var(--outlet-background-color);
  text-align: center;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  width: 252px;
  height: 150px;

  @media screen and (min-width: 768px) {
    width: 503px;
    height: 250px;
    margin-bottom: 80px;
  }
`;

export const Picture = styled.picture`
  margin: 0 -30px;

  @media screen and (min-width: 768px) {
    margin: 0 -60px;
  }
`;

export const Number = styled.span`
  color: var(--accent-color);
  font-size: 100px;
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`;

export const Text = styled.p`
  margin: 0 auto;
  color: var(--label-text-color);
  font-size: 14px;
  line-height: 1.29;
  font-weight: 500;
  max-width: 281px;

  @media screen and (min-width: 768px) {
    max-width: 387px;
  }
`;

export const StyledButton = styled(Link)`
  background-color: var(--accent-background-color);
  color: var(--btn-text-color);
  padding: 14px 32px;
  border-radius: 16px;
  border: none;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  margin-top: 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.286;
  text-transform: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--active-btn-color);
  }

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.333;
    margin-top: 32px;
  }
`;
