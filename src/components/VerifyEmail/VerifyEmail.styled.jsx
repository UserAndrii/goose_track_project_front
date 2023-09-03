import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  width: 100%;
  gap: 18px;

  background-color: #f7f6f9;
  text-align: center;
  min-height: 100vh;
`;

export const ImageWrapper = styled.div`
  display: block;

  @media screen and (max-width: 767px) {
    max-width: 142px;
    max-height: 142px;
  }

  @media screen and (min-width: 768px) {
    max-width: 150px;
    max-height: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Text = styled.h1`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 44px;
  font-weight: 700;
  line-height: 1.09;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const TextSpan = styled.span`
  color: #3e85f3;
  font-size: 44px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.09;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const TextVerify = styled.p`
  margin: 0 auto;
  color: #111111b2;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.286;
  max-width: 281px;

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
    font-size: 28px;
    line-height: 1.333;
    max-width: 550px;
  }
`;

export const StyledButton = styled(Link)`
  background-color: #3e85f3;
  color: #ffffff;
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
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.333;
    margin-top: 32px;
  }
`;
