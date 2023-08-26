import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 185px;
  height: 100%;
  background-color: #ffffff;
  padding: 24px 20px;
  transition: transform 0.3s ease-in-out;
  z-index: 200;
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
`;

export const CloseBtn = styled(AiOutlineClose)`
  right: 20px;
  width: 24px;
  height: 24px;
  color: #000000;
  cursor: pointer;
  z-index: 100;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 36px;
  height: 35px;
  margin-right: 10px;
  object-fit: cover;
  object-position: center;
`;

export const Text = styled.p`
  color: #3e85f3;
  text-shadow: 0px 9.3px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  margin-right: 25px;
`;

export const Span = styled.span`
  transform: rotate(5deg);
  display: inline-block;
`;
