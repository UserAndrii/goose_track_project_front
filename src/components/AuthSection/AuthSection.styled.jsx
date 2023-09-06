import styled from '@emotion/styled';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: var(--accent-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 767px) {
    height: 812px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    height: 770px;
  }
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
  color: var(--btn-text-color);
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
  color: var(--btn-text-color);
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

export const List = styled.div`
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const Button = styled(Link)`
  background: #FFF;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  cursor: pointer;

  :hover {
    color: var(--active-btn-color);
    box-shadow: 4px 2px 16px 0px rgba(255, 255, 255, 0.48);
  }

  padding: 14px 33.5px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding: 15.5px 28.5px;
    margin-left: 24px;
    margin-bottom: 0;
  }
`;

export const ButtonText = styled.span`
  color: var(--accent);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;

  margin-right: 6px;
`;

export const ItemIcon = styled(FiLogIn)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--accent);
`;

export const AuthLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--btn-text-color);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;
  cursor: pointer;
  transition: font-size 0.3s;

  :hover {
    text-decoration-line: none;
    font-size: 90%
  }
`;

export const LangSwitcherWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
