import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  background-color: #ffffff;

  @media screen and (max-width: 767px) {
    width: 185px;
    padding: 24px 20px;
    transform: translateX(-185px);
    transition: transform 0.3s ease-in-out;
    z-index: 200;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 225px;
    padding: 24px 32px;
    transform: translateX(-300px);
    transition: transform 0.3s ease-in-out;
    z-index: 200;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px;
    position: static;
    width: 289px;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const CloseBtn = styled(AiOutlineClose)`
  right: 20px;
  width: 24px;
  height: 24px;
  color: #000000;
  cursor: pointer;
  z-index: 100;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 36px;
  height: 35px;
  margin-right: 10px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
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
  line-height: 22px;
  margin-right: 23px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    line-height: 24px;
    margin-right: 31px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    margin-right: 0;
  }
`;

export const Span = styled.span`
  transform: rotate(5deg);
  display: inline-block;
`;
