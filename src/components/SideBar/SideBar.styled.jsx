import styled from '@emotion/styled';
import { CgClose } from 'react-icons/cg';

export const Container = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  height: 100%;
  background-color: #ffffff;

  @media screen and (max-width: 767px) {
    width: 225px;
    transform: translateX(-225px);
    transition: transform 0.3s ease-in-out;
    z-index: 200;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 289px;
    transform: translateX(-300px);
    transition: transform 0.3s ease-in-out;
    z-index: 200;
  }

  @media screen and (min-width: 1440px) {
    position: static;
    width: 289px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px 24px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const CloseBtn = styled(CgClose)`
  right: 20px;
  width: 24px;
  height: 24px;
  color: #000000;
  cursor: pointer;
  z-index: 100;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 36px;
  height: 35px;
  margin-right: 6px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 10px;
    width: 71px;
    height: 68px;
  }
`;

export const Text = styled.p`
  color: #3e85f3;
  text-shadow: 0px 9.3px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;
  margin-right: 25px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    line-height: 1.5;
    margin-right: 31px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1;
    margin-right: 0;
  }
`;

export const Span = styled.span`
  font-style: italic;
`;
